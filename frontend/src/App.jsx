import Dashboard from './pages/Dashboard/dashboard';
import { Routes, Route } from 'react-router-dom';
import Calendar from './pages/Calendar/Calendar';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/calendar" element={<Calendar />} />
    </Routes>
  );
}

export default App;
