import React, { useState } from "react";

export default function TableWithPagination() {
  const data = Array.from({ length: 20 }, (_, i) => ({ id: i + 1, name: `Item ${i + 1}` }));
  const pageSize = 5;
  const [page, setPage] = useState(1);
  const visible = data.slice((page - 1) * pageSize, page * pageSize);
  const pageCount = Math.ceil(data.length / pageSize);
  return (
    <div className="card">
      <h3>Table with Pagination</h3>
      <table>
        <thead><tr><th>ID</th><th>Name</th></tr></thead>
        <tbody>
          {visible.map((r) => <tr key={r.id}><td>{r.id}</td><td>{r.name}</td></tr>)}
        </tbody>
      </table>
      <div>
        <button onClick={() => setPage(Math.max(1, page - 1))}>Prev</button>
        {Array.from({ length: pageCount }, (_, i) => (
          <button key={i} onClick={() => setPage(i + 1)}>{i + 1}</button>
        ))}
        <button onClick={() => setPage(Math.min(pageCount, page + 1))}>Next</button>
      </div>
    </div>
  );
}
