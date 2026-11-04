import { useState } from "react";
import Dashboard from "./pages/Dashboard/dashboard";
import MyTasks from "./pages/Tasks/MyTasks";
import Sidebar from "./components/layout/sidebar";

export default function App() {
  const [activePage, setActivePage] = useState("Dashboard");

  function navigateTo(page) {
    if (page === "Dashboard" || page === "Tasks") {
      setActivePage(page);
    } else {
      window.alert(`${page} is not available yet.`);
    }
  }

  if (activePage === "Tasks") {
    return (
      <div className="dashboard-layout">
        <Sidebar
          activePage="Tasks"
          onNavigate={navigateTo}
        />
        <MyTasks />
      </div>
    );
  }

  return <Dashboard onNavigate={navigateTo} />;
}