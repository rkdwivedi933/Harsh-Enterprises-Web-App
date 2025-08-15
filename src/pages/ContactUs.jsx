import React from "react";

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen p-6 my-10">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left - Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Please fill the form:</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="input-style" />
              <input type="email" placeholder="Email" className="input-style" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Phone" className="input-style" />
              <input type="text" placeholder="Subject" className="input-style" />
            </div>
            <textarea placeholder="Message.." rows="4" className="input-style"></textarea>

            {/* Simple math captcha */}
            <div className="flex items-center space-x-2">
              <span className="text-lg">1 + 3 =</span>
              <input type="text" className="w-16 input-style" />
            </div>

            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
            >
              SUBMIT
            </button>
          </form>
        </div>

        {/* Right - Contact Info */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Contact Info</h2>
          <p>
            <span className="font-semibold">Address:</span> Survey No. 205/3, Opp. Nature Fresh Cold Storage, Samta Nagar, Palda, Indore, MADHYA PRADESH 452020
          </p>
          <p className="mt-4">
            <span className="font-semibold">Phone No.:</span> +91 9893507506, +91 7828875050
          </p>
          <p className="mt-4">
            <span className="font-semibold">Email:</span>{" "}
            <a href="mailto:info@akshayseedlingtray.com" className="text-blue-600">
              info@akshayseedlingtray.com
            </a>
          </p>
        </div>
      </div>
      <br />
      <div className="flex justify-center mt-5">
      <iframe
        src="https://www.google.com/maps/embed?pb=PASTE_YOUR_EMBED_CODE_HERE"
        width="100%"
        height="450"
        className="border-0"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    </div>
  );
}

// Tailwind custom styles for inputs
const inputStyles = `
  border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none 
  focus:ring-2 focus:ring-blue-400 transition
`;

// Add style shortcut in JSX
function inputStyleProps() {
  return "border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition";
}
