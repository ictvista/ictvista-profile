import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logoFull from "../image/ict-logofull.png";
const Footer = () => {
  return (
    <footer className='bg-gray-800 text-gray-300 px-6 md:px-16 lg:px-28 pt-10 pb-6 rounded-t-3xl'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
        <div className='flex flex-col items-center'>
          <img src={logoFull}  alt='ICT Vista Logo' className='w-56 h-16 pt-5 mt-7' />
        </div>              
        <div>
          <h2 className='text-lg font-bold mb-4'>Important Links</h2>
          <ul>
            <li><a href='#' className='hover:underline text-gray-100'>ICT Division, Bangladesh</a></li>
            <li><a href='#' className='hover:underline text-gray-100'>a2i – Access to Information</a></li>
            <li><a href='#' className='hover:underline text-gray-100'>National Board of Revenue (NBR), Bangladesh</a></li>
            <li><a href='#' className='hover:underline text-gray-100'>Ministry of Commerce</a></li>
          </ul>
        </div>
        <div>
          <h2 className='text-lg font-bold mb-4'>Current Projects</h2>
          <ul>
            <li><a href='#' className='hover:underline text-gray-100'>SEIP</a></li>
            <li><a href='#' className='hover:underline text-gray-100'>ITC SheTrades</a></li>
            <li><a href='#' className='hover:underline text-gray-100'>PUM Netherlands</a></li>
            <li><a href='#' className='hover:underline text-gray-100'>ICT Vista Japan Desk</a></li>
            <li><a href='#' className='hover:underline text-gray-100'>STP-1</a></li>
            <li><a href='#' className='hover:underline text-gray-100'>ICT Vista eGov Hub</a></li>
          </ul>
        </div>
        <div>
          <h2 className='text-lg font-bold mb-4'>Location</h2>
          <p>2nd Floor, 27/A Sangsad Ave, Dhaka 1215, Bangladesh</p>
          <p>Phone: 01712597666, 01622663777</p>
          <p>Email: info@ictvista.com</p>
          <div className='flex space-x-4 mt-4'>
            <FaFacebook className='text-blue-500 text-2xl' />
            <FaTwitter className='text-sky-500 text-2xl' />
            <FaInstagram className='text-orange-500 text-2xl' />
            <FaLinkedin className='text-blue-700 text-2xl' />
          </div>
        </div>
      </div>
     {/*  <div className='flex justify-center mt-6'>
        <img src='/path-to-google-play.png' alt='Google Play' className='w-40 mx-2' />
        <img src='/path-to-app-store.png' alt='App Store' className='w-40 mx-2' />
      </div> */}
      <div className='border-t border-gray-600 text-center mt-6 pt-4'>
        <p>© 2025 ICT Vista. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
