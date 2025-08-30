import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-16 text-4xl md:text-5xl font-extrabold text-[#2F3542]">
          Liên hệ
        </h2>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <p className="text-lg text-gray-700 mb-6 text-center">
            👉 Chúng tôi rất mong nhận được phản hồi từ bạn! Vui lòng điền vào
            form dưới đây hoặc liên hệ trực tiếp qua thông tin sau.
          </p>
          <form>
            <div className="mb-4">
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Lời nhắn
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-[#3fa548] text-white font-bold py-2 px-6 rounded-full 
             transition-all duration-300 transform 
             hover:bg-gradient-to-r hover:from-[#34a03e] hover:to-[#3fa548] 
             hover:scale-105 shadow-sm hover:shadow-md focus:outline-none focus:shadow-outline"
              >
                Gửi
              </button>
            </div>
          </form>

          {/* <div className="mt-8 text-center">
            <p className="text-gray-700">
              Email:{" "}
              <a
                href="mailto:info@example.com"
                className="text-blue-600 hover:underline"
              >
                info@example.com
              </a>
            </p>
            <p className="text-gray-700">Phone: +1 234 567 8900</p>
            <p className="text-gray-700">
              Address: 123 Main Street, Anytown, USA
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;