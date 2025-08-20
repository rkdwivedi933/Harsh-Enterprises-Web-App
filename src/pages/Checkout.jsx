import React, { useState, useEffect } from "react";

function Checkout() {
  const [cartItems, setCartItems] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    pincode: "",
    payment: "cod", // default Cash on Delivery
  });

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // subtotal, gst, grand total
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const gst = subtotal * 0.18;
  const grandTotal = subtotal + gst;

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // place order
  const placeOrder = () => {
    if (!formData.name || !formData.phone || !formData.address) {
      alert("Please fill all required fields!");
      return;
    }

    const orderDetails = {
      customer: formData,
      items: cartItems,
      total: grandTotal,
      date: new Date().toLocaleString(),
    };

    console.log("Order Placed:", orderDetails);

    // Clear cart after order
    localStorage.removeItem("cart");
    alert("🎉 Order placed successfully!");
    window.location.href = "/thank-you"; // redirect
  };

  return (
    <div className="min-h-[80vh] bg-gray-100 flex justify-center p-6">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* LEFT SIDE - FORM */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Checkout Details</h2>

          <div className="space-y-3">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email (optional)"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <textarea
              name="address"
              placeholder="Delivery Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              rows="3"
              required
            />
            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              value={formData.pincode}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />

            {/* Payment Method */}
            <div className="mt-3">
              <label className="block font-medium mb-1">Payment Method</label>
              <select
                name="payment"
                value={formData.payment}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                <option value="cod">Cash on Delivery</option>
                <option value="online">Online Payment</option>
              </select>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - ORDER SUMMARY */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          <div className="border rounded p-4 bg-gray-50">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex justify-between border-b py-2 text-sm"
              >
                <span>
                  {item.name} (x{item.quantity})
                </span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}

            <div className="mt-3 space-y-1 text-right">
              <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
              <p>GST (18%): ₹{gst.toFixed(2)}</p>
              <p className="font-bold text-lg text-green-600">
                Grand Total: ₹{grandTotal.toFixed(2)}
              </p>
            </div>
          </div>

          <button
            onClick={placeOrder}
            className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
