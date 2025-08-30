import React from 'react';
import "./style.css";

export default function SolutionsSection() {
  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Giải pháp PV-ERP</h2>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
          PV-ERP giúp doanh nghiệp tối ưu quy trình, hợp nhất dữ liệu, tăng hiệu quả và tạo bước nhảy vọt trong quản trị
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Tích hợp dữ liệu – Xóa bỏ rời rạc</h3>
            <p className="text-gray-600">
              PV-ERP hợp nhất toàn bộ thông tin từ các phòng ban vào một hệ thống duy nhất, giúp CEO có cái nhìn tổng thể chỉ qua một bảng điều khiển.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Kiểm soát chi phí & dòng tiền chính xác</h3>
            <p className="text-gray-600">
              Mọi giao dịch tài chính, tồn kho, công nợ được cập nhật tức thời, hỗ trợ dự báo và kiểm soát rủi ro hiệu quả.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Báo cáo thời gian thực</h3>
            <p className="text-gray-600">
              Thay vì chờ đợi tổng hợp thủ công, PV-ERP cung cấp báo cáo phân tích tức thì, minh bạch, hỗ trợ ra quyết định nhanh chóng.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Chiến lược dựa trên dữ liệu</h3>
            <p className="text-gray-600">
              PV-ERP cung cấp công cụ phân tích sâu, giúp nhà lãnh đạo dựa vào số liệu để đưa ra chiến lược phát triển, thay vì chỉ cảm tính.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}