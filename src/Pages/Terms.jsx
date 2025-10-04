// TermsPage.jsx
import React from "react";

export default function TermsPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="h-[100vh] flex flex-col justify-center items-center text-center bg-greener text-white px-6 sm:px-10 md:px-16 lg:px-30">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Terms & Conditions
        </h1>
        <p className="mt-4 max-w-2xl text-lg">
          Please read these terms carefully before using our logistics and
          supply chain services.
        </p>
      </section>

      {/* Terms Content */}
      <section className="py-16 px-6 md:px-30 text-gray-700 leading-relaxed">
        <h2 className="text-2xl font-bold text-black mb-6">1. Payment Terms</h2>
        <p className="mb-6">
          Full payment for the agreed-upon carriage service is required upfront
          before the shipment is accepted for transport, unless otherwise agreed
          in writing. The Company reserves the right to withhold goods until
          payment is fully settled and confirmed as cleared funds.
        </p>

        <h2 className="text-2xl font-bold text-black mb-6">
          2. Prohibited Goods and Compliance
        </h2>
        <p className="mb-6">
          The Company will not transport goods that are illegal, dangerous, or
          otherwise prohibited under the laws and regulations of the Federal
          Republic of Nigeria <strong>(FRN)</strong> or any transit country.
          The Customer is solely responsible for ensuring the legality of all
          items. If Prohibited Goods are shipped and result in seizure,
          confiscation, fines, or legal action, the Customer will bear all
          associated costs and liabilities.{" "}
          <strong>
            The Company accepts no responsibility or liability in such cases.
          </strong>
        </p>

        <h2 className="text-2xl font-bold text-black mb-6">
          3. Customs and Regulatory Clearance
        </h2>
        <p className="mb-6">
          The Customer is responsible for completing all customs declarations,
          paying duties, taxes, and fees, and obtaining necessary permits or
          licenses from Nigerian regulatory authorities. Where a{" "}
          <strong>Licensed Customs Clearing Agent</strong> is engaged, such
          engagement is strictly in an intermediary capacity and does not
          transfer responsibility to the Company.{" "}
          <strong>
            The Company is not liable for delays, seizures, penalties, or losses
            caused by regulatory processes, incorrect documentation, or events
            beyond its control.
          </strong>
        </p>

       <h2 className="text-2xl font-bold text-black mb-6">
  4. Insurance and Liability
</h2>
<p className="mb-4">
  <strong>a. Standard Liability:</strong> The Company’s liability for loss,
  damage, or delay is{" "}
  <strong>
    arbitrarily set by the Insuring Firm vis-à-vis the Estimated Annual
    Carriage and Limit per Carriage
  </strong>
  . Beyond this insurance-determined ceiling, the Company assumes no
  liability whatsoever.
</p>
<p className="mb-4">
  <strong>b. Insurance Coverage:</strong> For goods exceeding the standard
  liability limit, the Customer must purchase premium insurance coverage
  through the Company or an independent insurer. Without such coverage,
  the Company bears no further liability for any shortfall, loss, or damage.
</p>
<p className="mb-6">
  <strong>c. Exclusions:</strong> The Company shall not be liable under any
  circumstances, whether in contract, tort, negligence, or otherwise, for
  damages or losses arising from inadequate packaging, inherent defects,
  deterioration of goods,{" "}
  <strong>
    force majeure events, accidents, theft, or any circumstance beyond the
    Company’s reasonable control
  </strong>
  .
</p>


        <h2 className="text-2xl font-bold text-black mb-6">
          5. Packaging and Condition of Goods
        </h2>
        <p className="mb-6">
          The Customer must ensure all goods are properly and securely packaged
          to withstand handling, stacking, and vibration during transport. The
          Company reserves the right to reject shipments that are inadequately
          packaged or appear to be in poor condition upon acceptance.{" "}
          <strong>
            Liability for losses due to poor packaging rests solely with the
            Customer.
          </strong>
        </p>

        <h2 className="text-2xl font-bold text-black mb-6">6. Use of Escorts</h2>
        <p className="mb-6">
          Where security escorts are required or requested for the safe transit
          of goods, especially in areas of heightened security risk within Nigeria. 
          The arrangement and cost of such escorts shall be the
          responsibility of the Customer, unless otherwise agreed in writing.
          The Company may assist in coordinating security escorts through
          approved third-party providers but{" "}
          <strong>
            shall not be held liable for the conduct, negligence, or performance
            of such escorts
          </strong>
          .
        </p>

        <p className="mt-12 text-gray-600 text-sm italic">
          <strong>Note:</strong> These Terms & Conditions are subject to review
          and may be updated. The Company operates strictly as a carrier and
          facilitator, not as a guarantor. Customers are strongly advised to
          consult a legal professional for clarification regarding liability,
          insurance, and regulatory compliance obligations.
        </p>
      </section>

      {/* Flash Marquee */}
<div className="w-full bg-yellowa text-gray-800 py-2 overflow-hidden">
  <div className="animate-marquee whitespace-nowrap text-sm font-bold text-greener">
  Mesktomo Logistics Limited is a licensed Customs Clearing Agent (in view).
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
