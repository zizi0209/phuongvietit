import React from 'react';
import "./style.css";

export default function DeploymentSection() {
  return (
    <section id="deployment" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Quy trình triển khai ERP</h2>
        
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="flex items-start">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#3fa548] text-white font-bold mr-4 flex-shrink-0">
              1
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Tư vấn</h3>
              <p className="text-gray-600">Chúng tôi sẽ tư vấn giải pháp phù hợp nhất với nhu cầu của doanh nghiệp bạn.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#3fa548] text-white font-bold mr-4 flex-shrink-0">
              2
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Khảo sát</h3>
              <p className="text-gray-600">Khảo sát hiện trạng và nhu cầu cụ thể để xây dựng kế hoạch triển khai chi tiết.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#3fa548] text-white font-bold mr-4 flex-shrink-0">
              3
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Triển khai</h3>
              <p className="text-gray-600">Triển khai hệ thống ERP theo đúng kế hoạch và timeline đã đề ra.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#3fa548] text-white font-bold mr-4 flex-shrink-0">
              4
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Đào tạo</h3>
              <p className="text-gray-600">Đào tạo nhân viên sử dụng hệ thống một cách hiệu quả và chuyên nghiệp.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#3fa548] text-white font-bold mr-4 flex-shrink-0">
              5
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Bảo trì</h3>
              <p className="text-gray-600">Hỗ trợ bảo trì, nâng cấp và khắc phục sự cố để đảm bảo hệ thống luôn hoạt động ổn định.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}