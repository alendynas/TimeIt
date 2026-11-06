import Dashboard from './pages/Dashboard/dashboard';
import { Routes, Route } from 'react-router-dom';
import Calendar from './pages/Calendar/Calendar';
import settings from './pages/Settings/settings';
import Tasks from './pages/Tasks/tasks';
import timeTracking from './pages/TimeTracking/timeTracking';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/time-tracking" element={<timeTracking />} />
      <Route path="/settings" element={<settings />} />
    </Routes>
  );
}

export default App;
