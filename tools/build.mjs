// Statik site derleyicisi. Bağımlılık gerektirmez.
//   node tools/build.mjs          sayfaları üretir
//   node tools/build.mjs --check  üretilen dosyalar güncel değilse hata verir

import { mkdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { SITE } from "./site/config.mjs";
import { buildPages } from "./site/pages.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const check = process.argv.includes("--check");

const pages = buildPages();

const outputs = pages.map((item) => ({
  file: item.file ?? (item.path === "/" ? "index.html" : join(item.path.replace(/^\/|\/$/g, ""), "index.html")),
  content: item.html
}));

const indexable = pages.filter((item) => item.path !== "/404.html");
// Site haritası mutlak adres ister; alan adı girilene kadar üretilmez.
if (SITE.url) outputs.push({
  file: "sitemap.xml",
  content: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexable.map((item) => `  <url><loc>${SITE.url}${item.path}</loc><lastmod>${SITE.publishedAt}</lastmod></url>`).join("\n")}
</urlset>
`
});
outputs.push({
  file: "robots.txt",
  content: `User-agent: *
Allow: /
${SITE.url ? `\nSitemap: ${SITE.url}/sitemap.xml\n` : ""}`
});

const stale = [];
for (const output of outputs) {
  const target = join(root, output.file);
  if (check) {
    const current = existsSync(target) ? readFileSync(target, "utf8").replace(/\r\n/g, "\n") : null;
    if (current !== output.content) stale.push(output.file);
    continue;
  }
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, output.content);
}

if (check && stale.length) {
  process.stderr.write(`Güncel olmayan dosyalar (npm run build çalıştırın):\n${stale.map((file) => `  ${file}`).join("\n")}\n`);
  process.exit(1);
}

process.stdout.write(`${check ? "✓ Güncel" : "✓ Üretildi"}: ${pages.length} sayfa, ${SITE.url ? "sitemap.xml, " : ""}robots.txt${SITE.url ? "" : " (alan adı yok, sitemap atlandı)"}\n`);
