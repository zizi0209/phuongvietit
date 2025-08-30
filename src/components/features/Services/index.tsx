import React from 'react';
import { FaCity, FaCogs, FaNetworkWired, FaUsersCog } from 'react-icons/fa';
import ServiceCard from './ServiceCard';

const ServicesSection = () => (
  <section id="services" className="py-20 bg-[#ffffff]">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#2F3542] leading-tight">Dịch vụ của chúng tôi</h2>
        <p className="text-gray-500 mt-2">Giải pháp Odoo ERP chuyên nghiệp và linh hoạt.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ServiceCard icon={<FaCity />} title="Tư vấn & Triển khai" description="Phân tích nhu cầu, xây dựng lộ trình và triển khai Odoo phù hợp với quy trình của bạn." />
        <ServiceCard icon={<FaCogs />} title="Tùy chỉnh Odoo" description="Phát triển các module và tính năng độc đáo để đáp ứng yêu cầu đặc thù của doanh nghiệp." />
        <ServiceCard icon={<FaNetworkWired />} title="Tích hợp hệ thống" description="Kết nối Odoo với các phần mềm, website, sàn TMĐT và các nền tảng khác." />
        <ServiceCard icon={<FaUsersCog />} title="Đào tạo & Hỗ trợ" description="Đào tạo người dùng, cung cấp tài liệu và hỗ trợ kỹ thuật nhanh chóng sau triển khai." />
      </div>
    </div>
  </section>
);

export default ServicesSection;
