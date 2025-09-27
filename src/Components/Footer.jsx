import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
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
            <img src={logo} alt="logo" className="w-20" />
          </Link>
          <p className="mt-3 text-sm/6 text-white"> Efficient, time-bound logistics that impacts your business growth | 
            Delivering Excellence in Logistics Solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-bold mb-3">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/" className="hover:text-yellowa">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellowa">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-yellowa">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellowa">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-yellowa">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-bold mb-3">Contact</h4>
          <ul className="space-y-4 text-sm">
            {/* Phone Numbers */}
            <li className="flex flex-row items-center gap-2">
              <Phone size={16} className="text-yellowa " />
              <a href="tel:08140807725" className="hover:text-yellowa">
                08140807725
              </a>
            </li>

            <li className="flex flex-row items-center gap-2">
              <Phone size={16} className="text-yellowa " />
              <a href="tel:08065603458" className="hover:text-yellowa">
                08065603458
              </a>
            </li>

            <li className="flex items-start gap-2">
              <Phone size={16} className="text-yellowa " />
              <a href="tel:08033813154" className="hover:text-yellowa">
                08033813154
              </a>
            </li>

            {/* Email */}
            <li className="flex items-start gap-2">
              <Mail size={16} className="text-yellowa mt-1" />
              <div>
                <a
                  href="mailto:sales@mesktomolog.com"
                  className="hover:text-yellowa"
                >
                  sales@mesktomolog.com
                </a>
              </div>
            </li>

            {/* Address */}
            <li className="flex flex-row items-center gap-2">
              <MapPin size={16} className="text-yellowa " />
              <a
                href="https://maps.app.goo.gl/bZBxdeaAdbqFWzq1A"
                className="hover:text-yellowa"
              >
                25 Diya Street, Gbagada, Lagos, Nigeria.
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-xl font-bold mb-3">Follow Us</h4>
          <div className="flex gap-4">
            <a
              href="https://x.com/MESKTOMOLOG"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellowa"
            >
              <FaXTwitter size={20} />
            </a>
            <a
              href="https://www.instagram.com/mesktomolog/"
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
        © {new Date().getFullYear()} MESKTOMO LOGISTICS LIMITED. All Rights
        Reserved.
      </div>
    </footer>
  );
}
