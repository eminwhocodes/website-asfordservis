import { readFileSync } from "node:fs";
import { SITE } from "./config.mjs";
import { icon } from "./icons.mjs";
import {
  bookingSection,
  breadcrumbLd,
  businessLd,
  contactSection,
  ctaBand,
  esc,
  faqLd,
  faqSection,
  formatDate,
  linkCard,
  page,
  pageHero,
  processSection,
  readingMinutes,
  sideCard,
  tel,
  wa
} from "./layout.mjs";
import { serviceBySlug, services } from "./content/services.mjs";
import { models } from "./content/models.mjs";
import { guideBySlug, guides } from "./content/guides.mjs";
import { categories, postBySlug, posts } from "./content/posts.mjs";
import { faqGroups } from "./content/faqs.mjs";
import { legalPages } from "./content/legal.mjs";

const HOME = { label: "Ana Sayfa", href: "/" };
const categoryLabel = Object.fromEntries(categories.map((category) => [category.slug, category.label]));
const suffix = " | A&S Auto Premium Adana";

const list = (items, className = "check-list") => `<ul class="${className}">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;

const detailLayout = (article, aside = sideCard()) => `      <section class="section section--light detail">
        <div class="container detail__grid">
          <article class="prose reveal-up">
${article}
          </article>
          <aside class="detail__aside" aria-label="İletişim">
${aside}
          </aside>
        </div>
      </section>`;

const cardSection = ({ kicker, title, intro = "", cards, light = false, id = "" }) => `      <section class="section section--compact${light ? " section--light" : ""}"${id ? ` aria-labelledby="${id}"` : ""}>
        <div class="container">
          <div class="section-heading${light ? " section-heading--dark" : ""}">
            <div>
              <p class="kicker reveal-up">${kicker}</p>
              <h2${id ? ` id="${id}"` : ""} class="section-title split-lines">${title}</h2>
            </div>
            ${intro ? `<p class="section-heading__intro reveal-up">${intro}</p>` : "<span></span>"}
          </div>
          <div class="card-grid">
${cards.join("\n")}
          </div>
        </div>
      </section>`;

const serviceLinkCard = (service) =>
  linkCard({ href: `/hizmetler/${service.slug}/`, iconName: service.icon, title: service.title, text: service.card, cta: "Hizmeti inceleyin" });

const guideLinkCard = (guide) =>
  linkCard({ href: `/ariza-rehberi/${guide.slug}/`, iconName: guide.icon, meta: guide.area, title: guide.menuTitle, text: guide.summary, cta: "Rehberi okuyun" });

const postLinkCard = (post) =>
  linkCard({
    href: `/blog/${post.slug}/`,
    iconName: post.icon,
    meta: `${categoryLabel[post.category]} · ${formatDate(post.date)} · ${readingMinutes(post.body)} dk`,
    title: post.title,
    text: post.excerpt,
    cta: "Yazıyı okuyun"
  }).replace('class="link-card reveal-up"', `class="link-card reveal-up" data-category="${post.category}"`);

/* ---------- Home ---------- */

const homePage = () => ({
  path: "/",
  html: page({
    title: "A&S Ford Servis | Adana Ford Özel Servisi",
    description:
      "Adana Seyhan Yeşiloba'da Ford binek ve hafif ticari araçlar için periyodik bakım, arıza tespiti, motor, şanzıman ve fren işleri. Pazartesi–Cumartesi 08.00–18.00.",
    path: "/",
    active: "home",
    loader: true,
    jsonLd: [businessLd()],
    main: readFileSync(new URL("../../src/home.html", import.meta.url), "utf8")
  })
});

/* ---------- Services ---------- */

const servicesIndex = () => {
  const crumbs = [HOME, { label: "Hizmetler", href: "/hizmetler/" }];
  const cards = services
    .map(
      (service) => `            <article class="service-card reveal-up">
              <div class="service-card__media"><img src="${service.image.replace(/&/g, "&amp;")}" alt="${esc(service.imageAlt)}" width="900" height="600" loading="lazy" decoding="async" /></div>
              <div><h3>${esc(service.title)}</h3><p>${esc(service.card)}</p></div>
              <a href="/hizmetler/${service.slug}/" aria-label="${esc(service.title)} hizmetini inceleyin"><span>Hizmeti inceleyin</span>${icon("arrow")}</a>
            </article>`
    )
    .join("\n");
  const main = `${pageHero({
    crumbs,
    kicker: "Hizmetlerimiz",
    title: "Sunduğumuz<br /><em>hizmetler</em>",
    lead: "Ford binek ve hafif ticari araçlarda periyodik bakım, arıza tespiti, motor, fren, süspansiyon ve şanzıman işleri yapıyoruz."
  })}

      <section class="services section section--compact" aria-label="Hizmet listesi">
        <div class="container">
          <div class="services-grid">
${cards}
            <article class="service-card service-card--contact reveal-up">
              <div class="service-card__media service-card__media--icon">${icon("whatsapp")}</div>
              <div><h3>Ne olduğundan<br />emin değil misiniz?</h3><p>Sesi, yanan lambayı ya da ne zaman olduğunu WhatsApp’tan yazın. Fotoğraf veya video da atabilirsiniz.</p></div>
              <a href="${wa("Merhaba A&S Auto, aracımdaki bir belirti hakkında bilgi almak istiyorum.")}" target="_blank" rel="noopener"><span>WhatsApp’tan yazın</span>${icon("arrow")}</a>
            </article>
          </div>
        </div>
      </section>

${processSection()}

${bookingSection()}`;
  return {
    path: "/hizmetler/",
    html: page({
      title: `Hizmetler${suffix}`,
      description: "Adana Seyhan'da Ford araçlar için periyodik bakım, arıza tespiti, motor ve mekanik, fren ve süspansiyon, şanzıman hizmetleri.",
      path: "/hizmetler/",
      active: "services",
      jsonLd: [breadcrumbLd(crumbs)],
      main
    })
  };
};

const serviceDetail = (service) => {
  const path = `/hizmetler/${service.slug}/`;
  const crumbs = [HOME, { label: "Hizmetler", href: "/hizmetler/" }, { label: service.title, href: path }];
  const article = `            ${service.intro.map((paragraph) => `<p>${paragraph}</p>`).join("\n            ")}
            <h2>Neler yapıyoruz?</h2>
            ${list(service.includes)}
            <h2>Ne zaman gelmelisiniz?</h2>
            ${list(service.when, "dot-list")}
            <div class="callout">${icon("warning")}<p>${service.note}</p></div>
            <h2>Hangi modeller?</h2>
            <p>${models.map((model) => `<a href="/ford-modelleri/${model.slug}/">${model.name}</a>`).join(", ")} başta olmak üzere Ford binek ve hafif ticari araçlarda bu işi yapıyoruz.</p>`;
  const others = services.filter((item) => item.slug !== service.slug);
  const relatedGuides = service.guides.map((slug) => guideBySlug[slug]);
  const main = `${pageHero({
    crumbs,
    kicker: "Hizmetlerimiz",
    title: service.heroTitle,
    lead: service.lead,
    media: { src: service.image, alt: service.imageAlt }
  })}

${detailLayout(article)}

${cardSection({ kicker: "Arıza rehberi", title: "İlgili<br /><em>belirtiler</em>", intro: "Bu hizmete genellikle şu belirtilerle geliniyor.", cards: relatedGuides.map(guideLinkCard), id: "guides-title" })}

${faqSection(service.faqs, { title: "Sıkça sorulan<br /><em>sorular</em>" })}

${cardSection({ kicker: "Diğer hizmetler", title: "Başka ne<br /><em>yapıyoruz?</em>", cards: others.map(serviceLinkCard), id: "other-services-title" })}

${bookingSection({ service: service.formValue })}`;
  return {
    path,
    html: page({
      title: `${service.title}${suffix}`,
      description: service.description,
      path,
      active: "services",
      jsonLd: [
        breadcrumbLd(crumbs),
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name: `Ford ${service.title}`,
          serviceType: service.title,
          areaServed: `${SITE.district}, ${SITE.city}`,
          provider: { "@id": `${SITE.url}/#isletme` }
        },
        faqLd(service.faqs)
      ],
      main
    })
  };
};

/* ---------- Models ---------- */

const modelsIndex = () => {
  const crumbs = [HOME, { label: "Ford Modelleri", href: "/ford-modelleri/" }];
  const cards = models
    .map(
      (model) => `            <a class="model-card reveal-up" href="/ford-modelleri/${model.slug}/"><strong>${model.short}</strong><small>${model.type}</small><i></i></a>`
    )
    .join("\n");
  const main = `${pageHero({
    crumbs,
    kicker: "Ford modelleri",
    title: "Hizmet verdiğimiz<br /><em>Ford modelleri</em>",
    lead: "Ford binek, SUV ve hafif ticari araçlara bakıyoruz. Modelinizi seçin, o modelde dikkat edilmesi gerekenleri görün."
  })}

      <section class="section section--compact models-index" aria-label="Model listesi">
        <div class="container">
          <div class="model-grid">
${cards}
          </div>
          <p class="models-index__note reveal-up">Listede olmayan Ford modelleri için de <a href="${tel}">arayıp sorabilirsiniz.</a></p>
        </div>
      </section>

${processSection()}

${bookingSection()}`;
  return {
    path: "/ford-modelleri/",
    html: page({
      title: `Ford Modelleri${suffix}`,
      description: "Adana Seyhan'da Ford Focus, Fiesta, Puma, Kuga, Courier, Connect ve Transit için bakım, arıza tespiti ve onarım.",
      path: "/ford-modelleri/",
      active: "models",
      jsonLd: [breadcrumbLd(crumbs)],
      main
    })
  };
};

const modelDetail = (model) => {
  const path = `/ford-modelleri/${model.slug}/`;
  const crumbs = [HOME, { label: "Ford Modelleri", href: "/ford-modelleri/" }, { label: model.name, href: path }];
  const article = `            ${model.intro.map((paragraph) => `<p>${paragraph}</p>`).join("\n            ")}
            <h2>Dikkat edilmesi gerekenler</h2>
            ${list(model.notes, "dot-list")}
            <p class="prose__small">Motor ve şanzıman seçenekleri model yılına göre değişir. Aracınızın ruhsatındaki model yılını ve motor bilgisini söylerseniz daha net bilgi verebiliriz.</p>
            <h2>${model.short} için yaptığımız işler</h2>
            ${list(model.services.map((slug) => `<a href="/hizmetler/${slug}/">${serviceBySlug[slug].title}</a>: ${serviceBySlug[slug].card}`))}`;
  const others = models.filter((item) => item.slug !== model.slug);
  const main = `${pageHero({
    crumbs,
    kicker: `Ford modelleri · ${model.type}`,
    title: `${model.name}<br /><em>servisi</em>`,
    lead: model.lead
  })}

${detailLayout(article, sideCard({ title: `${model.short} için servis`, text: "Aracın model yılını, motorunu ve ne fark ettiğinizi anlatın, uygun saati birlikte ayarlayalım." }))}

${cardSection({ kicker: "Arıza rehberi", title: "Sık sorulan<br /><em>belirtiler</em>", cards: model.guides.map((slug) => guideLinkCard(guideBySlug[slug])), id: "model-guides-title" })}

      <section class="section section--compact section--light" aria-labelledby="other-models-title">
        <div class="container">
          <div class="section-heading section-heading--dark">
            <div>
              <p class="kicker reveal-up">Ford modelleri</p>
              <h2 id="other-models-title" class="section-title split-lines">Diğer<br /><em>modeller</em></h2>
            </div>
            <span></span>
          </div>
          <div class="chip-list reveal-up">
${others.map((item) => `            <a href="/ford-modelleri/${item.slug}/"><strong>${item.short}</strong><small>${item.type}</small></a>`).join("\n")}
          </div>
        </div>
      </section>

${bookingSection({ model: model.name })}`;
  return {
    path,
    html: page({
      title: `${model.name} Servisi${suffix}`,
      description: model.description,
      path,
      active: "models",
      jsonLd: [breadcrumbLd(crumbs)],
      main
    })
  };
};

/* ---------- Guides ---------- */

const guidesIndex = () => {
  const crumbs = [HOME, { label: "Arıza Rehberi", href: "/ariza-rehberi/" }];
  const main = `${pageHero({
    crumbs,
    kicker: "Arıza rehberi",
    title: "Aracınızın<br /><em>şikâyeti nedir?</em>",
    lead: "Arızanın adını bilmeniz gerekmiyor. Fark ettiğiniz belirtiyi seçin; olası nedenleri, ne zaman acil olduğunu ve ne yapmanız gerektiğini okuyun."
  })}

      <section class="section section--compact section--light" aria-label="Belirtiler">
        <div class="container">
          <div class="callout callout--wide reveal-up">${icon("warning")}<p><strong>Aracı kullanmayın:</strong> Kırmızı hararet, yağ basıncı veya fren uyarısı yanıyorsa, fren pedalı boşa gidiyorsa ya da motor arıza lambası yanıp sönüyorsa güvenli bir yerde durun ve <a href="${tel}">bizi arayın</a>.</p></div>
          <div class="card-grid card-grid--light">
${guides.map(guideLinkCard).join("\n")}
          </div>
        </div>
      </section>

${cardSection({ kicker: "Blog", title: "Bakım ve arıza<br /><em>yazıları</em>", cards: posts.slice(0, 3).map(postLinkCard), id: "guide-posts-title" })}

${bookingSection()}`;
  return {
    path: "/ariza-rehberi/",
    html: page({
      title: `Arıza Rehberi${suffix}`,
      description: "Ford araçlarda motor arıza lambası, ses, çekiş kaybı, hararet, fren sorunları ve bakım zamanı. Olası nedenler ve ne yapmanız gerektiği.",
      path: "/ariza-rehberi/",
      active: "guides",
      jsonLd: [breadcrumbLd(crumbs)],
      main
    })
  };
};

const guideDetail = (guide) => {
  const path = `/ariza-rehberi/${guide.slug}/`;
  const crumbs = [HOME, { label: "Arıza Rehberi", href: "/ariza-rehberi/" }, { label: guide.menuTitle, href: path }];
  const service = serviceBySlug[guide.service];
  const article = `            <p class="prose__lead">${guide.summary}</p>
            <div class="callout callout--urgent">${icon("warning")}<p><strong>${guide.urgency.level}:</strong> ${guide.urgency.text}</p></div>
            <h2>Olası nedenler</h2>
            ${list(guide.causes, "dot-list")}
            <h2>Ne yapmalısınız?</h2>
            <ol class="step-list">${guide.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
            <h2>Aracı kullanmamanız gereken durumlar</h2>
            ${list(guide.stop, "stop-list")}
            <p>Bu belirtiyle ilgili işleri <a href="/hizmetler/${service.slug}/">${service.title.toLocaleLowerCase("tr-TR")}</a> hizmetimiz kapsamında yapıyoruz.</p>`;
  const others = guides.filter((item) => item.slug !== guide.slug);
  const main = `${pageHero({
    crumbs,
    kicker: `Arıza rehberi · ${guide.area}`,
    title: guide.heroTitle,
    lead: guide.title
  })}

${detailLayout(article, sideCard({ title: "Bu belirti sizde mi var?", text: "Arayın ya da aşağıdaki formu doldurun; belirtiyi talebinize ekledik." }))}

${faqSection(guide.faqs, { title: "Sıkça sorulan<br /><em>sorular</em>" })}

${cardSection({ kicker: "Arıza rehberi", title: "Diğer<br /><em>belirtiler</em>", cards: others.map(guideLinkCard), id: "other-guides-title" })}

${bookingSection({ service: service.formValue, message: guide.symptom })}`;
  return {
    path,
    html: page({
      title: `${guide.title}${suffix}`,
      description: guide.description,
      path,
      active: "guides",
      ogType: "article",
      jsonLd: [
        breadcrumbLd(crumbs),
        {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: guide.title,
          description: guide.description,
          datePublished: SITE.publishedAt,
          author: { "@type": "Organization", name: SITE.name },
          publisher: { "@id": `${SITE.url}/#isletme` },
          mainEntityOfPage: `${SITE.url}${path}`
        },
        faqLd(guide.faqs)
      ],
      main
    })
  };
};

/* ---------- Blog ---------- */

const blogIndex = () => {
  const crumbs = [HOME, { label: "Blog", href: "/blog/" }];
  const main = `${pageHero({
    crumbs,
    kicker: "Blog",
    title: "Bakım ve arıza<br /><em>yazıları</em>",
    lead: "Ford aracınızın bakımı, sık görülen arızalar ve mevsim geçişlerinde yapılacak kontroller hakkında yazılar.",
    actions: false
  })}

      <section class="section section--compact section--light" aria-label="Yazılar">
        <div class="container">
          <div class="filter-bar reveal-up" role="group" aria-label="Kategoriye göre filtrele">
            <button type="button" data-filter="all" aria-pressed="true">Tümü <span>${posts.length}</span></button>
${categories
  .map(
    (category) =>
      `            <button type="button" data-filter="${category.slug}" aria-pressed="false">${category.label} <span>${posts.filter((post) => post.category === category.slug).length}</span></button>`
  )
  .join("\n")}
          </div>
          <div class="card-grid card-grid--light" data-filter-list>
${posts.map(postLinkCard).join("\n")}
          </div>
          <p class="filter-empty" hidden>Bu kategoride henüz yazı yok.</p>
        </div>
      </section>

${ctaBand()}`;
  return {
    path: "/blog/",
    html: page({
      title: `Blog${suffix}`,
      description: "Ford araç bakımı, arıza belirtileri ve mevsimsel kontroller hakkında A&S Auto Premium Car Service blog yazıları.",
      path: "/blog/",
      active: "blog",
      jsonLd: [breadcrumbLd(crumbs)],
      main
    })
  };
};

const postDetail = (post) => {
  const path = `/blog/${post.slug}/`;
  const crumbs = [HOME, { label: "Blog", href: "/blog/" }, { label: post.title, href: path }];
  const service = serviceBySlug[post.service];
  const others = posts.filter((item) => item.slug !== post.slug).slice(0, 3);
  const meta = `<span>${categoryLabel[post.category]}</span><span><time datetime="${post.date}">${formatDate(post.date)}</time></span><span>${readingMinutes(post.body)} dakikalık okuma</span>`;
  const article = `${post.body.trim().replace(/^/gm, "            ")}
            <div class="prose__service">
              <span>İlgili hizmet</span>
              <a href="/hizmetler/${service.slug}/">${service.title} ${icon("arrow")}</a>
            </div>`;
  const main = `${pageHero({ crumbs, kicker: `Blog · ${categoryLabel[post.category]}`, title: post.heroTitle, lead: post.excerpt, meta, actions: false })}

${detailLayout(article)}

${cardSection({ kicker: "Blog", title: "Diğer<br /><em>yazılar</em>", cards: others.map(postLinkCard), id: "other-posts-title" })}

${ctaBand()}`;
  return {
    path,
    html: page({
      title: `${post.title}${suffix}`,
      description: post.description,
      path,
      active: "blog",
      ogType: "article",
      jsonLd: [
        breadcrumbLd(crumbs),
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          author: { "@type": "Organization", name: SITE.name },
          publisher: { "@id": `${SITE.url}/#isletme` },
          mainEntityOfPage: `${SITE.url}${path}`
        }
      ],
      main
    })
  };
};

/* ---------- Corporate ---------- */

const facts = () => `      <section class="section section--compact facts-band" aria-label="Kısa bilgiler">
        <div class="metrics container">
          <article class="reveal-up"><span>Açılış</span><p>${SITE.foundingYear}’ten beri Seyhan Yeşiloba’da.</p></article>
          <article class="reveal-up"><span>Usta</span><p>${SITE.mechanic}, bu işte ${SITE.experienceYears} yıllık tecrübe.</p></article>
          <article class="reveal-up"><span>Çalışma saatleri</span><p>${SITE.hours}. ${SITE.closed}.</p></article>
        </div>
      </section>`;

const aboutPage = () => {
  const crumbs = [HOME, { label: "Hakkımızda", href: "/hakkimizda/" }];
  const article = `            <p class="prose__lead">A&amp;S Auto Premium Car Service, ${SITE.foundingYear}’te Seyhan Yeşiloba’da açıldı. Ford binek ve hafif ticari araçlara bakan bağımsız bir özel servisiz.</p>
            <p>Servisi aradığınızda aracınıza bakacak ustayla konuşursunuz. Ustamız ${SITE.mechanic}’ün bu işte ${SITE.experienceYears} yıllık tecrübesi var.</p>
            <h2>Nasıl çalışırız?</h2>
            <p>Aracı önce kontrol ediyor, ne yapılması gerektiğini ve nedenini anlatıyoruz. İşleme sizin onayınızla başlıyoruz. Aracı teslim ederken neyin yapıldığını ve dikkat etmeniz gerekenleri söylüyoruz.</p>
            <h2>Hangi araçlara bakıyoruz?</h2>
            <p>${models.map((model) => `<a href="/ford-modelleri/${model.slug}/">${model.short}</a>`).join(", ")} başta olmak üzere Ford binek, SUV ve hafif ticari araçlara bakıyoruz.</p>
            <h2>Yetkili servis değiliz</h2>
            <p>A&amp;S bağımsız bir özel servistir; Ford Motor Company’nin yetkili servisi değildir. Ford markası yalnızca hangi araçlara baktığımızı anlatmak için kullanılır.</p>
            <p>Yaptığımız işlerden bazılarını <a href="${SITE.instagram}" target="_blank" rel="noopener">Instagram hesabımızda</a> paylaşıyoruz. Müşteri yorumlarını <a href="${SITE.reviewsUrl.replace(/&/g, "&amp;")}" target="_blank" rel="noopener">Google Haritalar’da</a> okuyabilirsiniz.</p>`;
  const main = `${pageHero({
    crumbs,
    kicker: "A&S Auto Premium Car Service",
    title: "2023’ten beri<br /><em>hizmetinizde</em>",
    lead: `Seyhan Yeşiloba’da Ford araçlara bakan bağımsız bir özel servisiz. Ustamızın ${SITE.experienceYears} yıllık tecrübesi var.`
  })}

${facts()}

${detailLayout(article, sideCard({ title: "Ustayla konuşun", text: "Aracınızla ilgili sorularınızı doğrudan ustaya sorabilirsiniz." }))}

${processSection()}

${contactSection()}`;
  return {
    path: "/hakkimizda/",
    html: page({
      title: `Hakkımızda${suffix}`,
      description: `A&S Auto Premium Car Service: ${SITE.foundingYear}'ten beri Seyhan Yeşiloba'da Ford araçlara bakan bağımsız özel servis. Ustamızın ${SITE.experienceYears} yıllık tecrübesi var.`,
      path: "/hakkimizda/",
      active: "about",
      jsonLd: [breadcrumbLd(crumbs), businessLd()],
      main
    })
  };
};

const contactPage = () => {
  const crumbs = [HOME, { label: "İletişim", href: "/iletisim/" }];
  const cards = [
    linkCard({ href: tel, iconName: "phone", meta: "Telefon", title: SITE.phoneDisplay, text: "Arayın, aracınızın modelini ve sorununu anlatın.", cta: "Hemen arayın" }),
    linkCard({ href: wa(), iconName: "whatsapp", meta: "WhatsApp", title: SITE.phoneDisplay, text: "Fotoğraf veya video göndererek sorunu anlatabilirsiniz.", cta: "WhatsApp’tan yazın" }).replace(
      'class="link-card reveal-up"',
      'class="link-card reveal-up" target="_blank" rel="noopener"'
    ),
    linkCard({ href: SITE.mapsUrl.replace(/&/g, "&amp;"), iconName: "pin", meta: "Adres", title: "Yeşiloba, Seyhan", text: SITE.addressShort, cta: "Yol tarifi alın" }).replace(
      'class="link-card reveal-up"',
      'class="link-card reveal-up" target="_blank" rel="noopener"'
    ),
    linkCard({ href: "/randevu/", iconName: "clock", meta: "Çalışma saatleri", title: SITE.hoursShort, text: `${SITE.hours}. ${SITE.closed}.`, cta: "Randevu alın" })
  ];
  const main = `${pageHero({
    crumbs,
    kicker: "İletişim",
    title: "Bize<br /><em>ulaşın</em>",
    lead: `${SITE.addressShort}. ${SITE.hours} açığız.`
  })}

      <section class="section section--compact" aria-label="İletişim bilgileri">
        <div class="container">
          <div class="card-grid card-grid--four">
${cards.join("\n")}
          </div>
        </div>
      </section>

${contactSection()}

${bookingSection()}`;
  return {
    path: "/iletisim/",
    html: page({
      title: `İletişim${suffix}`,
      description: `A&S Auto Premium Car Service iletişim: ${SITE.addressShort}. Telefon ${SITE.phoneDisplay}. ${SITE.hours}.`,
      path: "/iletisim/",
      active: "contact",
      jsonLd: [breadcrumbLd(crumbs), businessLd()],
      main
    })
  };
};

const bookingPage = () => {
  const crumbs = [HOME, { label: "Randevu", href: "/randevu/" }];
  const items = faqGroups.find((group) => group.title === "Randevu ve fiyat").items;
  const main = `${pageHero({
    crumbs,
    kicker: "Servis talebi",
    title: "Hemen<br /><em>randevu alın</em>",
    lead: "Formu doldurun, bilgileriniz WhatsApp mesajı olarak hazırlansın. İsterseniz doğrudan arayabilirsiniz.",
    actions: false,
    compact: true
  })}

${bookingSection({ kicker: "Servis talebi formu", title: "Aracınızı<br /><em>anlatın</em>" })}

${processSection()}

${faqSection(items, { title: "Randevu<br /><em>hakkında</em>" })}`;
  return {
    path: "/randevu/",
    html: page({
      title: `Randevu Al${suffix}`,
      description: `A&S Auto Premium Car Service'ten Ford aracınız için randevu alın. Telefon ${SITE.phoneDisplay}. ${SITE.hours}.`,
      path: "/randevu/",
      active: "booking",
      jsonLd: [breadcrumbLd(crumbs)],
      main
    })
  };
};

const faqPage = () => {
  const crumbs = [HOME, { label: "Sıkça Sorulan Sorular", href: "/sss/" }];
  const groups = faqGroups
    .map(
      (group, index) => `          <div class="faq-group">
            <h2 id="faq-group-${index}" class="faq-group__title reveal-up">${group.title}</h2>
            <div class="accordion reveal-up">
${group.items
  .map(
    (item) => `              <details>
                <summary>${esc(item.q)}<i></i></summary>
                <p>${item.a}</p>
              </details>`
  )
  .join("\n")}
            </div>
          </div>`
    )
    .join("\n");
  const main = `${pageHero({
    crumbs,
    kicker: "SSS",
    title: "Sıkça sorulan<br /><em>sorular</em>",
    lead: "Aradığınız cevabı bulamazsanız arayın ya da WhatsApp’tan yazın."
  })}

      <section class="faq section section--compact section--light" aria-label="Sorular">
        <div class="container faq-groups">
${groups}
        </div>
      </section>

${ctaBand()}`;
  return {
    path: "/sss/",
    html: page({
      title: `Sıkça Sorulan Sorular${suffix}`,
      description: "A&S Auto Premium Car Service hakkında sıkça sorulan sorular: modeller, çalışma saatleri, randevu, fiyat, arıza ve bakım.",
      path: "/sss/",
      active: "faq",
      jsonLd: [breadcrumbLd(crumbs), faqLd(faqGroups.flatMap((group) => group.items))],
      main
    })
  };
};

const legalPage = (legal) => {
  const path = `/${legal.slug}/`;
  const crumbs = [HOME, { label: legal.title, href: path }];
  const main = `${pageHero({
    crumbs,
    kicker: "Yasal bilgiler",
    title: legal.heroTitle,
    lead: `Son güncelleme: ${formatDate(legal.updated)}`,
    actions: false,
    compact: true
  })}

      <section class="section section--compact section--light" aria-label="${esc(legal.title)}">
        <div class="container">
          <article class="prose prose--legal reveal-up">
${legal.body.trim().replace(/^/gm, "            ")}
          </article>
        </div>
      </section>`;
  return {
    path,
    html: page({ title: `${legal.title}${suffix}`, description: legal.description, path, jsonLd: [breadcrumbLd(crumbs)], main })
  };
};

const notFoundPage = () => ({
  path: "/404.html",
  file: "404.html",
  html: page({
    title: `Sayfa bulunamadı${suffix}`,
    description: "Aradığınız sayfa bulunamadı.",
    path: "/404.html",
    noindex: true,
    main: `      <section class="page-hero page-hero--compact not-found" aria-labelledby="page-title">
        <div class="container-wide page-hero__inner">
          <div class="page-hero__copy">
            <p class="eyebrow"><span class="eyebrow__dot"></span><span>404</span></p>
            <h1 id="page-title" class="page-hero__title">Sayfa<br /><em>bulunamadı</em></h1>
            <p class="page-hero__lead">Aradığınız sayfa taşınmış ya da hiç olmamış olabilir. Aşağıdaki bağlantılardan devam edebilirsiniz.</p>
            <div class="hero__actions">
              <a class="button button--red button--large" href="/"><span>Ana sayfaya dön</span>${icon("arrow")}</a>
              <a class="text-link" href="${tel}">
                <span class="text-link__icon">${icon("phone")}</span>
                <span><small>Hemen arayın</small><strong>${SITE.phoneDisplay}</strong></span>
              </a>
            </div>
            <ul class="not-found__links">
              <li><a href="/hizmetler/">Hizmetler</a></li>
              <li><a href="/ford-modelleri/">Ford Modelleri</a></li>
              <li><a href="/ariza-rehberi/">Arıza Rehberi</a></li>
              <li><a href="/blog/">Blog</a></li>
              <li><a href="/iletisim/">İletişim</a></li>
            </ul>
          </div>
        </div>
      </section>`
  })
});

export const buildPages = () => [
  homePage(),
  servicesIndex(),
  ...services.map(serviceDetail),
  modelsIndex(),
  ...models.map(modelDetail),
  guidesIndex(),
  ...guides.map(guideDetail),
  blogIndex(),
  ...posts.map(postDetail),
  aboutPage(),
  contactPage(),
  bookingPage(),
  faqPage(),
  ...legalPages.map(legalPage),
  notFoundPage()
];

export { postBySlug };
