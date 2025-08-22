import React, { useMemo, useState } from "react";
import { orders as seed } from "../data/mock";


export default function Orders() {
const [rows, setRows] = useState(seed);
const [status, setStatus] = useState("all");


const shown = useMemo(() => rows.filter(o => status === "all" ? true : o.status === status), [rows, status]);


return (
<div className="bg-white rounded-2xl p-4 border shadow-sm">
<div className="flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between mb-3">
<h3 className="font-semibold">Orders</h3>
<select value={status} onChange={e=>setStatus(e.target.value)} className="px-3 py-2 border rounded-xl text-sm">
{['all','pending','paid','shipped'].map(s => <option key={s} value={s}>{s}</option>)}
</select>
</div>


<div className="overflow-x-auto">
<table className="min-w-full text-sm">
<thead>
<tr className="text-left border-b">
{["ID","Customer","Total","Status","Date","Actions"].map(h => (
<th key={h} className="py-2 pr-4">{h}</th>
))}
</tr>
</thead>
<tbody>
{shown.map(o => (
<tr key={o.id} className="border-b last:border-0 hover:bg-gray-50">
<td className="py-2 pr-4">#{o.id}</td>
<td className="py-2 pr-4">{o.customer}</td>
<td className="py-2 pr-4">₹{o.total}</td>
<td className="py-2 pr-4">{o.status}</td>
<td className="py-2 pr-4">{o.date}</td>
<td className="py-2 pr-4">
<button className="px-2 py-1 rounded border text-xs" onClick={() => alert("View order UI only")}>View</button>
</td>
</tr>
))}
</tbody>
</table>
</div>
</div>
);
}