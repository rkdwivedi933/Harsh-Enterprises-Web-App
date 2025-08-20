import React, { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/AboutUs";
import OurProduct from '../components/OurProduct';
import CompanyProfile from '../pages/CompanyProfile';
import ContactUs from '../pages/ContactUs';
import Cart from '../pages/Cart';
import Profile from '../pages/Profile';
import OurService from '../pages/OurService';
import SheedlingTray from '../pages/SheedlingTray';
import Cocopit from '../pages/cocopit';
import HipsRoll from '../pages/HipsRoll';
import Checkout from '../pages/Checkout';
import ThankYou from '../pages/ThankYou';

function AppRoutes() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<OurProduct />} />
        <Route path="/company-profile" element={<CompanyProfile />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/services" element={<OurService />} />
        <Route path="/sheedling-tray" element={<SheedlingTray cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/cocopit" element={<Cocopit cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/hips-roll" element={<HipsRoll cartItems={cartItems} setCartItems={setCartItems}/>} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/thank-you" element={<ThankYou />} />
    
      </Routes>
    </div>
  );
}

export default AppRoutes;
