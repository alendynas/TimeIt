import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/dashboard';
import MyTasks from './pages/Tasks/MyTasks';
import Calendar from './pages/Calendar/Calendar';
import Sidebar from '/components/layout/sidebar';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />

      <Route path="/calendar" element={<Calendar />} />

      <Route
        path="/tasks"
        element={
          <div className="dashboard-layout">
            <Sidebar />
            <MyTasks />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
