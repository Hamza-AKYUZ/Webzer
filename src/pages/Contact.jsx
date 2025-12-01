import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const contacts = [
  { name: "Muhammed Hamza Akyüz", phone: "+90 542 122 12 88" },
  { name: "Muhammed Talha Özer", phone: "+90 505 796 03 28" },
  { name: "Yavuz Selim Akyüz", phone: "+90 551 079 75 69" },
];

const WhatsappContactSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Bize WhatsApp'tan Ulaşın
        </h2>
        <p className="text-gray-500 mb-12">
          Aşağıdaki kişilerden biriyle hızlıca iletişime geçebilirsiniz.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-center justify-center mb-4">
                <FaWhatsapp className="text-green-500 w-8 h-8 mr-2" />
                <h3 className="text-xl font-semibold text-gray-800">
                  {contact.name}
                </h3>
              </div>
              <p className="text-gray-600">{contact.phone}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Instagram</h3>
          <a
            href="https://www.instagram.com/webzeryazilim/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-pink-500 hover:text-pink-600 font-semibold text-lg transition-colors"
          >
            <FaInstagram className="w-6 h-6 mr-2" />
            @webzeryazilim
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatsappContactSection;
