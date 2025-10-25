import React from "react";

export default function TaskCard({ task, onEdit, onDelete }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition relative">
      <h3 className="text-lg font-bold mb-2">{task.title}</h3>
      <p className="text-gray-600 text-sm mb-2">{task.description}</p>
      <p className="text-sm">
        <span className="font-semibold">Assigned To:</span> {task.assignedTo || "—"}
      </p>
      <p className="text-sm">
        <span className="font-semibold">Status:</span>{" "}
        <span
          className={`${
            task.status === "Completed"
              ? "text-green-600"
              : task.status === "In Progress"
              ? "text-yellow-600"
              : "text-red-600"
          } font-semibold`}
        >
          {task.status}
        </span>
      </p>
      <p className="text-sm">
        <span className="font-semibold">Due:</span>{" "}
        {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : "N/A"}
      </p>

      {/* Action Buttons */}
      <div className="absolute top-2 right-2 flex gap-2">
        <button
          onClick={() => onEdit(task)}
          className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 text-xs"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(task)}
          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 text-xs"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
