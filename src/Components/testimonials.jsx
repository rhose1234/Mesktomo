import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: " Mr David",
    role: "Business Owner",
    image:
      "https://i.postimg.cc/qRMzz9FK/Whats-App-Image-2025-09-26-at-10-45-48-3f0f6e9e.jpg",
    text: "In an industry where reliability is everything, Mesktomo Logistics Limited delivers on their promises and gives you peace of mind that your goods are in safe hands. I have full confidence in recommending their services to anyone in need of a trusted logistics partner. This is a company built on integrity, dedication, and results ",
  },
  {
    name: "Marios Minas",
    role: "",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "At the core of everything when it's comes to Logistics, Mesktomo Logistics Limited is the go to Name and Trusted Brand you can count on. If you want safe conveyance of goods , then they are your go to  Logistics Partner."
  },
  {
    name: "SPRING INTEGRITY LTD.",
    role: "SPRING INTEGRITY LTD.",
    image: "https://i.postimg.cc/LX3bZrG4/Whats-App-Image-2025-09-27-at-15-39-18-75622b54.jpg",
    text: "I’ve worked with Mr. Akin and Mesktomo Logistics for years, and I confidently recommend them. Their professionalism, efficiency, attention to detail, and commitment to timely delivery have greatly improved our operations. I fully endorse their dependable logistics services",
  },
  {
   name: " Mr David",
    role: "Business Owner",
    image:
      "https://i.postimg.cc/qRMzz9FK/Whats-App-Image-2025-09-26-at-10-45-48-3f0f6e9e.jpg",
    text: "In an industry where reliability is everything, Mesktomo Logistics Limited delivers on their promises and gives you peace of mind that your goods are in safe hands. I have full confidence in recommending their services to anyone in need of a trusted logistics partner. This is a company built on integrity, dedication, and results ",
  },
  {
    name: "Marios Minas",
    role: "",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "At the core of everything when it's comes to Logistics, Mesktomo Logistics Limited is the go to Name and Trusted Brand you can count on. If you want safe conveyance of goods , then they are your go to  Logistics Partner."
  },
  {
    name: "SPRING INTEGRITY LTD.",
    role: "SPRING INTEGRITY LTD.",
    image: "https://i.postimg.cc/LX3bZrG4/Whats-App-Image-2025-09-27-at-15-39-18-75622b54.jpg",
    text: "I’ve worked with Mr. Akin and Mesktomo Logistics for years, and I confidently recommend them. Their professionalism, efficiency, attention to detail, and commitment to timely delivery have greatly improved our operations. I fully endorse their dependable logistics services",
  },
  
];

export default function TestimonialSection() {
  return (
    <section className="py-16 ">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-black mb-8">
          Our Testimonials
        </h2>

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
              <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center ">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover mb-4"
                />
                <h3 className="font-bold text-base">{t.name}</h3>
                <p className="text-sm text-gray-500">{t.role}</p>
                <p className="mt-3 text-gray-700 text-sm/6 h-60 italic">
                  "{t.text}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
