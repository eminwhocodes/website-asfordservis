import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { access, readFile } from "node:fs/promises";

const requiredFiles = [
  "index.html",
  "assets/styles.css",
  "assets/app.js",
  "assets/favicon.svg"
];

await Promise.all(requiredFiles.map((file) => access(file)));

const [html, css, js] = await Promise.all([
  readFile("index.html", "utf8"),
  readFile("assets/styles.css", "utf8"),
  readFile("assets/app.js", "utf8")
]);

const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]));
const internalLinks = [...html.matchAll(/href="#([^"]*)"/g)].map((match) => match[1]);
const missingTargets = [...new Set(internalLinks.filter((target) => !target || !ids.has(target)))];

assert.equal(missingTargets.length, 0, `Eksik bölüm hedefleri: ${missingTargets.join(", ")}`);
assert.ok(!html.includes('href="#"'), "Boş # bağlantısı bulunmamalı");
assert.match(html, /<html lang="tr">/, "Sayfa dili Türkçe olmalı");
assert.equal([...html.matchAll(/<h1[\s>]/g)].length, 1, "Ana sayfada tek H1 olmalı");
assert.match(html, /<h1[^>]*>[\s\S]*?Adana Ford[\s\S]*?<\/h1>/, "H1 işletmenin ne yaptığını ve nerede olduğunu söylemeli");
assert.match(html, /application\/ld\+json/, "Yerel işletme yapılandırılmış verisi bulunmalı");
const ldJson = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
assert.ok(ldJson.openingHoursSpecification?.length, "Çalışma saatleri yapılandırılmış veride olmalı");
assert.ok((html.match(/08\.00–18\.00/g) || []).length >= 3, "Çalışma saatleri hero, iletişim ve footer'da görünmeli");
assert.match(html, /\+905330947401/g, "Telefon bağlantısı tanımlı olmalı");
assert.match(html, /wa\.me\/905330947401/g, "WhatsApp bağlantısı tanımlı olmalı");
assert.ok(!/bootstrap|jquery|tailwind/i.test(`${html}\n${css}\n${js}`), "Yasaklı framework/kütüphane kullanılmamalı");
assert.ok(!/SCROLL TO EXPLORE|USTA İŞİ\s*\/|FORD SYSTEM|DIAGNOSTIC\s*<\/span>/i.test(html), "Yapay teknik mikro metinler bulunmamalı");
assert.equal([...html.matchAll(/>0[1-9]</g)].length, 0, "Dekoratif sıra numaraları bulunmamalı");
const text = html.replace(/<script[\s\S]*?<\/script>/g, "").replace(/<[^>]+>/g, " ");
assert.ok(!/gerçek paylaşım|şeffaf kareler|işinin ehline|usta işi|mesafe yok|ilk adımı atın|Yakında/i.test(text), "Ajans sloganı veya işlevsiz özellik metni bulunmamalı");
assert.ok([...html.matchAll(/<img\s/g)].length <= 2, "Stok fotoğraflar A&S'nin işi gibi kartlara dağıtılmamalı");
assert.match(html, /<iframe[\s\S]*google\.com\/maps\/embed/, "Gerçek Google Maps iframe'i bulunmalı");

const modelValues = [...html.matchAll(/data-model="([^"]+)"/g)].map((match) => match[1]);
for (const model of modelValues) {
  assert.ok(html.includes(`<option>${model}</option>`), `${model} randevu formunda seçilebilir olmalı`);
}

assert.equal((css.match(/{/g) || []).length, (css.match(/}/g) || []).length, "CSS blokları dengeli olmalı");
assert.match(css, /@media \(max-width: 560px\)/, "Telefon kırılımı bulunmalı");
assert.match(css, /prefers-reduced-motion/, "Hareket azaltma tercihi desteklenmeli");

const remSizes = [...css.matchAll(/font-size:\s*([\d.]+)rem/g)].map((match) => Number(match[1]));
assert.ok(remSizes.length > 0 && Math.min(...remSizes) >= 0.9375, "Hiçbir metin 15px (0.9375rem) altına inmemeli");
assert.match(css, /body\s*{[^}]*font-size:\s*1\.0625rem/, "Gövde metni 17px olmalı");
assert.ok(!/font-size:\s*\d+px/.test(css), "Font boyutları rem ile tanımlanmalı");

const radii = [...css.matchAll(/--radius[\w-]*:\s*(\d+)px/g)].map((match) => Number(match[1]));
assert.ok(radii.length > 0 && Math.max(...radii) <= 10, "Köşe yarıçapı küçük/orta bantta kalmalı");
assert.ok(!/border-radius:\s*(?:[1-9]\d|\d{3,})px/.test(css), "Büyük veya pill köşe yarıçapı kullanılmamalı");
assert.ok(!/radial-gradient|conic-gradient|backdrop-filter|mix-blend-mode|text-shadow/.test(css), "Dekoratif ışık, blur ve gradient efektleri kullanılmamalı");
assert.ok(!/gsap|lenis|swiper|ScrollTrigger/i.test(`${html}\n${js}`), "Animasyon/kaydırma kütüphanesi yüklenmemeli");
assert.ok(!/page-loader|magnetic|reveal-up/.test(`${html}\n${css}\n${js}`), "Yükleme ekranı ve kaydırma efekti kalıntısı bulunmamalı");

const usedClasses = new Set([...`${html}\n${js}`.matchAll(/[\w-]+/g)].map((match) => match[0]));
const unusedSelectors = [...new Set([...css.matchAll(/\.([a-z][\w-]*)/g)].map((match) => match[1]))].filter((name) => !usedClasses.has(name));
assert.equal(unusedSelectors.length, 0, `Kullanılmayan CSS sınıfları: ${unusedSelectors.join(", ")}`);

execFileSync(process.execPath, ["--check", "assets/app.js"], { stdio: "pipe" });
execFileSync(process.execPath, ["--check", "tools/serve.mjs"], { stdio: "pipe" });

process.stdout.write(`✓ ${requiredFiles.length} temel dosya\n`);
process.stdout.write(`✓ ${internalLinks.length} bölüm bağlantısı\n`);
process.stdout.write(`✓ ${modelValues.length} Ford model eşleşmesi\n`);
process.stdout.write("✓ Slogan, sahte kanıt, efekt kütüphanesi ve harita kontrolleri\n");
process.stdout.write(`✓ En küçük metin ${Math.min(...remSizes) * 16}px, en büyük köşe yarıçapı ${Math.max(...radii)}px, ölü CSS yok\n`);
process.stdout.write("✓ JS sözdizimi ve responsive/erişilebilirlik kontrolleri\n");
