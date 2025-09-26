// TermsPage.jsx
import React from "react";

export default function TermsPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="h-[100vh] flex flex-col justify-center items-center text-center bg-greener text-white px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold">Terms & Conditions</h1>
        <p className="mt-4 max-w-2xl text-lg">
          Please read these terms carefully before using our logistics and supply chain services.
        </p>
      </section>

      {/* Terms Content */}
      <section className="  py-16 px-6 md:px-30 text-gray-700 leading-relaxed">
        <h2 className="text-2xl font-bold text-black mb-6">1. Payment Terms</h2>
        <p className="mb-6">
          Full payment for the agreed-upon carriage service is required upfront before the shipment 
          is accepted for transport, unless otherwise agreed in writing. The Company reserves the right 
          to withhold goods until payment is fully settled.
        </p>

        <h2 className="text-2xl font-bold text-black mb-6">2. Prohibited Goods and Compliance</h2>
        <p className="mb-6">
          The Company will not transport goods that are illegal, dangerous, or otherwise prohibited 
          under the laws and regulations of the Federal Republic of Nigeria <strong> (FRN) </strong>or any transit country. 
          The Customer is solely responsible for ensuring the legality of all items. If Prohibited Goods 
          are shipped and result in seizure, confiscation, fines, or legal action, the Customer will bear 
          all associated costs and liabilities. The Company accepts no responsibility for such cases.
        </p>

        <h2 className="text-2xl font-bold text-black mb-6">3. Customs and Regulatory Clearance</h2>
        <p className="mb-6">
          The Customer is responsible for completing all customs declarations, paying duties, taxes, 
          and fees, and obtaining necessary permits or licenses from Nigerian regulatory authorities. 
          The Company acts solely as a carrier and is not liable for delays or costs arising from 
          non-compliance with these requirements.
        </p>

        <h2 className="text-2xl font-bold text-black mb-6">4. Insurance and Liability</h2>
        <p className="mb-4">
          <strong>a. Standard Liability:</strong> The Company’s liability for loss or physical damage is 
          limited to a maximum of <em>.........</em> per 
          consignment, unless a higher declared value is made and premium insurance is purchased.
        </p>
        <p className="mb-4">
          <strong>b. Insurance Coverage:</strong> For goods exceeding the standard liability limit, 
          the Customer must purchase premium insurance coverage through the Company or an 
          independent insurer.
        </p>
        <p className="mb-6">
          <strong>c. Exclusions:</strong> The Company is not liable for damages caused by inadequate 
          packaging, inherent defects of the goods, or force majeure events.
        </p>

        <h2 className="text-2xl font-bold text-black mb-6">5. Packaging and Condition of Goods</h2>
        <p className="mb-6">
          The Customer must ensure all goods are properly and securely packaged to withstand 
          handling, stacking, and vibration during transport. The Company reserves the right to 
          reject shipments that are inadequately packaged or appear to be in poor condition upon 
          acceptance.
        </p>

        <p className="mt-12 text-gray-600 text-sm italic">
          <strong>Note:</strong> These Terms & Conditions are subject to review and may be updated. 
          Customers are advised to consult a legal professional for clarification regarding liability, 
          insurance, and regulatory compliance obligations.
        </p>
      </section>
    </div>
  );
}
