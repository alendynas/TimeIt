import Sidebar from "../../components/layout/sidebar";
import ProgressSummary from "./ProgressSummary";

const sampleTasks = [
  { id: 1, title: "Sample Task 1", completed: true },
  { id: 2, title: "Sample Task 2", completed: false },
  { id: 3, title: "Sample Task 3", completed: true },
  { id: 4, title: "Sample Task 4", completed: false },
];

export default function Dashboard({ onNavigate }) {
  const currentDate = new Date();

  const formattedDate = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="dashboard-layout">
      <Sidebar
        activePage="Dashboard"
        onNavigate={onNavigate}
      />

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <p className="dashboard-date">{formattedDate}</p>

            <h1>Welcome to your Dashboard</h1>

            <p>
              Here you can track your progress and manage your tasks.
            </p>
          </div>
        </header>

        <section className="dashboard-content">
          <ProgressSummary tasks={sampleTasks} />

          <div className="dashboard-overview">
            <h2>Productivity</h2>

            <p>
              Here you can view your productivity status and insights.
              Keep your tasks organized, manage your time, and enhance
              your progress efficiency towards your goals.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}