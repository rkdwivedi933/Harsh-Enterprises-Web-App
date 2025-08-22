import React, { useState } from "react";
import { users as seed } from "../data/mock";


export default function Users() {
const [rows, setRows] = useState(seed);


return (
<div className="bg-white rounded-2xl p-4 border shadow-sm">
<div className="flex items-center justify-between mb-3">
<h3 className="font-semibold">Users</h3>
<button className="px-3 py-2 border rounded-xl text-sm" onClick={() => setRows([{ id: Date.now(), name: "New User", email: "new@example.com", role: "customer" }, ...rows])}>Add</button>
</div>
<div className="overflow-x-auto">
<table className="min-w-full text-sm">
<thead>
<tr className="text-left border-b">
{["ID","Name","Email","Role"].map(h => (
<th key={h} className="py-2 pr-4">{h}</th>
))}
</tr>
</thead>
<tbody>
{rows.map(u => (
<tr key={u.id} className="border-b last:border-0 hover:bg-gray-50">
<td className="py-2 pr-4">{u.id}</td>
<td className="py-2 pr-4">{u.name}</td>
<td className="py-2 pr-4">{u.email}</td>
<td className="py-2 pr-4">
<select className="px-2 py-1 border rounded text-xs" value={u.role} onChange={e=>{
const role = e.target.value;
setRows(prev => prev.map(x => x.id === u.id ? { ...x, role } : x));
}}>
{['admin','manager','customer'].map(r => <option key={r} value={r}>{r}</option>)}
</select>
</td>
</tr>
))}
</tbody>
</table>
</div>
</div>
);
}