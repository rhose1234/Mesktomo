// ServicesSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaHandPointer, FaTruck, FaSearch, FaPhoneAlt } from "react-icons/fa";

const services = [
  {
    icon: <FaHandPointer size={28} />,
    title: "Request Quote",
    link: "/quote",
  },
  {
    icon: <FaTruck size={28} />,
    title: "Request Pick up",
    link: "/contact",
  },
  {
    icon: <FaSearch size={28} />,
    title: "Track a Shipment",
    link: "/",
  },
  {
    icon: <FaPhoneAlt size={28} />,
    title: "Contact Us",
    link: "/contact",
  },
];

export default function Flow() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="md:px-20  px-6 md:px-30 grid grid-cols-1 md:grid-cols-4 md:gap-10 gap-6 text-center">
        {services.map((service, index) => (
          <motion.a
            key={index}
            href={service.link}
            className="flex flex-col items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-yellowa text-yellowa mb-4 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {service.icon}
            </motion.div>
            <p className="text-gray-700 font-medium">{service.title}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
