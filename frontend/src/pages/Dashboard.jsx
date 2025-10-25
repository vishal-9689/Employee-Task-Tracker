import React, { useContext, useEffect, useState } from "react";
import API from "../api/axios";
import { AuthContext } from "../context/AuthContext";
import AddTaskModal from "../components/AddTaskModal";
import UpdateTaskModal from "../components/UpdateTaskModal";
import DeleteTaskModal from "../components/DeleteTaskModal";
import FilterControls from "../components/FilterControls";
import TaskCard from "../components/TaskCard";

export default function Dashboard() {
  const { user, logout } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState("");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    assignedTo: "",
    status: "Pending",
    dueDate: "",
  });

  useEffect(() => {
    fetchTasks();
  }, [status, sort, search]);

  const fetchTasks = async () => {
    try {
      const params = new URLSearchParams();
      if (status && status !== "All") params.append("status", status);
      if (sort) params.append("sort", sort);
      if (search) params.append("search", search);

      const res = await API.get(`/tasks?${params.toString()}`);
      setTasks(res.data);
    } catch (err) {
      console.error("Error fetching tasks:", err);
    }
  };

  const handleCreateTask = async (e) => {
    e.preventDefault();
    try {
      await API.post("/tasks", newTask);
      setShowModal(false);
      setNewTask({
        title: "",
        description: "",
        assignedTo: "",
        status: "Pending",
        dueDate: "",
      });
      fetchTasks(); // refresh tasks
    } catch (err) {
      console.error("Error creating task:", err);
    }
  };

const handleEditTask = (task) => {
  setTaskToUpdate(task);
  setShowUpdateModal(true);
};

const handleDeleteTask = (task) => {
  setTaskToDelete(task);
  setShowDeleteModal(true);
};

const handleUpdateTask = async (updatedTask, submit = false) => {
  setTaskToUpdate(updatedTask);
  if (submit) {
    try {
      await API.put(`/tasks/${updatedTask._id}`, updatedTask);
      setShowUpdateModal(false);
      fetchTasks();
    } catch (err) {
      console.error("Error updating task:", err);
    }
  }
};

const confirmDeleteTask = async (taskId) => {
  try {
    await API.delete(`/tasks/${taskId}`);
    setShowDeleteModal(false);
    fetchTasks();
  } catch (err) {
    console.error("Error deleting task:", err);
  }
};


  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h1 className="text-2xl font-bold mb-4 sm:mb-0">
          Welcome, <span className="text-blue-600">{user.name}</span>
        </h1>
        <div className="flex gap-3">
          <button
            onClick={() => setShowModal(true)}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            + Add Task
          </button>
          <button
            onClick={logout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Filters */}
      <FilterControls
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
        sort={sort}
        setSort={setSort}
      />

      {/* Task List */}
      <h2 className="text-xl font-semibold mb-4">Your Tasks</h2>
      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tasks.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
            />
          ))}
        </div>
      )}

      {/* Add Task Modal */}
      <AddTaskModal
        show={showModal}
        onClose={() => setShowModal(false)}
        newTask={newTask}
        setNewTask={setNewTask}
        handleCreateTask={handleCreateTask}
      />

      <UpdateTaskModal
       show={showUpdateModal}
       onClose={() => setShowUpdateModal(false)}
       task={taskToUpdate}
       onUpdate={handleUpdateTask}
      />

      <DeleteTaskModal
        show={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        task={taskToDelete}
        onConfirm={confirmDeleteTask}
      />

    </div>
  );
}
