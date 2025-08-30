import React from 'react';
import "./style.css";

export default function IssuesSection() {
  return (
    <section id="issues" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Vấn đề doanh nghiệp gặp phải</h2>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
          Trong hành trình phát triển, doanh nghiệp luôn đối mặt với nhiều thách thức làm chậm bước tiến bền vững
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Quản lý rời rạc, thiếu kết nối giữa các phòng ban</h3>
            <p className="text-gray-600">
              Thông tin không được đồng bộ giữa các bộ phận, gây khó khăn trong việc phối hợp và ra quyết định.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Khó kiểm soát chi phí, hàng tồn kho, dòng tiền</h3>
            <p className="text-gray-600">
              Thiếu công cụ theo dõi hiệu quả, dẫn đến lãng phí và rủi ro về tài chính.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Báo cáo chậm, thiếu số liệu thời gian thực</h3>
            <p className="text-gray-600">
              Không có cái nhìn tổng quan tức thời về tình hình kinh doanh, ảnh hưởng đến khả năng phản ứng.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Ra quyết định dựa trên cảm tính thay vì dữ liệu</h3>
            <p className="text-gray-600">
              Thiếu nền tảng dữ liệu đáng tin cậy để đưa ra các quyết định chiến lược hiệu quả.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}