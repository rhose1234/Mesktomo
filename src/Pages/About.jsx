import React from 'react'
import { motion } from "framer-motion";

import teamwork from "../assets/teamwork.jpg"
import reliabilityImg from "../assets/reliability.jpg";
import innovationImg from "../assets/innovation.jpg";
import safetyImg from "../assets/safety.jpg";
import customerImg from "../assets/customer.jpg";

export default function About() {

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

   const commitments = [
    {
      title: "Reliability",
      description: "Consistent, on-time delivery you can count on.",
      image: reliabilityImg,
    },
    {
      title: "Innovation",
      description: "Using technology to simplify logistics processes.",
      image: innovationImg,
    },
    {
      title: "Safety & Compliance",
      description:
        "Strict adherence to industry standards in handling and transport.",
      image: safetyImg,
    },
    {
      title: "Customer-Centric Service",
      description: "Solutions tailored to your business needs.",
      image: customerImg,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="AboutHero h-screen relative flex justify-center text-center items-center flex-col z-0 w-full pt-20 bg-greener">
        <div className="max-w-3xl mx-auto px-6 text-white">
          <h1 className="font-extrabold text-5xl md:text-6xl leading-tight">
        About Us
          </h1>
          <p className="text-base mt-2">
         We are more than just a logistics company, we’re a trusted partner dedicated to simplifying supply chains and driving business growth globally          </p>
        
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-row-1 md:grid-row-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <img
              src={teamwork}
              alt="About MESKTOMO Logistics"
              className="rounded-xl shadow-lg w-full h-80 object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="text-5xl font-bold text-black mb-4 text-center">Who We Are</h2>
            <p className="text-gray-700 text-base/8 mb-4 text-center">
              At <span className="font-bold text-black">MESKTOMO LOGISTICS LIMITED</span>, we
              understand the dynamic nature of global trade and the importance of robust logistics support.
              Established with a vision to transform the logistics experience, our team combines industry
              expertise with cutting-edge technology to ensure your shipments reach their destinations safely,
              timely, and cost-effectively.
            </p>
            <p className="text-gray-700 text-base/8 text-center">
              Our company integrates best practices in operations, compliance, and customer service, making us
              adaptable to the unique needs of our clients. Whether you’re a multinational corporation or a local
              enterprise, we offer tailor-made solutions to streamline your supply chain and optimize your
              business performance.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold text-black">
            Our Commitment to Quality and Safety
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Quality assurance, safety, and compliance are the cornerstones of our operations.
            Through continuous improvement and technology, we strive to exceed your expectations
            in every transaction.
          </p>
        </motion.div>

        {/* Grid of Commitments */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-center px-4">
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}
