import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import { Boxes, Cpu, Globe2, BadgeCheck } from "lucide-react";

// Lazy load Framer Motion
const motionPromise = import("framer-motion");
let motion;
motionPromise.then((mod) => (motion = mod.motion));

// Images (lazy load in <img>)
import energy from "../assets/energy.png";
import manufacturing from "../assets/manufacturing.png";
import retail from "../assets/retail.png";
import agriculture from "../assets/agriculture.png";
import health from "../assets/health.png";
import technology from "../assets/technology.png";
import automative from "../assets/automative.png";
import about from "../assets/about.webp";

export default function HomePage() {
  const highlights = [
    {
      title: "Comprehensive Solutions",
      description:
        "End-to-end logistics services covering every aspect of the supply chain.",
      icon: <Boxes className="w-10 h-10 text-yellowa" />,
    },
    {
      title: "Cutting-Edge Technology",
      description:
        "Innovative systems to enhance efficiency, security, and visibility.",
      icon: <Cpu className="w-10 h-10 text-yellowa" />,
    },
    {
      title: "Global Network",
      description:
        "Strong international partnerships to streamline your operations worldwide.",
      icon: <Globe2 className="w-10 h-10 text-yellowa" />,
    },
    {
      title: "Proven Track Record",
      description:
        "Trusted by businesses across multiple industries for reliable logistics.",
      icon: <BadgeCheck className="w-10 h-10 text-yellowa" />,
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const card = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const industries = [
    { name: "Manufacturing", icon: manufacturing },
    { name: "Retail", icon: retail },
    { name: "Agriculture", icon: agriculture },
    { name: "Automotive", icon: automative },
    { name: "Energy", icon: energy },
    { name: "Healthcare", icon: health },
    { name: "Technology", icon: technology },
  ];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* Hero Section */}
      {motion && (
        <section className="HeroSection h-screen relative flex justify-center text-center items-center flex-col z-0 w-full pt-20 bg-greener">
          <div className="max-w-3xl mx-auto px-6 text-white">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="font-extrabold text-5xl md:text-6xl leading-tight"
            >
              Delivering Excellence in Logistics Solutions
            </motion.h1>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="text-base mt-2"
            >
              As an industry leader, we specialize in providing comprehensive
              logistics solutions designed to connect businesses, facilitate trade,
              and empower growth across regional and international markets.
            </motion.p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6"
            >
              <Link to="/quote">
                <button className="bg-yellowa text-greener px-8 py-3 rounded-full font-bold hover:bg-brand-greener hover:text-brand-yellowa transition duration-300">
                  Get a Free Quote
                </button>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* About Section */}
      {motion && (
        <section className="about py-16 bg-transparent">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-black">About Us</h2>
              <span className="block w-20 h-1 bg-yellowa mx-auto mt-2 rounded-full"></span>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                <img
                  src={about}
                  alt="About MESKTOMO Logistics"
                  className="rounded-2xl shadow-lg w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                <p className="text-gray-700 text-base/8 w-full">
                  At <span className="font-bold text-black">MESKTOMO LOGISTICS LIMITED</span>,
                  we are more than just a logistics provider - we are a trusted partner committed
                  to simplifying supply chains and empowering business growth. With a blend of
                  industry expertise and cutting-edge technology, we ensure every shipment is
                  delivered safely, on time, and cost-effectively.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4"
                >
                  <Link to="/quote">
                    <button className="bg-yellowa text-greener px-8 py-3 rounded-full font-semibold hover:bg-brand-greener hover:text-brand-yellowa transition duration-300">
                      Learn More About Us
                    </button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Why Us Section */}
      {motion && (
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-black">Why Choose Us</h2>
              <span className="block w-20 h-1 bg-yellowa mx-auto mt-2 rounded-full"></span>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  variants={card}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-white rounded-2xl shadow-sm text-center"
                >
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="font-bold text-base h-8 text-black">{item.title}</h3>
                  <p className="text-gray-600 mt-2 text-base/6">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}
    </Suspense>
  );
}
