// ServicesPage.jsx
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Terminal Services",
    image: "https://i.postimg.cc/T2JT5W54/warehouse-worker-scanning-barcode-box.jpg",
    description:
      "Efficient handling and management of cargo at key transit points. Loading, unloading, inspection, and transfer with modern infrastructure and security.",
  },
  {
    title: "Transportation Services",
    image: "https://i.postimg.cc/0ypn9xBK/transport-logistics-concept-3.jpg",
    description:
      "Fleet of vehicles, expert drivers, and coordinators providing reliable road, rail, air, or sea transportation. Fast, safe, and cost-effective movement of goods.",
  },
  {
    title: "Clearing and Forwarding Services",
    image: "https://i.postimg.cc/50M10D82/employee-working-with-document.jpg",
    description:
      "Expert handling of customs documentation, permits, and compliance. We minimize delays and costs while ensuring smooth cargo movement across borders.",
  },
  {
    title: "Storage and Warehousing Services",
    image: "https://i.postimg.cc/mrGWXb0p/interior-large-distribution-warehouse-with-shelves-stacked-with-palettes-goods-ready-market.jpg",
    description:
      "Secure, scalable, and climate-controlled warehousing with advanced inventory management systems for both short-term and long-term storage needs.",
  },
  {
    title: "Pre-Shipment Control Services",
    image: "https://i.postimg.cc/yNXxnprW/medium-shot-man-wearing-helmet.jpg",
    description:
      "Inspection, quality verification, packaging assessment, and documentation review. Ensuring compliance and minimizing risks before goods are shipped.",
  },
  {
    title: "Tracking of Shipment/Goods",
    image: "https://i.postimg.cc/4yVPng3g/3d-smartphone-device-with-map-gps-technology.jpg",
    description:
      "Real-time shipment tracking with updates on location, status, and ETA. Full transparency and control with integrated logistics management systems.",
  },
  {
    title: "House Relocation",
    image: "https://i.postimg.cc/fLfgDPwR/i-want-image-of-two-men-helping-people-move-to-their-new-house-so-they-are-offloading-the-items.jpg",
    description:
      "Professional house moving services ensuring a smooth, safe, and efficient relocation of your household items with packing and unpacking support.",
  },
  {
    title: "Office Relocation",
    image: "https://i.postimg.cc/B60Dn1dW/moving-boxes-living-room.jpg",
    description:
      "Seamless office relocation services with minimal downtime. We handle furniture, electronics, and important documents carefully and efficiently.",
  },
];

export default function Services() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="servicesHero h-[100vh] flex flex-col justify-center items-center text-center text-white px-6">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Core Services
        </motion.h1>
        <motion.p
          className="mt-4 max-w-2xl text-base"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          We offer a wide range of logistics and supply chain solutions designed
          to deliver excellence at every stage of your journey.
        </motion.p>
      </section>

      {/* Services Grid */}
      <section className="md:px-30 mt-10 px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group flex flex-col transition duration-300 hover:scale-105 bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-80 object-cover"
              />
              <div className="px-6 py-10 ">
                <h3 className="text-xl font-bold group-hover:text-greener  transition duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 h-30 group-hover:text-gray-800 text-base/6 transition duration-300 mt-2">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
