import { useEffect, useState } from "react";
import Tasklist from "../Dashboard/Tasklist";
import "./MyTasks.css";
const storageKey = "timeit-my-tasks";

const emptyForm = {
  title: "",
  description: "",
  dueDate: "",
  priority: "Medium",
  status: "Not Started",
};

function loadTasks() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

export default function MyTasks() {
  const [tasks, setTasks] = useState(loadTasks);
  const [filter, setFilter] = useState("All");
  const [form, setForm] = useState({ ...emptyForm });
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState("");
  const [storageError, setStorageError] = useState("");
  const [now, setNow] = useState(Date.now());

  // Update overdue tasks even when the page stays open.
  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 30000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(tasks));
      setStorageError("");
    } catch {
      setStorageError(
        "Your changes could not be saved in this browser."
      );
    }
  }, [tasks]);

  function openNewTask() {
    setForm({ ...emptyForm });
    setEditingId(null);
    setError("");
    setShowForm(true);
  }

  function closeForm() {
    setShowForm(false);
    setEditingId(null);
    setError("");
  }

  function updateForm(event) {
    const { name, value } = event.target;
    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function saveTask(event) {
    event.preventDefault();

    if (!form.title.trim()) {
      setError("Please enter a task name.");
      return;
    }

    if (!form.dueDate || Number.isNaN(new Date(form.dueDate).getTime())) {
      setError("Please enter a valid due date and time.");
      return;
    }

    const taskDetails = {
      ...form,
      title: form.title.trim(),
      description: form.description.trim(),
      completed: form.status === "Completed",
    };

    if (editingId !== null) {
      setTasks((previous) =>
        previous.map((task) =>
          task.id === editingId
            ? { ...task, ...taskDetails }
            : task
        )
      );
    } else {
      const newTask = {
        ...taskDetails,
        id: crypto.randomUUID(),
      };

      setTasks((previous) => [...previous, newTask]);
    }

    setNow(Date.now());
    closeForm();
  }

  function editTask(task) {
    setForm({
      title: task.title,
      description: task.description || "",
      dueDate: task.dueDate,
      priority: task.priority,
      status: task.completed ? "Completed" : task.status,
    });

    setEditingId(task.id);
    setError("");
    setShowForm(true);
  }

  function deleteTask(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmed) return;

    setTasks((previous) =>
      previous.filter((task) => task.id !== id)
    );

    if (editingId === id) closeForm();
  }

  function toggleComplete(id) {
    setTasks((previous) =>
      previous.map((task) => {
        if (task.id !== id) return task;

        const completed = !task.completed;

        return {
          ...task,
          completed,
          status: completed ? "Completed" : "Not Started",
        };
      })
    );

    setNow(Date.now());
  }

  const today = new Date(now);
  const tomorrow = new Date(now);
  tomorrow.setHours(24, 0, 0, 0);

  const visibleTasks = tasks.filter((task) => {
    const deadline = new Date(task.dueDate);

    switch (filter) {
      case "Today":
        return (
          !task.completed &&
          deadline.toDateString() === today.toDateString()
        );
      case "Upcoming":
        return !task.completed && deadline >= tomorrow;
      case "Overdue":
        return !task.completed && deadline.getTime() < now;
      case "Completed":
        return task.completed;
      default:
        return true;
    }
  });

  const remainingTasks = tasks.filter(
    (task) => !task.completed
  ).length;

  const overdueTasks = tasks.filter(
    (task) =>
      !task.completed &&
      new Date(task.dueDate).getTime() < now
  ).length;

  return (
    <main className="dashboard-main my-tasks-page">
      <header className="tasks-header">
        <div>
          <p className="dashboard-date">
            {today.toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
          <h1>My Tasks</h1>
          <p>
            {remainingTasks} remaining · {overdueTasks} overdue
          </p>
        </div>

        <button
          type="button"
          className="task-primary-button"
          onClick={openNewTask}
        >
          + New Task
        </button>
      </header>

      {storageError && (
        <p className="task-error" role="alert">
          {storageError}
        </p>
      )}

      {showForm && (
        <section className="task-form-card">
          <h2>
            {editingId !== null ? "Edit Task" : "Create Task"}
          </h2>

          <form onSubmit={saveTask}>
            <label htmlFor="task-title">Task name</label>
            <input
              id="task-title"
              name="title"
              value={form.title}
              onChange={updateForm}
              maxLength={120}
              required
              autoFocus
            />

            <label htmlFor="task-description">Description</label>
            <textarea
              id="task-description"
              name="description"
              value={form.description}
              onChange={updateForm}
              rows={3}
              maxLength={2000}
            />

            <label htmlFor="task-due-date">Due date and time</label>
            <input
              id="task-due-date"
              type="datetime-local"
              name="dueDate"
              value={form.dueDate}
              onChange={updateForm}
              required
            />

            <label htmlFor="task-priority">Priority</label>
            <select
              id="task-priority"
              name="priority"
              value={form.priority}
              onChange={updateForm}
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>

            <label htmlFor="task-status">Status</label>
            <select
              id="task-status"
              name="status"
              value={form.status}
              onChange={updateForm}
            >
              <option>Not Started</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>

            {error && (
              <p className="task-error" role="alert">
                {error}
              </p>
            )}

            <div className="task-form-actions">
              <button type="submit" className="task-primary-button">
                {editingId !== null ? "Save Changes" : "Create Task"}
              </button>

              <button type="button" onClick={closeForm}>
                Cancel
              </button>
            </div>
          </form>
        </section>
      )}

      <nav className="task-filters" aria-label="Filter tasks">
        {["All", "Today", "Upcoming", "Overdue", "Completed"].map(
          (name) => (
            <button
              key={name}
              type="button"
              className={filter === name ? "active" : ""}
              aria-pressed={filter === name}
              onClick={() => setFilter(name)}
            >
              {name}
            </button>
          )
        )}
      </nav>

      <section className="tasks-card" aria-label={`${filter} tasks`}>
        <Tasklist
          tasks={visibleTasks}
          onToggleComplete={toggleComplete}
          onEdit={editTask}
          onDelete={deleteTask}
        />
      </section>
    </main>
  );
}