const Task = require("../models/Task");

const fetchTasks = async (userId, query) => {
  const { status, sort, search } = query;
  const filter = { user: userId };

  if (status) filter.status = status;
  if (search) {
    filter.$or = [
      { title: { $regex: search, $options: "i" } },
      { assignedTo: { $regex: search, $options: "i" } },
    ];
  }

  let dbQuery = Task.find(filter);
  if (sort === "dueDate") dbQuery = dbQuery.sort({ dueDate: 1 });
  else if (sort === "-dueDate") dbQuery = dbQuery.sort({ dueDate: -1 });
  else dbQuery = dbQuery.sort({ createdAt: -1 });

  return await dbQuery.exec();
};


const createTask = async (req, res, next) => {
  try {
    const { title, description, assignedTo, status, dueDate } = req.body;
    const task = new Task({
      title,
      description,
      assignedTo,
      status,
      dueDate,
      user: req.user._id,
    });
    await task.save();

    // Return updated list of tasks
    const tasks = await fetchTasks(req.user._id, req.query);
    res.status(201).json(tasks);
  } catch (error) {
    next(error);
  }
};

// Get all tasks
const getTasks = async (req, res, next) => {
  try {
    const tasks = await fetchTasks(req.user._id, req.query);
    res.json(tasks);
  } catch (error) {
    next(error);
  }
};

// Get task by ID
const getTaskById = async (req, res, next) => {
  try {
    const task = await Task.findOne({ _id: req.params.id, user: req.user._id });
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (error) {
    next(error);
  }
};

// Update task
const updateTask = async (req, res, next) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      req.body,
      { new: true }
    );
    if (!task) return res.status(404).json({ message: "Task not found" });

    // Return updated list of tasks
    const tasks = await fetchTasks(req.user._id, req.query);
    res.json(tasks);
  } catch (error) {
    next(error);
  }
};

// Delete task
const deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id, user: req.user._id });
    if (!task) return res.status(404).json({ message: "Task not found" });

    // Return updated list of tasks
    const tasks = await fetchTasks(req.user._id, req.query);
    res.json(tasks);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
};
