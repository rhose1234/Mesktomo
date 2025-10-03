import React from "react";
import { Router, Routes, Route } from "react-router-dom";

import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Quote from "./Pages/Quote";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HomePage from "./Pages/Home";
import TermsPage from "./Pages/Terms";
import ScrollToTop from "./Components/ScrollToTop";


export default function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<TermsPage />} />
       
      </Routes>

      <Footer />
    </>
  );
}
