import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const navigate = useNavigate();

  // Fake auth state
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user", // default user
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    // Fake signup / login (admin check)
    if (formData.email === "admin@site.com" && formData.password === "admin123") {
      setUser({ name: formData.name || "Admin", email: formData.email, role: "admin" });
    } else {
      setUser({ name: formData.name, email: formData.email, role: "user" });
    }

    setFormData({ name: "", email: "", password: "", role: "user" });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        {user ? (
          <>
            <h2 className="text-2xl font-bold text-center mb-4">My Profile</h2>
            <p className="text-gray-700 mb-2">
              <strong>Name:</strong> {user.name}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Email:</strong> {user.email}
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Role:</strong> {user.role}
            </p>

            {/* Agar admin hai toh Admin Panel button dikhega */}
            {user.role === "admin" && (
              <button
                onClick={() => navigate("/admin")}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg mb-2"
              >
                Go to Admin Panel
              </button>
            )}

            <button
              onClick={handleLogout}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-center mb-4">Login / Sign Up</h2>
            <form onSubmit={handleSignup} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg"
              >
                Login / Sign Up
              </button>
            </form>

            <p className="text-xs text-gray-500 mt-2">
              *Admin ke liye use karo → <br />
              Email: <b>admin@site.com</b> | Password: <b>admin123</b>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
