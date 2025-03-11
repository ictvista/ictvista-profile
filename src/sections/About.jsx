
import React from 'react';
import img2 from "../image/aboutus/girl-pc.jpg" 
import img1 from "../image/aboutus/team.jpg"

const About = () => {
  return (
    <section className="py-16 flex items-center bg-white mt-20 mb-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <img
            src={img1}
            alt="Team working"
            className="w-64 h-70 md:w-80 rounded-lg shadow-lg relative z-10"
          />
          <img
            src={img2}
            alt="Team collaboration"
            className="w-48 min-h-60 md:w-64 rounded-lg shadow-lg absolute -top-10 -left-10"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-left">
          <div className="text-center text-xl sm:text-2xl font-semibold mb-10">
            <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
          </div>
          <p className="text-gray-700 mt-4 leading-relaxed">
          At ICT Vista, we are committed to transforming businesses with innovative and reliable ICT solutions. Founded in 2024, we specialize in ICT management, system integration, software development, cybersecurity, cloud services, and tech training. Our mission is to empower organizations with cutting-edge technology that enhances efficiency, connectivity, and growth.
          </p>
          <p className="text-gray-700 mt-2 leading-relaxed">
          With a team of industry experts, we deliver tailored solutions for businesses of all sizes, ensuring seamless digital transformation. Backed by innovation, integrity, and a customer-centric approach, ICT Vista is your trusted partner in navigating the evolving ICT landscape.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-green-600 transition duration-300">
            More Details
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;



