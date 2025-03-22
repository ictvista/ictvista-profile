
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const countryOptions = [
  { code: "us", name: "United States" },
  { code: "gb", name: "United Kingdom" },
  { code: "ca", name: "Canada" },
  { code: "bd", name: "Bangladesh" },
  { code: "in", name: "India" },
  { code: "au", name: "Australia" },
];

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const recaptchaRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "us",
    subject: "",
    message: "",
    agreeToTerms: false,
    recaptchaToken: ""
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!formData.recaptchaToken) newErrors.recaptcha = "Please complete the reCAPTCHA";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value.trimStart() });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

/*   const handleCountryChange = (e) => {
    const newCountry = e.target.value;
    setFormData({ ...formData, country: newCountry, phone: `+${countryOptions.find(c => c.code === newCountry)?.code}` });
  };
 */
  const handleCountryChange = (e) => {
    const newCountry = e.target.value;
    setFormData({ 
      ...formData, 
      country: newCountry 
    });
  };
  
  const handleRecaptchaChange = (token) => {
    setFormData({ ...formData, recaptchaToken: token });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    
    if (!validateForm()) return;
    setLoading(true);
    
    try {
      setSuccessMessage("Your message has been sent successfully!");
      setFormData(initialFormData);
      recaptchaRef.current.reset();
    } catch (error) {
      setSuccessMessage("Failed to send message. Please try again.");
    }

    setLoading(false);
  };

  return (
    <motion.section 
      ref={sectionRef} 
      initial={{ opacity: 0, y: 50 }} 
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} 
      transition={{ duration: 0.8 }} 
      className="container mx-auto pl-6 py-16 flex flex-col md:flex-row items-center gap-12 relative w-full"
    >
      <motion.div className="md:w-1/2 " initial={{ x: -50 }} animate={{ x: 0 }} transition={{ duration: 0.8 }}>
        <h2 className="text-4xl font-bold text-black leading-tight">Contact Us</h2>
        <p className="text-gray-600 mt-4">We are here to help! Fill out the form and our team will reach out to you shortly.</p>
        <div className="space-y-6 mt-12">
          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="text-red-500 text-xl" />
            <div className="">
              <h2 className="text-base font-bold italic text-blue-900">Give us a call</h2>
              <p className="text-gray-600 italic text-sm font-medium ">+880 1712597666</p>
              <p className="text-gray-600 italic text-sm font-medium">+880 1622663777</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-red-500 text-xl" />
            <div>
              <h2 className="text-base italic font-bold text-blue-900">Send us an email</h2>
              <p className="text-gray-600 italic text-sm font-medium">info@ictvista.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-red-500 text-xl" />
            <div>
              <h2 className="text-base italic font-bold text-blue-900">Location</h2>
              <p className="text-gray-600 italic text-sm font-medium">2nd Floor, 27/A Sangsad Ave, Dhaka 1215, Bangladesh</p>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div className="md:w-1/2 bg-white p-8 shadow-lg w-full rounded-2xl" initial={{ x: 50 }} animate={{ x: 0 }} transition={{ duration: 0.8 }}>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Get In Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium">First Name*</label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full p-3 border rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Last Name*</label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full p-3 border rounded-lg" />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Email*</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 border rounded-lg" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Country*</label>
            <select name="country" value={formData.country} onChange={handleCountryChange} className="w-full p-3 border rounded-lg">
              {countryOptions.map(({ code, name }) => (
                <option key={code} value={code}>{name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Phone*</label>
            <PhoneInput country={formData.country} value={formData.phone} onChange={handlePhoneChange} inputClass="w-full p-3 border rounded-lg"/>
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Subject*</label>
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} className="w-full p-3 border rounded-lg" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Message*</label>
            <textarea name="message" value={formData.message} onChange={handleChange} className="w-full p-3 border rounded-lg" rows="4" />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>
         
        <div>
            <label className="flex items-center text-gray-700 font-medium">
              <input type="checkbox" name="agreeToTerms" checked={formData.agreeToTerms} onChange={handleChange} className="mr-2" />
              Agree to the &nbsp; <a href="/terms" className="text-blue-500 underline">  Terms and Conditions of ICT Vista</a> 
            </label>
            {errors.agreeToTerms && <p className="text-red-500 text-sm">{errors.agreeToTerms}</p>}
          </div>
        
        <ReCAPTCHA ref={recaptchaRef} sitekey="6Lf4kvwqAAAAAOaDWcq34ZaBUQ9i7m1QGElZ4cFm" onChange={handleRecaptchaChange} />
        {errors.recaptcha && <p className="text-red-500 text-sm">{errors.recaptcha}</p>}
        
          <button type="submit" className="w-auto p-2 bold bg-blue-500 bold text-white py-3 rounded-lg hover:bg-blue-600 transition float-right" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}

          </button>
        </form>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
