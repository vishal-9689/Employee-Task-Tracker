import React from "react";

export default function FilterControls({
  search,
  setSearch,
  status,
  setStatus,
  sort,
  setSort,
}) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex flex-col sm:flex-row gap-3">
      {/* Search */}
      <input
        type="text"
        placeholder="Search by title or assignee..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border rounded p-2 flex-1"
      />

      {/* Status Filter */}
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border rounded p-2"
      >
        <option value="">All</option>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

      {/* Sort Filter */}
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="border rounded p-2"
      >
        <option value="">Newest First</option>
        <option value="dueDate">Due Date ↑</option>
        <option value="-dueDate">Due Date ↓</option>
      </select>
    </div>
  );
}
