import React from 'react';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import HipsSheet from '../assets/Hips.jpeg';

function HipsRoll() {
  return (
    <div className='mt-10'>
      {/* Intro Paragraph */}
      <div className="mt-10 p-6 shadow-lg rounded-xl bg-white">
        <div className="text-gray-700 leading-relaxed">
          <p>
            Harsh Enterprises is a trusted supplier of high-quality HIPS Rolls (High Impact Polystyrene) 
            designed for packaging, printing, and thermoforming applications. Known for its excellent impact 
            resistance, smooth surface finish, and ease of processing, our HIPS roll is suitable for various 
            industrial and commercial uses. It ensures durability while maintaining a lightweight profile, 
            making it ideal for multiple applications.
          </p>
        </div>

        <hr className="my-6 border-gray-300" />

        {/* Benefits */}
        <div>
          <h2 className="text-xl font-semibold text-green-700 mb-4">Benefits of HIPS Roll</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>High impact strength and durability</li>
            <li>Lightweight and easy to handle</li>
            <li>Excellent thermoforming capabilities</li>
            <li>Good printability for packaging</li>
            <li>Moisture-resistant and long-lasting</li>
            <li>Available in various thicknesses and colors</li>
          </ul>
        </div>
      </div>

      {/* Product Section */}
      <div className="p-6 shadow-lg rounded-xl bg-white mt-10">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-green-700 mb-8">
          HIPS Roll
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Large Image */}
          <div className="flex justify-center items-center">
            <Zoom>
              <img
                src={HipsSheet}
                alt="HIPS Roll"
                className="w-full max-w-lg h-auto object-cover rounded-lg shadow-md border border-gray-200"
              />
            </Zoom>
          </div>

          {/* Description */}
          <div className="flex flex-col justify-center">
            <p className="text-gray-700">
              HIPS Rolls are versatile plastic sheets with high impact strength, 
              smooth surfaces, and excellent forming properties. They are widely 
              used in packaging, signage, and protective coverings.
            </p>
            <div className="mt-4 flex gap-4 flex-wrap">
              <button className="w-40 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-lg shadow-md transition">
                ADD TO CART
              </button>
              <button className="w-40 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg shadow-md transition">
                BUY NOW
              </button>
            </div>
          </div>

          {/* Product Table */}
          <div className="overflow-x-auto border rounded-lg shadow-md">
            <table className="w-full border-collapse">
              <tbody>
                <tr className="bg-gray-100">
                  <td className="p-3 border font-medium">Material</td>
                  <td className="p-3 border">High Impact Polystyrene (HIPS)</td>
                </tr>
                <tr>
                  <td className="p-3 border font-medium">Form</td>
                  <td className="p-3 border">Roll</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="p-3 border font-medium">Thickness</td>
                  <td className="p-3 border">0.3 mm - 2 mm</td>
                </tr>
                <tr>
                  <td className="p-3 border font-medium">Color</td>
                  <td className="p-3 border">White / Black / Custom</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="p-3 border font-medium">Usage/Application</td>
                  <td className="p-3 border">Packaging, Printing, Thermoforming</td>
                </tr>
                <tr>
                  <td className="p-3 border font-medium">Surface Finish</td>
                  <td className="p-3 border">Smooth / Glossy</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="p-3 border font-medium">Brand</td>
                  <td className="p-3 border">Harsh</td>
                </tr>
                <tr>
                  <td className="p-3 border font-medium">Roll Width</td>
                  <td className="p-3 border">Up to 1220 mm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HipsRoll;
