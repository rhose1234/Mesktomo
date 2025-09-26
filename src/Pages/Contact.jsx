// ContactUs.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// ✅ Validation schema
const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().required("Message is required"),
});

export default function Contact() {
  const [formStatus, setFormStatus] = useState(null); 

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await fetch("https://mesktomolog.com/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setFormStatus({ type: "success", text: "Message sent successfully!" });
        resetForm();
      } else {
        setFormStatus({
          type: "error",
          text: "Failed to send message. Please try again!.",
        });
      }
    } catch (error) {
      setFormStatus({
        type: "error",
        text: "⚠️ An error occurred. Please try again later!",
      });
    }

    // Auto-hide message after 5s
    setTimeout(() => setFormStatus(null), 5000);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="contactHero relative h-screen flex items-center justify-center bg-cover bg-center">
        <div className="relative text-center text-white px-6">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight break-words"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Contact Us
          </motion.h1>

          <motion.p
            className="mt-4 max-w-2xl text-base"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Reach out to us for inquiries, quotes, or partnership opportunities.
          </motion.p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 px-6 md:px-28 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
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
                <span className="font-bold">Email:</span> sales@mesktomolog.com
              </li>
              <li>
                <span className="font-bold">Website:</span> www.mesktomolog.com
              </li>
              <li>
                <span className="font-bold">Company:</span> MESKTOMO LOGISTICS
                LIMITED
              </li>
            </ul>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="bg-white shadow-lg rounded-2xl p-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-extrabold mb-6 text-black">
              Send Us a Message
            </h3>

            <Formik
              initialValues={{ name: "", email: "", message: "" }}
              validationSchema={ContactSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-6">
                  <div>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      className="w-full border border-gray-300 text-sm rounded-lg px-4 py-3 focus:ring-2 focus:ring-greener focus:outline-none"
                    />
                    <ErrorMessage
                      name="name"
                      component="p"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="w-full border border-gray-300 text-sm rounded-lg px-4 py-3 focus:ring-2 focus:ring-greener focus:outline-none"
                    />
                    <ErrorMessage
                      name="email"
                      component="p"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div>
                    <Field
                      as="textarea"
                      rows="4"
                      name="message"
                      placeholder="Type your message"
                      className="w-full border text-sm border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-greener focus:outline-none"
                    />
                    <ErrorMessage
                      name="message"
                      component="p"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-greener text-white font-bold py-3 rounded-lg hover:text-greener hover:bg-yellowa transition duration-300"
                  >
                    {isSubmitting ? "Sending..." : "Submit Message"}
                  </button>

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
                </Form>
              )}
            </Formik>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
