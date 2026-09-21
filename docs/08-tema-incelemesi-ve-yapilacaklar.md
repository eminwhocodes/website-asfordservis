# Tema incelemesi ve yapılacaklar

İnceleme tarihi: 21 Eylül 2026. Ana sayfa (`index.html`), stil dosyası (`assets/styles.css`), etkileşim dosyası (`assets/app.js`) ve smoke testi masaüstü 1440 px ve telefon 390 px genişliğinde tarayıcıda gezilerek incelendi.

Hedef: Sitenin "ajans maketi" veya "yapay zekâ üretimi" gibi değil, Adana Yeşiloba'da gerçekten çalışan bir Ford tamircisinin sitesi gibi görünmesi.

## Uygulama durumu

Güncelleme: 21 Eylül 2026. Bölüm 8'deki adımların durumu:

| Adım | Durum | Not |
|---|---|---|
| 1. Metin temizliği | Yapıldı | Tüm başlıklar düz, kırmızı üst etiketler ve manifesto bölümü kaldırıldı. |
| 2. Sahte kanıt temizliği | Yapıldı | "Servisin içinden" bölümü kaldırıldı. Instagram gömmesi, müşteri paylaşım seçene kadar bekliyor. |
| 3. Hareket ve kütüphane kaldırma | Yapıldı | GSAP, Lenis, Swiper, yükleme ekranı ve mıknatıs buton gitti. |
| 4. Yapı sadeleştirme | Yapıldı | Dil seçici ve mega menü kaldırıldı, model kaydırıcısı liste oldu. |
| 5. Tasarım dili | Yapıldı | Açık zemin, Barlow, 8 px köşe. CSS 4590 satırdan 1171 satıra indi, ölü seçici yok. |
| 6. Gerçek içerik | Kısmen yapıldı | Çalışma saatleri, kuruluş yılı (2023) ve 18 yıllık tecrübe eklendi. Hizmet teyidi, fotoğraflar ve Instagram paylaşımları bekliyor. |
| 7. Doğrulama | Yapıldı | Masaüstü 1280 px ve telefon 390 px tarayıcıda gezildi. Form, belirti, model, menü ve WhatsApp mesajı denendi. Smoke test geçiyor. |

Plandan iki bilinçli sapma var:

- **Hero fotoğrafı da kaldırıldı.** Bölüm 5'te hero'da tek stok fotoğraf kalabilir denmişti. Yakından bakınca fotoğraftaki motorun Toyota olduğu görüldü. Yerine belirti seçici hero'nun sağına taşındı.
- **Lighthouse ölçümü yapılmadı.** Sayfada artık ağır görsel ve kütüphane olmadığı için yayın ortamında ölçülmesi daha anlamlı.

---

## 1. Kısa teşhis

Teknik altyapı sağlam. Form WhatsApp'a düzgün mesaj hazırlıyor, mobil alt çubuk doğru, harita gerçek, footer'daki "yetkili servis değildir" notu yerinde. Sorun kodda değil, **dilde ve sunumda**.

Siteyi yapay gösteren şeyler dört başlıkta toplanıyor:

1. **Reklam ajansı dili.** Her bölüm başlığı aynı kalıpta: iki satır, ikinci satırın bir kelimesi kırmızı, sonunda nokta. "Parça değiştirmek kolay. Doğru sorunu bulmak ustalık." Bunun gibi on başlık üst üste gelince site bir tamirciden değil, bir marka ajansından çıkmış gibi okunuyor.
2. **Kanıt gibi sunulan boş içerik.** "Instagram'da gerçek paylaşım" etiketi altında Pexels'ten alınmış klasik araba fotoğrafı var. "Servisten şeffaf kareler" bölümündeki üç kartın üçü de stok fotoğraf. "Gerçek" kelimesini yazmak zorunda kalan bir site zaten gerçek değildir.
3. **Portfolyo sitesi efektleri.** Açılış yükleme ekranı, yumuşak kaydırma (Lenis), mıknatıs buton, satır satır açılan başlık, hero'da paralaks. Bunlar tasarım ödülü sitelerinin alışkanlıkları. Bir tamirci sitesine gelen kişi arızayı anlatıp telefonu bulmak istiyor.
4. **İçerik yerine dolgu.** Çalışma saati yok, kuruluş yılı yok, ekipman yok, gerçek fotoğraf yok. Bu boşluklar "Belirtiyi dinle / Sistemi kontrol et / Net biçimde anlat" gibi değer kartlarıyla doldurulmuş. Müşteri için hiçbir bilgi taşımıyorlar.

---

## 2. Bölüm bölüm bulgular

### 2.1 Header ve menü

| Durum | Sorun |
|---|---|
| Menüde "Servisten" maddesi var | Türkçede tek başına anlamsız. "Çalışmalarımız" veya "Atölyeden" daha doğal. |
| Dil seçici: TR / "EN Yakında" | Var olmayan bir özellik. Tıklanınca hiçbir şey olmuyor. Kaldırılmalı. |
| "Hizmetler" mega menüsü | İçindeki dört bağlantı da aynı yere (`#hizmetler`) gidiyor. Menü içinde açıklama cümlesi var: "Belirtiden işleme değil, belirtiden doğru teşhise gideriz." Bu ajans cümlesi menüde durmamalı. Sayfa tek olduğu sürece düz bağlantı yeterli. |
| Marka yazısı "AUTO PREMIUM / FORD ÖZEL SERVİSİ" | İşletmenin Google'daki adı "A&S Auto Premium Car Service". Tutarlı, kalabilir. |

### 2.2 Hero

| Durum | Sorun |
|---|---|
| Başlık: "Ford'unuzu işinin ehline bırakın." | Slogan. Bir tamirci sitesinin ilk cümlesi ne yaptığını ve nerede olduğunu söylemeli. |
| Alt metin: "Bakım ezbere yapılmaz. Belirti dinlenir, araç incelenir, işlem size anlatılır." | Üçleme kalıbı, vecize tonu. Yapay zekâ metinlerinin en tanıdık izlerinden biri. |
| Üstte kırmızı noktalı etiket: "Adana'da Ford özel servisi" | Bu aslında başlık olmalı; şu anda süs olarak duruyor. |
| Alt şerit: "Ford odaklı teşhis / İşlem öncesi bilgilendirme / Seyhan / Adana" | Dolgu. Bunun yerine çalışma saati ve adres yazılmalı. |
| Fotoğraf: Unsplash motor bölümü | Aynı fotoğraf aşağıda "Periyodik Bakım" kartında ikinci kez kullanılmış. |
| Hero yüksekliği 900 px'ten başlıyor | Tek fotoğraf ve üç satır yazı için fazla. Kullanıcı ilk ekranda hizmet listesini görmeli. |
| Hero içeriği yalnızca GSAP animasyonu bitince görünür oluyor | Tarayıcı sekmesi arka plandayken veya animasyon zamanlayıcısı yavaşladığında hero saniyelerce boş kalıyor. İncelemede birebir görüldü: sayfa yüklendi, yükleme ekranı gizlendi, ama başlık altındaki metin, butonlar ve fotoğraf `opacity: 0` durumunda bekledi. İçerik CSS'te varsayılan olarak görünür olmalı; animasyon varsa da üstüne eklenmeli. |

### 2.3 "Parça değiştirmek kolay" bölümü (manifesto)

Tamamen kaldırılmalı. Başlık slogan, yan metin ("Her ses bir ipucu, her uyarı bir başlangıç noktasıdır.") vecize, altındaki üç kart ("Belirtiyi dinle", "Sistemi kontrol et", "Net biçimde anlat") içerik taşımıyor. Bu bölümün yerine gerçek bilgi gelmeli: çalışma saatleri, kaç yıldır bu işte olduğu, hangi cihazla arıza okuduğu.

### 2.4 Belirti seçici

Sitenin en iyi fikri. Müşteri arızanın adını bilmeden "hararet yapıyor" deyip talebi başlatabiliyor. Kalmalı. Yalnızca başlık düzeltilmeli: "Belirtiyi seçin, doğru yerden başlayalım." yerine "Aracınızda ne var?" gibi düz bir soru yeter.

### 2.5 Hizmetler

| Durum | Sorun |
|---|---|
| Başlık: "Ford'unuz için kapsamlı servis." | "Hizmetlerimiz" yeterli. |
| Üst etiket: "Teşhisten teslime" | Kaldırılmalı. |
| Altı kartın altısı da stok fotoğraflı | Fotoğraflar hizmetle uyuşmuyor: "Motor & Mekanik" kartında Amerikan klasik arabasının egzozuna bakan biri, "Emin değil misiniz?" kartında sarı baretli fabrika işçisi. Gerçek çekim gelene kadar kartlarda fotoğraf olmamalı. Sade ikon veya hiçbir şey daha dürüst. |
| Kart metinleri genel | "Fren bileşenleri, amortisör ve yol tutuş sistemlerinin kontrolü." gibi cümleler her siteye uyar. Ustaya sorulmuş somut kalemler yazılmalı: "Balata, disk, kaliper, fren hidroliği değişimi. ABS arıza okuma." |
| "Emin değil misiniz?" kartı | Fikir iyi, sunum değil. Fotoğrafsız, düz bir "Ne olduğunu bilmiyorsanız WhatsApp'tan yazın, birlikte bakalım." kutusu olmalı. |

### 2.6 Ford modelleri

Kartlar boş: büyük siyah kutu, altında "Focus / Binek" ve bir ok. Yer tutucu gibi duruyor. Kaydırıcı (Swiper) ve ok butonları da gereksiz; yedi model bir satıra sığar.

Öneri: Kaydırıcıyı kaldır, modelleri tek satırda seçilebilir etiket olarak listele. Başlık: "Baktığımız Ford modelleri". Altına tek satır: "Listede olmayan modeller için arayın."

### 2.7 Servis süreci

İçerik olarak mantıklı, dört adım net. Yalnızca başlık ("Serviste ne olacak baştan bilin.") ve üst etiket ("Net ve anlaşılır") ajans dilinde. "Nasıl çalışıyoruz" başlığı yeter.

### 2.8 "Servisin içinden şeffaf kareler" bölümü

Sitenin en sorunlu bölümü. Kullanıcının şikâyeti tam olarak burada.

| Kart | Ne yazıyor | Gerçekte ne var |
|---|---|---|
| 1 | "Instagram'da gerçek paylaşım" + "Ford Fiesta cam krikosu değişimi" | Pexels'ten klasik araba ve kıvılcım fotoğrafı. Instagram paylaşımı gerçek ama fotoğraf ona ait değil. |
| 2 | "A&S Auto Instagram" + "Güncel servis çalışmalarını görün" | Pexels fotoğrafı, Instagram profiline bağlantı. |
| 3 | "Servisten paylaşımlar" + "Bakım ve onarım çalışmalarımız" | Unsplash fotoğrafı, aynı bağlantı. |

İki yol var:

- **Kısa vade:** Bölümü tamamen kaldır. Footer'daki Instagram bağlantısı yeter.
- **Doğru çözüm:** Instagram'ın resmî gömme kodunu kullan. `https://www.instagram.com/p/DTZ7HI3CKii/` gerçek bir paylaşım; Instagram'ın `blockquote` + `embed.js` yöntemiyle gömüldüğünde gerçek fotoğrafı ve açıklamasıyla görünür. Üç dört gerçek paylaşım bu şekilde eklenirse bölüm gerçekten kanıt olur. Etiket metni de gerekmez; paylaşımın kendisi yeterli.

### 2.9 Hakkımızda

| Durum | Sorun |
|---|---|
| Başlık: "Aracınızla usta arasında mesafe yok." | Slogan. "Hakkımızda" veya "M. Salih Güngör" yeter. |
| Metin: "Kurumsal servis ciddiyetini, doğrudan usta iletişimiyle bir araya getiriyoruz." | Ajans cümlesi. Yerine birinci tekil şahıs, sade bir tanıtım: kaç yıldır Ford'a bakıyor, nerede çalıştı, dükkân ne zaman açıldı. Bu bilgiler `docs/06` listesinde P0 olarak zaten isteniyor. |
| Fotoğraf | Pexels bağlantısı yüklenmiyor; sayfada kırık resim ve alt metni görünüyor. Gerçek portre gelene kadar bu alan boş bırakılmalı ya da kaldırılmalı. |

### 2.10 SSS

İyi. Sorular gerçek müşteri sorularına benziyor, cevaplar iddiasız. Yalnızca başlık ("Servise gelmeden önce bilin.") "Sık sorulan sorular" olmalı.

### 2.11 Randevu formu

Akış doğru, kalmalı. Düzeltmeler:

- Başlık "Ford'unuz için ilk adımı atın." yerine "Servis talebi" veya "Randevu".
- Üst etiket "Birkaç bilgi yeter" kaldırılmalı.
- Arka plandaki ızgara deseni ve kırmızı ışık lekesi (`booking__glow`) kaldırılmalı.

### 2.12 İletişim ve footer

- Harita gerçek, kart bilgileri doğru. Başlık "Adana Oto Sanayi'de bizi kolayca bulun." yerine "Adres ve ulaşım".
- Çalışma saatleri hiçbir yerde yok. İletişim kartına ve JSON-LD'ye (`openingHoursSpecification`) eklenmeli. Bilgi müşteriden alınacak.
- Google haritada işletmenin gerçek puanı görünüyor (4 yorum, 5,0). Sitede sahte yorum yazmak yerine "Google'da yorumlarımızı okuyun" bağlantısı vermek yeterli ve dürüst.

---

## 3. Tasarım dili: neden "yapay zekâ" hissi veriyor

### 3.1 Tipografi

- Space Grotesk + Manrope ikilisi son iki yılın en yaygın "startup / yapay zekâ ürünü" eşleşmesi. Bu iki fontu gören herkes aynı tür siteyi hatırlıyor.
- Başlıklar `letter-spacing: -0.06em` ile sıkıştırılmış, 5,75 rem'e kadar çıkıyor. Tamirci sitesinde 92 px başlık yok.
- Kırmızı üst etiketler 0,7 rem, 0,2em harf aralıklı, büyük harf. Bu da aynı kalıbın parçası.

Öneri: Sanayi hissi olan, Türkçe karakterleri sağlam, sıradan bir font. Barlow (başlık için Barlow Semi Condensed) veya IBM Plex Sans iyi seçenekler. Alternatif: sistem fontu (`system-ui`) kullanıp hiç font yüklememek. Başlık boyutu masaüstünde en fazla 40 ila 48 px.

### 3.2 Renk ve zemin

- Tamamen koyu zemin, kırmızı vurgu, cam efektli header. Bu, "premium teknoloji" şablonunun ta kendisi.
- Gerçek servis siteleri açık zeminlidir, çünkü fotoğraf ve metin okunur olmalı.

Öneri: Açık zemin (kırık beyaz veya açık gri), koyu header ve footer. Kırmızı yalnızca telefon ve ana buton için. Radial gradient, noise, glow, backdrop-filter kullanılmamalı. Şu an CSS'te 17 tane gradient/blur tanımı var.

### 3.3 Boşluk ve ölçek

- Bölüm dikey boşluğu `clamp(104px, 11vw, 184px)`. Masaüstünde bölümler arasında 180 px boşluk var; kullanıcı her bölüm için bir ekran kaydırıyor.
- Öneri: 64 ila 96 px.

### 3.4 Hareket

Kaldırılması gerekenler:

- Açılış yükleme ekranı (`.page-loader`). Sitenin yüklenecek ağır bir şeyi yok; ekran sadece gecikme.
- Lenis yumuşak kaydırma. Tarayıcının kendi kaydırmasını değiştirmek kullanıcıyı rahatsız ediyor, klavye ve `Ctrl+Home` gibi kısayolları da bozuyor (incelemede görüldü).
- Mıknatıs buton (`.magnetic`).
- Satır satır açılan başlık (`.title-line`), hero paralaks.
- Kaydırmayla açılan `reveal-up` animasyonları. Kalacaksa hafif bir fade yeter ve içerik animasyonsuz da görünür olmalı.

GSAP, ScrollTrigger, Lenis ve Swiper tamamen kaldırılabilir. Geriye yalnızca menü, belirti seçici, form ve akordeon için 100 satırlık sade JavaScript kalır.

### 3.5 Yüzeyler ve köşeler

Köşe yarıçapları 10 ila 24 px arasında dağınık. Tek bir değer (8 veya 10 px) seçilip her yerde kullanılmalı. Kartların etrafındaki ince yarı saydam çizgiler, koyu zemin gidince zaten gerekmeyecek.

---

## 4. Metin düzeltme tablosu

Aşağıdaki değişiklikler tek başına sitenin havasını büyük ölçüde değiştirir.

| Yer | Şu an | Öneri |
|---|---|---|
| Hero H1 | Ford'unuzu işinin ehline bırakın. | Adana Ford Özel Servisi |
| Hero alt metin | Bakım ezbere yapılmaz. Belirti dinlenir, araç incelenir, işlem size anlatılır. Ford binek ve hafif ticari araçlar için Adana'da usta işi servis. | Focus, Fiesta, Puma, Kuga, Courier, Connect ve Transit için bakım, arıza tespiti, motor, şanzıman ve fren işleri. Yeşiloba Oto Sanayi, Seyhan. |
| Hero kanıt şeridi | Ford odaklı teşhis / İşlem öncesi bilgilendirme / Seyhan / Adana | Çalışma saatleri / Adres / Telefon |
| Manifesto | Parça değiştirmek kolay. Doğru sorunu bulmak ustalık. | Bölüm kaldırılır |
| Belirti | Belirtiyi seçin, doğru yerden başlayalım. | Aracınızda ne var? |
| Hizmetler | Ford'unuz için kapsamlı servis. | Hizmetlerimiz |
| Modeller | Ford modelinizi seçin, talebi hızlandırın. | Baktığımız Ford modelleri |
| Süreç | Serviste ne olacak baştan bilin. | Nasıl çalışıyoruz |
| Çalışmalar | Servisin içinden şeffaf kareler. | Atölyeden (yalnızca gerçek Instagram gömmesiyle) |
| Hakkımızda | Aracınızla usta arasında mesafe yok. | Hakkımızda |
| SSS | Servise gelmeden önce bilin. | Sık sorulan sorular |
| Form | Ford'unuz için ilk adımı atın. | Servis talebi |
| İletişim | Adana Oto Sanayi'de bizi kolayca bulun. | Adres ve ulaşım |
| Menü | Servisten | Atölyeden |
| Tüm kırmızı üst etiketler | Teşhisten teslime, Net ve anlaşılır, Birkaç bilgi yeter, Merak edilenler, Ford'un dilinden anlayan servis, Aracınız ne söylüyor?, Binekten hafif ticariye, Servisten görüntüler | Hepsi kaldırılır |

Yazım kuralı: Kırmızı vurgulu `em` kalıbı başlıklardan çıkarılır. Başlıklar tek satır, düz, noktasız.

---

## 5. Görsel plan

### Şu anki durum

- 11 `img` etiketi, tamamı Unsplash ve Pexels. Biri iki kez kullanılmış, biri yüklenmiyor.
- Smoke test en az 10 `img` şartı koyuyor (`tests/smoke.mjs` satır 34). Bu şart stok fotoğraf kullanımını zorluyor; değiştirilmeli.

### Gerçek çekim gelene kadar

- Hero'da tek bir stok fotoğraf kalabilir, o da geniş açılı atölye planı olmalı; motor yakın planı değil.
- Hizmet kartlarında, hakkımızda bölümünde ve çalışmalar bölümünde fotoğraf olmamalı.
- Görsel sayısını azaltmak hem sayfayı hızlandırır hem de "sahte kanıt" riskini bitirir.

### Gerçek çekim listesi (docs/07 ile aynı, öncelik sırasıyla)

1. Dükkân dış cephesi ve tabela, gündüz. Hero için.
2. Atölye geniş plan, lift üzerinde bir Ford.
3. M. Salih Güngör çalışırken, doğal, poz vermeden.
4. Arıza tespit cihazı araca bağlıyken ekran.
5. Bir işlem sırası: söküm, parça, montaj. En az iki farklı iş.
6. Plakalar bulanık, müşteri görünmüyor.

Telefonla çekilmiş dürüst fotoğraf, stok fotoğraftan her zaman daha iyidir.

---

## 6. Teknik temizlik

| Konu | Durum | Yapılacak |
|---|---|---|
| Kullanılmayan CSS | `hero-machine`, `car-body`, `diagnostic-screen`, `map-grid`, `window-mechanism` gibi 35 sınıf, 82 blok. Önceki şematik görsellerden kalma. | Silinecek. CSS 4590 satır; sadeleştirmeyle 1500 satırın altına iner. |
| Harici kütüphaneler | GSAP, ScrollTrigger, Lenis, Swiper CDN'den yükleniyor. | Hepsi kaldırılır. |
| Fontlar | Google Fonts'tan iki aile, sekiz ağırlık. | Tek aile, iki ağırlık; ya da sistem fontu. |
| Fotoğraflar | Uzak URL, boyutlandırılmamış. | Yerel WebP, `srcset` ile. |
| Kırık görsel | Pexels 4480464 yüklenmiyor. | Kaldırılır. |
| Hero görünürlüğü | İçerik JS animasyonuna bağlı. | CSS varsayılanı görünür olur. |
| JSON-LD | Saat bilgisi yok. | `openingHoursSpecification` eklenir. |
| Smoke test | H1'de "Ford'unuzu" kelimesi ve 10 `img` zorunlu. | Yeni metne göre güncellenir. |
| Dil seçici | İşlevsiz. | Kaldırılır. |
| Mega menü | Tek hedefe giden dört bağlantı. | Düz bağlantı. |

---

## 7. Müşteriden alınması şart olan bilgiler

Bunlar gelmeden dolgu metinlerin yerine gerçek bilgi konamaz. `docs/06` listesinin site için en acil kısmı:

1. Çalışma günleri ve saatleri.
2. Dükkânın açılış yılı, ustanın bu işteki yılı.
3. Hangi hizmetler var, hangileri yok (klima, DPF, kaporta, turbo, enjektör, yol yardım). Yok olanlar siteye yazılmaz.
4. Arıza tespit cihazının markası ve Ford'a özel yazılımı var mı.
5. Instagram paylaşımlarını siteye gömme izni ve kullanılacak üç dört paylaşımın bağlantısı.
6. Dükkân ve usta fotoğrafları (madde 5'teki liste).
7. Google İşletme Profili bağlantısı (yorum bağlantısı için).
8. Teşhis ücreti var mı, ek işlem için nasıl onay alınıyor. Bu iki cümle "Nasıl çalışıyoruz" bölümüne girer.

---

## 8. Uygulama sırası

Her adım ayrı commit. Her adımda `npm test` geçmeli.

1. **Metin temizliği.** Bölüm 4'teki tablo uygulanır. Kırmızı etiketler, `em` vurguları ve manifesto bölümü kaldırılır. Smoke testteki H1 şartı güncellenir.
2. **Sahte kanıt temizliği.** "Servisin içinden" bölümü kaldırılır ya da gerçek Instagram gömmesine çevrilir. Hizmet ve hakkımızda bölümlerinden stok fotoğraflar çıkar. Smoke testteki 10 `img` şartı kaldırılır.
3. **Hareket ve kütüphane kaldırma.** Loader, Lenis, GSAP, Swiper, mıknatıs buton gider. JS sadeleşir. Hero içeriği CSS'te görünür olur.
4. **Yapı sadeleştirme.** Dil seçici, mega menü, model kaydırıcısı kaldırılır. Modeller etiket listesi olur.
5. **Tasarım dili.** Açık zemin, yeni font, tek köşe yarıçapı, bölüm boşlukları küçülür, gradient ve blur temizlenir. Kullanılmayan CSS silinir.
6. **Gerçek içerik.** Müşteriden gelen saat, yıl, hizmet listesi, fotoğraf ve Instagram bağlantıları yerleştirilir. JSON-LD tamamlanır.
7. **Doğrulama.** Masaüstü ve telefon ekran görüntüleri, Lighthouse, smoke test.

İlk üç adım müşteri bilgisi gerektirmiyor ve hemen yapılabilir. Yalnızca bu üç adım bile siteyi "ajans maketi" görünümünden çıkarır.

---

## 9. Neyi korumalıyız

Sıfırdan başlamaya gerek yok. Şunlar doğru ve kalmalı:

- Belirti seçici ve formu otomatik dolduran akış.
- Form verisinin WhatsApp mesajına dönüşmesi.
- Mobil alt çubuk: Ara / WhatsApp / Yol Tarifi.
- Gerçek Google Maps gömmesi ve doğru adres.
- SSS içeriği.
- Footer'daki "yetkili servis değildir" açıklaması.
- JSON-LD `AutoRepair` yapısı.
- Semantik HTML, erişilebilirlik özellikleri (skip link, aria etiketleri, klavye desteği).
- Framework kullanılmaması.
