import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import LOGO from "../image/ict-logofull.png";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const Header = () => {
  const [click, setClick] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation(); // Get current route

  const handleClick = () => setClick(!click);
  const toggleServiceMenu = () => setServiceOpen(!serviceOpen);
  const closeMenu = () => {
    setClick(false);
    setServiceOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServiceOpen(false);
      }
    };

    if (serviceOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [serviceOpen]);

  // Close dropdown on page navigation
  useEffect(() => {
    setServiceOpen(false);
    setClick(false);
  }, [location.pathname]);

  return (
    <nav className="bg-gradient-to-b from-[#1E489D] to-[#0098D9] relative z-50">
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
            <li><Link to="/" className="hover:text-slate-900 transition font-bold">Home</Link></li>
            <li><Link to="/about" className="hover:text-slate-900 transition font-bold">About</Link></li>
            <li className="relative" ref={dropdownRef}>
              <button onClick={toggleServiceMenu} className="flex items-center font-bold hover:text-slate-900 transition">
                Services {serviceOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
              </button>
              {serviceOpen && (
                <ul className="absolute left-0 mt-2 bg-white text-black shadow-lg rounded w-48 z-50">
                  {[
                    { path: "/ProfessionalTraining", label: "Professional Training" },
                    { path: "/Webdevelopment", label: "Web Development" },
                    { path: "/Uiux", label: "UI/UX" },
                    { path: "/marketing", label: "Marketing" },
                    { path: "/seo", label: "SEO" },
                    { path: "/content", label: "Content Writing" },
                  ].map(({ path, label }) => (
                    <li key={path}>
                      <Link to={path} className="block px-4 py-2 hover:bg-gray-200" onClick={closeMenu}>{label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li><Link to="/contact" className="hover:text-slate-900 transition font-bold">Contact Us</Link></li>
            <li><Link to="/career" className="hover:text-slate-900 transition font-bold">Join Us</Link></li>
          </ul>
        </div>

        {/* Mobile Hamburger Button */}
        <button className="lg:hidden block transition" onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>

      {/* Mobile Menu */}
      {click && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#07a4f1] transition text-white z-50 flex flex-col items-center justify-center overflow-hidden">
          <button className="absolute top-5 right-5 text-3xl" onClick={closeMenu}><FaTimes /></button>
          <ul className="text-center text-xl w-full">
            <li className="my-4 py-4"><Link to="/" className="hover:bg-slate-800 px-6 py-3 rounded w-full block" onClick={closeMenu}>Home</Link></li>
            <li className="my-4 py-4"><Link to="/about" className="hover:bg-slate-800 px-6 py-3 rounded w-full block" onClick={closeMenu}>About</Link></li>
            <li className="my-4 py-4">
              <button onClick={toggleServiceMenu} className="flex items-center justify-center w-full hover:bg-slate-800 px-6 py-3 rounded">
                Services {serviceOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
              </button>
              {serviceOpen && (
                <ul className="bg-white text-black shadow-lg rounded text-center w-full">
                  {[
                    { path: "/ProfessionalTraining", label: "Professional Training" },
                    { path: "/Webdevelopment", label: "Web Development" },
                    { path: "/Uiux", label: "UI/UX" },
                    { path: "/marketing", label: "Marketing" },
                    { path: "/seo", label: "SEO" },
                    { path: "/content", label: "Content Writing" },
                  ].map(({ path, label }) => (
                    <li key={path}>
                      <Link to={path} className="block px-6 py-3 hover:bg-gray-200" onClick={closeMenu}>{label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li className="my-4 py-4"><Link to="/contact" className="hover:bg-slate-800 px-6 py-3 rounded w-full block" onClick={closeMenu}>Contact Us</Link></li>
            <li className="my-4 py-4"><Link to="/career" className="hover:bg-slate-800 px-6 py-3 rounded w-full block" onClick={closeMenu}>Join Us</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
