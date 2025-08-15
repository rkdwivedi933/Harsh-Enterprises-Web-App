import React from "react";
import CompanyImg from "../assets/aboutimg.jpg"; // replace with your actual image path

function CompanyProfile() {
  return (
    <div className="my-10 px-6 mt-10">
      {/* Heading */}
      <div className="text-center font-bold text-2xl underline mb-8 ">
        <h1>Company Profile - Harsh Enterprises</h1>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center shadow-lg p-6 rounded-lg bg-white">
        
        {/* Image */}
        <div className="flex justify-center">
          <img 
            src={CompanyImg} 
            alt="Harsh Enterprises" 
            className="w-64 md:w-80 lg:w-96 h-auto rounded-lg shadow-2xl"
          />
        </div>

        {/* Text Section */}
        <div>
          <p className="text-justify leading-relaxed mb-4">
            <strong>Harsh Enterprises</strong> is a leading manufacturer specializing in 
            high-quality seedling trays and agricultural solutions. Established in 2021, 
            we have quickly gained recognition for our dedication to <strong>innovation, 
            quality, and customer satisfaction</strong>. Our aim is to deliver products that 
            enhance farming efficiency and crop yields.
          </p>

          <p className="text-justify leading-relaxed mb-4">
            With advanced manufacturing techniques and a strong commitment to excellence, 
            we serve both local and global clients. Our products are designed for 
            <strong> durability, reusability, and portability</strong>, ensuring farmers 
            achieve the best possible results with minimal waste and maximum efficiency.
          </p>

          <p className="text-justify leading-relaxed mb-6">
            We believe in building long-term relationships with our clients by 
            consistently delivering top-notch products and unmatched service. At 
            <strong> Harsh Enterprises</strong>, we are not just selling products; 
            we are providing solutions that help farmers grow.
          </p>

          {/* Basic Information */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
            <h2 className="font-semibold text-lg mb-3">Basic Information</h2>
            <ul className="space-y-2 text-sm">
              <li><strong>Nature of Business:</strong> Manufacturer</li>
              <li><strong>Company CEO:</strong> Harsh Kumar</li>
              <li><strong>Year of Establishment:</strong> 2021</li>
              <li><strong>GST No.:</strong> 22XXXXX1234X1Z5</li>
              <li><strong>Legal Status:</strong> Individual - Proprietor</li>
            </ul>
          </div>

          {/* Key Focus Areas */}
          <div>
            <h2 className="font-semibold text-lg mb-2">We Focus On</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Quality</li>
              <li>Durability</li>
              <li>Reusable Products</li>
              <li>Portability</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyProfile;
