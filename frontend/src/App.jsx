import Dashboard from './pages/Dashboard/dashboard';
import { Routes, Route } from 'react-router-dom';
import Calendar from './pages/Calendar/Calendar';
import MyTasks from './pages/Tasks/MyTasks';
import Profile from './pages/Profile/profile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/tasks" element={<MyTasks />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
