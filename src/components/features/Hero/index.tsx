import React from "react";
import { withBasePath } from "@/lib/basePath";
import "./style.scss";
import AppImage from "@/components/AppImage";

const HeroSection = () => (
  <section className="relative py-25 md:py-34">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* LEFT: Title + copy */}
        <div className="text-left">
          <h1 className="wave-text font-extrabold leading-snug text-fluid-invert">
            <span className="gradient-text">PV-ERP</span>
            <span className="block text-[#2F3542] subtext-fluid-invert mt-2">
              Nền tảng quản trị thông minh
            </span>
            <span className="block text-[#2F3542] subtext-fluid-invert">
              cho doanh nghiệp thời đại số
            </span>
          </h1>
          <p className="mt-3 text-base md:text-lg text-gray-600 max-w-2xl leading-snug italic">
            Kết nối – Đồng hành – Phát triển bền vững
          </p>

          <div className="mt-5 flex gap-4">
            <a
              href="#contact"
              className="bg-[#3fa548] text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
            >
              Liên hệ tư vấn
            </a>
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
            <AppImage
              src={withBasePath("/herobg.png")}
              alt="Hero"
              width={1200}
              height={800}
              className="w-full h-[calc(50vh-20px)] md:h-[70vh] lg:h-[70vh] object-cover object-[75%_66%]"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
