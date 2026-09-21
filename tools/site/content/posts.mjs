// Blog yazıları. Genel bilgi niteliğindedir; A&S'ye özel iddia, fiyat veya süre içermez.
// Tarih, yazıların sitede yayına girdiği gündür.

export const categories = [
  { slug: "bakim", label: "Bakım" },
  { slug: "ariza", label: "Arıza" },
  { slug: "mevsimsel", label: "Mevsimsel" }
];

export const posts = [
  {
    slug: "periyodik-bakimda-neler-yapilir",
    title: "Periyodik bakımda neler yapılır?",
    heroTitle: "Periyodik bakımda<br /><em>neler yapılır?</em>",
    category: "bakim",
    icon: "oilcan",
    date: "2026-09-21",
    excerpt: "Yağ değişiminden fren kontrolüne kadar periyodik bakımda yapılan işler ve bakım kitapçığını nasıl okuyacağınız.",
    description: "Periyodik bakımda motor yağı, filtreler, sıvı seviyeleri ve temel kontroller. Ford bakım kitapçığını nasıl okuyacağınız.",
    service: "periyodik-bakim",
    body: `
<p>Periyodik bakım, aracın üreticinin belirlediği aralıklarla kontrol edilmesi ve aşınan sarf malzemelerinin değiştirilmesidir. Amaç arıza çıktıktan sonra onarmak değil, arızanın çıkmasını geciktirmektir.</p>
<h2>Bakım aralığı nereden bilinir?</h2>
<p>Ford araçlarda bakım aralığı bakım kitapçığında kilometre ve süre olarak yazar. Hangisi önce dolarsa bakım o zaman yapılır. Birçok modelde gösterge paneli de bakım zamanı yaklaşınca uyarı verir.</p>
<p>Kısa mesafe, dur-kalk trafik, tozlu yol veya yük taşıma gibi kullanım şekilleri ağır koşul sayılır. Bu durumda bakım aralığının kısalması gerekebilir.</p>
<h2>Bakımda genellikle neler yapılır?</h2>
<ul>
<li>Motor yağı ve yağ filtresi değişimi</li>
<li>Hava filtresi ve polen filtresi kontrolü ya da değişimi</li>
<li>Dizel araçlarda aralığı gelmişse yakıt filtresi</li>
<li>Fren hidroliği, antifriz ve cam suyu seviyelerinin kontrolü</li>
<li>Balata, disk, lastik, akü ve aydınlatmanın kontrolü</li>
<li>Bakım uyarısının sıfırlanması</li>
</ul>
<p>Bazı bakımlarda buji, triger seti, fren hidroliği ya da şanzıman yağı gibi daha uzun aralıklı kalemler de yer alır. Bunlar da bakım kitapçığında hangi kilometrede değişeceği yazılı olarak bulunur.</p>
<h2>Bakıma gelmeden önce</h2>
<p>Aracın kilometresini, son bakım tarihini ve varsa bakım kitapçığını yanınızda getirin. Son zamanlarda fark ettiğiniz bir ses, titreme veya uyarı lambası varsa bunu da söyleyin. Bakım sırasında bu konulara da bakabiliriz.</p>
`
  },
  {
    slug: "ford-araclarda-motor-yagi-secimi",
    title: "Ford araçlarda doğru motor yağı nasıl seçilir?",
    heroTitle: "Doğru motor yağı<br /><em>nasıl seçilir?</em>",
    category: "bakim",
    icon: "oilcan",
    date: "2026-09-21",
    excerpt: "Viskozite, Ford onay kodu ve motor tipi. Motor yağı seçerken bakmanız gereken üç şey.",
    description: "Ford araçlarda motor yağı seçerken viskozite ve Ford onay kodu neden önemlidir? EcoBoost ve dizel motorlarda dikkat edilmesi gerekenler.",
    service: "periyodik-bakim",
    body: `
<p>Motor yağı motorun her hareketli parçasını korur. Yanlış yağ kısa sürede fark edilmeyebilir, ama zamanla aşınmayı artırır. Doğru yağı seçmek için bakılacak yer bakım kitapçığıdır.</p>
<h2>Viskozite</h2>
<p>Yağ kutusunda 5W-20, 5W-30 veya 0W-30 gibi yazan değer viskozitedir. İlk kısım yağın soğukta ne kadar akıcı olduğunu, ikinci kısım motor sıcakken ne kadar koyu kaldığını gösterir. Motorunuz için doğru viskozite bakım kitapçığında yazar.</p>
<h2>Ford onay kodu</h2>
<p>Ford, motorlarında kullanılacak yağlar için onay kodları belirler. Bu kodlar WSS-M2C ile başlar. Örneğin bazı motorlar için WSS-M2C913-D, bazı EcoBoost motorlar için WSS-M2C948-B kodu istenir.</p>
<p>Aynı viskozitedeki iki yağdan biri bu onaya sahip olabilir, diğeri olmayabilir. Yağ alırken kutunun üzerinde aracınızın istediği onay kodunun yazdığından emin olun.</p>
<h2>EcoBoost motorlarda dikkat</h2>
<p>Bazı 1.0 EcoBoost motorlarda triger kayışı motor yağının içinde çalışır. Bu motorlarda uygun olmayan yağ kullanmak kayışın ömrünü etkileyebilir. Bu yüzden onay kodu ve değişim aralığı bu motorlarda daha da önemlidir.</p>
<h2>Dizel motorlarda dikkat</h2>
<p>Partikül filtresi (DPF) bulunan dizel araçlarda düşük kül içerikli yağlar kullanılır. Yanlış yağ filtrenin daha hızlı dolmasına yol açabilir.</p>
<h2>Kısacası</h2>
<ul>
<li>Bakım kitapçığındaki viskoziteyi kullanın.</li>
<li>Kutuda Ford onay kodunun yazdığını kontrol edin.</li>
<li>Değişim aralığını kilometre ve süre olarak takip edin.</li>
</ul>
`
  },
  {
    slug: "dizel-araclarda-dpf-neden-dolar",
    title: "Dizel araçlarda partikül filtresi (DPF) neden dolar?",
    heroTitle: "DPF neden<br /><em>dolar?</em>",
    category: "ariza",
    icon: "engine",
    date: "2026-09-21",
    excerpt: "Kısa mesafe kullanım, yarım kalan rejenerasyon ve uyarı lambası. DPF dolmasının nedenleri ve yapabilecekleriniz.",
    description: "Dizel araçlarda partikül filtresi (DPF) neden dolar, rejenerasyon nedir ve DPF uyarısı yandığında ne yapmalısınız?",
    service: "ariza-tespiti",
    body: `
<p>Partikül filtresi (DPF), dizel motorun egzozundaki isi tutan bir filtredir. Filtre zamanla dolar ve araç bu isi yüksek sıcaklıkta yakarak filtreyi temizler. Bu işleme rejenerasyon denir.</p>
<h2>Filtre neden dolar?</h2>
<p>Rejenerasyonun tamamlanması için egzozun belirli bir süre yüksek sıcaklıkta kalması gerekir. Araç sürekli kısa mesafede kullanılıyorsa bu sıcaklığa ulaşılmaz ve temizleme yarım kalır.</p>
<ul>
<li>Sürekli kısa mesafe ve şehir içi kullanım</li>
<li>Rejenerasyon sırasında motorun sık kapatılması</li>
<li>Uygun olmayan motor yağı</li>
<li>Enjektör, EGR veya sensör sorunları nedeniyle fazla is oluşması</li>
</ul>
<h2>Uyarı yandığında ne yapmalı?</h2>
<p>Birçok araçta DPF dolduğunda gösterge panelinde uyarı çıkar. Araç kullanım kılavuzu genellikle bu durumda bir süre sabit hızla yol sürüşü yapılmasını önerir. Uyarı sönmüyorsa ya da araç çekişten düştüyse kontrol ettirmek gerekir.</p>
<h2>Rejenerasyonu nasıl anlarım?</h2>
<p>Rölantinin normalden yüksek olması, fanın motor kapandıktan sonra da çalışması veya egzozdan farklı bir koku gelmesi rejenerasyon işaretleri olabilir. Bu sırada mümkünse motoru kapatmadan sürüşe devam edin.</p>
<h2>AdBlue ile karıştırmayın</h2>
<p>AdBlue bazı yeni dizel araçlarda bulunan ayrı bir sistemdir ve egzozdaki azot oksitleri azaltır. AdBlue uyarısı DPF uyarısından farklıdır. AdBlue biterse araç bir süre sonra çalışmayabilir.</p>
`
  },
  {
    slug: "yaz-sicaginda-hararete-karsi-kontroller",
    title: "Yaz sıcağında hararete karşı yapılacak kontroller",
    heroTitle: "Yaz sıcağında<br /><em>hararete karşı</em>",
    category: "mevsimsel",
    icon: "coolant",
    date: "2026-09-21",
    excerpt: "Adana’nın yaz sıcağında trafikte ve klima açıkken hararet riski artar. Yazdan önce bakmanız gereken beş şey.",
    description: "Adana'nın yaz sıcağında hararet riskine karşı antifriz, fan, radyatör ve termostat kontrolleri. Hararet yaparsa ne yapmalısınız?",
    service: "motor-mekanik",
    body: `
<p>Adana’da yaz aylarında hava sıcaklığı uzun süre yüksek kalır. Trafikte beklemek, klimanın sürekli çalışması ve yüklü sürüş soğutma sistemini zorlar. Küçük bir eksiklik bu koşullarda harareti ortaya çıkarır.</p>
<h2>Yazdan önce kontrol edilmesi gerekenler</h2>
<ul>
<li><strong>Antifriz seviyesi ve oranı:</strong> Motor soğukken genleşme kabındaki seviyeye bakın. Antifriz sadece donmayı değil, kaynamayı da geciktirir.</li>
<li><strong>Radyatör fanı:</strong> Motor ısındığında ve klima açıldığında fanın devreye girmesi gerekir.</li>
<li><strong>Radyatör yüzeyi:</strong> Önüne biriken böcek, toz ve yaprak hava geçişini azaltır.</li>
<li><strong>Hortumlar:</strong> Çatlak, şişkinlik veya sızıntı olmamalı.</li>
<li><strong>Termostat ve su pompası:</strong> Hararet göstergesi normalden farklı davranıyorsa kontrol edilmeli.</li>
</ul>
<h2>Hararet yaparsa</h2>
<p>Hararet göstergesi yükselirse güvenli bir yerde durun ve motoru kapatın. Motor sıcakken radyatör ya da genleşme kabı kapağını açmayın; basınçlı sıcak su yakabilir. Motor soğuduktan sonra antifriz seviyesine bakın ve bizi arayın.</p>
<h2>Klima ile ilişkisi</h2>
<p>Klima açıkken hem motora hem radyatörün önündeki kondensere ek yük biner. Hararet ilk önce klima açıkken ve trafikte ortaya çıkıyorsa fan veya radyatör tarafında bir sorun olabilir.</p>
`
  },
  {
    slug: "fren-balatasi-ne-zaman-degisir",
    title: "Fren balatası ne zaman değişir?",
    heroTitle: "Fren balatası<br /><em>ne zaman değişir?</em>",
    category: "bakim",
    icon: "brake",
    date: "2026-09-21",
    excerpt: "Balatanın sabit bir değişim kilometresi yoktur. Balatanın bittiğini gösteren belirtiler ve disk ile ilişkisi.",
    description: "Fren balatası ne zaman değişir? Balatanın bittiğini gösteren belirtiler, disk değişimi ve fren hidroliği hakkında bilmeniz gerekenler.",
    service: "fren-suspansiyon",
    body: `
<p>Fren balatasının ömrü sürüş şekline, trafiğe, yüke ve yola göre çok değişir. Şehir içinde sık fren yapan bir araçla uzun yolda giden bir aracın balatası aynı sürede bitmez. Bu yüzden sabit bir değişim kilometresi yoktur.</p>
<h2>Balatanın bittiğini gösteren belirtiler</h2>
<ul>
<li>Fren yaparken tiz bir gıcırtı. Birçok balatada bu sesi çıkaran bir aşınma uyarı sacı bulunur.</li>
<li>Metal sürtünme sesi. Bu durumda balata tamamen bitmiş ve disk zarar görüyor olabilir.</li>
<li>Gösterge panelinde balata uyarısı. Bazı araçlarda balata sensörü bulunur.</li>
<li>Fren mesafesinin uzaması.</li>
</ul>
<h2>Disk de değişmeli mi?</h2>
<p>Her balata değişiminde disk değişmez. Diskin kalınlığı ölçülür; üreticinin belirlediği sınırın altındaysa, yüzeyinde derin çizikler varsa ya da düzensiz aşındıysa değiştirilir. Fren yaparken pedalda titreme hissediyorsanız disk düzensiz aşınmış olabilir.</p>
<h2>Fren hidroliği</h2>
<p>Fren hidroliği zamanla nem çeker ve kaynama noktası düşer. Bu durum özellikle uzun yokuş inişlerinde fren etkisinin azalmasına yol açabilir. Değişim aralığı bakım kitapçığında yazar.</p>
<h2>Ertelememeniz gereken durumlar</h2>
<p>Fren pedalı derine iniyorsa, süngerimsi hissediliyorsa ya da kırmızı fren uyarısı yanıyorsa aracı kullanmayın ve bizi arayın.</p>
`
  },
  {
    slug: "uzun-yol-oncesi-arac-kontrolu",
    title: "Uzun yol öncesi araç kontrol listesi",
    heroTitle: "Uzun yol öncesi<br /><em>kontrol listesi</em>",
    category: "mevsimsel",
    icon: "car",
    date: "2026-09-21",
    excerpt: "Bayram ya da tatil yolculuğundan önce kendi yapabileceğiniz kontroller ve serviste baktırmanız gerekenler.",
    description: "Uzun yola çıkmadan önce lastik, yağ, antifriz, fren, akü ve aydınlatma kontrolleri. Kendiniz yapabilecekleriniz ve serviste baktırmanız gerekenler.",
    service: "periyodik-bakim",
    body: `
<p>Uzun yolda araç saatlerce yüksek devirde, yüklü ve sıcak havada çalışır. Şehir içinde fark edilmeyen küçük bir sorun yolda büyüyebilir. Yola çıkmadan birkaç gün önce aşağıdaki kontrolleri yapmanız yeterli olur.</p>
<h2>Kendiniz yapabilecekleriniz</h2>
<ul>
<li><strong>Lastik basıncı:</strong> Yüklü sürüş için önerilen basınç çoğu araçta sürücü kapısı kenarında veya yakıt kapağının içinde yazar. Stepneyi de unutmayın.</li>
<li><strong>Lastik diş derinliği ve yanaklar:</strong> Çatlak, şişlik veya düzensiz aşınma olmamalı.</li>
<li><strong>Motor yağı seviyesi:</strong> Motor soğukken, düz zeminde çubukla kontrol edin.</li>
<li><strong>Antifriz ve cam suyu:</strong> Genleşme kabındaki seviyeye bakın.</li>
<li><strong>Aydınlatma:</strong> Far, stop, sinyal ve plaka lambalarını kontrol edin.</li>
<li><strong>Silecekler:</strong> İz bırakıyorsa değiştirin.</li>
</ul>
<h2>Serviste baktırmanız iyi olanlar</h2>
<ul>
<li>Bakım zamanı yaklaştıysa bakımın yoldan önce yapılması</li>
<li>Balata ve disk kalınlığı</li>
<li>Akü sağlığı</li>
<li>Kayışlar ve hortumlar</li>
<li>Amortisör ve ön takım</li>
</ul>
<h2>Yolda dikkat</h2>
<p>Yolda kırmızı bir uyarı lambası yanarsa güvenli bir yerde durun. Hararet, yağ basıncı ve fren uyarıları aracı kullanmaya devam etmemeniz gereken uyarılardır.</p>
`
  }
];

export const postBySlug = Object.fromEntries(posts.map((post) => [post.slug, post]));
