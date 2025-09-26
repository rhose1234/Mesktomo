// ContactUs.jsx
import React from "react";

export default function Contact() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="contactHero relative h-screen flex items-center justify-center bg-cover bg-center">
        <div className="relative  text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Delivering Excellence in Logistics Solutions. Reach out to us for
            inquiries, quotes, or partnership opportunities.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 px-28 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">
          {/* Left: Contact Info */}
          <div>
            
            <p className="text-gray-700 mb-4 text-base/6">
              At MESKTOMO LOGISTICS LIMITED, we’re always ready to assist with
              your logistics needs. Contact us via phone, email, or the form and
              we’ll get back to you as soon as possible.
            </p>
            <ul className="space-y-4 text-gray-800">
              <li>
                <span className="font-bold">Phone:</span>{" "}
                08140807725, 08065603458, 08033813154
              </li>
              <li>
                <span className="font-bold">Email:</span>{" "}
                sales@mesktomolog.com
              </li>
              <li>
                <span className="font-bold">Website:</span>{" "}
                www.mesktomolog.com
              </li>
              <li>
                <span className="font-bold">Company:</span> MESKTOMO LOGISTICS
                LIMITED
              </li>
            </ul>
          </div>

          {/* Right: Form */}
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h3 className="text-2xl font-extrabold mb-6 text-black">
              Send Us a Message
            </h3>
            <form className="space-y-6">
              <div>
                
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-greener focus:outline-none"
                />
              </div>
              <div>
             
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-greener focus:outline-none"
                />
              </div>
              <div>
                
                <textarea
                  rows="4"
                  placeholder="Type your message"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-greener focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-greener text-white font-bold py-3 rounded-lg hover:text-greener hover:bg-yellowa transition duration-300"
              >
                Submit Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
