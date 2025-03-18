
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="py-16 w-full h-full bg-[#35383b] text-amber-50 px-6 md:px-12 xl:px-20">
      <div className="p-12 md:p-16 xl:p-24 bg-[#35383b] text-amber-50  ">
        {/* Header Section */}
        <div className="lg:w-2/3 text-center mx-auto space-y-4">
          <h1 className="text-[#fdfffc] bold uppercase tracking-widest dark:text-amber-50 font-medium text-2xl md:text-3xl">
            Get In Touch
          </h1>
          <div className="h-1 bg-red-500 w-16 mx-auto"></div>
          <p className="text-gray-300 text-sm md:text-base leading-6">
            Contact us to discuss your software solutions, web development, and IT consultancy needs.
          </p>
        </div>
        {/* Contact Details & Form */}
        <div className="grid grid-cols-1 bg-[#35383b] lg:grid-cols-3 gap-10 mt-12">
          {/* Contact Info Section */}
          <div className="space-y-6 mt-12" >
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-red-500 text-xl" />
              <div>
                <h2 className="text-base font-bold italic  text-gray-300">Give us a call</h2>
                <p className="text-gray-300 italic   text-sm font-medium leading-5">+880 1712597666</p>
                <p className="text-gray-300 italic  text-sm font-medium leading-5">+880 1622663777</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-red-500 text-xl" />
              <div>
                <h2 className="text-base italic  font-bold text-gray-300">Send us an email</h2>
                <p className="text-gray-300 italic  text-sm font-medium leading-5">info@ictvista.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-red-500 text-xl" />
              <div>
                <h2 className="text-base italic  font-bold dark:text-gray-300">Location</h2>
                <p className="text-gray-300 italic  text-sm font-medium leading-5">2nd Floor, 27/A Sangsad Ave, Dhaka 1215, Bangladesh</p>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="lg:col-span-2 ">
            <form className="space-y-6 bg-[#35383b] p-8 rounded-lg  text-amber-50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  className="border border-gray-300 text-amber-50   text-sm rounded-lg p-4 w-full dark:bg-zinc-700/20 dark:border-zinc-700 dark:text-gray-300"
                  placeholder="Name"
                />
                <input
                  type="text"
                  name="company"
                  className="border border-gray-300 text-amber-50text-sm rounded-lg p-4 w-full dark:bg-zinc-700/20 dark:border-zinc-700 dark:text-gray-300"
                  placeholder="Company"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="email"
                  name="email"
                  className="border border-gray-300 text-amber-50 text-sm rounded-lg p-4 w-full dark:bg-zinc-700/20 dark:border-zinc-700 dark:text-gray-300"
                  placeholder="Email"
                />
                <input
                  type="text"
                  name="phone"
                  className="border border-gray-300 text-amber-50 text-sm rounded-lg p-4 w-full dark:bg-zinc-700/20 dark:border-zinc-700 dark:text-gray-300"
                  placeholder="Phone"
                />
              </div>
              <textarea
                name="message"
                className="border border-gray-300 text-amber-50 text-sm rounded-lg p-4 w-full dark:bg-zinc-700/20 dark:border-zinc-700 dark:text-gray-300"
                placeholder="Message"
                rows="6"
              ></textarea>
              <div className="text-right">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg text-sm bg-red-500 text-white hover:translate-y-1 transition duration-300"
                >
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
