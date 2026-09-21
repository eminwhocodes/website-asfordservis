# A&S Ford Servis — kurumsal web sitesi

Bu depo, Adana'da hizmet veren A&S Ford Servis için hazırlanan kurumsal web sitesini; rakip araştırmasını, SEO/AEO stratejisini, içerik mimarisini ve geliştirme planını içerir.

> Araştırma tarihi: 15 Eylül 2026. Arama sonuçları konuma, cihaza ve kişiselleştirmeye göre değişir. Bu çalışma kesin sıra raporu değil; görünür arama sonuçları, rakip siteler ve doğrulanabilen açık kaynakların stratejik denetimidir.

## Uygulama durumu

Ana sayfanın ilk işlevsel tasarımı `main` dalında hazırdır.

- Sinematik, koyu ve Ford odaklı özgün hero
- Sticky/blur header, masaüstü mega menü ve erişilebilir mobil menü
- Belirti seçerek servis talebini otomatik doldurma
- Ford model seçici ve talep formu eşleşmesi
- Hizmet, süreç, atölye kanıtı, usta, SSS ve konum bölümleri
- Form verilerini yapılandırılmış WhatsApp mesajına dönüştüren randevu akışı
- Mobilde sabit `Ara / WhatsApp / Yol Tarifi` eylemleri
- LocalBusiness/AutoRepair yapılandırılmış verisi ve temel teknik SEO
- Harici animasyon kütüphaneleri yüklenmese de çalışan progressive enhancement yapısı

Gerçek atölye/usta çekimleri teslim edildiğinde kod içindeki şematik görseller, performans ve erişilebilirlik korunarak gerçek içeriklerle değiştirilecektir.

## Yerel önizleme

Projede kurulum gerektiren bir bağımlılık yoktur. Node.js 20 veya üzeri ile:

```bash
npm run dev
```

Ardından `http://127.0.0.1:4173` adresini açın.

Kontrolleri çalıştırmak için:

```bash
npm test
```

Smoke test; temel assetleri, bölüm bağlantılarını, telefon/WhatsApp tutarlılığını, Ford model-form eşleşmesini, JS sözdizimini ve responsive/erişilebilirlik korumalarını denetler.

## Teknik yapı

- Semantik HTML5
- Token tabanlı, responsive CSS3
- Vanilla JavaScript
- GSAP + ScrollTrigger, Lenis ve Swiper (CDN; kütüphane yokluğunda fallback mevcut)
- Framework, Bootstrap, jQuery ve Tailwind yok

## Ana strateji

A&S; yetkili servis görünümünü taklit eden kurumsal bir site yerine, **Ford'a odaklanan gerçek usta uzmanlığını**, **şeffaf servis sürecini** ve **tek dokunuşla iletişimi** öne çıkaracak.

Başarı formülü:

1. `Adana + Ford + hizmet/model/arıza` arama niyetlerini ayrı, faydalı sayfalarla karşılamak.
2. Gerçek servis, ekip, ekipman ve işlem fotoğraflarıyla güven oluşturmak.
3. Mobilde arama, WhatsApp, yol tarifi ve randevu yollarını kısaltmak.
4. Google İşletme Profili, site NAP bilgileri ve yerel referansları tutarlı yönetmek.
5. Ustanın tecrübesinden üretilmiş özgün arıza rehberleriyle rakiplerin genel/geçiştirilmiş içeriklerini aşmak.

## Dokümanlar

- [Rakip araştırması](docs/01-rakip-arastirmasi.md)
- [SEO ve AEO stratejisi](docs/02-seo-aeo-stratejisi.md)
- [Site, UI ve UX planı](docs/03-site-ui-ux-plani.md)
- [Sayfa ve içerik mimarisi](docs/04-sayfa-icerik-mimarisi.md)
- [Yol haritası, ölçüm ve kabul kriterleri](docs/05-yol-haritasi-kpi.md)
- [Müşteriden alınacak bilgi ve materyaller](docs/06-musteri-bilgi-listesi.md)
- [Görsel kaynakları ve çekim dönüşüm planı](docs/07-gorsel-kaynaklari.md)
- [Tema incelemesi ve yapılacaklar](docs/08-tema-incelemesi-ve-yapilacaklar.md)

## Kritik marka ve doğruluk kuralları

- A&S gerçekten Ford tarafından yetkilendirilmediyse hiçbir yerde **“Ford yetkili servis”** yazılmayacak. Kullanılacak ifade: **“Ford özel servis”** veya gerçek hizmet kapsamına uygun başka bir ifade.
- Ford logosu, marka yazı tipi veya yetkili servis kurumsal kimliği taklit edilmeyecek. Marka yalnızca hangi araçlara hizmet verildiğini anlatmak için kullanılacak.
- Garanti, orijinal parça, 7/24 yol yardım, ücretsiz çekici/vale, teslim süresi veya fiyat avantajı gibi iddialar belge ve operasyon karşılığı olmadan yayınlanmayacak.
- Sahte yorum, sahte sayaç, sahte “%100 memnuniyet” veya kendinden menkul sertifika kullanılmayacak.
- İlçe sayfaları yalnızca gerçek hizmet alanı ve sayfaya özgü kanıt/içerik varsa açılacak; kopya lokasyon sayfaları oluşturulmayacak.

## Çalışma disiplini

Oturum/limit kesintilerinde ilerleme kaybolmasın diye her anlamlı ve çalışır checkpoint `main` dalına küçük, geri alınabilir commitler halinde gönderilir. Ayrıntılar [AGENTS.md](AGENTS.md) dosyasındadır.

## Önerilen ilk sürüm

İlk sürüm yaklaşık 20–25 indekslenebilir sayfa ile yayına çıkar:

- Ana sayfa, hakkımızda, iletişim, randevu, hizmetler ve Ford modelleri merkez sayfaları
- 8–10 temel hizmet sayfası
- 6–8 öncelikli Ford model sayfası
- 3–5 usta onaylı arıza rehberi
- KVKK aydınlatma, gizlilik ve çerez sayfaları

İlk günden yüzlerce ince/benzer sayfa açmak yerine, Search Console verisine ve gerçek müşteri sorularına göre kontrollü büyüme hedeflenir.
