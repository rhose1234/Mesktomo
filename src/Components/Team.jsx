import React, { useState } from "react";
import { motion } from "framer-motion";


const teamMembers = [
  {
    id: 1,
    name: "Akinola Meseko",
    position: " Commercial Business Manager",
    image: "https://i.postimg.cc/SKfQrWTJ/Whats-App-Image-2025-09-27-at-17-59-02-12c8121d.jpg",
    description:
      "Akinola Meseko oversees the commercial business division and is responsible for driving business growth and providing customer centric solutions to all customs related issues for clearing of goods and forwarding, warehousing and the logistics of goods as per fleet management. He has spanning over 15years experience in the areas of sales and marketing and also fleet management as regarding logistics and tyres management.",
  },
  {
    id: 2,
    name: "Mary Osarenoma Meseko",
    position: "Business Finance & Operations Manager ",
    image: "https://i.postimg.cc/3NwYBNWw/Whats-App-Image-2025-09-27-at-18-49-00-3686ff66.jpg",
    description:
      "Mary Osarenoma Meseko is responsible for the operations of the business's day to day activity, and maintenance of the financial records, ensuring the Company operates in a healthy state financially.",
  },
 
];

export default function OurTeam() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section className="pt-20 pb-10 bg-white px-6 sm:px-10 md:px-16 lg:px-30">
      <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className=" mb-12 container mx-auto px-4"
          > 
        <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-12 text-center">Meet Our Team</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              onClick={() => setSelectedMember(member)}
              className="cursor-pointer rounded-[15px] shadow-md bg-transparent border-greener border-1 hover:shadow-sm transition pb-10 text-center"
            >
            <img
  src={member.image}
  alt={member.name}
  className="w-full h-60 object-cover rounded-t-[15px] mb-4"
/>

              <h3 className="text-lg font-bold mb-2">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-greener text-white rounded-[15px] shadow-lg max-w-lg w-full px-6 py-10 relative">
            {/* Close button */}
            <button
              className="absolute top-3 right-3 text-white"
              onClick={() => setSelectedMember(null)}
            >
              ✕
            </button>

            <div className="flex flex-col md:flex-row items-center gap-6">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-32 h-32 object-cover "
                loading="lazy"
              />
              <div>
                <h3 className="text-xl font-bold text-white">{selectedMember.name}</h3>
                <p className=" mb-3 text-white">{selectedMember.position}</p>
                <p className=" text-sm/6  text-white">{selectedMember.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
