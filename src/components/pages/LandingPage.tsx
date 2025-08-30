import React from 'react';
import Header from '@/components/features/Header';
import HeroSection from '@/components/features/Hero';
import ServicesSection from '@/components/features/Services';
import AboutSection from '@/components/features/About';
import ContactSection from '@/components/features/Contact';
import Footer from '@/components/features/Footer';

export default function PhuongVietLandingPage() {
  return (
    <div className="bg-white text-[#2F3542] antialiased">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
