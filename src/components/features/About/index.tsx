"use client";

import React, { useEffect, useRef, useState } from "react";
//import Image from "next/image";
import AppImage from "@/components/AppImage";

const AboutSection = () => {
  const slides = [
    { src: "/Certificate.png", alt: "Giấy chứng nhận đăng ký doanh nghiệp 1" },
    { src: "/Certificate2.png", alt: "Giấy chứng nhận đăng ký doanh nghiệp 2" },
  ];

  const [index, setIndex] = useState(0);
  const [zoomIndex, setZoomIndex] = useState<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto slide
  useEffect(() => {
    if (slides.length <= 1) return;
    intervalRef.current = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      5000
    );
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [slides.length]);

  // ESC đóng modal
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoomIndex(null);
      if (zoomIndex !== null) {
        if (e.key === "ArrowRight") {
          setZoomIndex((prev) =>
            prev !== null ? (prev + 1) % slides.length : null
          );
        }
        if (e.key === "ArrowLeft") {
          setZoomIndex((prev) =>
            prev !== null ? (prev - 1 + slides.length) % slides.length : null
          );
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoomIndex, slides.length]);

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Câu chuyện của chúng tôi */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2F3542]">
            Câu chuyện của chúng tôi
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            <span className="font-bold text-[#3fa548]">
              Phuong Viet IT&amp;E
            </span>{" "}
            được thành lập năm 2020 với sứ mệnh kết hợp công nghệ thông tin và
            giải pháp môi trường tại Việt Nam. Chúng tôi tập trung vào các dự án
            phần mềm quản lý doanh nghiệp và tư vấn đánh giá tác động môi
            trường, với phương châm{" "}
            <span className="italic text-[#c9da2a]">
              “Tín - Tâm - Trí - Nhân”
            </span>{" "}
            để mang đến giá trị bền vững cho khách hàng.
          </p>
        </div>

        {/* 2 cột */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* LEFT */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#2F3542]">
                Năng lực &amp; Chứng chỉ
              </h3>
              <p className="mt-4 text-gray-700">
                Chúng tôi sở hữu các chứng nhận uy tín trong lĩnh vực CNTT và
                môi trường, khẳng định năng lực chuyên môn và cam kết chất lượng
                dịch vụ mà{" "}
                <span className="font-semibold text-[#3fa548]">
                  Phuong Viet IT&amp;E
                </span>{" "}
                mang đến.
              </p>
            </div>

            {/* Thông tin công ty */}
            <div className="mt-10 rounded-2xl bg-[#f8faf8] p-6 shadow-sm ring-1 ring-gray-200/60">
              <h4 className="text-xl font-semibold text-[#2F3542] mb-4">
                Thông tin công ty
              </h4>
              <dl className="space-y-3 text-gray-800">
                <div>
                  <dt className="font-medium text-[#3fa548]">Tên công ty:</dt>
                  <dd>
                    Công ty TNHH Công nghệ thông tin và Môi trường Phương Việt
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-[#3fa548]">
                    Ngày thành lập:
                  </dt>
                  <dd>23/09/2020 (đăng ký thay đổi lần 1: 08/09/2022)</dd>
                </div>
                <div>
                  <dt className="font-medium text-[#3fa548]">
                    Mã số doanh nghiệp:
                  </dt>
                  <dd>1801682324</dd>
                </div>
                <div>
                  <dt className="font-medium text-[#3fa548]">
                    Người đại diện:
                  </dt>
                  <dd>Trần Kim Tiêu Vân Phương</dd>
                </div>
                <div>
                  <dt className="font-medium text-[#3fa548]">Vốn điều lệ:</dt>
                  <dd>500.000.000 VNĐ</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative w-full h-full flex items-center">
            <div className="relative w-full h-full min-h-[500px]">
              {slides.map((img, i) => (
                <button
                  key={img.src}
                  className="absolute inset-0 transition-opacity duration-700 ease-out focus:outline-none"
                  style={{ opacity: i === index ? 1 : 0 }}
                  onClick={() => setZoomIndex(i)}
                >
                  <AppImage
                    src={img.src}
                    alt={img.alt}
                    fill
                    priority={i === 0}
                    className="object-contain select-none"
                  />
                </button>
              ))}

              {/* Dots */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, i) => (
                  <span
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-2 w-2 rounded-full cursor-pointer transition-all ${
                      i === index ? "bg-[#3fa548] w-6" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal zoom ảnh: click ảnh để đóng; mũi tên & nút X không bị ảnh hưởng */}
      {zoomIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          {/* overlay phía sau modal: click để đóng */}
          <div
            className="absolute inset-0"
            onClick={() => setZoomIndex(null)}
          />

          <div
            className="relative max-w-5xl w-full max-h-[90vh] animate-[zoomIn_.2s_ease-out]"
            onClick={(e) => e.stopPropagation()} // chặn overlay phía sau
          >
            {/* Ảnh phóng to */}
            <AppImage
              src={slides[zoomIndex].src}
              alt={slides[zoomIndex].alt}
              width={1600}
              height={1200}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg select-none"
              priority
            />

            {/* LỚP NÚT TRONG SUỐT PHỦ TOÀN ẢNH -> CLICK ẢNH ĐỂ ĐÓNG */}
            <button
              onClick={() => setZoomIndex(null)}
              className="absolute inset-0 z-0 cursor-zoom-out"
              aria-label="Đóng ảnh phóng to"
              title="Đóng"
            />

            {/* Nút đóng */}
            <button
              onClick={() => setZoomIndex(null)}
              className="absolute -top-3 -right-3 z-10 bg-white text-[#2F3542] shadow-lg rounded-full h-10 w-10 grid place-items-center font-bold"
              aria-label="Đóng"
              title="Đóng"
            >
              ×
            </button>

            {/* Prev */}
            <button
              onClick={() =>
                setZoomIndex((prev) =>
                  prev !== null
                    ? (prev - 1 + slides.length) % slides.length
                    : null
                )
              }
              className="absolute top-1/2 -left-10 -translate-y-1/2 z-10 bg-white/85 hover:bg-white text-[#2F3542] rounded-full h-10 w-10 flex items-center justify-center shadow"
              aria-label="Ảnh trước"
              title="Ảnh trước"
            >
              ‹
            </button>

            {/* Next */}
            <button
              onClick={() =>
                setZoomIndex((prev) =>
                  prev !== null ? (prev + 1) % slides.length : null
                )
              }
              className="absolute top-1/2 -right-10 -translate-y-1/2 z-10 bg-white/85 hover:bg-white text-[#2F3542] rounded-full h-10 w-10 flex items-center justify-center shadow"
              aria-label="Ảnh tiếp theo"
              title="Ảnh tiếp theo"
            >
              ›
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes zoomIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
