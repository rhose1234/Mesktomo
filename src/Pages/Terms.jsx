// TermsPage.jsx
import React from "react";

export default function TermsPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="h-[100vh] flex flex-col justify-center items-center text-center bg-greener text-white px-6 sm:px-10 md:px-16 lg:px-30">
        <h1 className="text-4xl md:text-5xl font-extrabold">Terms & Conditions</h1>
        <p className="mt-4 max-w-2xl text-lg">
          Please read these terms carefully before using our logistics and customs clearing services.
        </p>
      </section>

      {/* Terms Content */}
      <section className="py-16 px-6 md:px-30 text-gray-700 leading-relaxed">
        {/* <h2 className="text-2xl font-bold text-black mb-6">
          MESKTOMO LOGISTICS LIMITED – TERMS & CONDITIONS
        </h2>
        <p className="italic mb-8 text-sm font-semibold">
          (OFFICIAL LICENSED CUSTOMS CLEARING AGENT)
        </p> */}

        <h3 className="text-2xl font-bold text-black mb-4">1. Payment Terms</h3>
        <p className="mb-6">
          Full payment for carriage or clearing services is required upfront before Mesktomo
          Logistics Limited accepts any shipment, unless otherwise agreed in writing.
        </p>

        <h3 className="text-2xl font-bold text-black mb-4">2. Client Documentation Warranty</h3>
        <p className="mb-6">
          The Client warrants that all documents and information provided are accurate, complete,
          and compliant with Nigerian regulatory requirements, including NCSA 2023.
        </p>

        <h3 className="text-2xl font-bold text-black mb-4">3. Prohibited & Restricted Goods</h3>
        <p className="mb-6">
          The Company does not transport or clear illegal, dangerous, or prohibited goods.
          All liability arising from such items rests solely with the Client.
        </p>

        <h3 className="text-2xl font-bold text-black mb-4">4. Customs & Regulatory Responsibility</h3>
        <p className="mb-6">
          The Client is fully responsible for customs declarations, duties, taxes, storage,
          demurrage, regulatory fines, and compliance processes.
        </p>

        <h3 className="text-2xl font-bold text-black mb-4">5. Indemnity by the Client</h3>
        <p className="mb-6">
          The Client indemnifies Mesktomo Logistics Limited against all losses, penalties,
          seizures, and legal costs arising from documentation errors, prohibited goods,
          delays, or NCSA 2023 violations.
        </p>

        <h3 className="text-2xl font-bold text-black mb-4">6. Limitation of Liability</h3>
        <p className="mb-6">
          Company liability shall not exceed the Professional Fee charged or ₦500,000 whichever is
          lower. The Company holds no liability for consequential or third-party losses.
        </p>

        <h3 className="text-2xl font-bold text-black mb-4">7. Packaging Responsibility</h3>
        <p className="mb-6">
          The Client must ensure proper packaging. The Company is not responsible for damages
          resulting from inadequate packing.
        </p>

        <h3 className="text-2xl font-bold text-black mb-4">8. Security Escorts</h3>
        <p className="mb-6">
          Where required, the Client is responsible for arranging and paying for escorts.
          The Company is not liable for third-party escort performance.
        </p>

        <h3 className="text-2xl font-bold text-black mb-4">9. Penalties Under NCSA 2023</h3>
        <p className="mb-6">
          The Client acknowledges penalties up to ₦5,000,000 and possible imprisonment for customs violations.
        </p>

        <h3 className="text-2xl font-bold text-black mb-4">10. Dispute Resolution</h3>
        <p className="mb-6">
          All disputes shall be resolved through arbitration in Lagos, Nigeria,
          under the Arbitration and Mediation Act 2023.
        </p>

        {/* <h3 className="text-2xl font-bold text-black mb-4">11. General Notice</h3>
        <p className="mb-6">
          Terms may be updated. The Company operates as a licensed customs clearing agent, not an insurer.
        </p> */}

        <p className="mt-12 text-gray-600 text-sm italic">
          <strong>Note:</strong>These Terms & Conditions are subject to review and may be updated. The Company operates strictly as a carrier and facilitator, not as a guarantor. Customers are strongly advised to consult a legal professional for clarification regarding liability, insurance, and regulatory compliance obligations. </p>
      </section>

      {/* Flash Marquee */}
      <div className="w-full bg-yellowa text-gray-800 py-2 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap text-sm font-bold text-greener">
        <p>
            <strong>We are officially a Customs Clearing agent</strong> 

        </p>
        </div>
      </div> 

      <style jsx>{`
        .animate-marquee {
          display: inline-block;
          padding-left: 100%;
          animation: marquee 12s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}
