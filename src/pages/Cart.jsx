import React from "react";
import EmptyCartImage from "../assets/cart.png";

function Cart({ cartItems, setCartItems }) {
  // remove single item
  const removeHandleButton = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // clear cart
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  // increase quantity
  const increaseQuantity = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += 1;
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // decrease quantity
  const decreaseQuantity = (index) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCartItems(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  // 🧾 calculate totals
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const gst = subtotal * 0.18;
  const grandTotal = subtotal + gst;

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gray-100 p-4 sm:p-6">
      {cartItems.length === 0 ? (
        <div className="text-center">
          <img
            src={EmptyCartImage}
            alt="Empty Cart"
            className="w-32 sm:w-48 mx-auto mb-4"
          />
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Your cart is empty!
          </h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Explore our wide selection and find something you like
          </p>
          <button
            onClick={() => (window.location.href = "/products")}
            className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 sm:px-5 py-2 rounded-lg text-sm sm:text-base"
          >
            Shop Now
          </button>
        </div>
      ) : (
        <div className="w-full max-w-6xl bg-white rounded-lg shadow-md p-4 sm:p-6">
          {/* 🛒 CART TABLE (Desktop) */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-200 text-sm sm:text-base">
                  <th className="p-2 border">Image</th>
                  <th className="p-2 border">Name</th>
                  <th className="p-2 border">Price</th>
                  <th className="p-2 border">Quantity</th>
                  <th className="p-2 border">Total</th>
                  <th className="p-2 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index} className="text-center text-sm sm:text-base">
                    <td className="border p-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded object-cover"
                      />
                    </td>
                    <td className="border p-2">{item.name}</td>
                    <td className="border p-2">₹{item.price}</td>
                    <td className="border p-2">
                      <div className="flex items-center justify-center space-x-2">
                        <button
                          onClick={() => decreaseQuantity(index)}
                          className="bg-gray-300 px-2 rounded"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => increaseQuantity(index)}
                          className="bg-gray-300 px-2 rounded"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="border p-2">
                      ₹{item.price * item.quantity}
                    </td>
                    <td className="border p-2 space-x-2">
                      <button
                        onClick={() => removeHandleButton(index)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                      >
                        Remove
                      </button>
                     
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 📱 MOBILE CARD VIEW */}
          <div className="md:hidden space-y-4">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="border p-4 rounded-lg shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-600 text-sm">₹{item.price}</p>
                    <p className="text-gray-600 text-sm">
                      Total: ₹{item.price * item.quantity}
                    </p>
                  </div>
                </div>

                {/* Quantity & Buttons */}
                <div className="flex flex-wrap items-center justify-between mt-3 sm:mt-0 gap-2">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => decreaseQuantity(index)}
                      className="bg-gray-300 px-2 rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(index)}
                      className="bg-gray-300 px-2 rounded"
                    >
                      +
                    </button>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => removeHandleButton(index)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                    >
                      Remove
                    </button>
                    <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 🧾 TOTAL SECTION */}
          <div className="mt-6 border-t pt-4 text-right">
            <p className="text-base sm:text-lg font-semibold">
              Subtotal: <span className="ml-2">₹{subtotal.toFixed(2)}</span>
            </p>
            <p className="text-base sm:text-lg font-semibold">
              GST (18%): <span className="ml-2">₹{gst.toFixed(2)}</span>
            </p>
            <p className="text-lg sm:text-xl font-bold text-green-600">
              Grand Total: <span className="ml-2">₹{grandTotal.toFixed(2)}</span>
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6">
            <button
              onClick={clearCart}
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg"
            >
              Clear Cart
            </button>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                onClick={() => (window.location.href = "/products")}
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
              >
                Shop More
              </button>
              <button
                onClick={() => (window.location.href = "/checkout")}
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
