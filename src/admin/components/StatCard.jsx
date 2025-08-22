import React from "react";


export default function StatCard({ title, value, hint }) {
return (
<div className="bg-white rounded-2xl p-4 border shadow-sm">
<div className="text-xs text-gray-500">{title}</div>
<div className="text-2xl font-semibold mt-1">{value}</div>
{hint && <div className="text-xs text-gray-400 mt-2">{hint}</div>}
</div>
);
}