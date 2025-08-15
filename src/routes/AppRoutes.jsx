import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/AboutUs";
import OurProduct from '../components/OurProduct';
import CompanyProfile from '../pages/CompanyProfile';
import ContactUs from '../pages/ContactUs';
import Cart from '../pages/Cart'
import Profile from '../pages/Profile'
import OurService from '../pages/OurService';
import SheedlingTray from '../pages/SheedlingTray';
import Cocopit from '../pages/cocopit';
import HipsRoll from '../pages/HipsRoll'
function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
         <Route path="/products" element={<OurProduct />} />
         <Route path="/company-profile" element={<CompanyProfile />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path="/services" element={<OurService />} />
          <Route path='/sheedling-Tray' element={<SheedlingTray/>}/>
          <Route path='/cocopit' element={<Cocopit/>}/>
          <Route path='/hips-roll' element={<HipsRoll/>}/>
      </Routes>
    </div>
  )
}

export default AppRoutes
