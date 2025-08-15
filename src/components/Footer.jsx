import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
function Footer() {
  return (
    <div>
        <footer className="bg-gray-900 text-white py-10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 grid gap-10 md:grid-cols-4 sm:grid-cols-2">
        
        {/* About Us */}
        <div>
          <h2 className="text-lg font-semibold mb-4">ABOUT US</h2>
          <p className="text-sm leading-6 text-gray-300">
            At Harsh Enterprises INNOVATION, TRUST, QUALITY is our mission.
            No matter what you’re looking for, we’re committed to bringing you exactly what.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="#" className="bg-black p-2 rounded-full hover:bg-gray-700"><FaFacebookF /></a>
            <a href="#" className="bg-black p-2 rounded-full hover:bg-gray-700"><FaTwitter /></a>
            <a href="#" className="bg-black p-2 rounded-full hover:bg-gray-700"><FaLinkedinIn /></a>
            <a href="#" className="bg-black p-2 rounded-full hover:bg-gray-700"><FaWhatsapp /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">QUICK LINKS</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Our Products</a></li>
            <li><a href="#" className="hover:text-white">Company Profile</a></li>
            <li><a href="#" className="hover:text-white">Our Service</a></li>
            <li><a href="#" className="hover:text-white">Photo Gallery</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Facebook */}
        <div>
          <h2 className="text-lg font-semibold mb-4">FACEBOOK</h2>
          <p className="text-sm text-gray-400">[Embed Facebook widget or link here]</p>
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="text-lg font-semibold mb-4">CONTACT US</h2>
          <p className="text-sm"><span className="font-semibold">Address:</span> Ward no.10, rewa-nagud bypass,Bamuraha, Satna, MADHYA PRADESH 485001</p>
          <p className="text-sm mt-3"><span className="font-semibold">Phone No.:</span> +91 9893441392, +919752434983</p>
          <p className="text-sm mt-3"><span className="font-semibold">Email:</span> info@harshseedlingtray.com</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Harsh Enterprises. All rights reserved.
      </div>
    </footer>
    </div>
  )
}

export default Footer
