import assert from "node:assert/strict";
import { existsSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { buildPages } from "../tools/site/pages.mjs";
import { SITE } from "../tools/site/config.mjs";

const root = process.cwd();
const pages = buildPages();
const fileFor = (path) => (path === "/" ? "index.html" : path.endsWith(".html") ? path.slice(1) : join(path.slice(1), "index.html"));

const resolves = (href) => {
  const clean = decodeURIComponent(href.split("#")[0].split("?")[0]);
  if (clean === "" || clean === "/") return true;
  const target = join(root, clean);
  if (!existsSync(target)) return false;
  return statSync(target).isDirectory() ? existsSync(join(target, "index.html")) : true;
};

const banned = /gerçek paylaşım|şeffaf kareler|işinin ehline|usta işi|mesafe yok|ilk adımı atın|Baktığımız Ford modelleri|yetkili servisiyiz|%100|en iyi servis/i;
const titles = new Set();
const descriptions = new Set();
let linkCount = 0;

for (const item of pages) {
  const file = fileFor(item.path);
  assert.ok(existsSync(join(root, file)), `${file} üretilmemiş`);
  const html = readFileSync(join(root, file), "utf8");
  const text = html.replace(/<script[\s\S]*?<\/script>/g, "").replace(/<[^>]+>/g, " ");

  assert.equal([...html.matchAll(/<h1[\s>]/g)].length, 1, `${file}: tek H1 olmalı`);
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
  assert.ok(title, `${file}: title yok`);
  assert.ok(description && description.length >= 60 || item.path === "/404.html", `${file}: meta description eksik veya kısa`);
  assert.ok(!titles.has(title), `${file}: title başka sayfada da var`);
  assert.ok(!descriptions.has(description), `${file}: description başka sayfada da var`);
  titles.add(title);
  descriptions.add(description);

  if (SITE.url) assert.match(html, /<link rel="canonical" href="https:\/\//, `${file}: canonical yok`);
  else assert.ok(!/rel="canonical"|og:url/.test(html), `${file}: alan adı yokken canonical/og:url olmamalı`);
  assert.match(html, /<html lang="tr">/, `${file}: dil etiketi yok`);
  assert.match(html, /class="site-header"/, `${file}: ortak header yok`);
  assert.match(html, /class="site-footer"/, `${file}: ortak footer yok`);
  assert.match(html, /class="mobile-action-bar"/, `${file}: mobil eylem çubuğu yok`);
  assert.match(html, /yetkili servisi değildir/, `${file}: bağımsız servis açıklaması yok`);
  assert.ok(!banned.test(text), `${file}: yasaklı ya da yapay metin içeriyor`);
  assert.equal([...html.matchAll(/>0[1-9]</g)].length, 0, `${file}: dekoratif sıra numarası var`);

  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    assert.doesNotThrow(() => JSON.parse(match[1]), `${file}: JSON-LD geçersiz`);
  }

  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]));
  const pageDir = `/${file.split(/[\\/]/).slice(0, -1).join("/")}`.replace(/\/$/, "");
  for (const [, attr, href] of html.matchAll(/\s(href|src)="([^"]+)"/g)) {
    if (href.startsWith("#")) {
      assert.ok(ids.has(href.slice(1)), `${file}: ${href} hedefi yok`);
    } else if (!/^(?:[a-z]+:|\/\/)/i.test(href)) {
      if (!SITE.url) assert.ok(!href.startsWith("/"), `${file}: yerel modda kök yolu var (${attr}="${href}"), çift tıklamayla açılmaz`);
      const absolute = href.startsWith("/") ? href : new URL(href, `http://x${pageDir}/`).pathname;
      assert.ok(resolves(absolute), `${file}: kırık iç bağlantı ${href}`);
      linkCount += 1;
    }
  }

  if (html.includes('id="booking-form"')) {
    for (const [, model] of html.matchAll(/data-model="([^"]+)"/g)) {
      assert.ok(html.includes(`<option>${model}</option>`) || html.includes(`<option selected>${model}</option>`), `${file}: ${model} formda yok`);
    }
  }
}

if (SITE.url) {
  const sitemap = readFileSync(join(root, "sitemap.xml"), "utf8");
  assert.equal([...sitemap.matchAll(/<loc>/g)].length, pages.length - 1, "Site haritası 404 dışındaki tüm sayfaları içermeli");
  assert.match(readFileSync(join(root, "robots.txt"), "utf8"), /Sitemap: https:\/\//, "robots.txt site haritasını göstermeli");
} else {
  assert.ok(!existsSync(join(root, "sitemap.xml")), "Alan adı yokken sitemap.xml bulunmamalı");
}

const kinds = {
  hizmet: pages.filter((item) => item.path.startsWith("/hizmetler/") && item.path !== "/hizmetler/").length,
  model: pages.filter((item) => item.path.startsWith("/ford-modelleri/") && item.path !== "/ford-modelleri/").length,
  rehber: pages.filter((item) => item.path.startsWith("/ariza-rehberi/") && item.path !== "/ariza-rehberi/").length,
  blog: pages.filter((item) => item.path.startsWith("/blog/") && item.path !== "/blog/").length
};

process.stdout.write(`✓ ${pages.length} sayfa: ${kinds.hizmet} hizmet, ${kinds.model} model, ${kinds.rehber} rehber, ${kinds.blog} blog detayı\n`);
process.stdout.write(`✓ ${linkCount} iç bağlantı çözüldü, başlık ve açıklamalar tekil\n`);
process.stdout.write(`✓ Header, footer, JSON-LD${SITE.url ? ", site haritası" : ""} ve metin kontrolleri\n`);
