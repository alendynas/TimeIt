import { useState } from 'react';
import Dashboard from './pages/Dashboard/dashboard';
import Calendar from './pages/Calendar/Calendar';

function App() {
  const [activePage, setActivePage] = useState('Dashboard');

  return (
    <>
      {activePage === 'Dashboard' ? (
        <Dashboard onNavigate={setActivePage} />
      ) : (
        <Calendar onNavigate={setActivePage} />
      )}
    </>
  );
}

export default App;
