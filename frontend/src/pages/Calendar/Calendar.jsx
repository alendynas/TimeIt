import React, { useState } from "react";
import "./Calendar.css";
import Sidebar from '../../components/layout/Sidebar';


function Calendar({ onNavigate }) {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 10, 1));

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const previousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const monthName = currentDate.toLocaleString("default", {
    month: "long",
    year: "numeric"
  });

  const days = [];

  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day);
  }

  return (
    <div className="dashboard-layout">
      <Sidebar
        activePage="Calendar"
        onNavigate={onNavigate}
      />
  
      <main className="dashboard-main">
        <div className="calendar-page">
          <div className="calendar-header">
            <div>
              <h1>Calendar</h1>
              <p>Manage your schedule and upcoming events.</p>
            </div>
          </div>
  
          <div className="calendar-card">
            <div className="calendar-navigation">
              <button onClick={previousMonth}>‹</button>
              <h2>{monthName}</h2>
              <button onClick={nextMonth}>›</button>
            </div>
  
            <div className="calendar-grid">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
                <div className="calendar-day-name" key={day}>
                  {day}
                </div>
              ))}
  
              {days.map((day, index) => (
                <div
                  className={`calendar-date ${
                    day === new Date().getDate() &&
                    month === new Date().getMonth() &&
                    year === new Date().getFullYear()
                      ? "today"
                      : ""
                  }`}
                  key={index}
                >
                  {day || ""}
                </div>
              ))}
            </div>
          </div>
  
          <div className="upcoming-events">
            <h2>Upcoming Events</h2>
            <p>No upcoming events scheduled.</p>
          </div>
        </div>
      </main>
    </div>
  );
                }

export default Calendar;
