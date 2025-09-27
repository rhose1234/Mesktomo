// ServicesPage.jsx
import React from "react";
import {
  Truck,
  Package,
  ClipboardCheck,
  Warehouse,
  SearchCheck,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
import WorkflowSection from "../Components/Workflow";

const services = [
  {
    title: "Terminal Services",
    icon: Package,
    description:
      "Efficient handling and management of cargo at key transit points. Loading, unloading, inspection, and transfer with modern infrastructure and security.",
  },
  {
    title: "Transportation Services",
    icon: Truck,
    description:
      "Fleet of vehicles, expert drivers, and coordinators providing reliable road, rail, air, or sea transportation. Fast, safe, and cost-effective movement of goods.",
  },
  {
    title: "Clearing and Forwarding Services",
    icon: ClipboardCheck,
    description:
      "Expert handling of customs documentation, permits, and compliance. We minimize delays and costs while ensuring smooth cargo movement across borders.",
  },
  {
    title: "Storage and Warehousing Services",
    icon: Warehouse,
    description:
      "Secure, scalable, and climate-controlled warehousing with advanced inventory management systems for both short-term and long-term storage needs.",
  },
  {
    title: "Pre-Shipment Control Services",
    icon: SearchCheck,
    description:
      "Inspection, quality verification, packaging assessment, and documentation review. Ensuring compliance and minimizing risks before goods are shipped.",
  },
  {
    title: "Tracking of Shipment/Goods",
    icon: MapPin,
    description:
      "Real-time shipment tracking with updates on location, status, and ETA. Full transparency and control with integrated logistics management systems.",
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
      <section className="max-w-6xl mx-auto mt-10 px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-greener">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="group flex flex-col items-start gap-4 p-6 border border-greener transition duration-300 hover:bg-greener hover:text-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Icon className="w-10 h-10 text-greener group-hover:text-white transition duration-300" />
                <div>
                  <h3 className="text-xl font-bold group-hover:text-white transition duration-300">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-gray-600 group-hover:text-white transition duration-300">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <WorkflowSection />
    </div>
  );
}
