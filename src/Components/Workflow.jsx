// WorkflowSection.jsx
import React from "react";
import { ClipboardList, PhoneCall, FileCheck, Package, MapPin } from "lucide-react";

const steps = [
  {
    title: "Request a Quote",
    icon: ClipboardList,
    description: "Fill out our form or reach out to request a tailored logistics quote.",
  },
  {
    title: "We Contact You",
    icon: PhoneCall,
    description: "Our team gets in touch to confirm details and understand your needs.",
  },
  {
    title: "Documentation",
    icon: FileCheck,
    description: "We prepare all necessary permits, paperwork, and compliance checks.",
  },
  {
    title: "Pickup & Handling",
    icon: Package,
    description: "Our team collects your shipment and ensures safe handling.",
  },
  {
    title: "Delivery Done",
    icon: MapPin,
    description: "Goods are delivered on time with full transparency and updates.",
  },
];

export default function WorkflowSection() {
  return (
    <section className="pt-10 pb-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-16">
          How We Work
        </h2>

        {/* Desktop: horizontal chain | Mobile: vertical */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center relative md:w-1/5 px-4"
              >
                {/* Circle with icon */}
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-greener text-white relative z-10">
                  <Icon className="w-8 h-8" />
                </div>

                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div
                    className="absolute md:top-8 md:left-full md:w-full md:h-1 
                               top-16 left-1/2 w-1 h-full
                               bg-gray-300"
                    style={{
                      transform: "translateX(-50%)",
                      zIndex: 0,
                    }}
                  ></div>
                )}

                {/* Title + description (aligned height) */}
                <div className="mt-6 flex flex-col h-32">
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 flex-grow">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
