import React from "react";
import { Mail, Phone, Globe } from "lucide-react";
import { FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6"; 
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-greener text-white py-16">
      <div className=" mx-auto px-8 md:px-30 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-20">
        
        {/* Company Info */}
        <div>
          <Link to="/" className="flex items-center">
            <img src={logo} alt="logo" className="w-12" />
          </Link>
          <p className="mt-3 text-sm/6 text-white">
            Delivering Excellence in Logistics Solutions.  
            Your trusted partner in supply chain and logistics management.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-bold mb-3">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-yellowa">Home</Link></li>
            <li><Link to="/about" className="hover:text-yellowa">About Us</Link></li>
            <li><Link to="/services" className="hover:text-yellowa">Services</Link></li>
            <li><Link to="/contact" className="hover:text-yellowa">Contact</Link></li>
            <li><Link to="/terms" className="hover:text-yellowa">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-bold mb-3">Contact</h4>
          <ul className="space-y-4 text-sm">
            
            {/* Email */}
            <li className="flex items-start gap-2">
              <Mail size={16} className="text-yellowa mt-1" />
              <div>
                <a href="mailto:sales@mesktomolog.com" className="hover:text-yellowa">
                  sales@mesktomolog.com
                </a>
              </div>
            </li>

            {/* Website */}
            <li className="flex items-start gap-2">
              <Globe size={16} className="text-yellowa mt-1" />
              <div>
                <a 
                  href="http://www.mesktomolog.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-yellowa"
                >
                  www.mesktomolog.com
                </a>
              </div>
            </li>

            {/* Phone Numbers */}
            <li className="flex items-start gap-2">
              <Phone size={16} className="text-yellowa mt-1" />
              <div className="flex flex-col">
                <a href="tel:08140807725" className="hover:text-yellowa">08140807725</a>
                <a href="tel:08065603458" className="hover:text-yellowa">08065603458</a>
                <a href="tel:08033813154" className="hover:text-yellowa">08033813154</a>
              </div>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-xl font-bold mb-3">Follow Us</h4>
          <div className="flex gap-4">
            <a
              href="https://x.com/mesktomolog" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-yellowa"
            >
              <FaXTwitter size={20} />
            </a>
            <a
              href="https://instagram.com/mesktomolog" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-yellowa"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://facebook.com/mesktomolog" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-yellowa"
            >
              <FaFacebookF size={20} />
            </a>
          
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} MESKTOMO LOGISTICS LIMITED. All Rights Reserved.
      </div>
    </footer>
  );
}
