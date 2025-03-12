

/* 
import React from 'react';
import serviceImage from '../image/service/webdev.jpg';

const Services = () => {
  const services = [
    { id: 1, title: 'Web Development', description: 'Building responsive and dynamic websites tailored to your needs.', color: 'bg-purple-600', hover: 'hover:bg-purple-700' },
    { id: 2, title: 'UI/UX Design', description: 'Creating user-friendly and visually appealing designs.', color: 'bg-sky-500', hover: 'hover:bg-sky-600' },
    { id: 3, title: 'Maintenance', description: 'Ensuring smooth operation and updates for your website.', color: 'bg-green-500', hover: 'hover:bg-green-600' },
    { id: 4, title: 'Marketing', description: 'Boosting your brand with strategic digital marketing solutions.', color: 'bg-yellow-500', hover: 'hover:bg-yellow-600' },
  ];

  return (
    <div className="w-full flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 w-full max-w-7xl">
        {services.map((service) => (
          <div
            key={service.id}
            className="w-full bg-white rounded-xl transform transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden hover:-translate-y-2"
          >
            <img className="w-full h-48 object-cover" src={serviceImage} alt={service.title} />
            <div className="p-5">
              <h2 className="font-bold text-lg mb-2 text-center">{service.title}</h2>
              <p className="text-sm text-gray-600 text-center">{service.description}</p>
            </div>
            <div className="flex justify-center mb-4">
              <a
                href="#"
                className={`text-white ${service.color} px-4 py-2 rounded-md transition-colors duration-300 ${service.hover}`}
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


/* 
import React from 'react';
import serviceImage from '../image/service/webdev.jpg';

const Services = () => {
  const services = [
    { id: 1, title: 'Web Development', description: 'Building responsive and dynamic websites tailored to your needs.', color: 'bg-purple-600', hover: 'hover:bg-purple-700' },
    { id: 2, title: 'UI/UX Design', description: 'Creating user-friendly and visually appealing designs.', color: 'bg-sky-500', hover: 'hover:bg-sky-600' },
    { id: 3, title: 'Maintenance', description: 'Ensuring smooth operation and updates for your website.', color: 'bg-green-500', hover: 'hover:bg-green-600' },
    { id: 4, title: 'Marketing', description: 'Boosting your brand with strategic digital marketing solutions.', color: 'bg-yellow-500', hover: 'hover:bg-yellow-600' },
    { id: 5, title: 'SEO Optimization', description: 'Enhancing your website’s visibility on search engines.', color: 'bg-red-500', hover: 'hover:bg-red-600' },
    { id: 6, title: 'Content Writing', description: 'Crafting engaging and SEO-friendly content.', color: 'bg-blue-500', hover: 'hover:bg-blue-600' }
  ];

  return (
    <div className="w-full flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-6xl">
        {services.map((service) => (
          <div
            key={service.id}
            className="w-full bg-white rounded-lg transform transition-all duration-300 shadow-md hover:shadow-xl overflow-hidden hover:-translate-y-1"
          >
            <img className="w-full h-56 object-cover" src={serviceImage} alt={service.title} />
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

export default Services;
 */
import React from 'react';
import webDevImage from '../image/service/Web.png';
import uiUxImage from '../image/service/UIUX.png';
import maintenanceImage from '../image/service/Maintanance.png';
import marketingImage from '../image/service/marketing.png';
import seoImage from '../image/service/Seo.png';
import contentImage from '../image/service/Content.png';

const Services = () => {
  const services = [
    { id: 1, title: 'Web Development', description: 'Building responsive and dynamic websites tailored to your needs.', color: 'bg-purple-600', hover: 'hover:bg-purple-700', image: webDevImage },
    { id: 2, title: 'UI/UX Design', description: 'Creating user-friendly and visually appealing designs.', color: 'bg-sky-500', hover: 'hover:bg-sky-600', image: uiUxImage },
    { id: 3, title: 'Maintenance', description: 'Ensuring smooth operation and updates for your website.', color: 'bg-green-500', hover: 'hover:bg-green-600', image: maintenanceImage },
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

export default Services;
