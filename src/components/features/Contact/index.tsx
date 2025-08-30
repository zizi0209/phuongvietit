import React from 'react';
import DeploymentSection from "@/components/features/Deployment";
import CTASection from "@/components/features/CTA";
import "./style.css";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-10 text-4xl md:text-5xl font-extrabold text-[#2F3542]">
          Liên hệ
        </h2>
        <section className="erp-two-col">
          <DeploymentSection />
          <CTASection />
        </section>
      </div>
    </section>
  );
};

export default Contact;