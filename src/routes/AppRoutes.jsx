import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/AboutUs";
import OurProduct from "../components/OurProduct";
import CompanyProfile from "../pages/CompanyProfile";
import ContactUs from "../pages/ContactUs";
import Cart from "../pages/Cart";
import Profile from "../pages/Profile";
import OurService from "../pages/OurService";
import SheedlingTray from "../pages/SheedlingTray";
import Cocopit from "../pages/Cocopit";
import HipsRoll from "../pages/HipsRoll";
import Checkout from "../pages/Checkout";
import ThankYou from "../pages/ThankYou";
import BuyNow from "../pages/BuyNow";

// Admin panel
import AdminLayout from "../admin/AdminLayout";
import AdminDashboard from "../admin/pages/AdminDashboard";
import Products from "../admin/pages/Products";
import Orders from "../admin/pages/Orders";
import Users from "../admin/pages/Users";

function AppRoutes({ cartItems, setCartItems }) {
  return (
    <Routes>
      {/* Site Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<OurProduct />} />
      <Route path="/company-profile" element={<CompanyProfile />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route
        path="/cart"
        element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
      />
      <Route path="/profile" element={<Profile />} />
      <Route path="/services" element={<OurService />} />
      <Route
        path="/sheedling-tray"
        element={<SheedlingTray cartItems={cartItems} setCartItems={setCartItems} />}
      />
      <Route
        path="/cocopit"
        element={<Cocopit cartItems={cartItems} setCartItems={setCartItems} />}
      />
      <Route
        path="/hips-roll"
        element={<HipsRoll cartItems={cartItems} setCartItems={setCartItems} />}
      />
      <Route path="/BuyNow" element={<BuyNow />} />
      <Route path="/:product/buynow" element={<BuyNow />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/thank-you" element={<ThankYou />} />

      {/* Admin Routes (Nested) */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} /> {/* /admin */}
        <Route path="products" element={<Products />} /> {/* /admin/products */}
        <Route path="orders" element={<Orders />} />     {/* /admin/orders */}
        <Route path="users" element={<Users />} />       {/* /admin/users */}
      </Route>
    </Routes>
  );
}

export default AppRoutes;
