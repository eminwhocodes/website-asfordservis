// Yalnızca ana sayfada yer alan ve işletmenin verdiği hizmetler.
// Fiyat, süre, garanti ve parça markası bilgisi müşteri teyidi olmadan eklenmez.

export const services = [
  {
    slug: "periyodik-bakim",
    title: "Periyodik Bakım",
    menuTitle: "Periyodik Bakım",
    menuNote: "Yağ, filtre ve kontrol",
    formValue: "Periyodik bakım",
    icon: "oilcan",
    heroTitle: "Ford periyodik<br /><em>bakım</em>",
    lead: "Bakım kitapçığınızdaki kilometre veya süre dolduğunda motor yağı, filtreler ve temel kontrolleri yapıyoruz.",
    card: "Motor yağı ve yağ filtresi, hava, polen ve yakıt filtresi, sıvı seviyeleri ve genel kontrol.",
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Motor bölümü kontrol edilen otomobil",
    description: "Adana Seyhan'da Ford araçlar için periyodik bakım: motor yağı, filtreler, sıvı seviyeleri ve genel kontrol. Pazartesi–Cumartesi 08.00–18.00.",
    intro: [
      "Periyodik bakım, aracın bakım kitapçığında yazan kilometre ya da süre dolduğunda yapılan düzenli kontroldür. Ford araçlarda bakım aralığı modele, motora ve kullanım şekline göre değişir.",
      "Doğru aralığı aracınızın bakım kitapçığından veya gösterge panelindeki servis uyarısından görebilirsiniz. Emin değilseniz aracın modelini ve kilometresini söyleyin, birlikte bakalım."
    ],
    includes: [
      "Motor yağı ve yağ filtresi değişimi",
      "Hava filtresi ve polen (kabin) filtresi",
      "Dizel araçlarda aralığı gelmişse yakıt filtresi",
      "Fren hidroliği, antifriz ve cam suyu seviyeleri",
      "Balata, disk ve lastiklerin gözle kontrolü",
      "Akü, aydınlatma ve silecek kontrolü",
      "Bakım uyarısının sıfırlanması"
    ],
    when: [
      "Gösterge panelinde bakım uyarısı çıktığında",
      "Bakım kitapçığındaki kilometre ya da süre dolduğunda",
      "Uzun yola çıkmadan önce",
      "İkinci el aldığınız aracın bakım geçmişi belli değilse"
    ],
    note: "Motor yağında önemli olan, bakım kitapçığında yazan viskozite ve Ford onay kodudur. Bazı 1.0 EcoBoost motorlarda triger kayışı yağın içinde çalıştığı için doğru yağ bu motorlarda daha da önemlidir.",
    faqs: [
      { q: "Periyodik bakım ne kadar sürer?", a: "Aracın modeline ve bakımın kapsamına göre değişir. Aradığınızda aracınızı söyleyin, gün ve saati birlikte ayarlayalım." },
      { q: "Bakım uyarısı sıfırlanır mı?", a: "Evet. Bakım bittikten sonra gösterge panelindeki bakım uyarısını sıfırlıyoruz." },
      { q: "Bakım aralığımı nereden öğrenebilirim?", a: "Aracın bakım kitapçığında yazar. Kitapçık yoksa model, motor ve kilometre bilgisini söyleyin, birlikte bakalım." }
    ],
    guides: ["bakim-zamani-geldi", "motor-ariza-lambasi"],
    posts: ["periyodik-bakimda-neler-yapilir", "ford-araclarda-motor-yagi-secimi"]
  },
  {
    slug: "ariza-tespiti",
    title: "Arıza Tespiti",
    menuTitle: "Arıza Tespiti",
    menuNote: "Elektronik ve mekanik teşhis",
    formValue: "Arıza tespiti",
    icon: "engine",
    heroTitle: "Bilgisayarlı<br /><em>arıza tespiti</em>",
    lead: "Arıza lambası yandığında hata kodlarını cihazla okuyor, kodun gösterdiği sistemi kontrol ediyoruz.",
    card: "Uyarı lambaları yandığında hata kodlarının cihazla okunması ve ilgili sistemin kontrolü.",
    image: "https://images.pexels.com/photos/4482031/pexels-photo-4482031.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Serviste otomobil motorunu inceleyen usta",
    description: "Adana Seyhan'da Ford araçlar için bilgisayarlı arıza tespiti. Motor arıza lambası ve diğer uyarı lambaları için hata kodu okuma ve sistem kontrolü.",
    intro: [
      "Arıza lambası yandığında aracın kontrol ünitesi bir hata kaydeder. Bu kayıtlar arıza tespit cihazıyla okunur.",
      "Hata kodu tek başına hangi parçanın bozuk olduğunu söylemez; sorunun hangi sistemde olduğunu gösterir. Doğru teşhis için kodun gösterdiği sistemin ayrıca kontrol edilmesi gerekir."
    ],
    includes: [
      "Hata kodlarının okunması ve kaydedilmesi",
      "Sensör değerlerinin araç çalışırken izlenmesi",
      "Kodun gösterdiği parça, soket ve kabloların kontrolü",
      "Onarımdan sonra kodların silinmesi",
      "Arızanın gittiğini görmek için kontrol sürüşü"
    ],
    when: [
      "Motor arıza lambası sabit yanıyor ya da yanıp sönüyorsa",
      "ABS, airbag veya başka bir uyarı lambası yanıyorsa",
      "Araç çekişten düştüyse ya da acil moda geçtiyse",
      "Rölantide dalgalanma veya tekleme varsa"
    ],
    note: "Motor arıza lambası yanıp sönüyorsa motorda ciddi tekleme olabilir. Bu durumda aracı zorlamadan durdurun ve bizi arayın.",
    faqs: [
      { q: "Kodu sildirmek arızayı çözer mi?", a: "Hayır. Kod silinse de sorun giderilmediyse lamba bir süre sonra tekrar yanar. Önce sorunun kaynağını bulmak gerekir." },
      { q: "Arıza lambası yanarken araç kullanılır mı?", a: "Lamba sabit yanıyor ve araçta başka bir belirti yoksa servise kadar dikkatli gelebilirsiniz. Lamba yanıp sönüyorsa veya kırmızı bir uyarı varsa aracı kullanmayın, bizi arayın." },
      { q: "Hangi uyarı lambalarına bakıyorsunuz?", a: "Motor, ABS, airbag, akü, yağ basıncı ve hararet gibi uyarı lambalarında önce hata kodlarını okuyup ilgili sistemi kontrol ediyoruz." }
    ],
    guides: ["motor-ariza-lambasi", "cekis-dusuklugu"],
    posts: ["dizel-araclarda-dpf-neden-dolar"]
  },
  {
    slug: "motor-mekanik",
    title: "Motor ve Mekanik",
    menuTitle: "Motor & Mekanik",
    menuNote: "Kontrol, bakım ve onarım",
    formValue: "Motor ve mekanik",
    icon: "wrench",
    heroTitle: "Motor ve<br /><em>mekanik onarım</em>",
    lead: "Motordan gelen sesler, yağ ve su kaçakları, kayış değişimi, rölanti ve çekiş sorunlarına bakıyoruz.",
    card: "Motordan gelen sesler, yağ ve su kaçakları, kayış değişimi, rölanti ve çekiş sorunları.",
    image: "https://images.unsplash.com/photo-1569176330438-fa1ed1042542?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Otomobil motorunda bakım yapan servis çalışanı",
    description: "Adana Seyhan'da Ford motor ve mekanik onarım: motor sesleri, yağ ve su kaçakları, kayış değişimi, rölanti ve çekiş sorunları.",
    intro: [
      "Motor sorunları çoğu zaman küçük bir belirtiyle başlar: soğukta gelen bir ses, park yerinde bir yağ lekesi ya da yokuşta azalan çekiş.",
      "Belirtiyi erken fark edip kontrol ettirmek, sorun büyümeden çözülmesini kolaylaştırır. Önce aracı dinliyor ve kontrol ediyor, ne yapılması gerektiğini size anlatıyoruz."
    ],
    includes: [
      "Motordan gelen ses ve titreşimlerin kontrolü",
      "Yağ ve antifriz kaçaklarının tespiti ve onarımı",
      "Triger seti ve V kayışı değişimi",
      "Buji ve ateşleme bobini kontrolü ve değişimi",
      "Termostat, su pompası ve radyatör gibi soğutma sistemi parçaları",
      "Rölanti dalgalanması ve çekiş sorunlarının kontrolü"
    ],
    when: [
      "Motordan tıkırtı, vuruntu veya ötme sesi geliyorsa",
      "Aracın altında yağ ya da antifriz lekesi görüyorsanız",
      "Egzozdan mavi, beyaz veya siyah duman çıkıyorsa",
      "Motor yağı normalden hızlı eksiliyorsa",
      "Hararet göstergesi normalden yükseğe çıkıyorsa"
    ],
    note: "Triger kayışının değişim aralığı motora göre değişir ve bakım kitapçığında yazar. Kayışın kopması motora ciddi zarar verebildiği için aralığı geçirmemek önemlidir.",
    faqs: [
      { q: "Triger kayışı ne zaman değişir?", a: "Değişim aralığı motora göre farklıdır ve bakım kitapçığında kilometre ve süre olarak yazar. Aracınızın motorunu söyleyin, birlikte bakalım." },
      { q: "Motor yağı eksiltiyor, ne yapmalıyım?", a: "Önce yağ seviyesini kontrol edin ve eksikse tamamlayın. Yağ dışarı sızıyor mu yoksa motorda mı yanıyor, bunu kontrol etmemiz gerekir." },
      { q: "Motordan gelen sesi telefonda anlatabilir miyim?", a: "Evet. Sesin ne zaman geldiğini anlatın ya da kısa bir video çekip WhatsApp’tan gönderin. Kesin teşhis için aracı görmemiz gerekir." }
    ],
    guides: ["aractan-ses-geliyor", "hararet", "cekis-dusuklugu"],
    posts: ["yaz-sicaginda-hararete-karsi-kontroller"]
  },
  {
    slug: "fren-suspansiyon",
    title: "Fren ve Süspansiyon",
    menuTitle: "Fren & Süspansiyon",
    menuNote: "Balata, disk, amortisör",
    formValue: "Fren ve süspansiyon",
    icon: "brake",
    heroTitle: "Fren ve<br /><em>süspansiyon</em>",
    lead: "Balata ve disk değişimi, fren hidroliği, amortisör ve ön takım kontrolü yapıyoruz.",
    card: "Balata ve disk değişimi, fren hidroliği, amortisör ve ön takım kontrolü.",
    image: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Otomotiv servisinde bakım gören araç",
    description: "Adana Seyhan'da Ford fren ve süspansiyon: balata ve disk değişimi, fren hidroliği, amortisör ve ön takım kontrolü.",
    intro: [
      "Fren ve süspansiyon, aracın güvenle durmasını ve yolu tutmasını sağlar. Bu sistemlerdeki aşınma yavaş ilerlediği için sürücü çoğu zaman alışır ve fark etmez.",
      "Frenlerde ses, pedalda değişiklik ya da tümseklerde gelen bir tıkırtı fark ettiyseniz kontrol ettirmenin zamanı gelmiştir."
    ],
    includes: [
      "Ön ve arka balata kontrolü ve değişimi",
      "Fren diski kontrolü ve değişimi",
      "Fren hidroliği kontrolü ve değişimi",
      "Kaliper ve el freni kontrolü",
      "Amortisör ve helezon yay kontrolü",
      "Rotil, rot başı, salıncak burçları ve Z rot kontrolü"
    ],
    when: [
      "Fren yaparken gıcırtı ya da sürtünme sesi geliyorsa",
      "Fren pedalı titriyor, yumuşadı ya da derine gidiyorsa",
      "Araç fren yaparken bir tarafa çekiyorsa",
      "Tümseklerde tıkırtı veya vuruntu sesi geliyorsa",
      "Direksiyonda titreme varsa"
    ],
    note: "Fren pedalı boşa gidiyorsa ya da gösterge panelinde kırmızı fren uyarısı yanıyorsa aracı kullanmayın. Bizi arayın, ne yapacağınızı birlikte konuşalım.",
    faqs: [
      { q: "Balata ne zaman değişir?", a: "Kullanıma göre değişir; sabit bir kilometre yoktur. Periyodik bakımda balata kalınlığına bakıyoruz. Fren yaparken gıcırtı geliyorsa balata sonuna gelmiş olabilir." },
      { q: "Balatayla birlikte disk de değişmeli mi?", a: "Her zaman değil. Diskin kalınlığı ve yüzeyi ölçülür; sınırın altındaysa ya da yüzeyi bozulduysa değişir." },
      { q: "Fren hidroliği neden değişir?", a: "Fren hidroliği zamanla nem çeker ve etkisi azalır. Değişim aralığı bakım kitapçığında yazar." }
    ],
    guides: ["fren-sorunlari", "aractan-ses-geliyor"],
    posts: ["fren-balatasi-ne-zaman-degisir"]
  },
  {
    slug: "sanziman",
    title: "Şanzıman",
    menuTitle: "Şanzıman",
    menuNote: "Manuel ve otomatik",
    formValue: "Şanzıman",
    icon: "gearbox",
    heroTitle: "Manuel ve otomatik<br /><em>şanzıman</em>",
    lead: "Vites geçiş sorunlarına, debriyaja ve şanzıman yağına bakıyoruz.",
    card: "Manuel ve otomatik şanzımanda vites geçiş sorunları, debriyaj ve şanzıman yağı.",
    image: "https://images.unsplash.com/photo-1599256872237-5dcc0fbe9668?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Servis ortamında araç parçasını kontrol eden teknisyen",
    description: "Adana Seyhan'da Ford manuel ve otomatik şanzıman: vites geçiş sorunları, debriyaj değişimi ve şanzıman yağı.",
    intro: [
      "Şanzıman sorunları genellikle vites geçişinde zorlanma, kalkışta titreme ya da devrin yükselip aracın hızlanmaması şeklinde kendini gösterir.",
      "Manuel şanzımanlı araçlarda sorunun kaynağı çoğu zaman debriyajdır. Otomatik ve çift kavramalı şanzımanlarda ise önce belirtiyi ve arıza kayıtlarını birlikte değerlendiriyoruz."
    ],
    includes: [
      "Debriyaj seti (baskı, disk, rulman) kontrolü ve değişimi",
      "Debriyaj merkezi ve hidrolik kontrolü",
      "Vites geçiş sorunlarının kontrolü",
      "Şanzıman yağı kontrolü ve değişimi",
      "Otomatik şanzımanda arıza kayıtlarının okunması",
      "Şanzıman yağ kaçaklarının tespiti"
    ],
    when: [
      "Vites zor giriyor ya da hiç girmiyorsa",
      "Gaza basınca devir yükseliyor ama araç hızlanmıyorsa",
      "Kalkışta titreme veya sarsıntı varsa",
      "Şanzımandan uğultu ya da vuruntu geliyorsa",
      "Debriyaj pedalı sertleştiyse ya da çok yukarıdan tutuyorsa"
    ],
    note: "2011–2018 arası bazı Focus ve Fiesta’larda kullanılan PowerShift çift kavramalı şanzımanda kalkışta titreme sık rastlanan bir şikâyettir. Bu belirtiyi fark ederseniz ertelemeden kontrol ettirin.",
    faqs: [
      { q: "Debriyajın bittiğini nasıl anlarım?", a: "Gaza basınca devir yükseliyor ama araç aynı oranda hızlanmıyorsa, özellikle yokuşta ve yüksek viteste, debriyaj kaçırıyor olabilir." },
      { q: "Şanzıman yağı değişir mi?", a: "Bazı şanzımanlarda değişim aralığı vardır, bazılarında yoktur. Aracınızın şanzıman tipine göre bakım kitapçığından birlikte bakalım." },
      { q: "Otomatik şanzımanlı araçlara bakıyor musunuz?", a: "Evet. Önce belirtiyi dinliyor ve arıza kayıtlarını okuyoruz, ardından ne yapılması gerektiğini anlatıyoruz." }
    ],
    guides: ["cekis-dusuklugu", "aractan-ses-geliyor"],
    posts: ["uzun-yol-oncesi-arac-kontrolu"]
  }
];

export const serviceBySlug = Object.fromEntries(services.map((service) => [service.slug, service]));
