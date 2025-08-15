import React from 'react'
import Zoom from "react-medium-image-zoom";
import CocopitImg from '../assets/cocopit.jpg'
function cocopit() {
  return (
    <div className='mt-10'>
      <div className="mt-10 p-6 shadow-lg rounded-xl bg-white">
  {/* Intro Paragraph */}
  <div className="text-gray-700 leading-relaxed">
    <p>
      Harsh Enterprises, a rising Supplier of coco peat with promising quality and highest customer satisfaction.
      Coco peat, also known as coir pith, is 100% organic and a natural growing media extracted from coconut husk.
      Used in hydroponics, terrace gardens, and nurseries for its high water absorption and holding capacity,
      it is ideal for those who believe in the goodness of organic farming. Coco Peat is procured through the process
      of extracting coir fiber from husk. With its highly compressible and lightweight features, it is commonly used
      as a soil conditioner and desiccant.
    </p>
  </div>

  {/* Divider */}
  <hr className="my-6 border-gray-300" />

  {/* Benefits */}
  <div>
    <h2 className="text-xl font-semibold text-green-700 mb-4">Benefits of Coco Peat</h2>
    <ul className="list-disc pl-6 text-gray-700 space-y-1">
      <li>100% Organic and a renewable resource</li>
      <li>Uniform in composition, odorless</li>
      <li>Good drainage and aeration</li>
      <li>High water holding capacity, great absorption</li>
      <li>Promotes strong root growth</li>
      <li>Affordable and high quality</li>
    </ul>
  </div>
</div>


 <div className="p-6 shadow-lg rounded-xl bg-white mt-10">
      <h1 className="text-2xl md:text-3xl font-bold text-center text-green-700 mb-8">
        Coco Peat Block
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Images */}
        <div className="flex flex-col items-center space-y-10 gap-4 ">
            <Zoom>

          <img 
          
            src={CocopitImg}
            alt="Coco Peat Block"
            className="w-48 h-48 object-cover rounded-lg shadow-md border border-gray-200"
          />
          <img
            src={CocopitImg}
            alt="Coco Peat Block"
            className="w-48 h-48 object-cover rounded-lg shadow-md border border-gray-200"
          />
            </Zoom>
        </div>

        {/* Description */}
        <div className="flex flex-col justify-center">
          <p className="text-gray-700">
            Coco peat blocks are 100% organic and natural growing media made from coconut husk. 
            They are lightweight, easy to store, and widely used in hydroponics, terrace gardening, and nurseries.
          </p>
          <div className="mt-4 flex gap-4">
            <button className="w-40 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-lg shadow-md transition">
              ADD TO CART
            </button>
            <button className="w-40 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg shadow-md transition">
              BUY NOW
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto border rounded-lg shadow-md">
          <table className="w-full border-collapse">
            <tbody>
              <tr className="bg-gray-100">
                <td className="p-3 border font-medium">Form</td>
                <td className="p-3 border">Block</td>
              </tr>
              <tr>
                <td className="p-3 border font-medium">Material</td>
                <td className="p-3 border">Coco Peat</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-3 border font-medium">Packaging Type</td>
                <td className="p-3 border">Plastic Cover</td>
              </tr>
              <tr>
                <td className="p-3 border font-medium">Usage/Application</td>
                <td className="p-3 border">Nurseries, Terrace Garden, Hydroponic</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-3 border font-medium">Shape</td>
                <td className="p-3 border">Square</td>
              </tr>
              <tr>
                <td className="p-3 border font-medium">Color</td>
                <td className="p-3 border">Brown</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-3 border font-medium">Block Weight (kg)</td>
                <td className="p-3 border">5 KG</td>
              </tr>
              <tr>
                <td className="p-3 border font-medium">Brand</td>
                <td className="p-3 border">Harsh</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  )
}

export default cocopit
