import { SITE } from "../config.mjs";

export const faqGroups = [
  {
    title: "Genel",
    items: [
      { q: "Hangi Ford modellerine bakıyorsunuz?", a: "Focus, Fiesta, Puma, Kuga, Courier, Connect ve Transit başta olmak üzere Ford binek ve hafif ticari araçlara bakıyoruz. Aracınız listede yoksa model ve motor bilgisini söyleyerek sorabilirsiniz." },
      { q: "Ford yetkili servisi misiniz?", a: "Hayır. A&amp;S Auto Premium Car Service, Ford araçlara bakan bağımsız bir özel servistir. Ford Motor Company’nin yetkili servisi değildir." },
      { q: "Hangi gün ve saatlerde açıksınız?", a: `${SITE.hours} arasında açığız. Pazar günü kapalıyız.` },
      { q: "Servisiniz nerede?", a: `${SITE.addressLines.join(", ")}. <a href="/iletisim/">İletişim sayfasındaki</a> haritadan yol tarifi alabilirsiniz.` }
    ]
  },
  {
    title: "Randevu ve fiyat",
    items: [
      { q: "Gelmeden önce randevu almam gerekir mi?", a: "Beklememeniz için önce aramanızı ya da WhatsApp’tan yazmanızı öneririz." },
      { q: "Fiyatı telefonda öğrenebilir miyim?", a: "Periyodik bakım gibi standart işler araç bilgisine göre telefonda konuşulabilir. Arıza ve onarımlarda doğru fiyat için aracın görülmesi gerekebilir." },
      { q: "İşlem yapılmadan önce bilgi veriyor musunuz?", a: "Evet. Ne yapılması gerektiğini ve nedenini anlatırız. İşlem sizin onayınızla yapılır." },
      { q: "Web sitesindeki form randevu yerine geçer mi?", a: "Form, bilgilerinizi WhatsApp mesajı olarak hazırlar. Mesajı gönderdikten sonra uygun saati birlikte ayarladığımızda randevunuz kesinleşir." }
    ]
  },
  {
    title: "Arıza ve bakım",
    items: [
      { q: "Arıza lambası yanıyorsa aracı kullanmalı mıyım?", a: "Lambanın rengi ve aracın davranışı önemlidir. Kırmızı uyarı, hararet, yağ basıncı uyarısı veya ciddi bir ses varsa aracı zorlamadan bizi arayın. Ayrıntılar için <a href=\"/ariza-rehberi/motor-ariza-lambasi/\">motor arıza lambası rehberine</a> bakabilirsiniz." },
      { q: "Motordan gelen sesi nasıl anlatabilirim?", a: "Sesin ne zaman geldiğini not edin ve mümkünse kısa bir video çekip WhatsApp’tan gönderin. Kesin teşhis için aracı görmemiz gerekir." },
      { q: "Bakım aralığımı nereden öğrenebilirim?", a: "Aracın bakım kitapçığında kilometre ve süre olarak yazar. Kitapçık yoksa model, motor ve kilometre bilgisini söyleyin, birlikte bakalım." },
      { q: "Ticari araçlara bakıyor musunuz?", a: "Evet. Courier, Connect ve Transit gibi Ford hafif ticari ve ticari araçlara bakıyoruz." }
    ]
  }
];

export const homeFaqs = faqGroups.flatMap((group) => group.items).slice(0, 6);
