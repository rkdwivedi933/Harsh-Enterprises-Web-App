import React from "react";
import StatCard from "../components/StatCard";
import { products, orders, users } from "../data/mock";


export default function AdminDashboard() {
const revenue = orders.map(o => o.total).reduce((a, b) => a + b, 0);
const lowStock = products.filter(p => p.stock < 10).length;


return (
<div className="grid gap-4">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<StatCard title="Products" value={products.length} hint="Total listed" />
<StatCard title="Orders" value={orders.length} hint="Last 7 days" />
<StatCard title="Users" value={users.length} hint="All roles" />
<StatCard title="Revenue" value={`₹${revenue}`} hint="Mock data" />
</div>


{/* Recent Orders table using map() */}
<div className="bg-white rounded-2xl p-4 border shadow-sm">
<div className="flex items-center justify-between mb-3">
<h3 className="font-semibold">Recent Orders</h3>
</div>
<div className="overflow-x-auto">
<table className="min-w-full text-sm">
<thead>
<tr className="text-left border-b">
{["ID","Customer","Total","Status","Date"].map(h => (
<th key={h} className="py-2 pr-4">{h}</th>
))}
</tr>
</thead>
<tbody>
{orders.map(o => (
<tr key={o.id} className="border-b last:border-0 hover:bg-gray-50">
<td className="py-2 pr-4">#{o.id}</td>
<td className="py-2 pr-4">{o.customer}</td>
<td className="py-2 pr-4">₹{o.total}</td>
<td className="py-2 pr-4">
<span className={`px-2 py-1 rounded-full text-xs border ${o.status === "paid" ? "bg-green-50 border-green-200" : o.status === "shipped" ? "bg-blue-50 border-blue-200" : "bg-yellow-50 border-yellow-200"}`}>{o.status}</span>
</td>
<td className="py-2 pr-4">{o.date}</td>
</tr>
))}
</tbody>
</table>
</div>
</div>
</div>
);
}