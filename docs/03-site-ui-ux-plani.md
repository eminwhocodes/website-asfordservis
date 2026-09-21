# Site, UI ve UX planı

## 1. Tasarım hedefi

Site “hazır otomotiv teması” veya yapay zekâ ile üretilmiş kurumsal maket gibi görünmemeli. A&S'nin gerçek karakterini taşımalı:

- Gerçek atölye, usta, ekipman ve araç fotoğrafları
- Net, teknik ama anlaşılır dil
- Koyu, sinematik ve yüksek kontrastlı otomotiv atmosferi
- Hızlı, mobil öncelikli kullanım
- Abartılı animasyon ve yapay metal/karbon dokular yerine temiz yüzeyler
- Ford yetkili servis kimliğini taklit etmeyen özgün A&S markası

Uygulamada seçilen görsel yön:

- Ana zemin: koyu grafit / antrasit; içerik ritmi için kırık beyaz bölümler
- Metin: koyu zeminde kırık beyaz, açık zeminde antrasit
- Birincil vurgu: kontrollü performans kırmızısı
- İkincil vurgu: metalik gri ve teknik arayüz tonları
- Geniş boşluk, ince ayırıcılar, keskin yüzeyler ve kontrollü ışık efektleri
- Sans-serif, Türkçe karakterleri güçlü ve hızlı yüklenen font

İlk prototipte doğrulanmış fotoğraf paketi bulunmadığı için sahte stok/AI servis fotoğrafı kullanılmaz; araç ve atölye hissi özgün CSS/SVG teknik illüstrasyonlarla kurulur. Gerçek çekimler teslim edildiğinde bu alanlar gerçek kanıt görselleriyle değiştirilir.

## 2. Hedef kullanıcılar

| Kullanıcı | Temel ihtiyacı | Site cevabı |
|---|---|---|
| Arızası yeni çıkan sürücü | “Şimdi ne yapmalıyım, araç kullanılabilir mi?” | Belirti rehberi + hemen ara/WhatsApp |
| Periyodik bakım müşterisi | “Ne yapılır, ne kadar sürer, nasıl randevu alırım?” | Bakım kapsamı + kısa randevu |
| Transit/Courier esnafı | “Araç ne kadar serviste kalır?” | Ticari araç akışı + hızlı planlama |
| Garantisi bitmiş Ford sahibi | “Yetkili servise alternatif güvenilir mi?” | Şeffaf süreç + gerçek kanıt + parça seçenekleri |
| Filo sorumlusu | “Birden fazla aracın bakımını nasıl planlarım?” | Filo iletişim formu + bakım takvimi |
| Fiyat araştıran kullanıcı | “Sürpriz masraf çıkar mı?” | Teşhis/onay politikası + maliyeti etkileyenler |

## 3. Ana gezinme

Masaüstü üst menü:

1. Ana Sayfa
2. Hizmetler
3. Ford Modelleri
4. Arıza Rehberi
5. Servisten Hikâyeler
6. Hakkımızda
7. İletişim
8. Sağda tek ana CTA: `Randevu / Ön Bilgi Al`

Mobil:

- Sade logo + menü + tek telefon ikonu
- Açılır menüde aynı sıra
- Ekranın altında üç eylem: `Ara`, `WhatsApp`, `Yol Tarifi`
- Aynı eylemleri üstte ve altta gereksiz yere tekrar eden kalabalık çubuklar kullanılmaz.

## 4. Ana sayfa akışı

### 4.1 Hero

**H1:** `Adana'da Ford'unuzu İşinin Ehline Bırakın`

Alt metin örneği:

`Ford binek ve hafif ticari araçlar için bakım, arıza tespiti ve onarım. Sorunu dinliyor, işlemi açıklıyor, onayınız olmadan ek işlem yapmıyoruz.`

CTA'lar:

- Birincil: `WhatsApp'tan Sorunu Gönder`
- İkincil: `Randevu Al`
- Metin bağlantısı: `Hemen Ara`

Görsel: gerçek serviste A&S ustasının bir Ford üzerinde çalıştığı, temiz ve profesyonel çekim. Stok/AI araç görseli kullanılmaz.

Hero altında kanıt şeridi; yalnızca doğrulanmış maddeler:

- `Ford Odaklı Servis`
- `Şeffaf İşlem Onayı`
- `Binek ve Hafif Ticari`
- `Adana / [İlçe]`

### 4.2 “Aracınızda ne sorun var?” hızlı seçim

6–8 büyük seçenek:

- Bakım zamanı geldi
- Motor arıza ışığı yanıyor
- Çekiş düştü
- Ses/titreşim var
- Hararet yapıyor
- Klima soğutmuyor
- Fren sorunu var
- Diğer / WhatsApp'tan anlat

Her seçenek ilgili rehbere veya kısa ön görüşme formuna gider.

### 4.3 Hizmetler

Öncelikli 6 hizmet kartı ve `Tüm hizmetler` bağlantısı. Kartın tamamı tıklanabilir, hover/focus durumu belirgin, başlık ve CTA aynı hedefe gider.

### 4.4 Ford model seçimi

Arama/seçim alanı: Focus, Fiesta, Transit, Courier, Connect, Kuga, Ranger vb. Kullanıcı model sayfasına gider. Model fotoğraflarında kullanım hakkı ve marka kuralları kontrol edilir.

### 4.5 Şeffaf servis süreci

1. Sorunu anlatın / randevu oluşturun
2. Araç kabul ve teşhis
3. İşlem ve fiyat seçeneklerini açıklama
4. Onay sonrası bakım/onarım
5. Kontrol, teslim ve yapılanların özeti

### 4.6 Gerçek servis kanıtı

- 3–4 gerçek vaka
- Araç/model/yıl; plaka bulanık
- Şikâyet, teşhis, işlem, sonuç
- Tarih ve usta notu
- “Maliyet” yalnız müşteri onayı ve güncellik yönetimiyle; eski fiyatlar yanlış yönlendirmesin

### 4.7 Usta/ekip

Gerçek portre, isim, görev, Ford tecrübesi ve doğrulanmış eğitim/sertifika. “Uzman ekip” demekle yetinilmez.

### 4.8 Yorumlar

- Google kaynağına bağlantı
- Yorum sahibinin yayın izni ve platform kuralları
- Tarih
- Kesilmemiş anlam
- Sahte slider veya hayalî kişi yok

### 4.9 Konum ve kapanış CTA

- Açık adres, çalışma saatleri, telefon, WhatsApp
- Harita önizlemesi yerine hafif statik alan; kullanıcı tıklayınca harita yüklenebilir
- `Yol Tarifi Al`, `Ara`, `Randevu Al`

## 5. Hizmet sayfası UX şablonu

1. Breadcrumb
2. H1 + 2 cümle net açıklama
3. Gerçek işlem fotoğrafı
4. “Bu hizmete ne zaman ihtiyaç duyulur?” belirtiler
5. A&S'de kontrol/işlem adımları
6. Hangi Ford modellerinde uygulanır?
7. Ne kadar sürer? Kesin söz yerine süreyi etkileyen faktörler
8. Parça ve onay yaklaşımı
9. İlgili gerçek vaka
10. Sık sorular
11. İlgili model/rehber bağlantıları
12. Kısa CTA

Mobilde CTA, içeriği kapatmayacak yükseklikte ve erişilebilir olmalı.

## 6. Model sayfası UX şablonu

Model sayfası bir broşür değil servis rehberi olmalı:

- `Adana Ford Focus Servisi` gibi açık H1
- A&S'nin o modelde gerçek hizmet kapsamı
- Kasa/motor ayrımları (yalnız teknik doğruluk sağlanırsa)
- Sık yapılan bakım işlemleri
- Sürücülerin sık karşılaştığı belirtiler
- Model için ilgili hizmetler
- Gerçek servis vakaları
- Sık sorular
- Randevu/WhatsApp

## 7. Randevu ve iletişim akışı

### İlk adım formu

Maksimum 4 zorunlu alan:

- Ad soyad
- Telefon
- Ford model / model yılı (tek alan veya seçim)
- Talep / kısa sorun açıklaması

İsteğe bağlı:

- Plaka
- Kilometre
- Tercih edilen gün
- Fotoğraf/video için WhatsApp'a geçiş

Form sonrası:

- Net başarı ekranı
- Beklenen dönüş süresi (operasyon gerçekten karşılayabiliyorsa)
- Acil durumda ara düğmesi
- Takvim randevusu onaylanmadan “randevunuz kesinleşti” denmemeli; “talebiniz alındı” denmeli.

### WhatsApp ön dolgu

Örnek:

`Merhaba A&S Ford Servis. Aracım: [model/yıl]. Şikâyetim: [...]. Kilometre: [...]. Uygun olduğum zaman: [...].`

Kullanıcıdan hassas kişisel veri veya ruhsat fotoğrafı gereksiz yere istenmez.

## 8. Kullanıcı deneyimi ilkeleri

- Telefon ve WhatsApp tıklanabilir; numara metin olarak da görünür.
- Çalışma saatleri kullanıcının yerel saatine göre açıkça yazılır.
- “Şu an açık” gösterilecekse resmi tatil ve özel saat verisi yönetilebilir olmalı.
- Kullanıcıyı aramak zorunda bırakmadan temel hizmet kapsamı açıklanır.
- Fiyat verilemiyorsa neden verilemediği ve teklif süreci anlatılır.
- Form hataları alan yanında, anlaşılır Türkçe ile gösterilir.
- Başarı/başarısızlık durumu yalnız renkle anlatılmaz.
- Butonlar en az 44×44 px dokunma alanına sahip olur.
- Menü, modal ve accordion klavyeyle çalışır; focus görünür.
- Otomatik kayan slider, sesli video ve tam ekran pop-up kullanılmaz.
- Çerez paneli içeriği engelleyen karanlık desen değil; gerçek tercih seçenekleri sunar.

## 9. Fotoğraf/video prodüksiyon listesi

### Zorunlu çekimler

- Dış cephe ve tabela: yatay + dikey
- Usta portreleri: iş başında ve nötr
- Araç kabul anı
- Diagnostik cihaz ve ölçüm
- Lift üzerinde araç
- Yağ/filtre bakımı
- Fren ve ön takım kontrolü
- Motor/turbo/enjektör işlemleri
- Parça karşılaştırması: eski/yeni
- Temiz teslim görüntüsü
- Bekleme alanı ve park: varsa

### Çekim kuralları

- Plaka, ruhsat, telefon ve müşteri yüzleri izin yoksa görünmez/bulanık.
- Atölye gerçekte olduğundan daha büyük veya daha kurumsal gösterilmez.
- Teknik işlem sahneleniyorsa güvenlik ekipmanı doğru kullanılır.
- AI görseller yalnız dekoratif kampanya alanında, açıkça uygun olduğunda; uzmanlık kanıtı olarak kullanılmaz.
- Web için 4:3, 16:9 ve 1:1 varyasyonlar; AVIF/WebP çıktılar.

## 10. Tasarım sistemi

Temel bileşenler:

- Header ve mobil menü
- CTA butonları ve link stilleri
- Hizmet/model/vaka kartları
- Güven/kanıt satırı
- Usta profil kartı
- Yorum kartı
- Belirti–neden–aciliyet tablosu
- Accordion/SSS
- Kısa form
- Alert ve form durumları
- Breadcrumb
- Footer + NAP
- Mobil sabit eylem çubuğu

Her bileşenin normal, hover, focus, active, disabled, loading ve error durumu tasarlanmalı.

## 11. Marka riski ve dil

Kullanılacak:

- `Ford araçlara özel servis hizmeti`
- `Ford binek ve hafif ticari araçlarda bakım ve onarım`
- `A&S Ford Servis`

Yetki yoksa kullanılmayacak:

- `Ford Yetkili Servis`
- `Ford onaylı servis`
- `Ford garantili servis` (garantinin kapsamı ve sağlayıcısı açıklanmadan)
- Ford'un kurumsal tabela/servis tasarımını taklit eden logo ve düzen

Gerekirse footer'da hukuki inceleme sonrası şu tür bağımsızlık açıklaması kullanılır:

`A&S Ford Servis bağımsız özel servis işletmesidir. Ford Motor Company veya Ford Otosan'ın yetkili servisi değildir.`

Bu metin hukuk danışmanı ve gerçek ticari statüyle doğrulanmalıdır.
