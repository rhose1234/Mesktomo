import React, { memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Boxes, Cpu, Globe2, BadgeCheck } from "lucide-react";
import TestimonialSection from "../Components/testimonials";
import Flow from "../Components/Flow";
import Blogs from "../Components/Blogs";

const HighlightCard = memo(({ item, card }) => (
  <motion.div
    variants={card}
    whileHover={{ scale: 1.05, rotate: 1 }}
    whileTap={{ scale: 0.95 }}
    className="p-6 bg-white rounded-2xl shadow-sm text-center"
  >
    <div className="flex justify-center mb-4">{item.icon}</div>
    <h3 className="font-bold text-base h-8 mb-8 text-black">{item.title}</h3>
    <p className="text-gray-600 mt-2 text-base/6 text-center">{item.description}</p>
  </motion.div>
));

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
    show: { opacity: 1, transition: { staggerChildren: 0.25 } },
  };
  const card = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
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

  return (
    <>
      {/* Hero Section */}
      <section className="HeroSection min-h-screen w-full flex justify-center items-center flex-col text-center overflow-hidden " loading="lazy">
        <div className="max-w-3xl mx-auto px-6 text-white pt-20">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight break-words"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {" "}
            Delivering Excellence in Logistics Solutions
          </motion.h1>
          <motion.p
            className="mt-4 max-w-2xl text-base"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            As an industry leader, we specialize in providing comprehensive
            logistics solutions designed to connect businesses, facilitate
            trade, and empower growth across regional and international markets.
          </motion.p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block overflow-hidden"
          >
            <Link to="/quote">
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="mt-3 bg-yellowa text-greener px-6 py-3 rounded-full font-bold hover:bg-white hover:text-greener transition duration-300"
              >
                Get a Free Quote
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="about py-16">
        <div className=" px-6 sm:px-10 md:px-16 lg:px-30">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl font-extrabold text-black mb-2">
              About Us
            </h2>
          </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
  <motion.img
    variants={fadeLeft}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
    src="https://i.postimg.cc/SNp6WCSF/about.jpg"
    alt="About MESKTOMO Logistics"
    className="rounded-2xl shadow-lg w-full h-full object-cover"
    loading="lazy"
  />
  <motion.div
    variants={fadeRight}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
    className="h-full flex flex-col justify-center"
  >
    <p className="text-gray-700 text-base/8 w-full">
      <span className="font-bold text-black">
        MESKTOMO LOGISTICS LIMITED
      </span>
     {" "} is a logistics provider and a licensed customs clearing agent, a trusted
      partner committed to simplifying supply chains and empowering
      business growth. With a blend of industry expertise and
      cutting-edge technology, we ensure that every shipment is
      delivered safely, on time, and cost-effectively.
    </p>
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link to="/about">
        <button className="mt-3 bg-yellowa text-greener px-6 py-3 rounded-full font-bold transition duration-300">
          Learn More
        </button>
      </Link>
    </motion.div>
  </motion.div>
</div>

        </div>
      </section>

       {/* Industries Section */}
      <section className="py-16 bg-gray-50">
        <div className="px-6 sm:px-10 md:px-16 lg:px-30 text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-black mb-2"
          >
            Industries We Serve
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-700 text-sm/6 mb-10"
          >
            MESKTOMO LOGISTICS LIMITED supports a diverse range of industries
          </motion.p>

          {/* Buttons with stagger */}
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {[
              "Manufacturing and Industrial Goods",
              "Retail and Consumer Products",
              "Agriculture and Commodities",
              "Automotive and Machinery",
              "Energy and Chemicals",
              "Pharmaceuticals and Healthcare Equipment",
              "Technology and Electronics",
            ].map((industry, index) => (
              <motion.button
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="bg-transparent border-greener border-2 text-base text-greener font-normal px-5 py-3 rounded-full hover:bg-greener hover:text-yellowa transition duration-300"
              >
                {industry}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>


      {/* Why Us Section */}
      <section className="py-16 bg-white">
        <div className=" px-6 sm:px-10 md:px-16 lg:px-30">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-extrabold text-black mb-2">
              Why Choose Us
            </h2>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {highlights.map((item, index) => (
              <HighlightCard key={index} item={item} card={card} />
            ))}
          </motion.div>
        </div>
      </section>

      
      <Flow/>

      <TestimonialSection />

      <Blogs />
      {/* Ready Section */}
      <section className="py-20 bg-gray-50">
        <div className="  px-6 sm:px-10 md:px-16 lg:px-40 text-center text-black">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-4xl font-extrabold text-black mb-2"
          >
            Ready to Move Your Business Forward?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-4 text-base/6 text-black max-w-2xl mx-auto"
          >
            Whatever your logistics needs are,{" "}
            <span className="font-semibold">MESKTOMO LOGISTICS LIMITED</span>{" "}
            provides the reliability, expertise, and excellent service you
            deserve.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8"
          >
            <Link to="/quote">
              <button className="bg-yellowa text-greener px-10 py-4 rounded-full font-bold text-base shadow-lg hover:bg-greener hover:text-white transition duration-300">
                Get a Free Quote
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
