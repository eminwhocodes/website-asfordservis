// İşletme bilgileri tek yerde tutulur; tüm sayfalar buradan okur.
// Alan adı henüz müşteriden teyit edilmedi (docs/06, madde 1). Yayın öncesi güncellenmeli.

export const SITE = {
  url: "https://asfordservis.com",
  name: "A&S Auto Premium Car Service",
  shortName: "A&S Auto Premium",
  phone: "+905330947401",
  phoneDisplay: "0533 094 74 01",
  whatsapp: "905330947401",
  instagram: "https://www.instagram.com/as.autopremiumcar/",
  instagramHandle: "@as.autopremiumcar",
  street: "Yeşiloba Mahallesi, 46129. Sokak No:31/A",
  addressLines: ["Yeşiloba Mahallesi", "46129. Sokak No:31/A", "Seyhan / Adana"],
  addressShort: "Yeşiloba Mah. 46129. Sk. No:31/A, Seyhan / Adana",
  district: "Seyhan",
  city: "Adana",
  hours: "Pazartesi–Cumartesi 08.00–18.00",
  hoursShort: "Pzt–Cmt 08.00–18.00",
  closed: "Pazar kapalı",
  foundingYear: 2023,
  experienceYears: 18,
  mechanic: "M. Salih Güngör",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Ye%C5%9Filoba+Mahallesi+46129.+Sokak+No%3A31%2FA+Seyhan+Adana",
  reviewsUrl: "https://www.google.com/maps/search/?api=1&query=A%26S+Auto+Premium+Car+Service+Seyhan+Adana",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3187.103204157857!2d35.244491977274755!3d36.98346967219539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152887f91f68bb19%3A0xb857210df6ebfba5!2sA%26S%20Auto%20Premium%20Car%20Service!5e0!3m2!1str!2str!4v1789462231822!5m2!1str!2str",
  publishedAt: "2026-09-21"
};

export const MODEL_OPTIONS = [
  "Ford Focus",
  "Ford Fiesta",
  "Ford Puma",
  "Ford Kuga",
  "Ford Courier",
  "Ford Connect",
  "Ford Transit",
  "Diğer Ford modeli"
];

export const SERVICE_OPTIONS = [
  "Periyodik bakım",
  "Arıza tespiti",
  "Bilgisayarlı arıza tespiti",
  "Motor ve mekanik",
  "Fren ve süspansiyon",
  "Şanzıman",
  "Diğer"
];
