/* 
import React, { useState } from 'react';
import LOGO from '../image/ict-logofull.png'
import { Link } from 'react-router-dom';
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from 'react-icons/ci';



const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  
  const content = (
    <div className="nav lg:hidden block fixed top-0 left-0 w-full h-screen bg-[#07a4f1] transition text-white z-50">
      <ul className="text-center text-xl p-20">
        <Link spy={true} smooth={true} to="Hero">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            Home
          </li>
        </Link>
        <Link spy={true} smooth={true} to="About">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            About
          </li>
        </Link>
        <Link spy={true} smooth={true} to="Service">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            Service
          </li>
        </Link>
        <Link spy={true} smooth={true} to="Contact">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            Contact Us
          </li>
        </Link>
        <Link spy={true} smooth={true} to="Join">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            Join Us
          </li>
        </Link>
      </ul>
    </div>
  );

  return (
    <nav className="bg-gradient-to-b from-[#1E489D] to-[#0098D9] ">
      <div className="h-[10vh] flex justify-between z-50 text-white lg:py-5 mx-8 py-4 items-center">
        
        <div className="flex items-center flex-1">
          <img src={LOGO} alt="Logo" className="w-47 h-47 px-2.5 object-contain rounded-full" />
        </div>
        
     
        <div className="hidden lg:flex items-center gap-8 mr-16">
          <ul className="flex gap-8 text-[18px]">
            <Link spy={true} smooth={true} to="Hero">
              <li className='hover:text-slate-900 transition  border-slate-900 hover:border-fuchsia-600 cursor-pointer font-bold'>Home</li>
            </Link>
            <Link spy={true} smooth={true} to="About">
              <li className='hover:text-slate-900 transition  border-slate-900 hover:border-fuchsia-600 cursor-pointer font-bold'>About</li>
            </Link>
            <Link spy={true} smooth={true} to="Service">
              <li className='hover:text-slate-900 transition  border-slate-900 hover:border-fuchsia-600 cursor-pointer  font-bold'>Service</li>
            </Link>
            <Link spy={true} smooth={true} to="Contact">
              <li className='hover:text-slate-900 transition  border-slate-900 hover:border-fuchsia-600 cursor-pointer font-bold'>Contact Us</li>
            </Link>
            <Link spy={true} smooth={true} to="Join">
              <li className='hover:text-slate-900 transition  border-slate-900 hover:border-fuchsia-600 cursor-pointer font-bold'>Join Us</li>  
            </Link>
          </ul>
        </div>

      
        <button className='lg:hidden block sm:hidden transition' onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>

    
      {click && content}
    </nav>
  );
};

export default Header;
 */
import React, { useState } from "react";
import { Link } from "react-router-dom"; // React Router for navigation
import LOGO from "../image/ict-logofull.png";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <nav className="bg-gradient-to-b from-[#1E489D] to-[#0098D9]">
      <div className="h-[10vh] flex justify-between z-50 text-white lg:py-5 mx-8 py-4 items-center">
        {/* Logo */}
        <div className="flex items-center flex-1">
          <Link to="/">
            <img
              src={LOGO}
              alt="Logo"
              className="w-47 h-47 px-2.5 object-contain rounded-full"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 mr-16">
          <ul className="flex gap-8 text-[18px]">
            <li>
              <Link
                to="/"
                className="hover:text-slate-900 transition font-bold"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-slate-900 transition font-bold"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-slate-900 transition font-bold"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-slate-900 transition font-bold"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/career"
                className="hover:text-slate-900 transition font-bold"
              >
                Join Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Hamburger Button */}
        <button className="lg:hidden block transition" onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>

      {/* Mobile Menu */}
      {click && (
        <div className="fixed top-0 left-0 w-full h-screen bg-[#07a4f1] transition text-white z-50 flex flex-col items-center justify-center">
          <ul className="text-center text-xl">
            <li className="my-4 py-4">
              <Link to="/" className="hover:bg-slate-800 px-6 py-3 rounded" onClick={handleClick}>
                Home
              </Link>
            </li>
            <li className="my-4 py-4">
              <Link to="/about" className="hover:bg-slate-800 px-6 py-3 rounded" onClick={handleClick}>
                About
              </Link>
            </li>
            <li className="my-4 py-4">
              <Link to="/services" className="hover:bg-slate-800 px-6 py-3 rounded" onClick={handleClick}>
                Services
              </Link>
            </li>
            <li className="my-4 py-4">
              <Link to="/contact" className="hover:bg-slate-800 px-6 py-3 rounded" onClick={handleClick}>
                Contact Us
              </Link>
            </li>
            <li className="my-4 py-4">
              <Link to="/career" className="hover:bg-slate-800 px-6 py-3 rounded" onClick={handleClick}>
                Join Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
