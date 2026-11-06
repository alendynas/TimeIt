# TimeIt
A gamified task and time management system platform 

Developed by: RAAMS Systems
Project: TimeIt
Course: CSCE 4905 – Capstone I
Institution: University of North Texas (UNT)

# 1. Project Overview

TimeIt is a productivity and time-management application designed to help users organize tasks, manage their schedules, track their time, and monitor their progress.

The application aims to provide users with a centralized workspace where they can manage daily responsibilities, stay organized, and improve their productivity.

RAAMS Systems is developing TimeIt as a collaborative software engineering project, with an emphasis on usability, modular development, and future feature expansion.

# 2. Key Features

The application is being developed around the following features:

Overview Dashboard: Provides users with a summary of their productivity, task statistics, and progress.

Task Management: Allows users to organize, create, and manage tasks.

Calendar: Provides a monthly calendar interface for viewing and organizing scheduled tasks.

Time Tracking: Intended to help users monitor the time spent on tasks.

User Authentication: Provides the foundation for user registration and login.

Settings: Provides a location for user preferences and application configuration.

Additional productivity features may be introduced as development progresses.

Note: Features are being implemented incrementally. Not every planned feature is necessarily complete or integrated.

# 3. Technology Stack

Frontend

React
JavaScript (JSX)
Vite
React Router
CSS

Development Tools

Visual Studio Code
Git and GitHub
GitHub Desktop
npm

Backend and Database

Backend framework, database technology, and integration details should be documented here once the team's implementation is confirmed.

# 4. Project Structure

The frontend currently follows a component-based structure.

TimeIt/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   └── layout/
│   │   │       └── sidebar.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Dashboard/
│   │   │   │   ├── dashboard.jsx
│   │   │   │   └── ProgressSummary.jsx
│   │   │   │
│   │   │   └── Calendar/
│   │   │       ├── Calendar.jsx
│   │   │       ├── Calendar.css
│   │   │       └── CalendarPreview.jsx
│   │   │
│   │   ├── styles/
│   │   │   └── index.css
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── README.md
└── [Other project documentation and files]

The structure above represents the frontend files identified during development. Update it as additional components and project directories are integrated.

# 5. Installation and Setup

Prerequisites

Make sure the following tools are installed:

Node.js
npm
Git
Visual Studio Code (recommended)

Clone the Repository

git clone https://github.com/alendynas/TimeIt.git

Navigate into the project directory:

cd TimeIt

Install Frontend Dependencies

cd frontend
npm install

Run the Development Server

npm run dev

Vite will start the local development server. Open the URL displayed in your terminal, typically:

http://localhost:5173/

# 6. Application Navigation

TimeIt uses React Router for frontend page navigation.

Current routes include:

Page

Route

Overview Dashboard

/

Calendar

/calendar

Additional routes will be added as the remaining application pages are integrated.

# 7. Development Workflow

RAAMS Systems uses GitHub for collaborative development and version control.

The team's recommended workflow is:

Update your local repository before starting new work.

Create or switch to a feature-specific branch.

Implement and test your assigned changes.

Commit changes with descriptive commit messages.

Push the feature branch to GitHub.

Submit a pull request for review.

Merge approved changes into the main branch.

Example Git Commands

Create a feature branch:

git checkout -b feature/your-feature-name

Stage changes:

git add .

Commit changes:

git commit -m "Describe your changes"

Push the branch:

git push -u origin feature/your-feature-name

Pull requests should be reviewed before changes are merged into main.

# 8. Team

RAAMS Systems

The project is developed collaboratively by the RAAMS Systems team.

Team members have responsibilities across the application's dashboard, authentication, task management, calendar, settings, and project coordination.

# 9. Project Status

TimeIt is under active development.

Current frontend development includes:

Initial Overview Dashboard implementation.

Sidebar navigation.

Task progress summary using sample task data.

Initial Calendar frontend implementation.

React Router integration between the Dashboard and Calendar.

Further development includes integrating shared task data, completing remaining application pages, improving frontend consistency, and testing application functionality.

# 10. Future Development

Potential development priorities include:

Integration of task data across application components.

Improved task scheduling and calendar functionality.

Functional time tracking.

User authentication and account management.

Enhanced productivity summaries and reporting.

Additional testing, usability improvements, and application integration.

# 11. License

This project is developed as part of the CSCE 4905 Capstone project at the University of North Texas.

A formal software license has not yet been specified.
