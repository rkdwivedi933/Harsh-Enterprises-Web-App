import React, { useState } from "react";

function ProfilePage() {
  // Fake auth state (replace with backend logic later)
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Simulate signup success
    setUser({ name: formData.name, email: formData.email });
    setFormData({ name: "", email: "", password: "" });
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
            <p className="text-gray-700 mb-4">
              <strong>Email:</strong> {user.email}
            </p>
            <button
              onClick={handleLogout}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
            <form onSubmit={handleSignup} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
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
                Sign Up
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
