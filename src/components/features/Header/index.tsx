import React from "react";
import Image from "next/image";

const Header = () => (
  <header
    className="
      fixed top-0 left-0 right-0 z-50
      border-b border-gray-200/60
      bg-white/70
      backdrop-blur-md
      supports-[backdrop-filter]:bg-white/60
      shadow-sm
    "
  >
    <nav className="container mx-auto px-6 h-20 flex justify-between items-center">
      <div className="flex items-center">
        <Image
          src="/logo.png"
          alt="Phương Việt Logo"
          width={80}
          height={65}
          priority
        />
      </div>

      <ul className="hidden md:flex items-center space-x-8 font-semibold">
        <li>
          <a
            href="#"
            className="py-2 border-b-2 border-transparent text-[#358e3d] hover:text-[#c9da2a] hover:border-[#c9da2a] transition-all duration-300"
          >
            Trang chủ
          </a>
        </li>
        <li>
          <a
            href="#services"
            className="py-2 border-b-2 border-transparent text-[#358e3d] hover:text-[#c9da2a] hover:border-[#c9da2a] transition-all duration-300"
          >
            Dịch vụ
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="py-2 border-b-2 border-transparent text-[#358e3d] hover:text-[#c9da2a] hover:border-[#c9da2a] transition-all duration-300"
          >
            Giới thiệu
          </a>
        </li>
      </ul>

      <a
        href="#contact"
        className="bg-[#3fa548] text-white px-5 py-1.5 rounded-full font-bold hover:bg-gradient-to-r from-[#34a03e] to-[#3fa548] transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md"
      >
        Liên hệ
      </a>
    </nav>
  </header>
);

export default Header;
