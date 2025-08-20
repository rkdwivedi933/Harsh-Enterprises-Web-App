import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import LanguageSelector from './components/LanguageSelector';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  // Cart state (localStorage ke sath sync)
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <Router>
      <LanguageSelector />
      
      {/* Navbar me count bhejna */}
      <Navbar cartCount={cartItems.length} />

      {/* Routes me cartItems bhejna */}
      <AppRoutes cartItems={cartItems} setCartItems={setCartItems} />

      <Footer />
    </Router>
  );
}

export default App;
