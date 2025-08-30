import React from "react";
import AppImage from "@/components/AppImage";

const Footer = () => (
  <footer id="contact" className="bg-[#3fa548] text-white">
    <div className="mx-auto max-w-screen-xl px-6 py-14">
      {/* TOP: Info + Map */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT: Company info */}
        <div>
          {/* Logo + Company name */}
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
            <AppImage
              src="/logo.png"
              alt="Phuong Viet IT&E Logo"
              width={112}
              height={90}
              className="h-12 w-auto"
            />
            <h3 className="text-center lg:text-left text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-wide">
              CÔNG TY TNHH CÔNG NGHỆ THÔNG TIN VÀ MÔI TRƯỜNG PHƯƠNG VIỆT
            </h3>
          </div>

          {/* Contact lines */}
          <ul className="mt-3 space-y-3 text-white/90 text-base">
            <li className="flex items-start gap-3">
              {/* map-pin */}
              <svg
                className="h-5 w-5 mt-1 opacity-90"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21s-6-5.373-6-10a6 6 0 1112 0c0 4.627-6 10-6 10z"
                />
                <circle cx="12" cy="11" r="2.5" strokeWidth="1.6" />
              </svg>
              <div>
                <span className="opacity-90">Địa chỉ:</span>
                <br />
                133/2A Trần Hưng Đạo, Phường An Phú, Quận Ninh Kiều, TP. Cần Thơ
              </div>
            </li>

            <li className="flex items-center gap-3">
              {/* phone */}
              <svg
                className="h-5 w-5 opacity-90"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h2.153a1 1 0 01.95.684l1.08 3.24a1 1 0 01-.272 1.05l-1.6 1.6a14 14 0 007.415 7.415l1.6-1.6a1 1 0 011.05-.272l3.24 1.08a1 1 0 01.684.95V19a2 2 0 01-2 2h-1C9.163 21 3 14.837 3 7V6a1 1 0 011-1z"
                />
              </svg>
              <div>
                <span className="opacity-90">Điện thoại:</span>{" "}
                <a
                  href="tel:0706780790"
                  className="font-semibold text-[#cddc39] hover:underline"
                >
                  0706 780790
                </a>
              </div>
            </li>

            <li className="flex items-center gap-3">
              {/* mail */}
              <svg
                className="h-5 w-5 opacity-90"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z"
                />
                <path
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M22 8l-10 6L2 8"
                />
              </svg>
              <div>
                <span className="opacity-90">Email:</span>{" "}
                <a
                  href="mailto:phuongviet.ite@gmail.com"
                  className="font-semibold text-[#cddc39] hover:underline"
                >
                  phuongviet.ite@gmail.com
                </a>
              </div>
            </li>

            <li className="flex items-center gap-3">
              {/* globe */}
              <svg
                className="h-5 w-5 opacity-90"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 0c2.5 0 4.5-4 4.5-9S14.5 3 12 3m0 18c-2.5 0-4.5-4-4.5-9S9.5 3 12 3M4.5 12h15"
                />
              </svg>
              <div>
                <span className="opacity-90">Website:</span>{" "}
                <a
                  href="https://phuongvietit.vn"
                  target="_blank"
                  className="font-semibold text-[#cddc39] hover:underline"
                >
                  phuongvietit.vn
                </a>
              </div>
            </li>

            <li className="flex items-start gap-3">
              {/* clock */}
              <svg
                className="h-5 w-5 mt-0.5 opacity-90"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="9" strokeWidth="1.6" />
                <path
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 7v5l3 3"
                />
              </svg>
              <div>
                <span className="opacity-90">Giờ làm việc:</span>
                <br />
                Thứ 2 - Thứ 6: 8:00 - 17:00 &nbsp;•&nbsp; Thứ 7: 8:00 - 12:00
              </div>
            </li>
          </ul>
        </div>

        {/* RIGHT: Google Map */}
        <div className="w-full">
          <div className="h-80 rounded-xl overflow-hidden shadow-lg ring-1 ring-white/25 bg-white">
            <iframe
              className="h-full w-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.20720749284!2d105.76804047503763!3d10.00724397297206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0883f5e95ddbd%3A0x39c42a36e8d4c1!2zMTMzLzJBIFRy4bqnbiBIxrBuZyDEkOG6o28sIFBoxrDhu51uZyBBbiBQaMO6LCBRdeG6rW4gTmluaCBLaeG7gXUsIENhbiBUaMahLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-8 h-px bg-white/30" />

      {/* Bottom line */}
      <p className="mt-4 text-center text-white/90 font-semibold tracking-[0.35em]">
        PHUONG VIET IT&amp;E
      </p>
    </div>
  </footer>
);

export default Footer;
