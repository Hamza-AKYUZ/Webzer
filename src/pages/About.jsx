import React from "react";

const products = [
  {
    name: "Dijital Mağazam",
    description:
      "Masaj, güzellik salonları ve kuaförler gibi işletmelere hizmet veriyor. Mağazanızı dijitalleştirerek açılış-kapanış saatleri, ürün ve fiyat listesi, dükkan tanımı gibi tüm bilgileri kolayca yönetmenizi sağlıyor.",
  },
  {
    name: "Randevu Sistemi",
    description:
      "Aynı mağaza gruplarına hizmet veriyor ve müşterilerinizin kolayca randevu almasını sağlıyor. İşlemleri hızlandırıyor, kalabalığı azaltıyor ve müşteri memnuniyetini artırıyor.",
  },
];

const AboutUs = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Hakkımızda</h1>
      <p className="text-lg text-gray-700 mb-6">
        2023 yılında kurulmuş olan şirketimiz, bulut tabanlı web hizmetleri
        sunmaktadır. Amacımız, işletmelerin dijital dünyada daha kolay ve
        verimli hizmet vermesini sağlamaktır. Şu anda aktif olarak iki ürünümüz
        bulunmaktadır:
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-4">{product.name}</h2>
            <p className="text-gray-700">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
