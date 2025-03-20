import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../image/service/web.png";
import service1 from "../image/service/web.png";
import service2 from "../image/service/UIUX.png";
import service3 from "../image/service/Training2.svg";
import teamImage from "../image/aboutus/ictteam.jpg";

const Join = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center bg-blue-50 px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800">Welcome to ICT Vista</h1>
        <p className="text-lg md:text-xl mt-4 text-gray-600">
          Your Trusted Partner in IT & Digital Transformation
        </p>
        <Link to="/about">
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
            Learn More
          </button>
        </Link>
      </section>

      {/* About Us Section */}
      <section className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-800">Why Choose ICT Vista?</h2>
          <p className="text-gray-700 mt-4">
            We deliver innovative and customized IT solutions with a highly skilled team and
            cutting-edge technology. Our expertise ensures seamless digital transformation for businesses.
          </p>
          <Link to="/about" className="text-blue-600 font-semibold mt-2 inline-block">
            Read More →
          </Link>
        </div>
        {/* Image */}
        <div className="md:w-1/2">
          <img src={teamImage} alt="ICT Vista Team" className="rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-800">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {[
            { title: "Web Development", image: service1 },
            { title: "UI/UX Design", image: service2 },
            { title: "Professional Training", image: service3 }
          ].map((service, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-md bg-white p-6 transition hover:shadow-lg"
            >
              <img src={service.image} alt={service.title} className="rounded-lg w-full h-40 object-cover" />
              <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
              <p className="text-gray-600 mt-2">High-quality service to empower your business.</p>
              <Link to="/services" className="text-blue-500 mt-2 inline-block">
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800">Get in Touch</h2>
          <p className="text-gray-700 mt-4">We'd love to hear from you! Contact us today.</p>
          <Link to="/contact">
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
              Contact Us
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};
export default Join