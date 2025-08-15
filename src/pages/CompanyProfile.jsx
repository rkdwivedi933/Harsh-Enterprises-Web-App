import React from "react";

export default function CompanyInfo() {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Company Intro */}
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl p-6 mb-8">
        <p className="text-gray-700 leading-relaxed">
          We, <span className="font-bold text-gray-900">HARSH ENTERPRISES</span> have set up a sophisticated base at the prime location of{" "}
          <span className="font-semibold">Indore, Madhya Pradesh, India</span>. 
          The base we own is equipped with state-of-the-art machines and tools for helping us enhance our productivity of 
          <span className="font-semibold"> Eco Friendly</span> products. We are a recognized 
          <span className="font-semibold"> Manufacturer, Supplier, Distributor, Wholesaler, and Trader</span> of a prime quality range of 
          Plastic Seedling Tray, Coco Peat Brick, Agricultural Tray, Nursery Tray, Agriculture Vermiculite, Agricultural Perlite, and Coir Pith Block. 
          These products are manufactured using supreme quality raw material and the latest technology and machinery.
          The guidance of <span className="font-semibold">Mr. Harsh Jain</span> has helped us climb ladders of success and maintain our reputed position in the market.
        </p>
      </div>

      {/* Basic Information */}
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl overflow-hidden mb-8">
        <h2 className="bg-gray-100 px-6 py-4 text-xl font-bold text-gray-800 border-b">
          Basic Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
          <InfoRow label="Nature of Business" value="Manufacturer" />
          <InfoRow label="Additional Business" value="Retailer, Distributor, Wholesaler, Trader" />
          <InfoRow label="Company CEO" value="Harsh Jain" />
          <InfoRow label="Registered Address" value="Survey No. 205/3, Samta Udhyog Nagar, Palda, Indore - 452020, Madhya Pradesh, India" />
          <InfoRow label="Total Number of Employees" value="11 to 25 People" />
          <InfoRow label="Year of Establishment" value="2013" />
          <InfoRow label="Legal Status of Firm" value="Individual - Proprietor" />
        </div>
      </div>

      {/* Statutory Profile */}
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl overflow-hidden mb-8">
        <h2 className="bg-gray-100 px-6 py-4 text-xl font-bold text-gray-800 border-b">
          Statutory Profile
        </h2>
        <div className="p-6">
          <p className="text-sm font-semibold text-gray-500">GST No.</p>
          <p className="mt-1 text-gray-800">23AMAPJ0678B1ZN</p>
        </div>
      </div>

      {/* Packaging / Payment / Shipment */}
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl overflow-hidden">
        <h2 className="bg-gray-100 px-6 py-4 text-xl font-bold text-gray-800 border-b">
          Packaging/Payment and Shipment Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
          <div className="p-6">
            <p className="text-sm font-semibold text-gray-500">Payment Mode</p>
            <ul className="mt-1 text-gray-800 list-disc list-inside space-y-1">
              <li>Cash</li>
              <li>Credit Card</li>
              <li>Cheque</li>
              <li>DD</li>
              <li>Invoice</li>
            </ul>
          </div>
          <div className="p-6">
            <p className="text-sm font-semibold text-gray-500">Shipment Mode</p>
            <p className="mt-1 text-gray-800">By Road</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="p-6 border-b md:border-b-0">
      <p className="text-sm font-semibold text-gray-500">{label}</p>
      <p className="mt-1 text-gray-800">{value}</p>
    </div>
  );
}
