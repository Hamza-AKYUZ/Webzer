import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";

function Headers() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="w-full bg-gradient-to-r from-red-800 to-red-900 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="logo"
            className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover shadow-lg"
          />
          <span className="font-bold text-xl md:text-2xl tracking-wide">
            Webzer Yazılım
          </span>
        </div>

        <button
          className="md:hidden ml-4 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-8 h-8 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <nav
          className={`flex flex-col md:flex-row md:items-center gap-4 mt-4 md:mt-0 transition-all duration-300 ${
            menuOpen ? "flex" : "hidden md:flex"
          }`}
        >
          <Link
            to="/"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            Anasayfa
          </Link>
          <Link
            to="/about"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            Hakkımızda
          </Link>
          <Link
            to="/contact"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            İletişim
          </Link>

          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="hover:text-gray-300 cursor-pointer transition-colors duration-200 flex items-center gap-1"
            >
              Hizmetler
              <svg
                className={`w-4 h-4 transform transition-transform duration-300 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {dropdownOpen && (
              <ul className="absolute flex flex-col bg-red-700 mt-2 p-2 rounded shadow-lg min-w-[150px] z-50">
                <li>
                  <Link
                    to="/meeting"
                    className="text-white px-3 py-2 hover:bg-red-600 rounded transition-colors duration-200 block"
                  >
                    Dijital Mağazam
                  </Link>
                </li>
                <li>
                  <Link
                    to="/appointment"
                    className="text-white px-3 py-2 hover:bg-red-600 rounded transition-colors duration-200 block"
                  >
                    Randevu Sistemi
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Headers;
