# Yol haritası, KPI ve kabul kriterleri

## 1. Önerilen teknik yaklaşım

Repo boş olduğu için önerilen varsayılan:

- Next.js App Router + TypeScript
- Statik üretim/SSR; kritik içerik ilk HTML'de
- Tailwind veya küçük token tabanlı stil sistemi
- İçerik için MDX ya da tip güvenli veri dosyaları
- Formlar için sunucu tarafı endpoint + spam/rate limit
- Görsel optimizasyonu ve CDN
- GitHub Actions: lint, typecheck, test, build, Lighthouse bütçesi

Site basit tutulacaksa Astro da güçlü bir alternatiftir. Uygulama başlamadan barındırma, içerik yönetimi ve form teslim gereksinimine göre seçim kesinleştirilir.

## 2. Aşamalı plan

### Aşama 0 — Keşif ve doğrulama (2–3 iş günü)

- İşletme adı, adres, telefon, saat ve konum doğrulama
- Yetki/özel servis statüsü ve marka kullanım sınırları
- Hizmet, model, ekipman, parça ve garanti kapsamı
- Usta/ekip görüşmesi
- Son 3–6 ay iş emri ve telefon sorularından konu önceliği
- Domain ve mevcut Google İşletme Profili denetimi
- Rakip arama sonuçlarının Adana konumundan ekran kaydı/baseline'ı

**Çıkış kriteri:** `06-musteri-bilgi-listesi.md` kritik alanları tamamlanmış.

### Aşama 1 — Bilgi mimarisi ve marka yönü (3–4 iş günü)

- Site haritası ve URL sözlüğü
- Ana sayfa/hizmet/model içerik wireframe'leri
- Açık tema tasarım yönü
- Fotoğraf çekim planı
- CTA ve randevu akışları
- Analytics event planı

**Çıkış kriteri:** Mobil + masaüstü ana şablonlar onaylı; tüm CTA hedefleri tanımlı.

### Aşama 2 — Tasarım sistemi ve temel geliştirme (5–7 iş günü)

- Header, footer, mobil eylem çubuğu
- Kart, breadcrumb, form, accordion, vaka, usta ve yorum bileşenleri
- Ana sayfa
- Hizmet/model/rehber şablonları
- Randevu, iletişim ve hukuki sayfalar
- Form teslimi ve spam koruma

**Çıkış kriteri:** Klavye ile kullanılabilir, mobilde çalışır, boş/kayıp link yok.

### Aşama 3 — Lansman içeriği ve gerçek görseller (5–10 iş günü)

- 8–10 hizmet sayfası
- 6–8 model sayfası
- 3–5 arıza rehberi
- 2–4 vaka
- Ekip/usta ve işletme içerikleri
- Gerçek fotoğrafların optimize edilmesi

**Çıkış kriteri:** Her sayfa teknik uzman tarafından kontrol edilmiş; placeholder/stok usta görseli yok.

### Aşama 4 — Teknik SEO, QA ve yayın (3–4 iş günü)

- Metadata, canonical, JSON-LD
- robots.txt, sitemap.xml, manifest/favicon
- 404/500 ve redirect testleri
- Form ve consent testi
- Lighthouse ve gerçek cihaz testi
- Schema/Rich Results doğrulama
- Search Console, analytics, Bing, GBP UTM
- Yedekleme ve hata izleme

**Çıkış kriteri:** P0 kabul kriterleri karşılanmış; kritik erişilebilirlik/SEO hatası yok.

### Aşama 5 — İlk 90 gün büyüme

- Haftalık GBP fotoğraf/güncelleme
- Etik yorum toplama sistemi
- Ayda 2–4 usta onaylı rehber
- Ayda en az 2 servis vakası
- Sorgu, sayfa ve dönüşüm raporu
- İçerik güncelleme ve yeni sayfa kararları

## 3. Öncelik tablosu

| İş | Etki | Efor | Öncelik |
|---|---:|---:|---:|
| NAP + GBP doğruluğu | Çok yüksek | Düşük | P0 |
| Mobil arama/WhatsApp/randevu | Çok yüksek | Düşük | P0 |
| Ana sayfa + hizmet/model merkezleri | Çok yüksek | Orta | P0 |
| Gerçek fotoğraf ve usta profili | Çok yüksek | Orta | P0 |
| 8–10 temel hizmet sayfası | Yüksek | Orta | P0 |
| İlk 6–8 model sayfası | Yüksek | Orta | P0 |
| Analytics + Search Console | Çok yüksek | Düşük | P0 |
| Vaka içerikleri | Yüksek | Orta | P1 |
| Arıza rehberi kümeleri | Yüksek | Yüksek | P1 |
| Filo akışı | Orta-yüksek | Orta | P1 |
| İlçe/lokasyon sayfaları | Değişken | Yüksek | P2, yalnız kanıt varsa |

## 4. Yayın kabul kriterleri

### İşlevsel

- Tüm menü, kart ve CTA hedefleri çalışır; `#` placeholder link yok.
- Telefon, WhatsApp, yol tarifi ve randevu gerçek bilgilerle çalışır.
- Form başarı/hata/timeout/tekrar gönderim durumları test edilir.
- Form talebi belirlenen kanala ulaşır ve loglanır.
- Tüm kart yüzeyi tıklanabilir; nested link hatası yok.
- Mobil menü açma/kapatma, focus trap ve ESC çalışır.

### İçerik ve marka

- Yetkili servis gibi gösteren ifade/logo/tasarım yok.
- Her teknik iddia usta tarafından onaylı.
- Adres, telefon, saat ve isim site genelinde aynı.
- Sahte yorum, sayaç veya sertifika yok.
- Tüm fotoğraflar izinli; plakalar ve kişisel veriler korunur.
- Her indekslenebilir sayfanın gerçek kullanıcı değeri var.

### SEO

- Tek H1 ve benzersiz title/meta.
- Canonical doğru.
- 200/301/404 davranışı doğru; redirect chain yok.
- Sitemap yalnız indekslenebilir canonical URL içerir.
- robots.txt erişilebilir.
- JSON-LD görünür içerikle eşleşir ve doğrulanır.
- İç bağlantısız yetim sayfa yok.
- Prod'da yanlışlıkla `noindex` veya `Disallow: /` yok.

### Performans ve erişilebilirlik

- Mobil Lighthouse Performance ≥ 90 hedefi.
- Accessibility ≥ 95 hedefi; otomatik test manuel kontrolün yerine geçmez.
- LCP/INP/CLS bütçeleri dokümante ve izlenir.
- 360 px genişlikte yatay taşma yok.
- 200% zoom'da içerik kaybı yok.
- Form label, error ve focus durumları erişilebilir.
- Görseller lazy-load; hero/LCP doğru önceliklendirilmiş.

## 5. KPI çerçevesi

### 0–30 gün: temel ve indeksleme

- İndekslenen geçerli sayfa oranı
- Sitemap keşif/indeks durumu
- Marka + telefon/adres doğruluğu
- Core Web Vitals saha verisi oluşumu
- Form/WhatsApp/telefon event'lerinin doğru çalışması
- GBP profil görüntüleme, arama, yol tarifi baseline'ı

### 31–90 gün: görünürlük ve talep

- Marka dışı organik gösterim
- `Adana + Ford + hizmet/model` ilk 20/10 görünürlük trendi
- Organik tıklama ve CTR
- GBP arama, arama tıklaması, yol tarifi, web tıklaması
- Nitelikli telefon/WhatsApp/randevu talebi
- Landing page bazında dönüşüm oranı
- Yeni yorum sayısı, ortalama puan ve yanıt süresi

### 91–180 gün: iş sonucu

- Organikten servise dönüşen iş emri
- İş emri başına organik kazanım maliyeti
- Binek/ticari/model/hizmet bazında talep kalitesi
- Tekrar müşteri ve tavsiye oranı
- İçeriklerin asistli dönüşüm katkısı
- En çok gelir/iş emri üreten sorgu kümeleri

## 6. Hedef yerine baseline + gelişim

Yeni site için keyfi “3 ayda 1. sıra” hedefi belirlenmemeli. İlk 30 gün baseline çıkarılır. Ardından:

- Marka dışı organik gösterimlerde aylık sürdürülebilir artış
- Nitelikli dönüşüm sayısında çeyreklik artış
- GBP aksiyonlarında artış
- Core Web Vitals “good” URL oranının %100'e yaklaşması
- Yanıtsız yorum kalmaması
- Düşük değerli/kanibalize sayfa sayısının sıfıra yakın tutulması

## 7. Risk kaydı

| Risk | Etki | Önlem |
|---|---:|---|
| Yetkili servis gibi algılanma | Hukuki/marka güveni yüksek | Bağımsız kimlik, ifade ve hukuk kontrolü |
| Kopya model/lokasyon sayfaları | İndeks/kalite yüksek | Usta izi ve özgünlük eşiği |
| Yanlış teknik tavsiye | Güvenlik ve itibar çok yüksek | Usta review + tarih + kapsam uyarısı |
| Form spam'i | Operasyon orta | Honeypot, rate limit, server validation |
| WhatsApp bağımlılığı | Ölçüm/veri orta | Form ve telefon alternatifleri |
| Ağır görseller/video | Performans yüksek | CDN, responsive image, lazy load |
| Eski fiyat/kampanya | Güven ve mevzuat orta-yüksek | Son kullanım tarihi ve otomatik arşiv |
| NAP tutarsızlığı | Yerel SEO yüksek | Tek kaynak dosyası + periyodik audit |
| Sahte/teşvikli yorum | Profil yaptırımı yüksek | Etik yorum SOP'u |

## 8. Bakım ritmi

### Haftalık

- Form teslim ve hata kontrolü
- GBP yorum yanıtları
- Yeni gerçek fotoğraf
- Kritik bilgi değişikliği kontrolü

### Aylık

- Search Console sorgu/sayfa raporu
- GBP performans raporu
- Nitelikli lead → iş emri eşlemesi
- Kırık link/404/canonical/sitemap taraması
- İçerik güncelleme ve yeni konu listesi

### Üç aylık

- Rakip SERP ve UX yeniden denetimi
- Core Web Vitals saha verisi
- Eski/ince içerik birleştirme veya geliştirme
- Model/hizmet önceliğini iş emri verisiyle yenileme
- Hukuki metin ve consent denetimi
