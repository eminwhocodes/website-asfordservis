// Arıza rehberi: ana sayfadaki altı belirtiyle birebir eşleşir.
// Genel teknik bilgi içerir; yayından önce usta tarafından okunmalıdır (docs/04, madde 6).

export const guides = [
  {
    slug: "motor-ariza-lambasi",
    title: "Motor arıza lambası neden yanar?",
    heroTitle: "Motor arıza<br /><em>lambası yanıyor</em>",
    menuTitle: "Arıza lambası yanıyor",
    area: "Motor ve elektronik sistem",
    icon: "engine",
    symptom: "Motor arıza lambası yanıyor",
    service: "ariza-tespiti",
    description: "Motor arıza lambası sabit yanıyorsa ya da yanıp sönüyorsa ne yapmalısınız? Olası nedenler ve aracı ne zaman kullanmamanız gerektiği.",
    summary: "Turuncu motor lambası aracın bir hata kaydettiğini gösterir. Sabit yanması ile yanıp sönmesi farklı anlamlara gelir.",
    urgency: {
      level: "Yanıp sönüyorsa acil",
      text: "Lamba yanıp sönüyorsa motorda ciddi tekleme olabilir ve bu durum katalitik konvertöre zarar verebilir. Aracı zorlamadan durdurun ve bizi arayın."
    },
    causes: [
      "Oksijen (lambda) sensörü veya diğer sensörlerde arıza",
      "Buji ya da ateşleme bobininde sorun ve buna bağlı tekleme",
      "Emme tarafında hava kaçağı",
      "Dizel araçlarda EGR valfi veya partikül filtresi (DPF) sorunları",
      "Yakıt deposu kapağının iyi kapanmaması"
    ],
    steps: [
      "Lambanın sabit mi yanıp sönüyor mu olduğuna bakın.",
      "Araçta tekleme, çekiş kaybı veya farklı bir ses var mı dikkat edin.",
      "Lamba sabit yanıyor ve başka belirti yoksa aracı zorlamadan servise getirin.",
      "Hata kodlarını cihazla okuyup kodun gösterdiği sistemi kontrol ediyoruz."
    ],
    stop: [
      "Motor lambası yanıp sönüyorsa",
      "Kırmızı yağ basıncı veya hararet uyarısı da yanıyorsa",
      "Araç belirgin şekilde tekliyor ya da sarsılıyorsa"
    ],
    faqs: [
      { q: "Lambayı sildirmek yeterli mi?", a: "Hayır. Sorun giderilmediyse lamba bir süre sonra tekrar yanar." },
      { q: "Lamba kendi kendine söndü, yine de baktırmalı mıyım?", a: "Evet. Hata kaydı kontrol ünitesinde kalır. Okuyup neyin tetiklediğine bakmak sorunun büyümesini önler." }
    ]
  },
  {
    slug: "aractan-ses-geliyor",
    title: "Araçtan gelen sesler ne anlama gelir?",
    heroTitle: "Araçtan farklı<br /><em>bir ses geliyor</em>",
    menuTitle: "Farklı bir ses geliyor",
    area: "Motor, fren veya yürüyen aksam",
    icon: "sound",
    symptom: "Araçtan ses geliyor",
    service: "motor-mekanik",
    description: "Frenden gıcırtı, virajda tıkırtı, hızla artan uğultu, tümseklerde vuruntu. Araçtan gelen seslerin olası nedenleri ve ne yapmanız gerektiği.",
    summary: "Sesin nereden ve ne zaman geldiği, sorunun kaynağını bulmak için en önemli ipucudur.",
    urgency: {
      level: "Frenden geliyorsa ertelemeyin",
      text: "Fren yaparken metal sürtünme sesi geliyorsa balata bitmiş ve disk zarar görüyor olabilir. Aracı fazla kullanmadan kontrol ettirin."
    },
    causes: [
      "Fren yaparken gıcırtı: balata aşınma uyarısı veya bitmiş balata",
      "Direksiyon tam kırılıyken virajda tıkırtı: aks kafası (homokinetik mafsal)",
      "Hız arttıkça artan uğultu: tekerlek rulmanı",
      "Tümseklerde tak tak sesi: amortisör, rotil, Z rot veya salıncak burcu",
      "Soğuk çalıştırmada motor önünden ötme: V kayışı veya gergi",
      "Motordan tıkırtı: düşük yağ seviyesi veya motor içi aşınma"
    ],
    steps: [
      "Sesin ne zaman geldiğini not edin: soğukta mı, frende mi, virajda mı, tümsekte mi?",
      "Mümkünse güvenli bir yerde kısa bir video çekin.",
      "Motor yağı seviyesini kontrol edin.",
      "Videoyu WhatsApp’tan gönderin ya da aracı getirin, birlikte dinleyelim."
    ],
    stop: [
      "Frenden metal sürtünme sesi geliyorsa",
      "Motordan yüksek vuruntu geliyor ve yağ lambası yanıyorsa",
      "Direksiyon veya tekerlekten sürüşü etkileyen bir boşluk hissediyorsanız"
    ],
    faqs: [
      { q: "Sesi telefonda tarif edebilir miyim?", a: "Evet, ama kısa bir video çok daha fazla bilgi verir. WhatsApp’tan gönderebilirsiniz." },
      { q: "Ses bazen geliyor bazen gelmiyor, yine de gelmeli miyim?", a: "Evet. Hangi koşulda geldiğini not edin; kontrol ederken aynı koşulu oluşturmaya çalışırız." }
    ]
  },
  {
    slug: "cekis-dusuklugu",
    title: "Araç çekişten düştüyse ne yapmalı?",
    heroTitle: "Araç<br /><em>çekişten düştü</em>",
    menuTitle: "Çekişten düştü",
    area: "Yakıt, turbo veya ateşleme",
    icon: "gauge",
    symptom: "Araç çekişten düştü",
    service: "ariza-tespiti",
    description: "Araç çekişten düştüyse, gaza tepki vermiyorsa ya da acil moda geçtiyse olası nedenler: turbo, sensör, filtre, DPF, EGR ve debriyaj.",
    summary: "Çekiş kaybı bazen yavaş yavaş, bazen bir anda olur. Bir anda olduysa araç çoğu zaman kendini korumak için acil moda geçmiştir.",
    urgency: {
      level: "Acil moddaysa zorlamayın",
      text: "Araç bir anda güçsüzleştiyse ve arıza lambası yandıysa acil moda geçmiş olabilir. Aracı zorlamadan, düşük devirde servise getirin ya da bizi arayın."
    },
    causes: [
      "Turbo basıncında düşüş veya turbo hortumunda kaçak",
      "Hava debimetresi (MAF) veya basınç sensörü arızası",
      "Tıkalı hava ya da yakıt filtresi",
      "Dizel araçlarda dolmuş partikül filtresi (DPF) veya EGR valfi",
      "Benzinli araçlarda buji veya ateşleme bobini",
      "Manuel şanzımanda kaçıran debriyaj: devir yükselir ama araç hızlanmaz"
    ],
    steps: [
      "Arıza lambası yanıyor mu bakın.",
      "Çekiş kaybı bir anda mı oldu, yavaş yavaş mı, not edin.",
      "Devir yükselip aracın hızlanmadığı bir durum varsa debriyajı düşünün.",
      "Hata kodlarını okuyup ilgili sistemi kontrol ediyoruz."
    ],
    stop: [
      "Egzozdan yoğun duman çıkıyorsa",
      "Motordan yeni ve yüksek bir ses geliyorsa",
      "Kırmızı bir uyarı lambası yanıyorsa"
    ],
    faqs: [
      { q: "Araç kapatıp açınca düzeliyor, sorun geçti mi?", a: "Genellikle geçmez. Acil mod her çalıştırmada sıfırlanabilir ama sorunun kaynağı durur. Hata kayıtlarına bakmak gerekir." },
      { q: "Yakıt kalitesi çekişi etkiler mi?", a: "Etkileyebilir, ama önce daha yaygın nedenlere bakmak gerekir. Hata kodları doğru yeri gösterir." }
    ]
  },
  {
    slug: "hararet",
    title: "Araç hararet yaparsa ne yapmalı?",
    heroTitle: "Hararet<br /><em>yükseliyor</em>",
    menuTitle: "Hararet yükseliyor",
    area: "Soğutma sistemi",
    icon: "coolant",
    symptom: "Araç hararet yapıyor",
    service: "motor-mekanik",
    description: "Hararet göstergesi yükseldiyse ya da kırmızı hararet lambası yandıysa hemen yapmanız gerekenler ve olası nedenler.",
    summary: "Hararet, motorun normal çalışma sıcaklığının üstüne çıkmasıdır. Adana’nın yaz sıcağında ve şehir trafiğinde daha sık görülür.",
    urgency: {
      level: "Acil",
      text: "Hararet göstergesi kırmızıya yaklaştıysa ya da kırmızı hararet uyarısı yandıysa güvenli bir yerde durun ve motoru kapatın. Hararetle sürmeye devam etmek motora kalıcı zarar verebilir."
    },
    causes: [
      "Antifriz eksikliği veya kaçak",
      "Termostatın kapalı kalması",
      "Radyatör fanının çalışmaması",
      "Su pompası arızası",
      "Radyatörün dıştan ya da içten tıkanması",
      "Silindir kapak contası sorunu"
    ],
    steps: [
      "Güvenli bir yerde durun ve motoru kapatın.",
      "Motor sıcakken radyatör ya da genleşme kabı kapağını açmayın; basınçlı sıcak su yakabilir.",
      "Motor soğuduktan sonra antifriz seviyesine bakın.",
      "Bizi arayın; aracı sürüp sürmemeniz gerektiğini birlikte konuşalım."
    ],
    stop: [
      "Kırmızı hararet uyarısı yanıyorsa",
      "Motor bölümünden buhar çıkıyorsa",
      "Antifriz sürekli eksiliyorsa"
    ],
    faqs: [
      { q: "Antifriz yerine su koyabilir miyim?", a: "Acil durumda servise ulaşmak için kısa süreli su eklenebilir. Sonrasında doğru oranda antifrizle tamamlanması gerekir." },
      { q: "Klima açıkken hararet yapıyor, neden?", a: "Klima motor ve radyatör üzerinde ek yük oluşturur. Fan veya radyatör tam çalışmıyorsa sorun ilk önce klima açıkken ortaya çıkar." }
    ]
  },
  {
    slug: "fren-sorunlari",
    title: "Fren sorunları: ses, titreme ve yumuşak pedal",
    heroTitle: "Fren hissi<br /><em>değişti</em>",
    menuTitle: "Fren hissi değişti",
    area: "Balata, disk veya hidrolik",
    icon: "brake",
    symptom: "Frenlerde sorun var",
    service: "fren-suspansiyon",
    description: "Frenden ses geliyorsa, pedal titriyor ya da yumuşadıysa, araç fren yaparken bir yana çekiyorsa olası nedenler ve ne yapmanız gerektiği.",
    summary: "Frenlerdeki değişiklik çoğu zaman yavaş gelir ve sürücü alışır. Pedalda veya seste bir farklılık hissettiyseniz ertelemeyin.",
    urgency: {
      level: "Pedal boşa gidiyorsa acil",
      text: "Fren pedalı normalden derine gidiyorsa, süngerimsi hissediliyorsa ya da kırmızı fren uyarısı yanıyorsa aracı kullanmayın ve bizi arayın."
    },
    causes: [
      "Gıcırtı: balata aşınma uyarısı veya bitmiş balata",
      "Pedalda titreme: diskte düzensiz aşınma",
      "Araç bir yana çekiyor: kaliperin takılması veya tek taraflı aşınma",
      "Yumuşak pedal: fren hidroliğinde hava veya kaçak",
      "Kırmızı fren uyarısı: düşük hidrolik seviyesi veya el freni",
      "ABS lambası: ABS sensörü veya ünitesinde sorun"
    ],
    steps: [
      "Pedal hissini ve sesin ne zaman geldiğini not edin.",
      "Gösterge panelinde fren veya ABS uyarısı var mı bakın.",
      "Pedal normal ve uyarı yoksa aracı dikkatli şekilde servise getirin.",
      "Balata, disk, kaliper ve hidroliği kontrol ediyoruz."
    ],
    stop: [
      "Fren pedalı boşa gidiyor ya da çok derine iniyorsa",
      "Kırmızı fren uyarısı yanıyorsa",
      "Fren yaparken metal sürtünme sesi geliyorsa"
    ],
    faqs: [
      { q: "ABS lambası yanıyorsa fren çalışır mı?", a: "Normal fren genellikle çalışır ama ABS devre dışı kalır. Kaygan zeminde tekerlekler kilitlenebilir; ertelemeden kontrol ettirin." },
      { q: "Yeni balata sonrası ses normal mi?", a: "İlk birkaç yüz kilometrede hafif ses olabilir. Ses sürüyorsa kontrol etmemiz gerekir." }
    ]
  },
  {
    slug: "bakim-zamani-geldi",
    title: "Bakım zamanı geldiğini nasıl anlarsınız?",
    heroTitle: "Bakım zamanı<br /><em>geldi</em>",
    menuTitle: "Bakım zamanı geldi",
    area: "Yağ, filtre ve genel kontrol",
    icon: "wrench",
    symptom: "Periyodik bakım zamanı geldi",
    service: "periyodik-bakim",
    description: "Ford araçlarda bakım zamanının geldiğini gösterge panelindeki uyarıdan, bakım kitapçığından ve kilometreden nasıl anlarsınız?",
    summary: "Bakım zamanı gösterge panelindeki uyarıyla, bakım kitapçığındaki kilometre ve süreyle belirlenir. Hangisi önce dolarsa bakım o zaman yapılır.",
    urgency: {
      level: "Planlı",
      text: "Bakım acil bir durum değildir, ama aralığı uzun süre geçirmek motor ve diğer parçaların ömrünü kısaltır. Uygun bir gün ayarlayalım."
    },
    causes: [
      "Gösterge panelinde anahtar simgesi veya bakım mesajı",
      "Bakım kitapçığında yazan kilometreye ulaşılması",
      "Kilometre dolmasa bile süre sınırının (genellikle yıllık) dolması",
      "Yağ seviyesinin iki bakım arasında belirgin düşmesi"
    ],
    steps: [
      "Aracın kilometresini ve son bakım tarihini not edin.",
      "Bakım kitapçığında sıradaki bakımda neler yapılacağına bakın.",
      "Model, motor ve kilometreyi söyleyin; gün ve saati birlikte ayarlayalım.",
      "Bakımdan sonra bakım uyarısını sıfırlıyoruz."
    ],
    stop: [
      "Kırmızı yağ basıncı uyarısı yanıyorsa aracı kullanmayın",
      "Yağ çubuğunda yağ görünmüyorsa aracı çalıştırmayın"
    ],
    faqs: [
      { q: "Kilometre dolmadı ama bir yıl geçti, bakım gerekir mi?", a: "Genellikle evet. Motor yağı kullanılmasa da zamanla özelliğini kaybeder. Bakım kitapçığındaki süre sınırına bakın." },
      { q: "Az kullanılan araçta bakım aralığı değişir mi?", a: "Kısa mesafe ve dur-kalk kullanım motor için ağır koşul sayılır. Bu durumda aralığın kısalması gerekebilir." }
    ]
  }
];

export const guideBySlug = Object.fromEntries(guides.map((guide) => [guide.slug, guide]));
