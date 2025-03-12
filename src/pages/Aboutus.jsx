
import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    // Ensures the page is scrolled to the top when About page is loaded
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f4f4f9] text-gray-800 min-h-screen py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">About ICT Vista</h2>
        <p className="text-lg md:text-xl leading-relaxed">
          Welcome to ICT Vista, your trusted partner in Information and Communications Technology (ICT) solutions. Founded in 2024 and headquartered in 2nd Floor, 27/A Sangsad Av. Monipuripara, Dhaka 1215, Bangladesh. 
          We are striving to be the best Web & Software Technology Services-based company in Bangladesh. 
          We have been working in the ICT sector since 2008, providing a wide range of services including Web Development, Software Development, Mobile App Development, E-commerce solutions, and more.
        </p>
        <p className="text-lg md:text-xl leading-relaxed mt-4">
          Our dedicated team has a wealth of experience and expertise, offering high-quality, user-friendly customized solutions. ICT Vista has been promoted by highly experienced professionals dedicated to providing total IT solutions under one roof.
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#006B3F] text-white p-6 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
          <p className="text-lg">
            To be a leading ICT service provider, driving innovation and technological advancement for businesses worldwide. We aim to bridge the gap between businesses and digital excellence through customized and scalable technology solutions.
          </p>
        </div>
        <div className="bg-[#1F3A68] text-white p-6 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="text-lg">
            ICT Vista is committed to simplifying technology for clients and contributing to national development by providing accessible IT services. Our mission is to enhance business efficiency through distinctive web solutions.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12">
        <h3 className="text-3xl font-semibold text-center mb-6">
          Why Choose Us?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#F6D02F] text-black p-6 rounded-2xl shadow-lg text-center">
            <h4 className="text-xl font-semibold mb-2">Innovation</h4>
            <p>
              We leverage the latest technology trends to provide futuristic solutions.
            </p>
          </div>
          <div className="bg-[#00A6A6] text-white p-6 rounded-2xl shadow-lg text-center">
            <h4 className="text-xl font-semibold mb-2">Expert Team</h4>
            <p>
              A skilled team of professionals with vast industry experience ready to meet your needs.
            </p>
          </div>
          <div className="bg-[#F26B38] text-white p-6 rounded-2xl shadow-lg text-center">
            <h4 className="text-xl font-semibold mb-2">Customer-Centric Services</h4>
            <p>
              Tailored solutions designed to meet the specific needs of businesses.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12">
        <h3 className="text-3xl font-semibold text-center mb-6">
          Technologies We Use
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-[#004F8C] text-white p-6 rounded-2xl shadow-lg">
            <h4 className="text-xl font-semibold mb-2">Web Technologies</h4>
            <p>
              HTML5, CSS3, JavaScript, React, AngularJS, Node.js, Vue
            </p>
          </div>
          <div className="bg-[#9B4D96] text-white p-6 rounded-2xl shadow-lg">
            <h4 className="text-xl font-semibold mb-2">Mobile Technologies</h4>
            <p>
              Android, iOS, Windows, Augmented Reality, NFC, iBeacon
            </p>
          </div>
          <div className="bg-[#2F6C57] text-white p-6 rounded-2xl shadow-lg">
            <h4 className="text-xl font-semibold mb-2">Databases</h4>
            <p>Oracle, MySQL, MongoDB, PostgreSQL, MSSQL</p>
          </div>
          <div className="bg-[#D8550A] text-white p-6 rounded-2xl shadow-lg">
            <h4 className="text-xl font-semibold mb-2">E-commerce Solutions</h4>
            <p>Shopify, WooCommerce, Magento, Custom E-commerce Solutions</p>
          </div>
          <div className="bg-[#5F7042] text-white p-6 rounded-2xl shadow-lg">
            <h4 className="text-xl font-semibold mb-2">Software Solutions</h4>
            <p>Custom Software Development, CRM, ERP Solutions</p>
          </div>
          <div className="bg-[#9D1B40] text-white p-6 rounded-2xl shadow-lg">
            <h4 className="text-xl font-semibold mb-2">Digital Marketing</h4>
            <p>SEO, SEM, Content Marketing, Social Media Strategy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

