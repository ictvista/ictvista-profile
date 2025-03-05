/* 
import React, {useState} from 'react'
import { Link } from 'react-router-dom'


import Contact from '../sections/Contact'
import{FaTimes } from "react-icons/fa"
import { CiMenuFries } from 'react-icons/ci'


const Header = () => {
    const [click,setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }
  const content = (
    <>
      <div className="nav lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
        <ul className="text-center text-xl p-20">
          <Link  spy={true} smooth={true} to="Hero">
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
              
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Join">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Join Us
            </li>
          </Link>
        </ul>
      </div>
    </>
  )

  return (
    <nav className="bg-black">
      <div className="h-[10vh] flex justify-between z-50 text-white lg:py-5 mx-20 py-4 flex-1">
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold">ICT VISTA</span>
          <img src="path_to_your_logo.png" alt="ICT VISTA" className="w-16 h-16" />
        </div>
        <div className="lg:flex md:flex lg:flex-1 items-center justify-end  font-normal ">
          <div className="flex-1 items-center justify-end ">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <Link spy={true} smooth={true} to="Hero">
                <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>Home</li>
              </Link>
              <Link spy={true} smooth={true} to="About">
                <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>About</li>
              </Link>
              <Link spy={true} smooth={true} to="Service">
                <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>Service</li>
              </Link>
              <Link spy={true} smooth={true} to="Contact">
                <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>Contact Us</li>
              </Link>
              <Link spy={true} smooth={true} to="Join">
                <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>Join Us</li>
              </Link>
            </ul>
          </div>
        </div>
        <div>
            {click && content}
        </div>
        <button className='block sm:hidden transition' onClick={handleClick}>
            {click ? <FaTimes  /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  )
}

export default Header
 */


import React, { useState } from 'react';
import LOGO from '../image/ict-logo.png'
import { Link } from 'react-router-dom';
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from 'react-icons/ci';


const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const content = (
    <div className="nav lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition text-white">
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
    <nav className="bg-black">
      <div className="h-[10vh] flex justify-between z-50 text-white lg:py-5 mx-8 py-4 items-center">
        
        <div className="flex items-center flex-1">
          <img src={LOGO} alt="Logo" className="w-16 h-16 px-2.5 object-contain" />
        </div>
        
        {/* Navigation Links: For larger screens */}
        <div className="hidden lg:flex items-center gap-8 mr-16">
          <ul className="flex gap-8 text-[18px]">
            <Link spy={true} smooth={true} to="Hero">
              <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>Home</li>
            </Link>
            <Link spy={true} smooth={true} to="About">
              <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>About</li>
            </Link>
            <Link spy={true} smooth={true} to="Service">
              <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>Service</li>
            </Link>
            <Link spy={true} smooth={true} to="Contact">
              <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>Contact Us</li>
            </Link>
            <Link spy={true} smooth={true} to="Join">
              <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>Join Us</li>
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
