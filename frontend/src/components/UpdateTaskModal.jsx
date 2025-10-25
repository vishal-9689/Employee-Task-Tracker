import React from "react";

export default function UpdateTaskModal({ show, onClose, task, onUpdate }) {
  if (!show) return null;

  const handleChange = (e) => {
    onUpdate({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(task, true); // true = submit to API
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl w-96"
      >
        <h2 className="text-xl font-bold mb-4">Update Task</h2>

        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          className="w-full border rounded p-2 mb-3"
          placeholder="Title"
          required
        />
        <input
          type="text"
          name="description"
          value={task.description}
          onChange={handleChange}
          className="w-full border rounded p-2 mb-3"
          placeholder="Description"
        />
        <input
          type="text"
          name="assignedTo"
          value={task.assignedTo}
          onChange={handleChange}
          className="w-full border rounded p-2 mb-3"
          placeholder="Assigned To"
        />
        <select
          name="status"
          value={task.status}
          onChange={handleChange}
          className="w-full border rounded p-2 mb-3"
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <input
          type="date"
          name="dueDate"
          value={task.dueDate ? task.dueDate.split("T")[0] : ""}
          onChange={handleChange}
          className="w-full border rounded p-2 mb-4"
        />

        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
