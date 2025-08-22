import React, { useMemo, useState } from "react";
import { products as seed } from "../data/mock";

export default function Products() {
  const [rows, setRows] = useState(seed);
  const [q, setQ] = useState("");

  const filtered = useMemo(
    () =>
      rows.filter(
        (r) =>
          r.name.toLowerCase().includes(q.toLowerCase()) ||
          r.sku.toLowerCase().includes(q.toLowerCase())
      ),
    [rows, q]
  );

  return (
    <div className="bg-white rounded-2xl p-4 border shadow-sm">
      <div className="flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between mb-3">
        <h3 className="font-semibold">Products</h3>
        <div className="flex gap-2">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search name or SKU"
            className="px-3 py-2 border rounded-xl text-sm"
          />
          <button
            onClick={() =>
              setRows([
                {
                  id: Date.now(),
                  name: "New Item",
                  sku: "NEW-01",
                  price: 0,
                  stock: 0,
                  status: "draft",
                },
                ...rows,
              ])
            }
            className="px-3 py-2 border rounded-xl text-sm"
          >
            Add
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left border-b">
              {["ID", "Name", "SKU", "Price", "Stock", "Status", "Actions"].map(
                (h) => (
                  <th key={h} className="py-2 pr-4">
                    {h}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {filtered.map((p) => (
              <tr
                key={p.id}
                className="border-b last:border-0 hover:bg-gray-50"
              >
                <td className="py-2 pr-4">{p.id}</td>
                <td className="py-2 pr-4">{p.name}</td>
                <td className="py-2 pr-4">{p.sku}</td>
                <td className="py-2 pr-4">₹{p.price}</td>
                <td className="py-2 pr-4">{p.stock}</td>
                <td className="py-2 pr-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs border ${
                      p.status === "active"
                        ? "bg-green-50 border-green-200"
                        : p.status === "out"
                        ? "bg-red-50 border-red-200"
                        : "bg-gray-50 border-gray-200"
                    }`}
                  >
                    {p.status}
                  </span>
                </td>
                <td className="py-2 pr-4 flex gap-2">
                  <button
                    className="px-2 py-1 rounded border text-xs"
                    onClick={() => alert("Edit UI only")}
                  >
                    Edit
                  </button>
                  <button
                    className="px-2 py-1 rounded border text-xs"
                    onClick={() => setRows(rows.filter((r) => r.id !== p.id))}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
