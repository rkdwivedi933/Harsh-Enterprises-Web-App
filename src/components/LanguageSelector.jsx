import React from 'react';
import { Label, Select } from "flowbite-react";

function LanguageSelector() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-3 ">
      <div className="flex flex-wrap justify-between items-center gap-6">

        {/* Country Selector */}
        <div className="flex-shrink-0">
          <div className="max-w-xs">
            <div className="mb-2 block">
              <Label htmlFor="countries">Select your country</Label>
            </div>
            <Select id="countries" required>
              <option>India</option>
              <option>Chhattisgarh</option>
              <option>Madhya Pradesh</option>
              <option>Odisha</option>
              <option>Uttar Pradesh</option>
            </Select>
          </div>
        </div>

        {/* Middle Info Bar */}
        <div className="flex flex-wrap justify-center gap-8 text-sm">
          {/* GST */}
          <div className="flex items-center gap-2">
            <div className="border border-green-500 bg-green-100 p-2 rounded">
              <i className="fa-solid fa-file-alt text-green-600 text-lg"></i>
            </div>
            <div>
              <p className="font-semibold">GST Registration</p>
              <p className="text-black">23AJZPT708J1Z4</p>
            </div>
          </div>

          {/* Help */}
          <div className="flex items-center gap-2">
            <div className="border border-green-500 bg-green-100 p-2 rounded">
              <i className="fa-solid fa-phone text-green-600 text-lg"></i>
            </div>
            <div>
              <p className="font-semibold">Need Help?</p>
              <p className="text-black">+91 9893441392</p>
            </div>
          </div>

          {/* Mail */}
          <div className="flex items-center gap-2">
            <div className="border border-green-500 bg-green-100 p-2 rounded">
              <i className="fa-solid fa-envelope text-green-600 text-lg"></i>
            </div>
            <div>
              <p className="font-semibold">Mail Us @</p>
              <p className="text-black">info@harshseedlingtray.com</p>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-2xl">
          <i className="fa-brands fa-facebook" style={{ color: "#1877F2" }}></i>
          <i className="fa-brands fa-square-x-twitter" style={{ color: "#1DA1F2" }}></i>
          <i className="fab fa-linkedin-in" style={{ color: "#0077B5" }}></i>
          <i className="fa-brands fa-square-whatsapp" style={{ color: "#25D366" }}></i>
        </div>

      </div>
    </div>
  );
}

export default LanguageSelector;
