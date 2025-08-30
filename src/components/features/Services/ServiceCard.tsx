import React, { ReactNode } from 'react';

const ServiceCard = ({ icon, title, description }: { icon: ReactNode; title: string; description: string }) => (
  <div className="bg-light-gray p-8 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center border border-primary-green">
    <div className="flex justify-center items-center mb-4 text-4xl text-primary-green">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-[#2F3542]">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default ServiceCard;
