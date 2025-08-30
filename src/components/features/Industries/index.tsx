import React from 'react';
import "./style.css";

// Data for industries
const industries = [
  {
    id: 1,
    title: "Thương mại",
    description: "Tối ưu chuỗi cung ứng, quản lý kho hàng, phân tích bán hàng chi tiết để ra quyết định nhanh chóng.",
    icon: "🏪"
  },
 {
    id: 2,
    title: "Sản xuất",
    description: "Tích hợp lập kế hoạch thông minh, kiểm soát chất lượng, giám sát hiệu suất sản xuất theo thời gian thực.",
    icon: "🏭"
  },
 {
    id: 3,
    title: "Dịch vụ",
    description: "Nâng cao trải nghiệm khách hàng qua CRM & quản lý dự án, đồng thời tối ưu hóa nội bộ với quy trình tự động.",
    icon: "💻"
  }
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">ERP linh hoạt – Phù hợp mọi lĩnh vực</h2>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
          Dù doanh nghiệp hoạt động trong Thương mại, Sản xuất hay Dịch vụ, hệ thống PV-ERP đều có thể tùy chỉnh để phù hợp với đặc thù ngành, giúp tối ưu vận hành và nâng cao hiệu quả quản trị.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {industries.map((industry) => (
            <div 
              key={industry.id} 
              className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-30 text-center"
            >
              <div className="text-4xl mb-4">{industry.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{industry.title}</h3>
              <p className="text-gray-600">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}