// Ana sayfadaki model listesiyle aynı yedi model.
// Teknik notlar genel bilgi niteliğindedir; A&S'ye özel iş istatistiği içermez.

export const models = [
  {
    slug: "focus",
    name: "Ford Focus",
    short: "Focus",
    type: "Binek",
    icon: "car",
    lead: "Benzinli ve dizel Focus’larda periyodik bakım, arıza tespiti, motor, şanzıman ve fren işleri.",
    description: "Adana Seyhan'da Ford Focus servisi: periyodik bakım, arıza tespiti, motor, şanzıman, fren ve süspansiyon. A&S Auto Premium Car Service.",
    intro: [
      "Focus, uzun yıllardır üretilen ve farklı nesillerinde farklı motor ve şanzıman seçenekleri bulunan bir modeldir. Bu yüzden bakım ve onarımda önce aracın model yılını ve motorunu öğreniyoruz.",
      "Benzinli tarafta 1.0 EcoBoost, 1.5 EcoBoost ve 1.6 Ti-VCT; dizel tarafta 1.5 ve 1.6 TDCi ile EcoBlue motorlar yaygındır."
    ],
    notes: [
      "Bazı 1.0 EcoBoost motorlarda triger kayışı motor yağının içinde çalışır. Bu motorlarda doğru yağ ve bakım aralığı daha da önemlidir.",
      "2011–2018 arası bazı Focus’larda kullanılan PowerShift çift kavramalı şanzımanda kalkışta titreme sık rastlanan bir şikâyettir.",
      "Dizel Focus’larda şehir içi kısa mesafe kullanımda partikül filtresi (DPF) dolabilir."
    ],
    services: ["periyodik-bakim", "ariza-tespiti", "motor-mekanik", "sanziman", "fren-suspansiyon"],
    guides: ["motor-ariza-lambasi", "cekis-dusuklugu"]
  },
  {
    slug: "fiesta",
    name: "Ford Fiesta",
    short: "Fiesta",
    type: "Binek",
    icon: "car",
    lead: "Fiesta’larda periyodik bakım, arıza tespiti, motor, debriyaj ve fren işleri.",
    description: "Adana Seyhan'da Ford Fiesta servisi: periyodik bakım, arıza tespiti, motor, şanzıman, fren ve süspansiyon. A&S Auto Premium Car Service.",
    intro: [
      "Fiesta, şehir içinde yoğun kullanılan bir modeldir. Dur-kalk trafiği fren, debriyaj ve motor yağı üzerinde daha fazla yük oluşturur.",
      "Fiesta’da 1.0 EcoBoost, 1.25 ve 1.4 benzinli motorlar ile 1.4 ve 1.5 TDCi dizel motorlar yaygındır. Motor seçenekleri model yılına göre değişir."
    ],
    notes: [
      "1.0 EcoBoost motorlu Fiesta’larda doğru motor yağı ve bakım aralığına dikkat etmek gerekir.",
      "Bazı yıllarda kullanılan PowerShift çift kavramalı şanzımanda kalkışta titreme görülebilir.",
      "Şehir içi kullanımda balata ve debriyaj aşınması daha hızlı olabilir."
    ],
    services: ["periyodik-bakim", "ariza-tespiti", "fren-suspansiyon", "sanziman", "motor-mekanik"],
    guides: ["bakim-zamani-geldi", "fren-sorunlari"]
  },
  {
    slug: "puma",
    name: "Ford Puma",
    short: "Puma",
    type: "SUV",
    icon: "car",
    lead: "Puma’larda periyodik bakım, arıza tespiti, fren ve süspansiyon işleri.",
    description: "Adana Seyhan'da Ford Puma servisi: periyodik bakım, arıza tespiti, fren ve süspansiyon. A&S Auto Premium Car Service.",
    intro: [
      "Puma, 2019 sonrası üretilen kompakt bir SUV’dur. Yaygın versiyonlarda 1.0 EcoBoost motor ve 48 voltluk hafif hibrit sistem bulunur.",
      "Hafif hibrit sistem aracı tek başına elektrikle yürütmez; motoru destekler ve dur-kalk sisteminin daha yumuşak çalışmasını sağlar."
    ],
    notes: [
      "Hafif hibrit versiyonlarda 12 voltluk akünün yanında 48 voltluk ayrı bir akü bulunur. Akü ve şarj uyarılarında önce arıza kayıtlarına bakmak gerekir.",
      "Bazı versiyonlarda 7 ileri çift kavramalı otomatik şanzıman kullanılır.",
      "1.0 EcoBoost motorda doğru motor yağı ve bakım aralığı önemlidir."
    ],
    services: ["periyodik-bakim", "ariza-tespiti", "fren-suspansiyon", "motor-mekanik", "sanziman"],
    guides: ["motor-ariza-lambasi", "bakim-zamani-geldi"]
  },
  {
    slug: "kuga",
    name: "Ford Kuga",
    short: "Kuga",
    type: "SUV",
    icon: "car",
    lead: "Kuga’larda periyodik bakım, arıza tespiti, motor, şanzıman, fren ve süspansiyon işleri.",
    description: "Adana Seyhan'da Ford Kuga servisi: periyodik bakım, arıza tespiti, motor, şanzıman, fren ve süspansiyon. A&S Auto Premium Car Service.",
    intro: [
      "Kuga’nın farklı nesillerinde 1.5 EcoBoost benzinli, 1.5 ve 2.0 TDCi ile EcoBlue dizel motorlar bulunur. Son nesilde hibrit versiyonlar da vardır.",
      "Bazı versiyonlar dört çekerdir. Bu araçlarda aktarma kutusu ve arka diferansiyel de bakımın parçasıdır."
    ],
    notes: [
      "Dört çeker Kuga’larda aktarma kutusu ve arka diferansiyel yağı unutulmamalıdır.",
      "Dizel Kuga’larda şehir içi kısa mesafe kullanımda partikül filtresi (DPF) dolabilir.",
      "Hibrit ve şarj edilebilir hibrit versiyonlarda yüksek voltaj sistemiyle ilgili işler için önce bizi arayın."
    ],
    services: ["periyodik-bakim", "ariza-tespiti", "motor-mekanik", "sanziman", "fren-suspansiyon"],
    guides: ["motor-ariza-lambasi", "hararet"]
  },
  {
    slug: "courier",
    name: "Ford Courier",
    short: "Courier",
    type: "Hafif ticari",
    icon: "van",
    lead: "Transit Courier ve Tourneo Courier’larda bakım, arıza tespiti, fren ve debriyaj işleri.",
    description: "Adana Seyhan'da Ford Courier servisi: periyodik bakım, arıza tespiti, fren, debriyaj ve motor işleri. A&S Auto Premium Car Service.",
    intro: [
      "Courier genellikle iş aracı olarak kullanılır. Günlük yüksek kilometre ve yük, bakım aralıklarının daha dikkatli takip edilmesini gerektirir.",
      "Courier’da 1.0 EcoBoost benzinli ve 1.5 TDCi dizel motorlar yaygındır."
    ],
    notes: [
      "Yüklü kullanımda balata, disk ve debriyaj daha hızlı aşınabilir.",
      "Aracınızın ne zaman müsait olduğunu söyleyin, işinizi aksatmayacak bir saat ayarlamaya çalışalım.",
      "1.0 EcoBoost motorlu araçlarda doğru motor yağı ve bakım aralığı önemlidir."
    ],
    services: ["periyodik-bakim", "fren-suspansiyon", "sanziman", "ariza-tespiti", "motor-mekanik"],
    guides: ["fren-sorunlari", "bakim-zamani-geldi"]
  },
  {
    slug: "connect",
    name: "Ford Connect",
    short: "Connect",
    type: "Hafif ticari",
    icon: "van",
    lead: "Transit Connect ve Tourneo Connect’lerde bakım, arıza tespiti, motor, fren ve debriyaj işleri.",
    description: "Adana Seyhan'da Ford Connect servisi: periyodik bakım, arıza tespiti, motor, fren ve debriyaj işleri. A&S Auto Premium Car Service.",
    intro: [
      "Connect, hem iş aracı hem aile aracı olarak kullanılan bir hafif ticaridir. Kullanım şekline göre bakım ihtiyacı değişir.",
      "Connect’te 1.8 TDCi, 1.6 TDCi, 1.5 TDCi ve EcoBlue dizel motorlar ile 1.0 EcoBoost benzinli motor bulunur. Motor seçenekleri model yılına göre değişir."
    ],
    notes: [
      "Dizel Connect’lerde kısa mesafe kullanımda partikül filtresi (DPF) dolabilir.",
      "Yüklü kullanımda amortisör, balata ve debriyaj daha hızlı aşınabilir.",
      "Eski nesil araçlarda bakım geçmişi belli değilse kapsamlı bir kontrolle başlamak iyi olur."
    ],
    services: ["periyodik-bakim", "ariza-tespiti", "motor-mekanik", "fren-suspansiyon", "sanziman"],
    guides: ["cekis-dusuklugu", "aractan-ses-geliyor"]
  },
  {
    slug: "transit",
    name: "Ford Transit",
    short: "Transit",
    type: "Ticari",
    icon: "van",
    lead: "Transit panelvan, minibüs ve kamyonetlerde bakım, arıza tespiti, motor, fren ve debriyaj işleri.",
    description: "Adana Seyhan'da Ford Transit servisi: periyodik bakım, arıza tespiti, motor, fren, süspansiyon ve debriyaj. A&S Auto Premium Car Service.",
    intro: [
      "Transit, ağır yük ve yüksek kilometreyle çalışan bir ticari araçtır. Aracın serviste kaldığı her gün iş kaybı demek olduğu için önceden plan yapmak önemlidir.",
      "Transit’te eski nesillerde 2.2 ve 2.4 TDCi, yeni nesillerde 2.0 EcoBlue dizel motorlar yaygındır. Önden ve arkadan itişli versiyonları vardır."
    ],
    notes: [
      "EcoBlue motorlu Euro 6 Transit’lerde AdBlue sistemi bulunur. AdBlue uyarısı çıktığında aracın çalışmaması riski olduğu için ertelemeyin.",
      "Ağır yükte balata, disk, amortisör ve debriyaj daha hızlı aşınır.",
      "Aracınızın müsait olduğu günü önceden söyleyin, işinizi aksatmayacak bir saat ayarlamaya çalışalım."
    ],
    services: ["periyodik-bakim", "fren-suspansiyon", "motor-mekanik", "ariza-tespiti", "sanziman"],
    guides: ["cekis-dusuklugu", "fren-sorunlari"]
  }
];

export const modelBySlug = Object.fromEntries(models.map((model) => [model.slug, model]));
