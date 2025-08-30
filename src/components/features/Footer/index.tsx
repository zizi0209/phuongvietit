import React from "react";
import Image from "next/image";

const Footer = () => (
  <footer id="contact" className="bg-white text-dark-green py-16">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* LEFT: Thông tin công ty */}
        <div>
          {/* Logo + Tên công ty */}
          <div className="flex flex-col items-center md:items-start mb-6">
            <Image
              src="/logo.png"
              alt="Phuong Viet IT&E Logo"
              width={100}
              height={80}
              className="mb-4"
            />
            <h3 className="text-2xl font-bold text-[#2F3542]">
              Phuong Viet IT&amp;E
            </h3>
          </div>

          {/* Thông tin liên hệ */}
          <div className="space-y-4 text-gray-700 text-center md:text-left">
            <p>
              <span className="font-semibold text-[#3fa548]">Địa chỉ:</span>{" "}
              <br />
              133/2A Trần Hưng Đạo, Phường An Phú, Quận Ninh Kiều, TP. Cần Thơ
            </p>
            <p>
              <span className="font-semibold text-[#3fa548]">Điện thoại:</span>{" "}
              <br />
              <a
                href="tel:0706780790"
                className="hover:text-[#3fa548] transition-colors"
              >
                0706 780790
              </a>
            </p>
            <p>
              <span className="font-semibold text-[#3fa548]">Email:</span>{" "}
              <br />
              <a
                href="mailto:phuongviet.ite@gmail.com"
                className="hover:text-[#3fa548] transition-colors"
              >
                phuongviet.ite@gmail.com
              </a>
            </p>
            <p>
              <span className="font-semibold text-[#3fa548]">
                Giờ làm việc:
              </span>{" "}
              <br />
              Thứ 2 - Thứ 6: 8:00 - 17:00 <br />
              Thứ 7: 8:00 - 12:00
            </p>
          </div>
        </div>

        {/* RIGHT: Google Maps */}
        <div className="w-full h-80 rounded-lg overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.20720749284!2d105.76804047503763!3d10.00724397297206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0883f5e95ddbd%3A0x39c42a36e8d4c1!2zMTMzLzJBIFRy4bqnbiBIxrBuZyDEkOG6o28sIFBoxrDhu51uZyBBbiBQaMO6LCBRdeG6rW4gTmluaCBLaeG7gXUsIENhbiBUaMahLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Bản quyền */}
      <div className="mt-10 border-t border-gray-300 pt-8 text-center">
        <p className="text-gray-600">
          &copy; 2025 Công ty TNHH Công nghệ thông tin và Môi trường Phương
          Việt. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
