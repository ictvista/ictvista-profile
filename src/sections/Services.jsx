
/* import React from 'react';
import webDevImage from '../image/service/Web.png';
import uiUxImage from '../image/service/UIUX.png';

import TrainingImage from '../image/service/training.svg'
import marketingImage from '../image/service/marketing.png';
import seoImage from '../image/service/Seo.jpg';
import contentImage from '../image/service/Content.png';

const Services = () => {
  const services = [
    { id: 1, title: 'Professional Training & Skill Development', description: 'Enhance your skills and expertise with our professional training programs designed for career growth and success.', color: 'bg-purple-600', hover: 'hover:bg-purple-700', image: TrainingImage },
    { id: 2, title: 'Web Development', description: 'Building responsive and dynamic websites tailored to your needs.', color: 'bg-sky-500', hover: 'hover:bg-sky-600', image: webDevImage },
    { id: 3, title: 'UI/UX Design', description: 'Creating user-friendly and visually appealing designs.', color: 'bg-green-500', hover: 'hover:bg-green-600', image: uiUxImage },
    { id: 4, title: 'Marketing', description: 'Boosting your brand with strategic digital marketing solutions.', color: 'bg-yellow-500', hover: 'hover:bg-yellow-600', image: marketingImage },
    { id: 5, title: 'SEO Optimization', description: 'Enhancing your website’s visibility on search engines.', color: 'bg-red-500', hover: 'hover:bg-red-600', image: seoImage },
    { id: 6, title: 'Content Writing', description: 'Crafting engaging and SEO-friendly content.', color: 'bg-blue-500', hover: 'hover:bg-blue-600', image: contentImage }
  ];

  return (
    <div className="w-full flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 w-full max-w-6xl">
        {services.map((service) => (
          <div
            key={service.id}
            className="w-full bg-white rounded-lg transform transition-all duration-300 shadow-md hover:shadow-xl overflow-hidden hover:-translate-y-1"
          >
            <img className="w-full h-52 object-cover" src={service.image} alt={service.title} />
            <div className="p-5">
              <h2 className="font-bold text-lg mb-2 text-center">{service.title}</h2>
              <p className="text-sm text-gray-600 text-center">{service.description}</p>
            </div>
            <div className="flex justify-center mb-5">
              <a
                href="#"
                className={`text-white ${service.color} px-5 py-2.5 rounded-md transition-colors duration-300 ${service.hover}`}
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services; */
import React from 'react';
import webDevImage from '../image/service/Web.png';
import uiUxImage from '../image/service/UIUX.png';
import TrainingImage from '../image/service/training.svg';
import marketingImage from '../image/service/marketing.png';
import seoImage from '../image/service/Seo.jpg';
import contentImage from '../image/service/Content.png';

const Services = () => {
  const services = [
    { id: 1, title: 'Professional Training & Skill Development', description: 'Enhance your skills with our expert-led training programs.', image: TrainingImage },
    { id: 2, title: 'Web Development', description: 'Building responsive and dynamic websites tailored to your needs.', image: webDevImage },
    { id: 3, title: 'UI/UX Design', description: 'Creating user-friendly and visually appealing designs.', image: uiUxImage },
    { id: 4, title: 'Marketing', description: 'Boosting your brand with strategic digital marketing solutions.', image: marketingImage },
    { id: 5, title: 'SEO Optimization', description: 'Enhancing your website’s visibility on search engines.', image: seoImage },
    { id: 6, title: 'Content Writing', description: 'Crafting engaging and SEO-friendly content.', image: contentImage }
  ];

  return (
    <div className="w-full flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full max-w-6xl">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative group w-full h-52 rounded-lg overflow-hidden shadow-lg cursor-pointer"
          >
            <img
              className="w-full h-full object-cover transform transition duration-300 group-hover:scale-110"
              src={service.image}
              alt={service.title}
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white text-lg font-semibold p-4 opacity-100 transition-opacity duration-300 group-hover:opacity-0">
              {service.title}
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center text-white p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h2 className="text-lg font-bold text-center">{service.title}</h2>
              <hr className="w-10 my-2 border-white" />
              <p className="text-sm text-center">{service.description}</p>
              <a href="#" className="mt-2 text-blue-400 flex items-center">Read More →</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;