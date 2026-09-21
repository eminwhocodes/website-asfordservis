# A&S Ford Servis — kurumsal web sitesi

Bu depo, Adana'da hizmet veren A&S Ford Servis için hazırlanan kurumsal web sitesini; rakip araştırmasını, SEO/AEO stratejisini, içerik mimarisini ve geliştirme planını içerir.

> Araştırma tarihi: 15 Eylül 2026. Arama sonuçları konuma, cihaza ve kişiselleştirmeye göre değişir. Bu çalışma kesin sıra raporu değil; görünür arama sonuçları, rakip siteler ve doğrulanabilen açık kaynakların stratejik denetimidir.

## Uygulama durumu

Site `main` dalında 37 sayfa olarak hazırdır. Tüm sayfalar ana sayfanın tasarım sistemini kullanır.

| Bölüm | Liste | Detay sayfaları |
|---|---|---|
| Hizmetler | `/hizmetler/` | Periyodik bakım, arıza tespiti, motor ve mekanik, fren ve süspansiyon, şanzıman |
| Ford modelleri | `/ford-modelleri/` | Focus, Fiesta, Puma, Kuga, Courier, Connect, Transit |
| Arıza rehberi | `/ariza-rehberi/` | Ana sayfadaki altı belirtinin her biri |
| Blog | `/blog/` (kategori filtresi) | Altı yazı: bakım, arıza, mevsimsel |

Kurumsal sayfalar: Hakkımızda, İletişim, Randevu, Sıkça Sorulan Sorular. Yasal sayfalar: KVKK aydınlatma metni, gizlilik politikası, çerez politikası. Ayrıca 404 sayfası, `sitemap.xml` ve `robots.txt` üretilir.

Her sayfada ortak header, mega menü, footer, mobil `Ara / WhatsApp / Yol Tarifi` çubuğu, breadcrumb ve uygun JSON-LD (AutoRepair, BreadcrumbList, Service, Article, BlogPosting, FAQPage) bulunur. Hizmet, model ve rehber sayfalarındaki servis talebi formu ilgili hizmet, model veya belirtiyle ön dolu gelir.

Ürün satışı olmadığı için ürün sayfası yoktur. Gerçek içerik gelmeden kampanya, vaka ve ilçe sayfaları açılmamıştır.

### Yayından önce teyit edilecekler

- `tools/site/config.mjs` içindeki alan adı (`asfordservis.com` varsayıldı)
- Yasal metinler için ticari unvan, MERSİS ve VERBİS bilgisi
- Arıza rehberi ve blog yazılarının usta tarafından okunması
- Hizmet listesinin teyidi ve gerçek atölye fotoğrafları

## Yerel önizleme

Projede kurulum gerektiren bir bağımlılık yoktur. Node.js 20 veya üzeri ile:

```bash
npm run dev
```

Ardından `http://127.0.0.1:4173` adresini açın.

Sayfalar `tools/build.mjs` ile üretilir. İçerik veya şablon değiştiğinde yeniden üretin:

```bash
npm run build
```

- İçerik: `tools/site/content/` (hizmetler, modeller, rehber, blog, SSS, yasal metinler)
- Ortak parçalar: `tools/site/layout.mjs` (head, header, footer, form, iletişim, kartlar)
- Sayfa şablonları: `tools/site/pages.mjs`
- Ana sayfa içeriği: `src/home.html`
- İç sayfa stilleri: `assets/pages.css` (ana `assets/styles.css` değiştirilmez)

Üretilen HTML dosyaları depoya dahildir; sunucuda derleme gerekmez.

Kontrolleri çalıştırmak için:

```bash
npm test
```

Test önce üretilen dosyaların kaynakla aynı olduğunu doğrular. Ardından ana sayfa smoke testini ve tüm sayfalar için tek H1, tekil title ve description, canonical, geçerli JSON-LD, kırık iç bağlantı, ortak header ve footer ile yasaklı metin kontrollerini çalıştırır.

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
