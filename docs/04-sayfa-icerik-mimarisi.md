# Sayfa ve içerik mimarisi

## 1. URL ağacı

```text
/
├── hakkimizda
├── hizmetler
│   ├── periyodik-bakim
│   ├── agir-bakim
│   ├── ford-ariza-tespit
│   ├── motor-bakim-onarim
│   ├── turbo-servisi
│   ├── enjektor-yakit-sistemi
│   ├── sanziman-debriyaj
│   ├── fren-bakimi
│   ├── on-takim-suspansiyon
│   ├── oto-elektrik-elektronik
│   ├── klima-bakimi
│   └── partikül-filtresi-dpf
├── ford-modelleri
│   ├── focus-servis
│   ├── fiesta-servis
│   ├── transit-servis
│   ├── transit-custom-servis
│   ├── courier-servis
│   ├── connect-servis
│   ├── kuga-servis
│   ├── ranger-servis
│   ├── mondeo-servis
│   └── c-max-servis
├── ticari-arac-servisi
├── filo-bakim
├── ariza-rehberi
│   └── [konu]
├── servisten-hikayeler
│   └── [vaka]
├── kampanyalar
│   └── [kampanya]
├── randevu
├── iletisim
├── gizlilik
├── kvkk-aydinlatma
└── cerez-tercihleri
```

Bu ağaç nihai hizmet listesi değildir. Gerçekte verilmeyen hizmet ve kabul edilmeyen model sayfası açılmayacak.

## 2. Yayın fazları

### Faz A — Lansman sayfaları

| Öncelik | Sayfa | Amaç | İçerik sahibi |
|---:|---|---|---|
| P0 | Ana sayfa | Ana yerel ticari sorgu + dönüşüm | Editör + usta |
| P0 | Hakkımızda | Güven, ekip, geçmiş, uzmanlık | İşletme sahibi |
| P0 | Hizmetler | Hizmet merkezi ve iç bağlantı | Editör |
| P0 | Ford modelleri | Model merkezi | Editör + usta |
| P0 | Randevu | Talep toplama | Operasyon + hukuk |
| P0 | İletişim | NAP, saat, yol tarifi | İşletme sahibi |
| P0 | Periyodik bakım | En yaygın ticari niyet | Usta |
| P0 | Arıza tespit | Yüksek niyet | Usta |
| P0 | Motor bakım/onarım | Yüksek değer | Usta |
| P0 | Fren bakımı | Güvenlik niyeti | Usta |
| P0 | Oto elektrik/elektronik | Belirti niyeti | Usta |
| P0 | Transit servis | Ticari araç | Usta |
| P0 | Courier servis | Ticari araç | Usta |
| P0 | Focus servis | Yüksek hacimli binek | Usta |
| P0 | Fiesta servis | Yüksek hacimli binek | Usta |
| P0 | Kuga veya Connect | Gerçek kabul verisine göre | Usta |
| P0 | 3 arıza rehberi | Uzmanlık ve uzun kuyruk | Usta + editör |
| P0 | Hukuki sayfalar | Uyum | Hukuk/işletme |

### Faz B — İlk 60 gün

- Ağır bakım, turbo, enjektör, şanzıman/debriyaj, ön takım, klima, DPF hizmet sayfaları
- Transit Custom, Connect, Ranger, Mondeo, C-Max model sayfaları
- En az 6 yeni arıza rehberi
- En az 4 gerçek servis vakası
- Filo bakım sayfası ve ayrı talep akışı

### Faz C — Veriye dayalı büyüme

- Search Console sorgularından yeni rehber konuları
- Gerçek araç kabul sayısından yeni model sayfaları
- Dönemsel yaz/kış/uzun yol kontrol içerikleri
- İzinli, ayrıntılı müşteri vakaları
- Yalnız gerçekten hizmet verilen çevre bölgelere faydalı lokasyon içeriği

## 3. Ana sayfa içerik briefi

**Birincil amaç:** Kullanıcı 10 saniye içinde A&S'nin kim olduğunu, hangi araçlara baktığını, nerede olduğunu ve nasıl ulaşacağını anlamalı.

**Zorunlu bilgiler:**

- A&S'nin tam ticari/marka adı
- “Özel servis” statüsü
- Ford binek/hafif ticari kapsamı
- Gerçek lokasyon/ilçe
- Telefon, WhatsApp, çalışma saatleri
- İlk temas ve servis süreci
- En önemli hizmetler/modeller
- Gerçek usta/atölye kanıtı

**Kaçınılacaklar:**

- “Türkiye'nin en iyi servisi”, “%100 müşteri memnuniyeti” gibi kanıtsız üstünlük
- Anahtar kelime listesi gibi okunmayan paragraflar
- 4–5 kayan hero slider
- Yetkili servis çağrışımı
- Stok/AI usta fotoğrafı

## 4. Hizmet sayfası içerik alanları

YAML/JSON/MDX gibi yapılandırılmış içerikte tutulabilecek alanlar:

```yaml
title: Ford Periyodik Bakım
slug: periyodik-bakim
summary: Kısa ve doğrudan cevap
symptoms:
  - Bakım uyarısı
  - Kilometre veya süre dolması
process:
  - Araç kabul
  - Kontroller
  - Teklif ve onay
  - İşlem
  - Son kontrol
appliesToModels:
  - Focus
  - Transit
relatedServices:
  - ford-ariza-tespit
relatedGuides:
  - ford-bakim-zamani
expertReviewer: Gerçek usta adı
reviewedAt: YYYY-MM-DD
```

Teknik bilgiler müşterinin ustası tarafından onaylanmadan prod'a alınmaz.

## 5. Model sayfası içerik alanları

- Model ve gerçek kabul kapsamı
- Desteklenen kasa/motor/yıl aralıkları
- Bakım periyodu anlatımı; resmi kılavuzdan doğrulama
- Sık gelen şikâyetler (kesin kronik arıza iddiası değil)
- Olası nedenler ve teşhis yöntemi
- İlgili hizmetler
- Gerçek vaka
- Usta yorumu
- İletişim CTA'sı

Her model sayfasında en az bir özgün fotoğraf/vaka hedeflenir. Yeterli özgünlük yoksa sayfa taslakta kalır.

## 6. Arıza rehberi editoryal standardı

### Örnek içerik kartı

**Başlık:** Ford Transit Çekişten Düşüyor: Olası Nedenler ve İlk Kontroller

**Arama niyeti:** Sorunu anlamak + servis bulmak

**Doğrudan yanıt:** Turbo/hava hattı, yakıt/enjektör, sensörler, DPF ve koruma modu gibi olasılıklar; kesin tanı için arıza kodu + fiziksel ölçüm gerekir.

**Gerekli usta girdileri:**

- Hangi model/motorlarda daha sık geliyor?
- Müşteri hangi sesi/ışığı/koşulu tarif ediyor?
- Hangi kod tek başına parça değiştirmek için yeterli değildir?
- Hangi kontroller hangi sırayla yapılır?
- Hangi durumda araç kullanılmamalı?
- Bir gerçek vaka ve izinli fotoğraf.

**CTA:** `Aracın model/yıl, kilometre ve belirti videosunu WhatsApp'tan gönder.`

## 7. İlk 24 arıza rehberi konusu

### Motor ve performans

1. Ford motor arıza lambası neden yanar?
2. Ford araç çekişten neden düşer?
3. Ford Transit yokuşta güçten düşüyor
4. Ford araç tekleme ve titreme nedenleri
5. Ford dizel siyah duman neden atar?
6. Ford dizel beyaz duman neden atar?
7. Ford hararet yapıyor: güvenli ilk adımlar
8. Ford araçta yağ eksiltme belirtileri

### Turbo, yakıt, emisyon

9. Ford turbo arızası belirtileri
10. Ford enjektör arızası nasıl anlaşılır?
11. Ford DPF dolu uyarısı ne demek?
12. DPF rejenerasyonu ne zaman yeterli olmaz?
13. Ford EGR arızası belirtileri
14. AdBlue uyarısı neden yanar? (bakılan modellerde)

### Şanzıman, debriyaj, yürüyen

15. Ford debriyaj/baskı balata bitme belirtileri
16. Vites geçişinde vuruntu neden olur?
17. Ford araçta ön takımdan ses geliyor
18. Direksiyon titremesi neden olur?
19. Fren yapınca titreme veya ses
20. ABS uyarısı yanarsa ne yapılmalı?

### Elektrik, marş, klima

21. Ford araç geç çalışıyor: akü mü marş mı?
22. Ford şarj lambası neden yanar?
23. Klima soğutmuyor: gaz eksikliği her zaman neden değildir
24. Fan sürekli çalışıyor veya devreye girmiyor

Konuların sırası Search Console'dan önce, A&S'nin son 3–6 aylık iş emirleri ve telefon sorularıyla belirlenmeli.

## 8. Servisten hikâyeler / vaka şablonu

Başlık örneği:

`2018 Ford Transit Çekiş Kaybı: Kaçak Hava Hattının Teşhisi`

Alanlar:

- Araç: model, yıl, motor; plaka/şasi yok
- Müşteri şikâyeti
- İlk gözlem
- Teşhis ve ölçüm
- Onaylanan işlem
- Değişen/onarılmış parçalar
- Son kontrol
- Teslim sonrası durum (takip yapıldıysa)
- Gerçek görseller
- Usta notu
- KVKK/izin kaydı

Vaka içeriği kesin sonuç garantisi vermez; benzer belirti farklı nedenden çıkabilir uyarısı eklenir.

## 9. İç bağlantı modeli

Her hizmet sayfası:

- 2–4 ilgili model sayfasına
- 2–4 ilgili rehbere
- En az 1 gerçek vakaya
- Randevu/iletişime bağlanır.

Her model sayfası:

- İlgili hizmetlere
- Modelin arıza rehberlerine
- Model vakalarına bağlanır.

Her rehber:

- İlgili hizmete
- Model sayfasına
- Gerekirse güvenilir resmi kaynağa bağlanır.

Ana sayfa her şeyi listelemez; merkez sayfalara bağlanır. Footer ana hizmet/model listesini şişiren anahtar kelime deposu olarak kullanılmaz.

## 10. Kampanya içeriği

Kampanya sayfalarında:

- Başlangıç/bitiş tarihi
- Kapsanan model/hizmet
- Parça/işçilik kapsamı
- Hariç tutulanlar
- Stok/randevu koşulu
- Fiyatın KDV dahil/haric durumu
- İletişim ve rezervasyon
- Süre bitince `Event` benzeri yanlış şema bırakmama; sayfayı güncelleme/redirect kararı

“Fiyat sorunuz” tek başına kampanya sayfası değildir.

## 11. Editoryal iş akışı

1. Konu gerçek müşteri sorusu/arama verisinden seçilir.
2. Editör soru listesini hazırlar.
3. Usta ses kaydı veya kısa görüşmeyle teknik girdiyi verir.
4. Editör doğal Türkçe taslak oluşturur.
5. Usta teknik kontrol yapar.
6. Gerçek fotoğraf ve gizlilik kontrolü tamamlanır.
7. SEO/meta/iç bağlantı eklenir.
8. Yayınlanır ve Search Console'da izlenir.
9. 90 günde performans ve güncellik kontrolü.

Bu akış içeriğin “AI kokmasını” önler; AI yalnız düzenleme/araştırma yardımcısı olabilir, teknik deneyimin yerine geçmez.
