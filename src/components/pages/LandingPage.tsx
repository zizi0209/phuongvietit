import React from 'react';
import Header from '@/components/features/Header';
import HeroSection from '@/components/features/Hero';
import IssuesSection from '@/components/features/Issues';
import SolutionsSection from '@/components/features/Solutions';
import FeaturesSection from '@/components/features/Features';
import IndustriesSection from '@/components/features/Industries';
import BenefitsSection from '@/components/features/Benefits';
import ContactSection from '@/components/features/Contact';
import Footer from '@/components/features/Footer';
// đã bỏ <ServicesSection /> <AboutSection />

export default function PhuongVietLandingPage() {
  return (
    <div className="bg-white text-[#2F3542] antialiased">
      <Header />
      <main>
        <HeroSection />
        <IssuesSection />
        <SolutionsSection />
        <FeaturesSection />
        <IndustriesSection />
        <BenefitsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
