import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa"; // Cart & Profile icons
import Logo from "../assets/logo.jpg";

function Navbar() {
  const navigate = useNavigate();

  const navItems = [
    { name: "HOME", path: "/Home" },
    { name: "ABOUT US", path: "/about" },
    { name: "OUR PRODUCTS", path: "/products" },
    { name: "COMPANY PROFILE", path: "/company-profile" },
    { name: "OUR SERVICE", path: "/services" },
    { name: "GALLERY", path: "/gallery" },
    { name: "CONTACT US", path: "/contact" },
  ];

  return (
    <div className="bg-green-700 hover:bg-green-800 shadow-lg shadow-black/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 sm:px-6 py-3">
        
        {/* Logo Section */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate("/Home")}
        >
          <img
            src={Logo}
            alt="Logo"
            className="h-10 w-10 rounded-full object-cover border-2 border-white"
          />
          <div>
            <span className="text-white text-xl font-bold leading-tight">
              Harsh Enterprises
            </span>
            <p className="text-xs text-amber-100">INNOVATION, TRUST, QUALITY</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-white font-bold hover:underline hover:text-amber-300 transition"
            >
              {item.name}
            </Link>
          ))}

          {/* Cart Icon */}
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-white text-2xl hover:text-amber-300 transition" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-1">
              3
            </span>
          </Link>

          {/* Profile Icon */}
          <Link to="/profile">
            <FaUserCircle className="text-white text-2xl hover:text-amber-300 transition" />
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white focus:outline-none">
          <i className="fa-solid fa-bars text-2xl"></i>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
