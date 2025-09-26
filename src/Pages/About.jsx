import React from 'react'
import { motion } from "framer-motion";



export default function About() {

 const industries = [
  "Manufacturing and Industrial Goods",
  "Retail and Consumer Products",
  "Agriculture and Commodities",
  "Automotive and Machinery",
  "Energy and Chemicals",
  "Pharmaceuticals and Healthcare Equipment",
  "Technology and Electronics",
];

const industriesLoop = [...industries, ...industries];




  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

   const commitments = [
    {
      title: "Reliability",
      description: "Consistent, on-time delivery you can count on.",
      image: "https://i.postimg.cc/TwCzrfbB/reliability.jpg",
    },
    {
      title: "Innovation",
      description: "Using technology to simplify logistics processes.",
      image: "https://i.postimg.cc/br6qN1LD/innovation.jpg",
    },
    {
      title: "Safety & Compliance",
      description:
        "Strict adherence to industry standards in handling and transport.",
      image: "https://i.postimg.cc/yYdVprYF/safety.jpg",
    },
    {
      title: "Customer-Centric Service",
      description: "Solutions tailored to your business needs.",
      image: "https://i.postimg.cc/BbvGyXsq/customer.jpg",
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
      <section className="pt-20 pb-10 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-row-1 md:grid-row-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src="https://i.postimg.cc/hvKGGDBw/teamwork.jpg"
              alt="About MESKTOMO Logistics"
              className="rounded-xl shadow-lg w-full h-80 object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-3 text-center">Who We Are</h2>
            <p className="text-gray-700 text-base/6 mb-4 text-center">
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

      <section className="pt-10 pb-20  bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Vision */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="p-8 bg-gray-50 rounded-2xl shadow-md"
        >
          <p className="text-sm text-yellowa uppercase tracking-widest mb-2">
            Our Vision
          </p>
          <h3 className="text-2xl md:text-3xl font-extrabold text-black mb-4">
            To be the most trusted logistics partner across Africa and beyond
          </h3>
          <p className="text-gray-700 text-base leading-relaxed">
            Delivering innovative, reliable, and secure logistics solutions that
            empower businesses and connect global markets.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="p-8 bg-gray-50 rounded-2xl shadow-md"
        >
          <p className="text-sm text-yellowa uppercase tracking-widest mb-2">
            Our Mission
          </p>
          <h3 className="text-2xl md:text-3xl font-extrabold text-black mb-4">
            Deliver excellence in every shipment
          </h3>
          <p className="text-gray-700 text-base leading-relaxed">
            We simplify supply chains through technology, operational excellence,
            and customer-centric solutions. Ensuring timely, compliant, and
            cost-effective delivery for every client.
          </p>
        </motion.div>
      </div>
    </section>

      {/* our commitment */}
      <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12" >
          <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-3">Our Commitment to Quality and Safety</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base/6">
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

      {/* trusted by */}
   <section className="pt-16 pb-8  overflow-hidden">
  <div className="max-w-6xl mx-auto px-6">
    {/* Heading */}
    <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-3 text-center ">
      Trusted by Businesses Across Industries
    </h2>
    {/* Centered Paragraph */}
    <p className="text-center text-base/6 text-gray-700 mt-3 max-w-3xl mx-auto mb-12">
      We understand the unique logistics challenges faced by each sector and
      customize our services to facilitate efficient, compliant, and secure
      movement of goods.
    </p>

    {/* First Row (scroll left) */}
    <motion.div
      className="flex space-x-6 mb-8"
      animate={{ x: ["0%", "-50%"] }}
      transition={{
        ease: "linear",
        duration: 20,
        repeat: Infinity,
      }}
    >
      {industriesLoop.map((item, index) => (
        <div
          key={`row1-${index}`}
          className="px-6 py-3 bg-white text-greener font-semibold rounded-full shadow-md border border-gray-200 flex-shrink-0 hover:bg-greener hover:text-white transition-colors duration-300 cursor-pointer"
        >
          {item}
        </div>
      ))}
    </motion.div>

    {/* Second Row (scroll right) */}
    <motion.div
      className="flex space-x-6 mb-8"
      animate={{ x: ["-50%", "0%"] }}
      transition={{
        ease: "linear",
        duration: 20,
        repeat: Infinity,
      }}
    >
      {industriesLoop.map((item, index) => (
        <div
          key={`row2-${index}`}
          className="px-6 py-3 bg-white text-greener font-semibold rounded-full shadow-md border border-gray-200 flex-shrink-0 hover:bg-greener hover:text-white transition-colors duration-300 cursor-pointer"
        >
          {item}
        </div>
      ))}
    </motion.div>

    
  </div>
</section>

{/* partner with us */}
<motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12" >
<section className="relative py-20 my-20 bg-greener rounded-3xl mx-8 md:mx-28">
  <div className="max-w-4xl mx-auto text-center text-white px-6">
    <p className="uppercase tracking-widest text-yellowa text-sm mb-2">
      Partner With Us
    </p>

    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
      Let’s Build the Future of Logistics 
    </h2>

    <p className="text-base/6 mb-8">
      Whatever your logistics needs, MESKTOMO LOGISTICS LIMITED provides the reliability,
      expertise, and service excellence you deserve.
    </p>

    <a
      href="mailto:sales@mesktomolog.com"
      className="bg-yellowa text-greener px-8 py-3 rounded-full font-bold 
                 hover:bg-white hover:text-greener transition duration-300"
    >
      Email Us Today
    </a>
  </div>
  
</section>
</motion.div>



    </>
  )
}
