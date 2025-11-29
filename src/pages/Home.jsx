import React from "react";

const advantages = [
  {
    title: "1. Zaman Tasarrufu",
    points: [
      "Randevu aldığınızda gereksiz yere beklemezsiniz.",
      "Ne zaman mağazaya gideceğiniz önceden bellidir.",
      "İşlemleriniz daha hızlı tamamlanır.",
      "Gününüzü daha düzenli planlayabilirsiniz.",
    ],
  },
  {
    title: "2. Düzenli ve Kalabalıksız Mağaza Ortamı",
    points: [
      "Randevu sistemi, mağaza içi kalabalığın oluşmasını önler.",
      "Daha sakin, temiz ve düzenli bir ortam sağlanır.",
      "Hem çalışanlar hem de müşteriler daha rahat hareket eder.",
    ],
  },
  {
    title: "3. Hızlı ve Hazırlıklı Hizmet",
    points: [
      "Çalışanlar, sizin gelişinizden önce gerekli hazırlıkları yapar.",
      "Hizmet süreci hızlanır.",
      "Yanlışlık veya karışıklık yaşanma ihtimali azalır.",
    ],
  },
  {
    title: "4. Kolay Online Randevu Alma",
    points: [
      "İnternet üzerinden birkaç saniye içinde randevu oluşturabilirsiniz.",
      "Telefonla arama yapma zorunluluğu ortadan kalkar.",
      "Tüm işlem birkaç tıkla hızlı ve pratik şekilde tamamlanır.",
    ],
  },
  {
    title: "5. Gelişmiş Müşteri Deneyimi",
    points: [
      "Müşteriler kendilerini daha değerli ve önemsenmiş hisseder.",
      "Düzenli ortam, genel memnuniyeti artırır.",
      "İletişim daha açık olur ve sorun yaşanma olasılığı düşer.",
    ],
  },
  {
    title: "6. Yoğunluk ve Güvenlik Kontrolü",
    points: [
      "Aynı anda çok sayıda kişinin mağazada bulunması engellenir.",
      "Daha güvenli ve rahat bir mağaza ortamı sağlanır.",
      "Hem çalışanlar hem de müşteriler için kontrollü bir süreç oluşturur.",
    ],
  },
];

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-12">
        Randevu Sisteminin Avantajları
      </h1>
      <div className="grid md:grid-cols-2 gap-6">
        {advantages.map((adv, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-4">{adv.title}</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {adv.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
