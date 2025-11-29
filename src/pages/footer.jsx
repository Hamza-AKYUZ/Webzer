import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Webzer Yazılım</h2>
          <p className="text-gray-400">
            Modern bulut teknolojileri sunan bir yazılım firması.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Hızlı Linkler
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-white transition-colors">
                Ana Sayfa
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition-colors">
                Hakkımızda
              </a>
            </li>
            {/* <li>
              <a href="#" className="hover:text-white transition-colors">
                Hizmetler
              </a>
            </li> */}
            <li>
              <a href="/contact" className="hover:text-white transition-colors">
                İletişim
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Bizi Takip Edin
          </h3>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/@webzeryazilim/"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Webzer Yazılım. Tüm hakları saklıdır.
      </div>
    </footer>
  );
};

export default Footer;
