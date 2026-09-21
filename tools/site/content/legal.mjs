import { SITE } from "../config.mjs";

// Metinler sitenin bugünkü gerçek davranışını anlatır: sunucuya form verisi gitmez,
// kullanıcı hesabı yoktur, site kendi çerezini yazmaz.
// Ticari unvan, MERSİS ve VERBİS bilgileri müşteriden teyit edilince eklenmeli (docs/06, madde 9).

const contact = `${SITE.addressLines.join(", ")} · Telefon: <a href="tel:${SITE.phone}">${SITE.phoneDisplay}</a>`;

export const legalPages = [
  {
    slug: "kvkk-aydinlatma",
    title: "KVKK Aydınlatma Metni",
    heroTitle: "KVKK<br /><em>aydınlatma metni</em>",
    description: "A&S Auto Premium Car Service web sitesi servis talebi formu kapsamında kişisel verilerin işlenmesine ilişkin aydınlatma metni.",
    updated: "2026-09-21",
    body: `
<p>Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında, web sitemizdeki servis talebi formunu kullandığınızda kişisel verilerinizin nasıl işlendiğini açıklar.</p>
<h2>Veri sorumlusu</h2>
<p>${SITE.name}<br />${contact}</p>
<h2>Hangi verileri işliyoruz?</h2>
<p>Servis talebi formunda şu bilgileri istiyoruz:</p>
<ul>
<li>Ad ve soyad</li>
<li>Telefon numarası</li>
<li>Araç modeli</li>
<li>İhtiyaç duyduğunuz hizmet</li>
<li>Aracınızla ilgili yazdığınız not</li>
</ul>
<p>WhatsApp üzerinden bize yazdığınızda veya bizi aradığınızda paylaştığınız fotoğraf, video ve mesajlar da bu kapsamdadır.</p>
<h2>Verileri nasıl topluyoruz?</h2>
<p>Form bilgileri web sitemizin sunucusuna gönderilmez ve sitede saklanmaz. Formu gönderdiğinizde bilgileriniz tarayıcınızda bir WhatsApp mesajına dönüştürülür. Mesajı WhatsApp üzerinden göndermeyi siz seçtiğinizde bilgiler bize ulaşır.</p>
<h2>Hangi amaçlarla işliyoruz?</h2>
<ul>
<li>Servis talebinize yanıt vermek</li>
<li>Randevu gününü ve saatini ayarlamak</li>
<li>Aracınızla ilgili ön bilgi almak ve sizi bilgilendirmek</li>
<li>Yapılan işle ilgili yasal yükümlülüklerimizi yerine getirmek</li>
</ul>
<h2>Hukuki sebep</h2>
<p>Verileriniz KVKK’nın 5. maddesinde yer alan; bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması, veri sorumlusunun hukuki yükümlülüğünü yerine getirmesi ve temel hak ve özgürlüklerinize zarar vermemek kaydıyla meşru menfaatimiz için zorunlu olması hukuki sebeplerine dayanılarak işlenir.</p>
<h2>Verilerin aktarılması</h2>
<p>Mesajınızı WhatsApp üzerinden gönderdiğinizde veriler WhatsApp hizmetini sunan şirketin altyapısından geçer. Bu hizmetin sunucuları yurt dışında bulunabilir. Bu aktarımı WhatsApp’ı kullanmayı seçerek siz başlatırsınız. Talep etmeniz halinde bizimle telefonla da iletişim kurabilirsiniz.</p>
<p>Verileriniz bunun dışında yalnızca kanunen yetkili kamu kurum ve kuruluşlarına, talep edilmesi halinde aktarılabilir.</p>
<h2>Saklama süresi</h2>
<p>Verilerinizi talebinizin sonuçlanması ve ilgili mevzuatta öngörülen süreler boyunca saklarız. Bu sürelerin sonunda verileri siler veya anonim hale getiririz.</p>
<h2>Haklarınız</h2>
<p>KVKK’nın 11. maddesi uyarınca kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme, aktarıldığı üçüncü kişileri bilme, eksik veya yanlış işlenmişse düzeltilmesini, kanundaki şartlar çerçevesinde silinmesini veya yok edilmesini isteme, itiraz etme ve zarara uğramanız halinde zararın giderilmesini talep etme haklarına sahipsiniz.</p>
<h2>Başvuru</h2>
<p>Haklarınızla ilgili taleplerinizi yukarıdaki adrese yazılı olarak iletebilir veya telefonla bize ulaşabilirsiniz. Başvurunuzu en geç otuz gün içinde yanıtlarız.</p>
`
  },
  {
    slug: "gizlilik",
    title: "Gizlilik Politikası",
    heroTitle: "Gizlilik<br /><em>politikası</em>",
    description: "A&S Auto Premium Car Service web sitesinin gizlilik politikası: hangi bilgilerin toplandığı, üçüncü taraf hizmetler ve haklarınız.",
    updated: "2026-09-21",
    body: `
<p>Bu sayfa, web sitemizi ziyaret ettiğinizde hangi bilgilerin nasıl işlendiğini açıklar.</p>
<h2>Sitede toplanan bilgiler</h2>
<p>Web sitemizde üyelik, kullanıcı hesabı veya ödeme sistemi bulunmaz. Siteyi gezmek için herhangi bir kişisel bilgi vermeniz gerekmez.</p>
<p>Servis talebi formuna yazdığınız bilgiler sunucumuza gönderilmez; yalnızca sizin göndermeyi seçtiğiniz bir WhatsApp mesajına dönüştürülür. Ayrıntılar için <a href="/kvkk-aydinlatma/">KVKK aydınlatma metnine</a> bakabilirsiniz.</p>
<h2>Üçüncü taraf hizmetler</h2>
<p>Sitenin çalışması için aşağıdaki hizmetlerden içerik yüklenir. Bu hizmetler, içeriği size ulaştırmak için IP adresiniz gibi teknik bilgileri görebilir:</p>
<ul>
<li><strong>Google Fonts:</strong> Yazı tipleri</li>
<li><strong>jsDelivr:</strong> Sayfa geçişleri ve kaydırma efektleri için kullanılan kod kütüphaneleri</li>
<li><strong>Google Haritalar:</strong> İletişim bölümündeki harita</li>
<li><strong>Unsplash ve Pexels:</strong> Bazı sayfalardaki temsilî fotoğraflar</li>
</ul>
<p>Instagram, WhatsApp ve Google Haritalar bağlantılarına tıkladığınızda ilgili hizmetin kendi gizlilik politikası geçerli olur.</p>
<h2>Ziyaret istatistikleri</h2>
<p>Sitemizde şu anda ziyaretçi istatistiği tutan bir analiz aracı kullanılmamaktadır. İleride kullanılmaya başlanırsa bu sayfa güncellenir.</p>
<h2>İletişim</h2>
<p>${SITE.name}<br />${contact}</p>
`
  },
  {
    slug: "cerez-politikasi",
    title: "Çerez Politikası",
    heroTitle: "Çerez<br /><em>politikası</em>",
    description: "A&S Auto Premium Car Service web sitesinde kullanılan çerezler ve üçüncü taraf içerikler hakkında bilgi.",
    updated: "2026-09-21",
    body: `
<p>Çerezler, ziyaret ettiğiniz sitelerin tarayıcınıza kaydettiği küçük metin dosyalarıdır.</p>
<h2>Sitemizin kullandığı çerezler</h2>
<p>Web sitemiz kendi adına çerez kaydetmez. Reklam, takip veya ziyaretçi istatistiği çerezi kullanmıyoruz.</p>
<h2>Üçüncü taraf çerezler</h2>
<p>İletişim bölümündeki Google Haritalar haritası, haritanın çalışması için Google tarafından çerez kaydedebilir. Bu çerezler Google’ın çerez politikasına tabidir.</p>
<h2>Çerezleri nasıl yönetebilirsiniz?</h2>
<p>Tarayıcınızın ayarlarından çerezleri silebilir veya engelleyebilirsiniz. Üçüncü taraf çerezleri engellediğinizde harita düzgün çalışmayabilir; adresimize <a href="${SITE.mapsUrl.replace(/&/g, "&amp;")}" target="_blank" rel="noopener">Google Haritalar bağlantısından</a> da ulaşabilirsiniz.</p>
<h2>İletişim</h2>
<p>${SITE.name}<br />${contact}</p>
`
  }
];
