import React, { useState } from "react";
// import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");

    try {
      // Uncomment and configure emailjs to use
      // const result = await emailjs.send("service_id", "template_id", formData, "user_id");
      // console.log(result.text);
      setSuccessMessage("Your message has been sent successfully!");
      setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error(error.text);
      setSuccessMessage("Failed to send message. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div id="contact" className=" bg-white min-h-screen flex items-center justify-center  mb-20">
      <div className="max-w-2xl w-full bg-white border-2 border-[#4B88A2] rounded-2xl shadow-xl p-8 md:p-12">
        <h2 className="text-4xl font-bold text-center text-[#001b5e] mb-6">Get in Touch</h2>
        <p className="text-center text-gray-600 mb-8">Fill out the form below, and we'll get back to you soon.</p>

        <form onSubmit={sendEmail} className="space-y-6 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001b5e]" />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Phone</label>
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001b5e]" />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001b5e]" />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Subject</label>
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001b5e]" />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} required rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001b5e]" />
          </div>

          <button type="submit" disabled={loading}
            className="w-full bg-[#001b5e] text-white py-3 rounded-lg text-lg font-semibold transition-all hover:bg-[#003080]">
            {loading ? "Sending..." : "Send Message"}
          </button>

          {successMessage && <p className="text-center text-green-600 font-semibold mt-4">{successMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
