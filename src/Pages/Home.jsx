import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Boxes, Cpu, Globe2, BadgeCheck } from "lucide-react";


import energy from "../assets/energy.png"
import manufacturing from "../assets/manufacturing.png"
import retail from "../assets/retail.png"
import agriculture from "../assets/agriculture.png"
import health from "../assets/health.png"
import technology from "../assets/technology.png"
import automative from "../assets/automative.png"


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

  // Framer Motion Variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
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

  const industriesLoop = [...industries, ...industries];


  return (
    <>
      {/* Hero Section */}
      <section className="HeroSection h-screen relative flex justify-center text-center items-center flex-col z-0 w-full pt-20 bg-greener">
        <div className="max-w-3xl mx-auto px-6 text-white">
          <h1 className="font-extrabold text-5xl md:text-6xl leading-tight">
            Delivering Excellence in Logistics Solutions
          </h1>
          <p className="text-base mt-2">
            As an industry leader, we specialize in providing comprehensive
            logistics solutions designed to connect businesses, facilitate trade,
            and empower growth across regional and international markets.
          </p>
          {/* Button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-4 lg:mt-4"
          >
            <Link to="/quote">
              <button className="bg-yellowa text-greener px-8 py-3 rounded-full font-semibold hover:bg-brand-greener hover:text-brand-yellowa transition duration-300">
                Get a Free Quote
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="about py-16 bg-transparent">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading with animation + underline */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }}
            className="text-center mb-12" >
            <h2 className="text-4xl font-bold text-black">
              About Us
            </h2>
            <span className="block w-20 h-1 bg-yellowa mx-auto mt-2 rounded-full"></span>
          </motion.div>

          {/* Grid Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <img
                src={about}
                alt="About MESKTOMO Logistics"
                className="rounded-2xl shadow-lg w-full h-full object-cover"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="text-gray-700  text-base/8 w-full">
                At{" "}
                <span className="font-bold text-black">
                  MESKTOMO LOGISTICS LIMITED
                </span>
                , We are more than just a logistics provider - 
                we are a trusted
                partner committed to simplifying supply chains and empowering
                business growth. With a blend of industry expertise and
                cutting-edge technology, we ensure that every shipment is
                delivered safely, on time, and cost-effectively.
              </p>
               <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-4 lg:mt-4"
          >
            <Link to="/quote">
              <button className="bg-yellowa text-greener px-8 py-3 rounded-full font-semibold hover:bg-brand-greener hover:text-brand-yellowa transition duration-300">
                Learn More About us
              </button>
            </Link>
          </motion.div>
            </motion.div>

            
          </div>
        </div>
      </section>

    {/* Industries Section */}
     <section className="py-16  overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="text-center mb-12" >
            <h2 className="text-4xl font-bold text-black">
We Serve across Industries            </h2>
            <span className="block w-20 h-1 bg-yellowa mx-auto mt-2 rounded-full"></span>
          </motion.div>

        <motion.div
          className="flex space-x-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
        >
          {industriesLoop.map((item, index) => (
            <div
              key={index}
              className="min-w-[180px] flex flex-col items-center bg-white rounded-2xl shadow-lg p-4 flex-shrink-0"
            >
              <img src={item.icon} className="h-8" />
              <h3 className="mt-4 font-semibold text-black text-base">{item.name}</h3>
            </div>
          ))}
        </motion.div>
      </div>
    </section>

      {/* Why Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-12" >
            <h2 className="text-4xl font-bold text-black">
              Why Choose Us
            </h2>
            <span className="block w-20 h-1 bg-yellowa mx-auto mt-2 rounded-full"></span>
          </motion.div>


          {/* Motion Container with Staggered Scroll Animation */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                variants={card}
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
                className="p-6 bg-white rounded-2xl shadow-sm text-center"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="font-bold text-base h-8 text-black">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2 text-base/6">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

        {/* Ready Section */}
<section className="py-20 bg-gray-50 ">
  <div className="max-w-4xl mx-auto px-6 text-center text-black">
    {/* Heading */}
    <motion.h2
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      className="text-4xl font-bold leading-snug"
    >
      Ready to Move Your Business Forward?
    </motion.h2>

    {/* Subtext */}
    <motion.p
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="mt-4 text-base/6 text-black max-w-2xl mx-auto">
      Whatever your logistics needs are,{" "}
      <span className="font-semibold">MESKTOMO LOGISTICS LIMITED</span> provides
      the reliability, expertise, and excellent service you deserve.
    </motion.p>

    {/* Button */}
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="mt-8"
    >
      <Link to="/quote">
        <button className="bg-yellowa text-greener px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-white hover:text-greener transition duration-300">
          Get a Free Quote
        </button>
      </Link>
    </motion.div>
  </div>
</section>


    </>
  );
}
