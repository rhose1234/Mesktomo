// RequestQuotePage.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Quote() {
  const [formStatus, setFormStatus] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      weight: "",
      description: "",
      pickup: "",
      destination: "",
      transport: "Road",
      date: "",
      notes: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Full name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      phone: Yup.string().required("Phone number is required"),
      weight: Yup.number()
        .positive("Must be positive")
        .required("Weight is required"),
      description: Yup.string().required("Description is required"),
      pickup: Yup.string().required("Pickup location is required"),
      destination: Yup.string().required("Destination is required"),
      date: Yup.string().required("Pickup date is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      fetch("https://mesktomolog.com/api/send-quote.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setFormStatus({
              type: "success",
              text: "Quote requested, We'll take it up from here!😄",
            });
            resetForm();
          } else {
            setFormStatus({
              type: "error",
              text: "Failed to send. Please try again!",
            });
          }
        })
        .catch(() => {
          setFormStatus({
            type: "error",
            text: "Ooops Something went wrong. Please try again later!",
          });
        });

      // Auto-hide after 5s
      setTimeout(() => setFormStatus(null), 5000);
    },
  });

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="quoteHero h-screen bg-cover bg-center flex items-center justify-center text-white text-center">
        <div>
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight break-words"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Request a Free Quote
          </motion.h1>
          <motion.p
            className="mt-4 max-w-2xl text-base"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Get a tailored logistics solution by sharing your cargo details with
            us.
          </motion.p>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {/* Form Section */}
        <section className="pt-10 pb-20">
          <div className="max-w-4xl mx-auto px-6 bg-white p-10 rounded-lg shadow-lg">
            <h2 className="font-extrabold text-3xl md:text-4xl mb-12 text-center">
              Get a Custom Quote For Your Shipment
            </h2>

            <form
              onSubmit={formik.handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-18"
            >
              {/* Name */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  className="w-full border p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-greener text-sm"
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-red-500 text-sm">{formik.errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  className="w-full border p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-greener text-sm"
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-sm">{formik.errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-base">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  className="w-full border p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-greener text-sm"
                />
                {formik.touched.phone && formik.errors.phone && (
                  <p className="text-red-500 text-sm">{formik.errors.phone}</p>
                )}
              </div>

              {/* Weight */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-base">
                  Weight (KG)
                </label>
                <input
                  type="number"
                  name="weight"
                  placeholder="Enter weight in kilograms"
                  onChange={formik.handleChange}
                  value={formik.values.weight}
                  className="w-full border p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-greener text-sm"
                />
                {formik.touched.weight && formik.errors.weight && (
                  <p className="text-red-500 text-sm">{formik.errors.weight}</p>
                )}
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-semibold mb-2">
                  Description of Item
                </label>
                <textarea
                  name="description"
                  placeholder="Give a description of your item..."
                  onChange={formik.handleChange}
                  value={formik.values.description}
                  rows="3"
                  className="w-full border p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-greener text-sm"
                ></textarea>
                {formik.touched.description && formik.errors.description && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.description}
                  </p>
                )}
              </div>

              {/* Pickup */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-base">
                  Pickup Location
                </label>
                <input
                  type="text"
                  name="pickup"
                  placeholder="Enter pickup location"
                  onChange={formik.handleChange}
                  value={formik.values.pickup}
                  className="w-full border p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-greener text-sm"
                />
                {formik.touched.pickup && formik.errors.pickup && (
                  <p className="text-red-500 text-sm">{formik.errors.pickup}</p>
                )}
              </div>

              {/* Destination */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-base">
                  Destination Location
                </label>
                <input
                  type="text"
                  name="destination"
                  placeholder="Enter destination location"
                  onChange={formik.handleChange}
                  value={formik.values.destination}
                  className="w-full border p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-greener text-sm"
                />
                {formik.touched.destination && formik.errors.destination && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.destination}
                  </p>
                )}
              </div>

              {/* Mode of Transport */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-base">
                  Mode of Transport
                </label>
                <select
                  name="transport"
                  onChange={formik.handleChange}
                  value={formik.values.transport}
                  className="w-full border p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-greener text-sm"
                >
                  <option>Van</option>
                  <option>Bus</option>
                  <option>Bike</option>
                  <option>Truck</option>
                </select>
              </div>

              {/* Pickup Date */}
              <div>
                <label className="block text-gray-700 font-semibold text-base mb-2">
                  Pickup Date
                </label>
                <input
                  type="date"
                  name="date"
                  placeholder="Select a date"
                  onChange={formik.handleChange}
                  value={formik.values.date}
                  className="w-full border p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-greener text-sm"
                />
                {formik.touched.date && formik.errors.date && (
                  <p className="text-red-500 text-sm">{formik.errors.date}</p>
                )}
              </div>

              {/* Notes */}
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-semibold text-base mb-2">
                  Additional Notes
                </label>
                <textarea
                  name="notes"
                  placeholder="Any extra details you'd like us to know? (Optional)"
                  onChange={formik.handleChange}
                  value={formik.values.notes}
                  rows="3"
                  className="w-full border p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-greener text-sm"
                ></textarea>
              </div>

              {/* Submit */}
              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  className="bg-greener text-white px-8 py-3 rounded-full font-bold hover:bg-yellowa hover:text-black transition duration-300"
                >
                  Submit Request
                </button>

                {/* Success/Error Message */}
                {formStatus && (
                  <p
                    className={`mt-4 text-sm font-medium ${
                      formStatus.type === "success"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {formStatus.text}
                  </p>
                )}
              </div>
            </form>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
