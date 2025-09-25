import React from "react";
import { Router, Routes, Route } from "react-router-dom";

import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Quote from "./Pages/Quote";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HomePage from "./Pages/Home";

export default function App() {
  return (
    <>
      <Navbar />
     
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    
      <Footer />
    </>
  );
}
