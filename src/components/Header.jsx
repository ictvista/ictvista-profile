
import React, { useState } from 'react';
import LOGO from '../image/ict-logo.png'
import { Link } from 'react-router-dom';
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from 'react-icons/ci';
/* import { Link } from "react-scroll"; */


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
    <nav className="bg-[#4B88A2] ">
      <div className="h-[10vh] flex justify-between z-50 text-white lg:py-5 mx-8 py-4 items-center">
        
        <div className="flex items-center flex-1">
          <img src={LOGO} alt="Logo" className="w-16 h-16 px-2.5 object-contain rounded-full" />
        </div>
        
        {/* Navigation Links: For larger screens */}
        <div className="hidden lg:flex items-center gap-8 mr-16">
          <ul className="flex gap-8 text-[18px]">
            <Link spy={true} smooth={true} to="Hero">
              <li className='hover:text-slate-900 transition  border-slate-900 hover:border-fuchsia-600 cursor-pointer'>Home</li>
            </Link>
            <Link spy={true} smooth={true} to="About">
              <li className='hover:text-slate-900 transition  border-slate-900 hover:border-fuchsia-600 cursor-pointer'>About</li>
            </Link>
            <Link spy={true} smooth={true} to="Service">
              <li className='hover:text-slate-900 transition  border-slate-900 hover:border-fuchsia-600 cursor-pointer'>Service</li>
            </Link>
            <Link spy={true} smooth={true} to="Contact">
              <li className='hover:text-slate-900 transition  border-slate-900 hover:border-fuchsia-600 cursor-pointer'>Contact Us</li>
            </Link>
            <Link spy={true} smooth={true} to="Join">
              <li className='hover:text-slate-900 transition  border-slate-900 hover:border-fuchsia-600 cursor-pointer'>Join Us</li>   {/* border-b-2 */}
            </Link>
          </ul>
        </div>

        {/* Mobile Hamburger Button */}
        <button className='lg:hidden block sm:hidden transition' onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>

      {/* Mobile Menu: It appears when the hamburger icon is clicked */}
      {click && content}
    </nav>
  );
};

export default Header;
