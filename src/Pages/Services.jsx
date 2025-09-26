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
      <section className="servicesHero h-[100vh] flex flex-col justify-center items-center text-center  text-white px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold">Our Core Services</h1>
        <p className="mt-4 max-w-2xl text-lg">
          We offer a wide range of logistics and supply chain solutions designed to
          deliver excellence at every stage of your journey.
        </p>
      </section>


      {/* Services Grid */}
      <section className="max-w-6xl mx-auto mt-10 px-6 py-10"> {/* padding added */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-greener">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group flex flex-col items-start gap-4 p-6 border border-greener transition duration-300 hover:bg-greener hover:text-white"
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
              </div>
            );
          })}
        </div>
      </section>

      <WorkflowSection />
    </div>
  );
}
