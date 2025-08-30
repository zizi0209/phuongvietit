import React from "react";

const HeroSection = () => (
  <section className="relative bg-white pt-32 pb-28 md:pt-40 md:pb-36 text-center overflow-hidden">
    <div className="container mx-auto px-6 relative z-10">
      {/* Sub-heading */}
      <span className="text-sm md:text-base font-semibold tracking-wider uppercase text-[#3fa548]">
        Giải pháp công nghệ cho doanh nghiệp
      </span>

      {/* Main heading */}
      <h1 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#2F3542] leading-tight">
        Chuyển đổi số thông minh với{" "}
        <span className="text-[#3fa548]">ERP Odoo</span>
      </h1>

      {/* Supporting text */}
      <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Chúng tôi cung cấp các giải pháp ERP toàn diện trên nền tảng Odoo, giúp
        doanh nghiệp của bạn{" "}
        <span className="font-semibold text-[#3fa548]">tối ưu vận hành</span>,
        <span className="font-semibold text-[#3fa548]"> tiết kiệm chi phí</span>{" "}
        và
        <span className="font-semibold text-[#3fa548]">
          {" "}
          tăng trưởng bền vững
        </span>
        .
      </p>

      {/* Call to Action */}
      <div className="mt-10 flex justify-center gap-4 flex-wrap">
        <a
          href="#contact"
          className="bg-[#3fa548] text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-gradient-to-r from-[#34a03e] to-[#3fa548] transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Nhận tư vấn miễn phí
        </a>
        <a
          href="#about"
          className="border-2 border-[#3fa548] text-[#3fa548] px-10 py-4 rounded-full text-lg font-bold hover:bg-[#3fa548] hover:text-white transition-all duration-300"
        >
          Tìm hiểu thêm
        </a>
      </div>
    </div>

    {/* Background decoration */}
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#c9da2a]/10 via-white to-white -z-10"></div>
  </section>
);

export default HeroSection;
