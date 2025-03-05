/* import React from 'react'

const Services = () => {
  return (
    <div>
        <div className="service">
            
            
        </div>
    </div>
  )
}

export default Services */
/* import React from 'react';

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Simple Yet Beautiful Card Design with TailwindCSS. Subscribe to our Youtube channel for more ...',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    buttonColor: 'bg-purple-600 hover:bg-purple-700'
  },
  {
    id: 2,
    title: 'UI/UX',
    description: 'Simple Yet Beautiful Card Design with TailwindCSS. Subscribe to our Youtube channel for more ...',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    buttonColor: 'bg-sky-500 hover:bg-sky-700'
  },
  {
    id: 3,
    title: 'Marketing',
    description: 'Simple Yet Beautiful Card Design with TailwindCSS. Subscribe to our Youtube channel for more ...',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    buttonColor: 'bg-green-500 hover:bg-green-700'
  },
  {
    id: 4,
    title: 'Maintaince',
    description: 'Simple Yet Beautiful Card Design with TailwindCSS. Subscribe to our Youtube channel for more ...',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    buttonColor: 'bg-yellow-500 hover:bg-yellow-700'
  }
];

const Services = () => {
  return (
    <div className="bg-gray-100 w-full min-h-screen flex flex-wrap gap-4 justify-center items-center p-4">
      {services.map((service) => (
        <div
          key={service.id}
          className="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl"
        >
          <img
            className="h-40 object-cover rounded-xl"
            src={service.image}
            alt="Service"
          />
          <div className="p-2">
            <h2 className="font-bold text-lg mb-2">{service.title}</h2>
            <p className="text-sm text-gray-600">{service.description}</p>
          </div>
          <div className="m-2">
            <a
              role="button"
              href="#"
              className={`text-white px-3 py-1 rounded-md ${service.buttonColor}`}
            >
              Learn More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services; */
/* import React from 'react';
import serviceImage from '../image/service/webdev.jpg'; // Import the image from local assets

const Services = () => {
  const services = [
    { id: 1, title: 'Web Development', description: 'Building responsive and dynamic websites tailored to your needs.', color: 'bg-purple-600', hover: 'hover:bg-purple-700' },
    { id: 2, title: 'UI/UX Design', description: 'Creating user-friendly and visually appealing designs.', color: 'bg-sky-500', hover: 'hover:bg-sky-600' },
    { id: 3, title: 'Maintenance', description: 'Ensuring smooth operation and updates for your website.', color: 'bg-green-500', hover: 'hover:bg-green-600' },
    { id: 4, title: 'Marketing', description: 'Boosting your brand with strategic digital marketing solutions.', color: 'bg-yellow-500', hover: 'hover:bg-yellow-600' },
  ];

  return (
    <div className="bg-gray-100 w-full min-h-screen flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl"
          >
            <img
              className="h-40 object-cover rounded-xl"
              src={serviceImage} // Use imported image
              alt={service.title}
            />
            <div className="p-2">
              <h2 className="font-bold text-lg mb-2">{service.title}</h2>
              <p className="text-sm text-gray-600">
                {service.description}
              </p>
            </div>
            <div className="m-2">
              <a
                role="button"
                href="#"
                className={`text-white ${service.color} px-3 py-1 rounded-md ${service.hover}`}
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
import serviceImage from '../image/service/webdev.jpg'; // Import the image from local assets

const Services = () => {
  const services = [
    { id: 1, title: 'Web Development', description: 'Building responsive and dynamic websites tailored to your needs.', color: 'bg-purple-600', hover: 'hover:bg-purple-700' },
    { id: 2, title: 'UI/UX Design', description: 'Creating user-friendly and visually appealing designs.', color: 'bg-sky-500', hover: 'hover:bg-sky-600' },
    { id: 3, title: 'Maintenance', description: 'Ensuring smooth operation and updates for your website.', color: 'bg-green-500', hover: 'hover:bg-green-600' },
    { id: 4, title: 'Marketing', description: 'Boosting your brand with strategic digital marketing solutions.', color: 'bg-yellow-500', hover: 'hover:bg-yellow-600' },
  ];

  return (
    <div className="bg-gray-100 w-full min-h-screen flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {services.map((service) => (
          <div
            key={service.id}
            className="w-full bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl overflow-hidden"
          >
            <img
              className="w-full h-48 object-cover"
              src={serviceImage} // Use imported image
              alt={service.title}
            />
            <div className="p-4">
              <h2 className="font-bold text-lg mb-2 text-center">{service.title}</h2>
              <p className="text-sm text-gray-600 text-center">
                {service.description}
              </p>
            </div>
            <div className="flex justify-center mb-4">
              <a
                role="button"
                href="#"
                className={`text-white ${service.color} px-4 py-2 rounded-md ${service.hover}`}
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
