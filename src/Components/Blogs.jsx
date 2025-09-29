// src/Components/BlogSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { img } from "framer-motion/client";

export default function Blogs() {
  const blogs = [
    {
    //   img: "https://i.postimg.cc/kMVww1TR/You-Tube-Thumbnail-The-7-Core-Pillars-of-Logistics-and-Supply-Chain.png",
     img : "https://i.postimg.cc/KYptCWFn/blank-cargo-truck-road.jpg",
      title: "The 7 Core Pillars of Logistics and Supply Chain",
      desc: "Discover the key innovations and strategies shaping the future of logistics and supply chain management.",
      readTime: "3 min read",
      link: "https://medium.com/@mesktomolog/the-7-core-pillars-of-logistics-and-supply-chain-4dbf425bf5f0",
    },
    {
    //   img: "https://i.postimg.cc/htpp2f75/You-Tube-Thumbnail-Unlocking-the-Power-of-Technology-1.png",
    img : "https://i.postimg.cc/8PsgSJhs/representation-user-experience-interface-design.jpg",
      title: "Unlocking the power of technology in logistics",
      desc: "Technology is far from simply being a tool, technology has become the core enabler, the competitive edge, and the future of the logistics business. ",
      readTime: "3 min read",
      link: "https://medium.com/@mesktomolog/the-digital-road-ahead-unlocking-the-power-of-technology-in-logistics-fec1b5498e6f",
    },
    {
      img: "https://i.postimg.cc/NFmJstjs/one-person-holding-jigsaw-puzzle-solution-success-generated-by-ai.jpg",
      title: "Ways of mitigating inherent challenges in Logistics",
      desc: "The primary ways to overcome the hurdles related to poor infrastructure, regulatory complexities, and security issues",
      readTime: "3 min read",
      link: "https://medium.com/@mesktomolog/ways-of-mitigating-inherent-challenges-in-logistics-fc20b43ff04d",
    },
    {
      img: "https://i.postimg.cc/KYf0jQbB/photorealistic-scene-with-warehouse-logistics-operations.jpg",
      title: "Factors Responsible for Seamless Logistics in Nigeria",
      desc: "Based on the analysis of the Nigerian logistics sector, 'seamless logistics' is more accurately described by the improvements needed to overcome current challenges",
      readTime: "2 min read",
      link: "https://medium.com/@mesktomolog/factors-responsible-for-seamless-logistics-in-nigeria-685f1b5b7fed",
    },
  ];

  return (
    <section className="py-16 bg-white" id="blogs">
      <div className=" px-6 md:px-30">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-black mb-2">Latest Insights</h2>
          <p className="text-gray-600 text-sm">
            Explore our latest blog posts on logistics, supply chain, and industry trends
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {blogs.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="font-bold text-lg text-black mb-2 h-24">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4 h-30">{post.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-greener text-sm font-semibold hover:underline"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Read More Blogs Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://medium.com/@mesktomolog"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellowa text-greener px-8 py-3 rounded-full font-bold hover:bg-greener hover:text-white transition duration-300"
          >
            Read More Blogs
          </a>
        </motion.div>
      </div>
    </section>
  );
}
