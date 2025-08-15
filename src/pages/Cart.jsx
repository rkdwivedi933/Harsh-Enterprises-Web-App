import React from "react";
import EmptyCartImage from "../assets/cart.png"; // use your own image

function Cart() {
  // Later you can replace with real cart data from state or API
  const cartItems = [];

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gray-100 p-6">
      {cartItems.length === 0 ? (
        <div className="text-center">
          <img
            src={EmptyCartImage}
            alt="Empty Cart"
            className="w-48 mx-auto mb-6"
          />
          <h2 className="text-2xl font-semibold text-gray-800">
            Your cart is empty!
          </h2>
          <p className="text-gray-500 mt-2">
            Explore our wide selection and find something you like
          </p>
          <button
            onClick={() => (window.location.href = "/products")}
            className="mt-4 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
          >
            Shop Now
          </button>
        </div>
      ) : (
        <div>
          {/* Display cart items here */}
        </div>
      )}
    </div>
  );
}

export default Cart;
