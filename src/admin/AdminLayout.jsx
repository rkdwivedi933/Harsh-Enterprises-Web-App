import React, { useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { FiHome, FiBox, FiShoppingCart, FiUsers, FiLogOut } from "react-icons/fi";

export default function AdminLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen grid grid-cols-12 bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`col-span-12 sm:col-span-3 lg:col-span-2 bg-white border-r ${
          collapsed ? "sm:col-span-1 lg:col-span-1" : ""
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h1 className="text-lg font-semibold">Admin</h1>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-sm px-2 py-1 rounded border"
          >
            {collapsed ? "→" : "←"}
          </button>
        </div>

        {/* Custom Sidebar */}
        <nav className="p-4 space-y-2">
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium ${
                isActive
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            <FiHome /> Dashboard
          </NavLink>

          <NavLink
            to="/admin/products"
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium ${
                isActive
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            <FiBox /> Products
          </NavLink>

          <NavLink
            to="/admin/orders"
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium ${
                isActive
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            <FiShoppingCart /> Orders
          </NavLink>

          <NavLink
            to="/admin/users"
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium ${
                isActive
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            <FiUsers /> Users
          </NavLink>

          <button
            onClick={() => navigate("/home")}
            className="flex items-center gap-2 px-3 py-2 w-full text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            <FiLogOut /> Back to Site
          </button>
        </nav>
      </aside>

      {/* Main content */}
      <main className="col-span-12 sm:col-span-9 lg:col-span-10 p-4">
        {/* Top bar */}
        <div className="flex items-center justify-between bg-white rounded-2xl p-3 shadow-sm mb-4 border">
          <div>
            <h2 className="text-xl font-semibold">Admin Panel</h2>
            <p className="text-xs text-gray-500">UI only • plug your APIs later</p>
          </div>
          <div className="flex items-center gap-2">
            <input
              placeholder="Search…"
              className="px-3 py-2 border rounded-xl text-sm"
            />
            <div className="w-8 h-8 rounded-full bg-gray-200" />
          </div>
        </div>

        {/* Render child routes */}
        <Outlet />
      </main>
    </div>
  );
}
