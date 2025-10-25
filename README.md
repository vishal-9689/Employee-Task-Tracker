#  Employee Task Tracker

A **MERN stack** application that allows employees to efficiently manage, track, and organize their daily tasks.  
Includes secure authentication, task creation, updating, deletion, and filtering — all in a clean, responsive UI.

---

##  Tech Stack & Tools

| Layer | Technology | Description |
|-------|-------------|-------------|
| **Frontend** | [React (Vite)](https://vitejs.dev/) + [TailwindCSS](https://tailwindcss.com/) | Modern, fast, and responsive UI |
| **Backend** | [Node.js](https://nodejs.org/) + [Express.js](https://expressjs.com/) | RESTful API for authentication and task management |
| **Database** | [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/) | NoSQL database for storing user and task data |
| **Authentication** | [JWT (JSON Web Token)](https://jwt.io/) | Secure login and protected routes |
| **Version Control** | [Git](https://git-scm.com/) + [GitHub](https://github.com/) | Source control and collaboration |
| **Package Manager** | [npm](https://www.npmjs.com/) | Dependency management for both backend and frontend |

---

##  Project Overview

The **Employee Task Tracker** enables employees to:
-  Register and log in securely using JWT authentication  
-  Add, update, and delete tasks via clean modals  
-  Filter and sort tasks by status, priority, or creation date  
-  View all tasks in an organized, responsive dashboard  

---

## ⚙️ Setup Instructions

### **1. Clone the Repository**
```bash
git clone https://github.com/vishal-9689/employee-task-tracker.git
cd employee-task-tracker
```

---

### **2. Setup Database (MongoDB)**
- Create a [MongoDB Atlas](https://www.mongodb.com/atlas/database) cluster or run MongoDB locally.
- Get your connection URI, e.g.
  ```
  mongodb+srv://<username>:<password>@cluster.mongodb.net/tasktracker
  ```
- Create a `.env` file inside the `/backend` folder:
  ```env
  MONGO_URI=your_mongo_connection_uri
  JWT_SECRET=your_secret_key
  PORT=5000
  ```

---

### **3. Setup Backend**
```bash
cd backend
npm install
npm start
```
Backend will run at:  
👉 `http://localhost:5000`

---

### **4. Setup Frontend**
```bash
cd frontend
npm install
npm run dev
```
Frontend will run at:  
👉 `http://localhost:5173`

---

### **5. Connect Frontend & Backend**
Create a `.env` file inside `/frontend`:
```env
VITE_API_BASE_URL=http://localhost:5000
```
Now both frontend and backend are connected.

---

## 📡 API Endpoints

### **Auth Routes**
| Method | Endpoint | Description |
|--------|-----------|-------------|
| `POST` | `/api/auth/register` | Register a new user |
| `POST` | `/api/auth/login` | Log in user and return JWT token |

### **Task Routes**
| Method | Endpoint | Description |
|--------|-----------|-------------|
| `GET` | `/api/tasks` | Fetch all tasks for logged-in user |
| `POST` | `/api/tasks` | Create a new task |
| `PUT` | `/api/tasks/:id` | Update a task by ID |
| `DELETE` | `/api/tasks/:id` | Delete a task by ID |
| `GET` | `/api/tasks/filter` | Filter or sort tasks |

---

## 🧱 Folder Structure

```
employee-task-tracker/
│
├── backend/
│   ├── server.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── taskRoutes.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── taskController.js
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   └── middleware/
│       └── authMiddleware.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskCard.jsx
│   │   │   ├── AddTaskModal.jsx
│   │   │   ├── UpdateTaskModal.jsx
│   │   │   ├── DeleteTaskModal.jsx
│   │   │   └── FilterSortControls.jsx
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── Dashboard.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

##  Example User Flow

1. User registers or logs in securely (JWT token stored in localStorage).  
2. Dashboard displays user’s tasks as cards.  
3. User can add a new task using the **Add Task** modal.  
4. Tasks can be updated or deleted directly from the task cards via **Update/Delete modals**.  
5. User can apply filters and sorting options to organize their view.  

---

## 🧰 Environment Variables

**Backend (.env):**
```env
MONGO_URI=your_mongo_connection_uri
JWT_SECRET=your_secret_key
PORT=5000
```

**Frontend (.env):**
```env
VITE_API_BASE_URL=http://localhost:5000/api
```

---

##  Future Enhancements

-  Task priority levels (High, Medium, Low)
-  Task completion status toggle
-  Team management & role-based dashboards
-  Notifications & reminders via email
-  Dark mode UI

---

##  Author

**Vishal Sharma**  
 [Email Me](mailto:panditvisha1364@gmail.com)  
 [LinkedIn](https://www.linkedin.com/in/vishal-sharma-73184522a/)  
 [GitHub](https://github.com/vishal-9689)

---

## 🪪 License

This project is open-source and available under the [MIT License](LICENSE).

---

⭐ **If you like this project, consider giving it a star on GitHub!**
