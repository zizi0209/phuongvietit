"use client"
import React, { useEffect, useRef, useState } from "react";
// import Image from "next/image";
import AppImage from "@/components/AppImage";

const LINKS = [
  { href: "#", label: "Giới thiệu" },
  { href: "#issues", label: "Đặt vấn đề" },
  { href: "#solutions", label: "Giải pháp" },
  { href: "#features", label: "Chức năng" },
  { href: "#industries", label: "Tính năng" },
  { href: "#benefits", label: "Lợi ích" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  // Đóng menu khi resize lên desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Bật shadow khi scroll
  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Khóa scroll body khi mở menu
  useEffect(() => {
    const root = document.documentElement;
    if (open) root.style.overflow = "hidden";
    else root.style.overflow = "";
    return () => {
      root.style.overflow = "";
    };
  }, [open]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    const id = href.startsWith("#") ? href.slice(1) : "";
    if (id) {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        const headerH = headerRef.current?.offsetHeight ?? 0; // đo chiều cao header thực tế
        const y = el.getBoundingClientRect().top + window.scrollY - headerH;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
    setOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className={[
        "fixed top-0 left-0 right-0 z-50 border-b border-gray-200/60",
        // Mobile: nền trắng đậm, không trong suốt
        "bg-white shadow-sm",
        // Từ md trở lên: nền mờ như cũ
        "md:bg-white/70 md:backdrop-blur-md supports-[backdrop-filter]:md:bg-white/60",
        elevated ? "md:shadow-sm" : "md:shadow-none",
      ].join(" ")}
    >
      <nav className="container mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <AppImage
            src="/logo.png"
            alt="Phương Việt Logo"
            width={80}
            height={65}
            priority
            className="h-8 w-auto md:h-10"
          />
          <span className="sr-only">Trang chủ</span>
        </a>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 font-semibold">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => handleNavClick(e, l.href)}
                className="py-2 border-b-2 border-transparent text-[#358e3d] hover:text-[#c9da2a] hover:border-[#c9da2a] transition-all duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "#contact")}
          className="hidden md:inline-flex bg-[#3fa548] text-white px-4 lg:px-5 py-1.5 rounded-full font-bold hover:bg-gradient-to-r from-[#34a03e] to-[#3fa548] transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md"
        >
          Liên hệ
        </a>

        {/* Hamburger (mobile) */}
        <button
          aria-label={open ? "Đóng menu" : "Mở menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 border border-gray-300/70"
        >
          <svg
            className={`h-5 w-5 transition-transform ${
              open ? "rotate-90" : ""
            }`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            {open ? (
              <path
                strokeWidth="2"
                strokeLinecap="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeWidth="2"
                strokeLinecap="round"
                d="M3 6h18M3 12h18M3 18h18"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile sheet */}
      <div
        className={[
          "md:hidden transition-[max-height,opacity] duration-300 overflow-hidden",
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0",
          "bg-white border-t border-gray-100", // mobile: nền trắng đậm
        ].join(" ")}
      >
        <div className="container mx-auto px-4 sm:px-6 py-3">
          <ul className="flex flex-col divide-y divide-gray-100/70 font-semibold">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => handleNavClick(e, l.href)}
                  className="block py-3 text-[#358e3d] hover:text-[#2b6e31] transition"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="pt-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="inline-flex w-full items-center justify-center bg-[#3fa548] text-white px-4 py-2 rounded-xl font-bold hover:bg-gradient-to-r from-[#34a03e] to-[#3fa548] transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Liên hệ
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
