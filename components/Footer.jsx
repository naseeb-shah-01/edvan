import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Send,
  Youtube,
  Instagram
} from 'lucide-react';

import { Link } from "react-router-dom";

const Footer = () => {

  // ------------------------------
  // ADDED ONLY FOR SUBSCRIBE LOGIC
  // ------------------------------
  const [subscriberEmail, setSubscriberEmail] = useState("");
  const [subMsg, setSubMsg] = useState("");

  const handleSubscribe = async () => {
    if (!subscriberEmail.trim()) {
      setSubMsg("Please enter a valid email.");
      return;
    }

    try {
      const res = await fetch("https://edvantage-pryf.onrender.com/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: subscriberEmail }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubMsg("Subscribed successfully!");
        setSubscriberEmail("");
      } else {
        setSubMsg(data.message || "Subscription failed. Try again.");
      }
    } catch (err) {
      setSubMsg("Network error. Try again.");
    }
  };

  // ------------------------------


  const contactDetails = {
    address: 'Edvantage Learning Solution, Delhi, INDIA',
    phone: '+91 6200261265',
    email: 'info@edvantage.org.in',
    whatsapp: '+91 6200261265'
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Stay Updated with Industry Insights
            </h3>

            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Get the latest news, program updates, and industry insights delivered to your inbox
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">

              {/* EMAIL INPUT (unchanged visually) */}
              <input
                type="email"
                placeholder="Enter your email"
                value={subscriberEmail}
                onChange={(e) => setSubscriberEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-900"
              />

              {/* SUBSCRIBE BUTTON */}
              <button
                onClick={handleSubscribe}
                className="bg-teal-500 hover:bg-teal-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 transform hover:-translate-y-0.5"
              >
                <Send className="h-4 w-4" />
                <span>Subscribe</span>
              </button>
            </div>

            {subMsg && (
              <p className="text-center text-sm text-white mt-2">
                {subMsg}
              </p>
            )}

          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div>
            <img
              src="/images/LOGO_Footer.png"
              alt="Edvantage Learning Solution Logo"
              className="h-10 w-auto mb-6"
            />

            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering oil & gas professionals with world-class training, consultancy, and industry connections for career advancement.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="http://linkedin.com/company/edvantagelearning" target="_blank" rel="noopener noreferrer"
                className="p-2 bg-[#0A66C2] hover:bg-[#004182] rounded-lg transition-all duration-300 hover:-translate-y-1">
                <Linkedin className="h-5 w-5 text-white" />
              </a>
              <a href="https://youtube.com/@edvantagelearning3858?si=TLki2lnqssumN4-N" target="_blank" rel="noopener noreferrer"
                className="p-2 bg-[#FF0000] hover:bg-[#C00000] rounded-lg transition-all duration-300 hover:-translate-y-1">
                <Youtube className="h-5 w-5 text-white" />
              </a>
              <a href="https://www.instagram.com/edvantage_learning" target="_blank" rel="noopener noreferrer"
                className="p-2 bg-[#C13584] hover:bg-[#8F2762] rounded-lg transition-all duration-300 hover:-translate-y-1">
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a href="https://t.me/+1ak9gUgTZ44yZjll" target="_blank" rel="noopener noreferrer"
                className="p-2 bg-[#2AABEE] hover:bg-[#1E88C6] rounded-lg transition-all duration-300 hover:-translate-y-1">
                <Send className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>

            <ul className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "Training Programs", path: "/programs" },
                { name: "Webinars & Events", path: "/webinars" },
                { name: "Success Stories", path: "/placements" },
                { name: "Blog & Articles", path: "/blogs" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-teal-400 hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Training Programs</h3>

            <ul className="space-y-3">
              {[
                { name: "Diploma Programs", path: "/programs/diploma" },
                { name: "Self Paced Trainings", path: "/programs/self-paced" },
                { name: "E-Learning Courses", path: "/programs/elearning" },
                { name: "Webinars", path: "/webinars" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-teal-400 hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Information</h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-teal-400 mt-1" />
                <p className="text-gray-300">{contactDetails.address}</p>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-teal-400" />
                <p className="text-gray-300">{contactDetails.phone}</p>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-teal-400" />
                <p className="text-gray-300">{contactDetails.email}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Stats Section */}
        <div className="border-t border-gray-800 mt-12 pt-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
            {[
              { count: "10000+", label: "Professionals Trained" },
              { count: "20+", label: "Corporate Partners" },
              { count: "40+", label: "Countries Served" },
              { count: "95%", label: "Job Placement Rate" },
              { count: "10+", label: "Universities Collaboration" },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:-translate-y-1 transition-all border border-gray-800 hover:border-teal-500"
              >
                <div className="text-3xl font-bold text-teal-400 mb-2">
                  {s.count}
                </div>
                <div className="text-gray-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

            <div className="text-gray-400 text-sm">
              © 2025. All rights reserved.
            </div>

            <div className="flex space-x-6 text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>

              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>

              <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>

          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
