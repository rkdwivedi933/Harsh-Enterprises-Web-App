import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";

import LanguageSelector from './components/LanguageSelector'
import AppRoutes from './routes/AppRoutes'
import Navbar from './components/Navbar';
import Footer from './components/Footer';



function App() {
  return (
    <>
    {/* <Home/> */}
    <Router>
      <LanguageSelector/>
    <Navbar/>
      <AppRoutes/>
      <Footer/>
    </Router>
    </>
  )
}

export default App
