// src/components/AddTaskModal.jsx
import React from "react";

export default function AddTaskModal({
  show,
  onClose,
  newTask,
  setNewTask,
  handleCreateTask,
}) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <h2 className="text-xl font-bold mb-4">Create New Task</h2>
        <form onSubmit={handleCreateTask} className="space-y-3">
          <input
            type="text"
            placeholder="Title"
            required
            value={newTask.title}
            onChange={(e) =>
              setNewTask({ ...newTask, title: e.target.value })
            }
            className="w-full border rounded p-2"
          />
          <textarea
            placeholder="Description"
            rows="3"
            value={newTask.description}
            onChange={(e) =>
              setNewTask({ ...newTask, description: e.target.value })
            }
            className="w-full border rounded p-2"
          />
          <input
            type="text"
            placeholder="Assigned To (optional)"
            value={newTask.assignedTo}
            onChange={(e) =>
              setNewTask({ ...newTask, assignedTo: e.target.value })
            }
            className="w-full border rounded p-2"
          />
          <select
            value={newTask.status}
            onChange={(e) =>
              setNewTask({ ...newTask, status: e.target.value })
            }
            className="w-full border rounded p-2"
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          <input
            type="date"
            value={newTask.dueDate}
            onChange={(e) =>
              setNewTask({ ...newTask, dueDate: e.target.value })
            }
            className="w-full border rounded p-2"
          />
          <div className="flex justify-end gap-3">
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
              Save Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
