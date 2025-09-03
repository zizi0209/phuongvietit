"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const NAV = [
  { id: "gioi-thieu", label: "Giới thiệu" },
  { id: "dat-van-de", label: "Đặt vấn đề" },
  { id: "giai-phap", label: "Giải pháp" },
  { id: "chuc-nang", label: "Chức năng" },
  { id: "tinh-nang", label: "Tính năng" },
  { id: "loi-ich", label: "Lợi ích" },
  { id: "lien-he", label: "Liên hệ" },
];

export default function Header() {
  const [active, setActive] = useState("gioi-thieu");

  const onClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(
      Boolean
    ) as HTMLElement[];
    if (!sections.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => en.isIntersecting && setActive(en.target.id));
      },
      { threshold: 0.4, rootMargin: "-80px 0px -40% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="container mx-auto container-padding h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg flex items-center gap-2">
          <Image src="/logo.png" alt="PV-ERP" width={60} height={85} className="h-6 w-auto" />
          <span>PV-ERP</span>
        </Link>
        <nav className="hidden md:flex items-center gap-2">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => onClick(e, item.id)}
              className={cn(
                "px-3 py-2 rounded-full text-sm transition-colors",
                active === item.id
                  ? "bg-[hsl(var(--primary))] text-white"
                  : "text-muted-foreground hover:bg-muted"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
