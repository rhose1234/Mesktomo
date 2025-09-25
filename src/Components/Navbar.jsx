import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi"; 
import logo from "../assets/logo.png";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full  z-50 transition duration-300 ${
        scroll ? "scroll shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between py-4 px-6 md:px-30">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="logo" className="w-12" />
        </Link>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white text-3xl z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex lg:items-center lg:gap-10">
          <ul className="flex items-center space-x-10 text-white font-semibold">
            <li><NavLink to="/" className="hover:text-yellowa">Home</NavLink></li>
            <li><NavLink to="/about" className="hover:text-yellowa">About</NavLink></li>
            <li><NavLink to="/services" className="hover:text-yellowa">Services</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-yellowa">Contact</NavLink></li>
          </ul>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to="/quote">
              <button className="ml-6 bg-yellowa text-greener px-6 py-3 rounded-full font-semibold hover:bg-greener hover:text-yellowa transition duration-300">
                Get a Free Quote
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 w-full h-screen bg-greener flex flex-col items-center justify-center space-y-8 text-white font-semibold lg:hidden z-40"
            >
              <NavLink to="/" onClick={() => setIsOpen(false)} className="hover:text-yellowa">Home</NavLink>
              <NavLink to="/about" onClick={() => setIsOpen(false)} className="hover:text-yellowa">About</NavLink>
              <NavLink to="/services" onClick={() => setIsOpen(false)} className="hover:text-yellowa">Services</NavLink>
              <NavLink to="/contact" onClick={() => setIsOpen(false)} className="hover:text-yellowa">Contact</NavLink>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link to="/quote" onClick={() => setIsOpen(false)}>
                  <button className="bg-yellowa text-greener px-6 py-3 rounded-full font-semibold hover:bg-greener hover:text-yellowa transition duration-300">
                    Get a Free Quote
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
