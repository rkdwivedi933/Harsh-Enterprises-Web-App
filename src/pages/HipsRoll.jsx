import React from "react";
 import Zoom from "react-medium-image-zoom"; 
 import "react-medium-image-zoom/dist/styles.css"; 
 import HipsSheet from "../assets/Hips.jpeg";
function HipsRoll({ cartItems, setCartItems }) {

  const product = {
    id: 3,
    name: "HIPS Roll",
    price: 3500,
    image: HipsSheet,
    details: [
      { label: "Material", value: "High Impact Polystyrene (HIPS)" },
      { label: "Form", value: "Roll" },
      { label: "Thickness", value: "0.3 mm - 2 mm" },
      { label: "Color", value: "White / Black / Custom" },
      { label: "Usage/Application", value: "Packaging, Printing, Thermoforming" },
      { label: "Surface Finish", value: "Smooth / Glossy" },
      { label: "Brand", value: "Harsh" },
      { label: "Roll Width", value: "Up to 1220 mm" },
    ],
  };

  // Add to cart logic
  const addToCart = () => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="mt-10 p-6 shadow-lg rounded-xl bg-white">
      <h1 className="text-2xl md:text-3xl font-bold text-center text-green-700 mb-8">
        {product.name}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Image */}
        <div className="flex justify-center items-center">
          <Zoom>
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-w-lg h-auto object-cover rounded-lg shadow-md border border-gray-200"
            />
          </Zoom>
        </div>

        {/* Description + Buttons */}
        <div className="flex flex-col justify-center">
          <p className="text-gray-700">
            Harsh Enterprises is a trusted supplier of high-quality HIPS Rolls (High Impact Polystyrene) 
            designed for packaging, printing, and thermoforming applications.
          </p>
          <p className="mt-2 font-semibold text-lg text-gray-800">
            Price: ₹{product.price}
          </p>
          <div className="mt-4 flex gap-4 flex-wrap">
            <button
              onClick={addToCart}
              className="w-40 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-lg shadow-md transition"
            >
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
              {product.details.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : ""}
                >
                  <td className="p-3 border font-medium">{row.label}</td>
                  <td className="p-3 border">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default HipsRoll;