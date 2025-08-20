import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import trayimg1 from '../assets/tray3.jpg';
import trayimg2 from '../assets/tray2.jpg';
import trayimg3 from '../assets/tray4.jpg';

function SheedlingTray({ cartItems, setCartItems }) {
  const products = [
    {
      id: 1,
      name: "104 Cavity Seedling Tray",
      price: 25,
      image: trayimg1,
      details: [
        { label: "Material", value: "Plastic" },
        { label: "Cavities", value: "104" },
        { label: "Usage", value: "Seed Germination" },
        { label: "Durability", value: "Reusable, Long-lasting" },
        { label: "Brand", value: "Harsh" },
      ],
    },
    {
      id: 2,
      name: "98 Cavity Seedling Tray",
      price: 22,
      image: trayimg2,
      details: [
        { label: "Material", value: "Plastic" },
        { label: "Cavities", value: "98" },
        { label: "Usage", value: "Seed Germination" },
        { label: "Durability", value: "Reusable" },
        { label: "Brand", value: "Harsh" },
      ],
    },
    {
      id: 3,
      name: "50 Cavity Seedling Tray",
      price: 18,
      image: trayimg3,
      details: [
        { label: "Material", value: "Plastic" },
        { label: "Cavities", value: "50" },
        { label: "Usage", value: "Seed Germination" },
        { label: "Durability", value: "Medium" },
        { label: "Brand", value: "Harsh" },
      ],
    },
  ];

  // Add to Cart function
  const addToCart = (product) => {
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
    <div className="mt-10 space-y-12">
      {products.map((product) => (
        <div
          key={product.id}
          className="p-6 shadow-lg rounded-xl bg-white"
        >
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
                Durable and reusable seedling trays for efficient germination.
              </p>
              <p className="mt-2 font-semibold text-lg text-gray-800">
                Price: ₹{product.price}
              </p>
              <div className="mt-4 flex gap-4 flex-wrap">
                <button
                  onClick={() => addToCart(product)}
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
      ))}
    </div>
  );
}

export default SheedlingTray;
