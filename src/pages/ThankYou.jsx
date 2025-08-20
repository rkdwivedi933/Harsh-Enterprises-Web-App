import React from "react";
import { Link } from "react-router-dom";

function ThankYou() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-10 text-center max-w-lg">
        <h1 className="text-4xl font-bold text-green-600 mb-4">🎉 Thank You!</h1>
        <p className="text-gray-700 text-lg mb-6">
          Your order has been placed successfully. <br />
          We will contact you soon for delivery updates.
        </p>

        <div className="space-x-4">
          <Link
            to="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
          >
            Continue Shopping
          </Link>
          <Link
            to="/profile"
            className="bg-gray-600 hover:bg-gray-700 text-white px-5 py-2 rounded-lg"
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ThankYou;
