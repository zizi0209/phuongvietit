"use client"
import React, { useState } from 'react';
import "./style.css";

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ với bạn sớm.');
    // Reset form
    setFormData({ name: '', email: '', phone: '', company: '' });
  };

  return (
    <section id="cta" className="py-16 bg-[#3fa548] text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto bg-white text-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="cta-h2">Sẵn sàng chuyển đổi số cùng PV-ERP?</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Họ & tên
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Nhập họ tên"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Nhập email"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Số điện thoại
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Nhập số điện thoại"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Công ty
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Nhập tên công ty"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                type="submit"
                className="bg-[#3fa548] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:bg-gradient-to-r hover:from-[#34a03e] hover:to-[#3fa548] hover:scale-105 shadow-sm hover:shadow-md focus:outline-none focus:shadow-outline"
              >
                Đăng ký Demo
              </button>
              <button
                type="button"
                className="bg-white text-[#3fa548] font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:bg-gray-100 hover:scale-105 shadow-sm hover:shadow-md focus:outline-none focus:shadow-outline border-2 border-[#3fa548]"
              >
                Liên hệ tư vấn ngay
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}