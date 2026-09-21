# Görsel kaynakları

## Şu anki durum

21 Eylül 2026 itibarıyla ana sayfada hiç fotoğraf yoktur.

Önceki sürümde Unsplash ve Pexels'ten dokuz stok fotoğraf kullanılıyordu. Hepsi kaldırıldı, çünkü:

- Hizmet kartlarında ve "servisten" bölümünde A&S'nin kendi işi gibi duruyorlardı.
- Biri "Instagram'da gerçek paylaşım" etiketiyle birlikte gösteriliyordu.
- Hero fotoğrafındaki motorun kapağında Toyota logosu vardı.
- Bazıları hizmetle ilgisizdi: klasik Amerikan otomobili, baretli fabrika işçisi.

Smoke test sayfadaki `img` sayısını en fazla iki ile sınırlar. Bu sınır, stok fotoğrafların yeniden kartlara dağıtılmasını engellemek içindir; gerçek çekimler geldiğinde birlikte gevşetilebilir.

## Gerçek çekim listesi

Öncelik sırasıyla:

1. Dükkân dış cephesi ve tabela, gündüz. Hero için.
2. Atölye geniş plan, lift üzerinde bir Ford.
3. M. Salih Güngör çalışırken, doğal, poz vermeden. Hakkımızda için.
4. Arıza tespit cihazı araca bağlıyken ekran.
5. En az iki farklı iş için işlem sırası: söküm, parça, montaj.

Kurallar:

- Plakalar bulanık, müşteri görünmüyor.
- Görünen çalışanlardan yayın izni alınmış.
- Telefonla çekilmiş dürüst fotoğraf stok fotoğraftan iyidir.

## Yayın öncesi yapılacaklar

1. Fotoğrafları WebP/AVIF'e çevirip `assets/img/` altına koymak.
2. `srcset` ile 720 ve 1200 piksel genişlikte iki boyut üretmek.
3. Her fotoğrafa içeriği anlatan `alt` metni yazmak.
