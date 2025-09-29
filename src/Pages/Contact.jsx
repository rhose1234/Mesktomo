// ContactUs.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// ✅ Validation schemas
const IndividualSchema = Yup.object().shape({
  name: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().required("Message is required"),
});

const CompanySchema = Yup.object().shape({
  companyName: Yup.string().required("Company name is required"),
  contactPerson: Yup.string().required("Contact person is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().required("Message is required"),
});



export default function Contact() {
  const [formStatus, setFormStatus] = useState(null);
  const [formType, setFormType] = useState("individual"); // default

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await fetch("https://mesktomolog.com/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, formType }),
      });

      if (response.ok) {
        setFormStatus({ type: "success", text: "Message sent successfully!" });
        resetForm();
      } else {
        setFormStatus({
          type: "error",
          text: "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setFormStatus({
        type: "error",
        text: "⚠️ An error occurred. Please try again later!",
      });
    }

    setTimeout(() => setFormStatus(null), 5000);
  };

    const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
   <section className="relative h-[calc(80vh-64px)]  pt-20 md:h-screen w-full flex items-center justify-center bg-greener px-0 md:px-6">
  {/* Wrapper */}
  <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl w-full md:pt-20 pt-0">
    
    {/* Flag Image */}
    <img
      src="https://i.postimg.cc/fRtQ9sdg/reduce-the-size-of-the-text-here-and-the-size-of-flag-too.jpg"
      alt="About MESKTOMO Logistics"
      className="rounded-none md:rounded:xl shadow-lg w-full md:w-1/2 object-cover"
    />

    {/* Text Content */}
    <div className="text-center md:text-left text-white max-w-2xl px-4 md:px-0">
      <motion.h1
        className="text-3xl md:text-6xl font-extrabold leading-tight break-words"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Talk to us
      </motion.h1>

      <motion.p
        className="mt-4 text-base md:text-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Reach out for inquiries, quotes, or partnership opportunities
      </motion.p>
    </div>
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
              we’ll respond as soon as possible.
            </p>
            <ul className="space-y-4 text-gray-800">
              <li>
                <span className="font-bold">Phone:</span> 08140807725,
                08065603458, 08033813154
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
            className="bg-white shadow-lg rounded-2xl p-8 w-full"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-extrabold mb-6 text-black">
              Send Us a Message
            </h3>

            {/* Toggle between Individual / Company */}
            <div className="flex mb-6 space-x-4">
              <button
                onClick={() => setFormType("individual")}
                className={`px-4 py-2 rounded-lg font-bold ${
                  formType === "individual"
                    ? "bg-greener text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                Individual
              </button>
              <button
                onClick={() => setFormType("company")}
                className={`px-4 py-2 rounded-lg font-bold ${
                  formType === "company"
                    ? "bg-greener text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                Company
              </button>
            </div>

            <Formik
              initialValues={
                formType === "company"
                  ? { companyName: "", contactPerson: "", email: "", message: "" }
                  : { name: "", email: "", message: "" }
              }
              validationSchema={
                formType === "company" ? CompanySchema : IndividualSchema
              }
              onSubmit={handleSubmit}
              enableReinitialize
            >
              {({ isSubmitting }) => (
                <Form className="space-y-6">
                  {formType === "company" ? (
                    <>
                      <div>
                        <Field
                          type="text"
                          name="companyName"
                          placeholder="Enter your company's name"
                          className="w-full border border-gray-300 text-sm rounded-lg px-4 py-3 focus:ring-2 focus:ring-greener focus:outline-none"
                        />
                        <ErrorMessage
                          name="companyName"
                          component="p"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>
                      <div>
                        <Field
                          type="text"
                          name="contactPerson"
                          placeholder="Contact person name"
                          className="w-full border border-gray-300 text-sm rounded-lg px-4 py-3 focus:ring-2 focus:ring-greener focus:outline-none"
                        />
                        <ErrorMessage
                          name="contactPerson"
                          component="p"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>
                    </>
                  ) : (
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
                  )}

                  <div>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Enter email"
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
