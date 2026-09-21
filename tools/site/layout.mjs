import { MODEL_OPTIONS, SERVICE_OPTIONS, SITE } from "./config.mjs";
import { icon } from "./icons.mjs";
import { services } from "./content/services.mjs";

export const esc = (value) =>
  String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const escUrl = (url) => url.replace(/&/g, "&amp;");

export const tel = `tel:${SITE.phone}`;
export const wa = (text) => `https://wa.me/${SITE.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const formatDate = (iso) =>
  new Intl.DateTimeFormat("tr-TR", { day: "numeric", month: "long", year: "numeric" }).format(new Date(`${iso}T12:00:00`));

export const readingMinutes = (html) => Math.max(1, Math.round(html.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length / 180));

/* ---------- Structured data ---------- */

export const businessLd = () => ({
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "@id": `${SITE.url}/#isletme`,
  name: SITE.name,
  url: `${SITE.url}/`,
  telephone: "+90 533 094 74 01",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.street,
    addressLocality: SITE.district,
    addressRegion: SITE.city,
    addressCountry: "TR"
  },
  foundingDate: String(SITE.foundingYear),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00"
    }
  ],
  areaServed: [SITE.district, SITE.city],
  sameAs: [SITE.instagram]
});

export const breadcrumbLd = (crumbs) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map((crumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: crumb.label,
    item: `${SITE.url}${crumb.href}`
  }))
});

export const faqLd = (items) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a.replace(/<[^>]+>/g, "") }
  }))
});

const jsonLdBlock = (data) =>
  `    <script type="application/ld+json">\n${JSON.stringify(data, null, 2)
    .split("\n")
    .map((line) => `      ${line}`)
    .join("\n")}\n    </script>`;

/* ---------- Document chrome ---------- */

const head = ({ title, description, path, jsonLd = [], ogType = "website", noindex = false }) => `<!doctype html>
<html lang="tr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#07090d" />
    <meta name="description" content="${esc(description)}" />
    <meta name="robots" content="${noindex ? "noindex, follow" : "index, follow"}" />
${SITE.url ? `    <link rel="canonical" href="${SITE.url}${path}" />\n` : ""}    <meta property="og:type" content="${ogType}" />
    <meta property="og:locale" content="tr_TR" />
    <meta property="og:site_name" content="${esc(SITE.name)}" />
    <meta property="og:title" content="${esc(title)}" />
    <meta property="og:description" content="${esc(description)}" />
${SITE.url ? `    <meta property="og:url" content="${SITE.url}${path}" />\n` : ""}    <title>${esc(title)}</title>

    <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&amp;family=Space+Grotesk:wght@500;600;700&amp;display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
    <link rel="stylesheet" href="/assets/styles.css" />
    <link rel="stylesheet" href="/assets/pages.css" />
${jsonLd.map(jsonLdBlock).join("\n")}
  </head>`;

const NAV = [
  { key: "home", label: "Ana Sayfa", href: "/" },
  { key: "services", label: "Hizmetler", href: "/hizmetler/", dropdown: true },
  { key: "models", label: "Ford Modelleri", href: "/ford-modelleri/" },
  { key: "guides", label: "Arıza Rehberi", href: "/ariza-rehberi/" },
  { key: "blog", label: "Blog", href: "/blog/" },
  { key: "about", label: "Hakkımızda", href: "/hakkimizda/" },
  { key: "contact", label: "İletişim", href: "/iletisim/" }
];

const current = (key, active) => (key === active ? ' aria-current="page"' : "");

const megaMenu = (active) => `          <div class="nav-dropdown">
            <button type="button" aria-expanded="false" aria-controls="services-menu"${active === "services" ? ' class="is-current"' : ""}>
              Hizmetler
              <svg aria-hidden="true" viewBox="0 0 16 16"><path d="m4 6 4 4 4-4" /></svg>
            </button>
            <div class="mega-menu" id="services-menu">
              <div class="mega-menu__intro">
                <span class="kicker">Hizmetlerimiz</span>
                <strong>Ford araçlar için bakım ve onarım</strong>
                <p>Yaptığımız işleri ve hangi belirtilerde gelmeniz gerektiğini hizmet sayfalarında bulabilirsiniz.</p>
              </div>
              <div class="mega-menu__links">
${services
  .map(
    (service) => `                <a href="/hizmetler/${service.slug}/">
                  <div><strong>${esc(service.menuTitle)}</strong><small>${esc(service.menuNote)}</small></div>
                </a>`
  )
  .join("\n")}
                <a href="/hizmetler/">
                  <div><strong>Tüm Hizmetler</strong><small>Hizmet listesine gidin</small></div>
                </a>
              </div>
              <a class="mega-menu__cta" href="/randevu/">
                <span>Servis talebi oluştur</span>
                ${icon("arrow")}
              </a>
            </div>
          </div>`;

const header = (active) => `    <header class="site-header" data-header>
      <div class="site-header__inner container-wide">
        <a class="brand" href="/" aria-label="A&S Ford Servis ana sayfa">
          <span class="brand__monogram" aria-hidden="true">
            <span>A</span><i></i><span>S</span>
          </span>
          <span class="brand__text">
            <strong>AUTO PREMIUM</strong>
            <small>FORD ÖZEL SERVİSİ</small>
          </span>
        </a>

        <nav class="desktop-nav" aria-label="Ana menü">
${NAV.map((item) => (item.dropdown ? megaMenu(active) : `          <a href="${item.href}"${current(item.key, active)}>${item.label}</a>`)).join("\n")}
        </nav>

        <div class="header-actions">
          <div class="language-switcher">
            <button type="button" aria-label="Dil seçimi" aria-expanded="false">
              TR
              <svg aria-hidden="true" viewBox="0 0 16 16"><path d="m4 6 4 4 4-4" /></svg>
            </button>
            <div class="language-menu">
              <span class="is-active">TR <small>Türkçe</small></span>
              <span aria-disabled="true">EN <small>Yakında</small></span>
            </div>
          </div>
          <a class="header-phone" href="${tel}" aria-label="A&S Ford Servis'i ara">
            ${icon("phone")}
            <span>${SITE.phoneDisplay}</span>
          </a>
          <a class="button button--red header-cta" href="/randevu/">Randevu Al</a>
          <button class="menu-toggle" type="button" aria-label="Menüyü aç" aria-expanded="false" aria-controls="mobile-menu">
            <span></span><span></span>
          </button>
        </div>
      </div>

      <div class="mobile-menu" id="mobile-menu" aria-hidden="true">
        <div class="mobile-menu__panel">
          <nav aria-label="Mobil menü">
${NAV.map((item) => `            <a href="${item.href}"${current(item.key, active)}>${item.label}</a>`).join("\n")}
            <a href="/randevu/"${current("booking", active)}>Randevu Al</a>
          </nav>
          <div class="mobile-menu__footer">
            <a href="${tel}">${SITE.phoneDisplay}</a>
            <a href="${SITE.instagram}" target="_blank" rel="noopener">Instagram</a>
          </div>
        </div>
      </div>
    </header>`;

const footer = () => `    <footer class="site-footer">
      <div class="container-wide site-footer__top">
        <a class="brand brand--footer" href="/" aria-label="Ana sayfaya dön">
          <span class="brand__monogram" aria-hidden="true"><span>A</span><i></i><span>S</span></span>
          <span class="brand__text"><strong>AUTO PREMIUM</strong><small>FORD ÖZEL SERVİSİ</small></span>
        </a>
        <p>Ford binek ve hafif ticari araçlar için<br />bakım, teşhis ve onarım.</p>
        <a class="footer-phone" href="${tel}"><small>Telefon</small><strong>${SITE.phoneDisplay}</strong></a>
      </div>
      <div class="container-wide site-footer__nav">
        <div><small>Sayfalar</small><a href="/hizmetler/">Hizmetler</a><a href="/ford-modelleri/">Ford Modelleri</a><a href="/ariza-rehberi/">Arıza Rehberi</a><a href="/blog/">Blog</a><a href="/hakkimizda/">Hakkımızda</a><a href="/sss/">Sıkça Sorulan Sorular</a></div>
        <div><small>İletişim</small><a href="/randevu/">Servis Talebi</a><a href="/iletisim/">İletişim</a><a href="${wa()}" target="_blank" rel="noopener">WhatsApp</a><a href="${SITE.instagram}" target="_blank" rel="noopener">Instagram</a><a href="${escUrl(SITE.mapsUrl)}" target="_blank" rel="noopener">Yol Tarifi</a></div>
        <div><small>Adres</small><address>${SITE.addressLines.join("<br />")}<br />${SITE.hoursShort}</address></div>
        <a class="back-to-top" href="#main-content" aria-label="Yukarı dön"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 20V4m-6 6 6-6 6 6" /></svg><span>Yukarı</span></a>
      </div>
      <div class="container-wide site-footer__bottom">
        <span>© <span data-year></span> A&amp;S Auto Premium Car Service</span>
        <span class="site-footer__legal"><a href="/kvkk-aydinlatma/">KVKK Aydınlatma Metni</a><a href="/gizlilik/">Gizlilik Politikası</a><a href="/cerez-politikasi/">Çerez Politikası</a></span>
        <span>A&amp;S bağımsız özel servistir; Ford Motor Company’nin yetkili servisi değildir.</span>
      </div>
    </footer>

    <nav class="mobile-action-bar" aria-label="Hızlı iletişim">
      <a href="${tel}">${icon("phone")}<span>Ara</span></a>
      <a class="is-primary" href="${wa()}" target="_blank" rel="noopener">${icon("whatsapp")}<span>WhatsApp</span></a>
      <a href="${escUrl(SITE.mapsUrl)}" target="_blank" rel="noopener">${icon("pin")}<span>Yol Tarifi</span></a>
    </nav>

    <script src="https://cdn.jsdelivr.net/npm/lenis@1.3.8/dist/lenis.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <script src="/assets/app.js" defer></script>
  </body>
</html>
`;

export const page = ({ title, description, path, active = "", main, jsonLd = [], ogType, noindex, loader = false }) => `${head({
  title,
  description,
  path,
  jsonLd,
  ogType,
  noindex
})}
  <body>
    <a class="skip-link" href="#main-content">İçeriğe geç</a>
${
  loader
    ? `
    <div class="page-loader" aria-hidden="true">
      <div class="page-loader__mark">A&amp;S</div>
      <div class="page-loader__track"><span></span></div>
    </div>
`
    : ""
}
${header(active)}

    <main id="main-content">
${main.replace(/\s+$/, "")}
    </main>

${footer()}`;

/* ---------- Shared sections ---------- */

export const pageHero = ({ crumbs, kicker, title, lead, media, meta = "", actions = true, compact = false }) => `      <section class="page-hero${media ? " page-hero--media" : ""}${compact ? " page-hero--compact" : ""}" aria-labelledby="page-title">
        <div class="container-wide page-hero__inner">
          <nav class="breadcrumb" aria-label="Sayfa konumu">
            <ol>
${crumbs
  .map((crumb, index) =>
    index === crumbs.length - 1
      ? `              <li aria-current="page">${esc(crumb.label)}</li>`
      : `              <li><a href="${crumb.href}">${esc(crumb.label)}</a></li>`
  )
  .join("\n")}
            </ol>
          </nav>
          <div class="page-hero__grid">
            <div class="page-hero__copy">
              <p class="eyebrow reveal-up"><span class="eyebrow__dot"></span><span>${esc(kicker)}</span></p>
              <h1 id="page-title" class="page-hero__title reveal-up">${title}</h1>
              ${lead ? `<p class="page-hero__lead reveal-up">${lead}</p>` : ""}
              ${meta ? `<div class="page-hero__meta reveal-up">${meta}</div>` : ""}
              ${
                actions
                  ? `<div class="hero__actions reveal-up">
                <a class="button button--red button--large" href="/randevu/">
                  <span>Servis Talebi Oluştur</span>
                  ${icon("arrow")}
                </a>
                <a class="text-link" href="${tel}">
                  <span class="text-link__icon">${icon("phone")}</span>
                  <span><small>Hemen arayın</small><strong>${SITE.phoneDisplay}</strong></span>
                </a>
              </div>`
                  : ""
              }
            </div>
${
  media
    ? `            <figure class="page-hero__media reveal-up">
              <img src="${escUrl(media.src)}" alt="${esc(media.alt)}" width="1200" height="800" fetchpriority="high" decoding="async" />
            </figure>`
    : ""
}
          </div>
        </div>
      </section>`;

const options = (list, selected, placeholder) =>
  [`<option value="">${placeholder}</option>`, ...list.map((item) => (item === selected ? `<option selected>${esc(item)}</option>` : `<option>${esc(item)}</option>`))].join("");

export const bookingSection = ({ model = "", service = "", message = "", kicker = "Servis talebi", title = "Hemen<br /><em>randevu alın</em>" } = {}) => `      <section class="booking section" id="randevu" aria-labelledby="booking-title">
        <div class="booking__glow" aria-hidden="true"></div>
        <div class="container grid-12">
          <div class="booking__copy">
            <p class="kicker reveal-up">${kicker}</p>
            <h2 id="booking-title" class="section-title split-lines">${title}</h2>
            <p class="reveal-up">Formu doldurun, bilgileriniz WhatsApp mesajı olarak hazırlansın. Mesajı gönderdikten sonra uygun saati birlikte ayarlarız.</p>
            <div class="booking__direct reveal-up">
              <span>Formla uğraşmak istemezseniz arayın</span>
              <a href="${tel}">${SITE.phoneDisplay}</a>
              <small>${SITE.hoursShort}</small>
            </div>
          </div>

          <form class="booking-form reveal-up" id="booking-form" novalidate>
            <div class="form-row">
              <label>Adınız Soyadınız<input type="text" name="name" autocomplete="name" required placeholder="Ad soyad" /></label>
              <label>Telefon Numaranız<input type="tel" name="phone" autocomplete="tel" inputmode="tel" required placeholder="05__ ___ __ __" /></label>
            </div>
            <div class="form-row">
              <label>Ford Modeli
                <select name="model" required>
                  ${options(MODEL_OPTIONS, model, "Model seçin")}
                </select>
              </label>
              <label>İhtiyacınız
                <select name="service" required>
                  ${options(SERVICE_OPTIONS, service, "Hizmet seçin")}
                </select>
              </label>
            </div>
            <label>Belirti / Notunuz<textarea name="message" rows="3" placeholder="Örneğin: Soğuk çalıştırmada ses geliyor">${esc(message)}</textarea></label>
            <label class="form-consent"><input type="checkbox" name="consent" required /><span>Bilgilerimin bu servis talebine yanıt vermek için kullanılmasını kabul ediyorum. <a href="/kvkk-aydinlatma/">Aydınlatma metni</a></span></label>
            <button class="button button--red button--large" type="submit"><span>WhatsApp’tan Talep Gönder</span>${icon("arrow")}</button>
            <p class="form-status" role="status" aria-live="polite"></p>
          </form>
        </div>
      </section>`;

export const contactSection = ({ headingLevel = "h2" } = {}) => `      <section class="contact" id="iletisim" aria-labelledby="contact-title">
        <iframe
          class="contact-map"
          title="A&S Auto Premium Car Service haritası"
          src="${escUrl(SITE.mapEmbed)}"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          allowfullscreen
        ></iframe>
        <div class="container contact__content">
          <div class="contact-card reveal-up">
            <p class="kicker">Adres ve yol tarifi</p>
            <${headingLevel} id="contact-title">Bize<br /><em>ulaşın</em></${headingLevel}>
            <address>${SITE.addressLines.join("<br />")}<br /><br />${SITE.hours}<br />${SITE.closed}</address>
            <div class="contact-card__links">
              <a class="button button--red" href="${escUrl(SITE.mapsUrl)}" target="_blank" rel="noopener"><span>Yol Tarifini Aç</span>${icon("arrow")}</a>
              <a class="button button--dark" href="${tel}"><span>Servisi Ara</span>${icon("arrow")}</a>
            </div>
          </div>
        </div>
      </section>`;

export const faqSection = (items, { kicker = "SSS", title = "Sıkça sorulan<br /><em>sorular</em>", id = "faq-title", link = true } = {}) => `      <section class="faq section section--light" aria-labelledby="${id}">
        <div class="container grid-12">
          <div class="faq__heading">
            <p class="kicker reveal-up">${kicker}</p>
            <h2 id="${id}" class="section-title split-lines">${title}</h2>
            ${link ? `<a class="inline-link inline-link--dark reveal-up" href="/sss/">Tüm sorular ${icon("arrow")}</a>` : ""}
          </div>
          <div class="accordion reveal-up">
${items
  .map(
    (item) => `            <details>
              <summary>${esc(item.q)}<i></i></summary>
              <p>${item.a}</p>
            </details>`
  )
  .join("\n")}
          </div>
        </div>
      </section>`;

export const PROCESS_STEPS = [
  { icon: "mobile", title: "Arayın veya yazın", text: "Aracın modelini ve ne fark ettiğinizi telefonla ya da WhatsApp’tan anlatın. Uygun saati birlikte ayarlarız." },
  { icon: "scanner", title: "Kontrol &amp; teşhis", text: "Usta aracı kontrol eder, gerekirse arıza tespit cihazıyla hata kodlarını okur." },
  { icon: "clipboard", title: "Bilgilendirme", text: "Ne yapılması gerektiğini ve nedenini anlatırız. İşlem sizin onayınızla yapılır." },
  { icon: "carkey", title: "İşlem &amp; teslim", text: "Aracı teslim ederken neyin yapıldığını ve dikkat etmeniz gerekenleri anlatırız." }
];

export const processSection = ({ kicker = "Nasıl çalışıyoruz", title = "Servis<br /><em>sürecimiz</em>", intro = "Aracınız servise geldiği andan teslim edilene kadar her adımda bilgi veririz." } = {}) => `      <section class="process section section--light" id="surec" aria-labelledby="process-title">
        <div class="container">
          <div class="section-heading section-heading--dark">
            <div>
              <p class="kicker reveal-up">${kicker}</p>
              <h2 id="process-title" class="section-title split-lines">${title}</h2>
            </div>
            <p class="section-heading__intro reveal-up">${intro}</p>
          </div>
          <ol class="process-list">
${PROCESS_STEPS.map(
  (step) =>
    `            <li class="reveal-up"><div class="process-list__icon">${icon(step.icon)}</div><div><h3>${step.title}</h3><p>${step.text}</p></div></li>`
).join("\n")}
          </ol>
        </div>
      </section>`;

export const ctaBand = ({ title = "Aracınızda bir sorun mu var?", text = `Arayın, sorunu anlatın. ${SITE.hours} açığız.` } = {}) => `      <section class="cta-band" aria-label="Hızlı iletişim">
        <div class="container cta-band__inner reveal-up">
          <div>
            <h2>${title}</h2>
            <p>${text}</p>
          </div>
          <div class="cta-band__actions">
            <a class="button button--red button--large" href="${tel}"><span>${SITE.phoneDisplay}</span>${icon("arrow")}</a>
            <a class="button button--outline button--large" href="${wa()}" target="_blank" rel="noopener"><span>WhatsApp’tan yazın</span>${icon("arrow")}</a>
          </div>
        </div>
      </section>`;

export const sideCard = ({ title = "Servise ulaşın", text = "Aracınızın modelini ve ne fark ettiğinizi anlatın, uygun saati birlikte ayarlayalım." } = {}) => `              <div class="side-card">
                <p class="side-card__title">${title}</p>
                <p>${text}</p>
                <a class="button button--red" href="${tel}"><span>${SITE.phoneDisplay}</span>${icon("arrow")}</a>
                <a class="button button--outline" href="${wa()}" target="_blank" rel="noopener"><span>WhatsApp’tan yazın</span>${icon("arrow")}</a>
                <ul class="side-card__facts">
                  <li>${icon("clock")}<span>${SITE.hours}<br />${SITE.closed}</span></li>
                  <li>${icon("pin")}<span>${SITE.addressShort}</span></li>
                  <li>${icon("user")}<span>Usta ${SITE.mechanic}, ${SITE.experienceYears} yıllık tecrübe</span></li>
                </ul>
              </div>`;

export const linkCard = ({ href, iconName, title, text, meta = "", cta = "Devamını okuyun" }) => `            <a class="link-card reveal-up" href="${href}">
              ${iconName ? `<span class="link-card__icon">${icon(iconName)}</span>` : ""}
              ${meta ? `<small class="link-card__meta">${meta}</small>` : ""}
              <h3>${title}</h3>
              <p>${text}</p>
              <span class="link-card__cta">${cta} ${icon("arrow")}</span>
            </a>`;
