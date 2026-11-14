export default function Tasklist({
  tasks = [],
  onToggleComplete,
  onEdit,
  onDelete,
}) {
  if (tasks.length === 0) {
    return (
      <p className="tasks-empty">
        No tasks here yet. Create a task to get started.
      </p>
    );
  }

  return (
    <div className="tasks-table-wrapper">
      <table className="tasks-table">
        <thead>
          <tr>
            <th scope="col">Task Name</th>
            <th scope="col">Due Date</th>
            <th scope="col">Priority</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task) => {
            const overdue =
              !task.completed &&
              new Date(task.dueDate).getTime() < Date.now();

            const status = task.completed
              ? "Completed"
              : overdue
                ? "Overdue"
                : task.status;

            return (
              <tr key={task.id}>
                <td>
                  <label className="task-name">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => onToggleComplete(task.id)}
                      aria-label={`Mark ${task.title} as ${
                        task.completed ? "incomplete" : "complete"
                      }`}
                    />

                    <span
                      className={
                        task.completed ? "task-completed" : ""
                      }
                    >
                      {task.title}
                    </span>
                  </label>
                </td>

                <td>
                  {new Date(task.dueDate).toLocaleString([], {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                    hour: "numeric",
                    minute: "2-digit",
                  })}
                </td>

                <td>{task.priority}</td>

                <td className={overdue ? "task-overdue" : ""}>
                  {status}
                </td>

                <td>
                  <div className="task-actions">
                    <button
                      type="button"
                      onClick={() => onEdit(task)}
                      aria-label={`Edit ${task.title}`}
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      onClick={() => onDelete(task.id)}
                      aria-label={`Delete ${task.title}`}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}