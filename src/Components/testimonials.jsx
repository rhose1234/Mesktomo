import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: " Mr David",
    role: "Business Owner",
    image: "https://i.postimg.cc/qRMzz9FK/Whats-App-Image-2025-09-26-at-10-45-48-3f0f6e9e.jpg",
    text: "In an industry where reliability is everything, Mesktomo Logistics Limited delivers on their promises and gives you peace of mind that your goods are in safe hands. I have full confidence in recommending their services to anyone in need of a trusted logistics partner. This is a company built on integrity, dedication, and results ",
  },
  {
    name: "John Smith",
    role: "CEO, StartupX",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "Fast, professional, and always dependable. I recommend them to anyone needing logistics solutions.",
  },
  {
    name: "Sophia Lee",
    role: "Entrepreneur",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    text: "Customer support was excellent and the delivery was right on time. Highly impressed!",
  },
  {
    name: "Michael Brown",
    role: "Founder, TechFlow",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
    text: "They streamlined our supply chain and saved us time and money.",
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-16 ">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-black mb-8">Our Testimonials</h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover mb-4"
                />
                <h3 className="font-bold text-base">{t.name}</h3>
                <p className="text-sm text-gray-500">{t.role}</p>
                <p className="mt-3 text-gray-700 text-sm/6 italic">"{t.text}"</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
