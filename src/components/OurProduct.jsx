import React from 'react'
import Tray from "../assets/tray.jpg";
import Cocopit from "../assets/cocopit.jpg";
import Hips from "../assets/Hips Roll.jpg";
import GrowBag from "../assets/growbag.jpg";
import { useNavigate } from 'react-router-dom';


function OurProduct() {

const navigate =   useNavigate();

  return (
    <div className='mt-5 text-center font-bold text-2xl transition-transform transform hover:scale-105 hover:shadow-2xl'>
<h1>Our Products</h1>
    <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
        
  {/* Product 1 */}
  <div onClick={()=>navigate('/sheedling-Tray')} className="bg-white shadow-md rounded-md overflow-hidden flex flex-col items-center p-4 transition-transform transform hover:scale-105 hover:shadow-2xl">
    <img
      src={Tray}
      alt="SEEDLING TRAY"
      className="w-full h-40 object-contain"
    />
    <h3 className="text-green-700 font-bold text-lg mt-3">SEEDLING TRAY</h3>
    <button className="bg-green-500 text-white px-4 py-1 mt-2 rounded-full hover:bg-green-600">
      View Products
    </button>
  </div>

  {/* Product 2 */}
  <div onClick={()=>navigate('/Cocopit')} className="bg-white shadow-md rounded-md overflow-hidden flex flex-col items-center p-4 transition-transform transform hover:scale-105 hover:shadow-2xl">
    <img
      src={Cocopit}
      alt="COCO PEAT"
      className="w-full h-40 object-contain"
    />
    <h3 className="text-green-700 font-bold text-lg mt-3">COCO PEAT</h3>
    <button className="bg-green-500 text-white px-4 py-1 mt-2 rounded-full hover:bg-green-600">
      View Products
    </button>
  </div>

  {/* Product 3 */}
  <div onClick={()=>navigate('/Hips-Roll')} className="bg-white shadow-md rounded-md overflow-hidden flex flex-col items-center p-4 transition-transform transform hover:scale-105 hover:shadow-2xl">
    <img
      src={Hips}
      alt="Hips Roll"
      className="w-full h-40 object-contain"
    />
    <h3 className="text-green-700 font-bold text-lg mt-3">HIPS ROLL</h3>
    <button className="bg-green-500 text-white px-4 py-1 mt-2 rounded-full hover:bg-green-600">
      View Products
    </button>
  </div>

  {/* Product 4 */}
  <div onClick={()=>navigate('/Grow-Bag')} className="bg-white shadow-md rounded-md overflow-hidden flex flex-col items-center p-4 transition-transform transform hover:scale-105 hover:shadow-2xl">
    <img
      src={GrowBag}
      alt="Grow Bag"
      className="w-full h-40 object-contain"
    />
    <h3 className="text-green-700 font-bold text-lg mt-3">GROW BAG</h3>
    <button className="bg-green-500 text-white px-4 py-1 mt-2 rounded-full hover:bg-green-600">
      View Products
    </button>
  </div>
</div>
{/* */}
    </div>

  )
}

export default OurProduct
