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
assert.match(html, /<h1[^>]*>[\s\S]*Ford’unuzu/, "Ana sayfada Ford odaklı tekil bir H1 olmalı");
assert.match(html, /application\/ld\+json/, "Yerel işletme yapılandırılmış verisi bulunmalı");
assert.match(html, /\+905330947401/g, "Telefon bağlantısı tanımlı olmalı");
assert.match(html, /wa\.me\/905330947401/g, "WhatsApp bağlantısı tanımlı olmalı");
assert.ok(!/bootstrap|jquery|tailwind/i.test(`${html}\n${css}\n${js}`), "Yasaklı framework/kütüphane kullanılmamalı");
assert.ok(!/SCROLL TO EXPLORE|USTA İŞİ\s*\/|FORD SYSTEM|DIAGNOSTIC\s*<\/span>/i.test(html), "Yapay teknik mikro metinler bulunmamalı");
assert.equal([...html.matchAll(/>0[1-9]</g)].length, 0, "Dekoratif sıra numaraları bulunmamalı");
assert.ok([...html.matchAll(/<img\s/g)].length >= 10, "Fotoğraf alanlarında gerçek görseller bulunmalı");
assert.match(html, /<iframe[\s\S]*google\.com\/maps\/embed/, "Gerçek Google Maps iframe'i bulunmalı");

const modelValues = [...html.matchAll(/data-model="([^"]+)"/g)].map((match) => match[1]);
for (const model of modelValues) {
  assert.ok(html.includes(`<option>${model}</option>`), `${model} randevu formunda seçilebilir olmalı`);
}

assert.equal((css.match(/{/g) || []).length, (css.match(/}/g) || []).length, "CSS blokları dengeli olmalı");
assert.match(css, /@media \(max-width: 560px\)/, "Telefon kırılımı bulunmalı");
assert.match(css, /prefers-reduced-motion/, "Hareket azaltma tercihi desteklenmeli");

execFileSync(process.execPath, ["--check", "assets/app.js"], { stdio: "pipe" });
execFileSync(process.execPath, ["--check", "tools/serve.mjs"], { stdio: "pipe" });

process.stdout.write(`✓ ${requiredFiles.length} temel dosya\n`);
process.stdout.write(`✓ ${internalLinks.length} bölüm bağlantısı\n`);
process.stdout.write(`✓ ${modelValues.length} Ford model eşleşmesi\n`);
process.stdout.write("✓ Gerçek fotoğraf, harita ve doğal mikro metin kontrolleri\n");
process.stdout.write("✓ JS sözdizimi ve responsive/erişilebilirlik kontrolleri\n");
