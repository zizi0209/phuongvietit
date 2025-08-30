import React from 'react';
import "./style.css";

// Data for benefits
const benefits = [
  {
    id: 1,
    title: "Tối ưu chi phí vận hành",
    description: "Cắt giảm đáng kể chi phí quản lý và vận hành thông qua tự động hóa quy trình."
  },
  {
    id: 2,
    title: "Nâng cao năng suất & hiệu quả",
    description: "Giúp đội ngũ làm việc thông minh hơn, hoàn thành nhiều việc hơn trong thời gian ngắn hơn."
  },
  {
    id: 3,
    title: "Ra quyết định nhanh chóng, chính xác",
    description: "Dựa trên dữ liệu trực quan, báo cáo thời gian thực, hỗ trợ lãnh đạo hành động kịp thời."
  },
  {
    id: 4,
    title: "Minh bạch & linh hoạt mở rộng",
    description: "Xây dựng hệ thống quản trị minh bạch, dễ dàng mở rộng quy mô khi doanh nghiệp phát triển."
  }
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Giá trị cho doanh nghiệp</h2>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
          Với PV-ERP, doanh nghiệp không chỉ tiết kiệm chi phí và tăng năng suất, mà còn minh bạch dữ liệu, ra quyết định nhanh và xây dựng nền tảng tăng trưởng bền vững
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit) => (
            <div 
              key={benefit.id} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-3 text-[#3fa548]">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}