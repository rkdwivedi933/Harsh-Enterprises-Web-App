import React from 'react';
import Zoom from "react-medium-image-zoom";
import 'react-medium-image-zoom/dist/styles.css';
import trayimg1 from '../assets/tray3.jpg';
import trayimg2 from '../assets/tray2.jpg';
import trayimg3 from '../assets/tray4.jpg';
import trayimg4 from '../assets/tray1.jpg';

function SheedlingTray() {
  return (
    <div className="mt-10 p-6 shadow-lg rounded-xl bg-white">
      {/* Heading */}
      <h1 className="text-2xl md:text-3xl font-bold text-center text-green-700 mb-8">
        104 Cavity Seedling Tray
      </h1>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Part 1 - Side Images */}
        <div className="flex flex-col items-center gap-4">
          {[trayimg1, trayimg2, trayimg3, trayimg4].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Tray ${i + 1}`}
              className="w-28 h-28 object-cover rounded-lg shadow-md border border-gray-200"
            />
          ))}
        </div>

        {/* Part 2 - Main Product with Zoom */}
        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <div className="w-64">
            <Zoom>
              <img
                src={trayimg1}
                alt="104 Cavity Seedling Tray"
                className="w-full rounded-lg shadow-md cursor-zoom-in"
              />
            </Zoom>
          </div>

          <button className="w-40 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-lg shadow-md transition">
            ADD TO CART
          </button>
          <button className="w-40 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg shadow-md transition">
            BUY NOW
          </button>
        </div>

        {/* Part 3 - Table */}
        <div className="overflow-x-auto border  shadow-lg rounded-xl">
          <table className="w-full border-collapse">
            <tbody>
              <tr className="bg-gray-100">
                <td className="p-3 border font-medium">Number Of Cavity/Cup</td>
                <td className="p-3 border">104</td>
              </tr>
              <tr>
                <td className="p-3 border font-medium">Usage/Application</td>
                <td className="p-3 border">
                  Tomato, Chili, Cabbage, Cauliflower, Eggplant, Marigold, Capsicum, Ridge Guard, etc
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-3 border font-medium">Item Name</td>
                <td className="p-3 border">Seedling Tray, Pro Tray, Nursery Tray</td>
              </tr>
              <tr>
                <td className="p-3 border font-medium">Shape</td>
                <td className="p-3 border">Round</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-3 border font-medium">Tray Size</td>
                <td className="p-3 border">485 x 300 MM</td>
              </tr>
              <tr>
                <td className="p-3 border font-medium">Upper Diameter</td>
                <td className="p-3 border">32 MM</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-3 border font-medium">Lower Diameter</td>
                <td className="p-3 border">20 MM</td>
              </tr>
              <tr>
                <td className="p-3 border font-medium">Depth</td>
                <td className="p-3 border">35 MM</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-3 border font-medium">Thickness</td>
                <td className="p-3 border">0.3 TO 1.2 MM</td>
              </tr>
              <tr>
                <td className="p-3 border font-medium">Brand</td>
                <td className="p-3 border">AKSHAY</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-3 border font-medium">Material</td>
                <td className="p-3 border">PLASTIC HIPS</td>
              </tr>
              <tr>
                <td className="p-3 border font-medium">Color</td>
                <td className="p-3 border">BLACK</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-3 border font-medium">Item Code</td>
                <td className="p-3 border">AE 104R</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
     
     <br />
      <hr />
<br />

      {/* Heading */}
      <h1 className="text-2xl md:text-3xl font-bold text-center text-green-700 mb-8">
        209 Cavity Seedling Tray
      </h1>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Part 1 - Side Images */}
        <div className="flex flex-col items-center gap-4">
          {[trayimg1, trayimg2, trayimg3, trayimg4].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Tray ${i + 1}`}
              className="w-28 h-28 object-cover rounded-lg shadow-md border border-gray-200"
            />
          ))}
        </div>

        {/* Part 2 - Main Product with Zoom */}
        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <div className="w-64">
            <Zoom>
              <img
                src={trayimg1}
                alt="104 Cavity Seedling Tray"
                className="w-full rounded-lg shadow-md cursor-zoom-in"
              />
            </Zoom>
          </div>

          <button className="w-40 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-lg shadow-md transition">
            ADD TO CART
          </button>
          <button className="w-40 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg shadow-md transition">
            BUY NOW
          </button>
        </div>

        {/* Part 3 - Table */}
        <div className="overflow-x-auto border rounded-lg shadow-md">
          <table className="w-full border-collapse">
            <tbody>
              <tr className="bg-gray-100">
                <td className="p-3 border font-medium">Number Of Cavity/Cup</td>
                <td className="p-3 border">209</td>
              </tr>
              <tr>
                <td className="p-3 border font-medium">Usage/Application</td>
                <td className="p-3 border">
                  Tomato, Chili, Cabbage, Cauliflower, Eggplant, Marigold, Capsicum, Ridge Guard, etc
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-3 border font-medium">Item Name</td>
                <td className="p-3 border">Seedling Tray, Pro Tray, Nursery Tray</td>
              </tr>
              <tr>
                <td className="p-3 border font-medium">Shape</td>
                <td className="p-3 border">Round</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-3 border font-medium">Tray Size</td>
                <td className="p-3 border">485 x 300 MM</td>
              </tr>
              <tr>
                <td className="p-3 border font-medium">Upper Diameter</td>
                <td className="p-3 border">32 MM</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-3 border font-medium">Lower Diameter</td>
                <td className="p-3 border">20 MM</td>
              </tr>
              <tr>
                <td className="p-3 border font-medium">Depth</td>
                <td className="p-3 border">35 MM</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-3 border font-medium">Thickness</td>
                <td className="p-3 border">0.3 TO 1.2 MM</td>
              </tr>
              <tr>
                <td className="p-3 border font-medium">Brand</td>
                <td className="p-3 border">Harsh</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-3 border font-medium">Material</td>
                <td className="p-3 border">PLASTIC HIPS</td>
              </tr>
              <tr>
                <td className="p-3 border font-medium">Color</td>
                <td className="p-3 border">BLACK</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-3 border font-medium">Item Code</td>
                <td className="p-3 border">AE 104R</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default SheedlingTray;
