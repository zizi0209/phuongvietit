import React from 'react';
import "./style.css";

// Mock data for features/modules
const features = [
  {
    id: 1,
    title: "Quản lý bán hàng",
    description: "Tối ưu quy trình bán hàng từ đơn hàng đến thanh toán",
    icon: "🛒"
  },
  {
    id: 2,
    title: "Quản lý mua hàng",
    description: "Theo dõi nhà cung cấp, đơn mua hàng và công nợ",
    icon: "📦"
  },
  {
    id: 3,
    title: "Quản lý kho",
    description: "Kiểm soát tồn kho, nhập xuất và chuyển kho chính xác",
    icon: "📊"
  },
  {
    id: 4,
    title: "Kế toán - Tài chính",
    description: "Tự động hóa kế toán, theo dõi dòng tiền và báo cáo tài chính",
    icon: "💰"
  },
  {
    id: 5,
    title: "Quản lý nhân sự",
    description: "Theo dõi thông tin nhân viên, chấm công và lương",
    icon: "👥"
  },
  {
    id: 6,
    title: "CRM",
    description: "Quản lý khách hàng, cơ hội bán hàng và chăm sóc khách hàng",
    icon: "💬"
  },
  {
    id: 7,
    title: "Báo cáo & Phân tích",
    description: "Báo cáo thời gian thực và phân tích dữ liệu kinh doanh",
    icon: "📈"
  },
  {
    id: 8,
    title: "Quản lý dự án",
    description: "Theo dõi tiến độ dự án, phân công công việc và ngân sách",
    icon: "📋"
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-bold text-center mb-6">Một nền tảng – Kết nối toàn diện</h2>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
          PV-ERP hợp nhất toàn bộ quy trình và dữ liệu, tạo dòng chảy quản trị xuyên suốt – từ vận hành đến chiến lược
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}