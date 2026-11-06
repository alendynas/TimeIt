import React from 'react';
import { NavLink } from 'react-router-dom';

const navigationItems = [
  { label: 'Dashboard', icon: '▦', path: '/'},
  { label: 'Tasks', icon: '✓', path: '/tasks' },
  { label: 'Calendar', icon: '▣', path: '/calendar' },
  { label: 'Time Tracking', icon: '◷', path: '/time-tracking' },
];

export default function Sidebar({ activePage = 'Dashboard', onNavigate }) {
    return (
        <aside className="sidebar">
            <div className="sidebar-brand">
                <div className="sidebar-logo">🗂️</div>
                <span>TimeIT</span>
            </div>

            <nav className="sidebar-nav" aria-label="Main Navigation">
                <p className="sidebar-section-label">WORKSPACE</p>

                {navigationItems.map((item) => {
                    return (
                        <NavLink
                            key={item.label}
                            to={item.path}
                            end={item.path === '/'}
                            className={`sidebar-nav-item ${activePage === item.label ? 'active' : ''}`}
                            onClick={() => onNavigate(item.label)}
                        >
                                <span className="sidebar-icon" aria-hidden="true">
                                    {item.icon}
                                </span>
                                <span>{item.label}</span>
                        </NavLink>
                    );
                })}
            </nav>

            <div className="sidebar-footer">
                <div className="sidebar-avatar">U</div>
                <div className="sidebar-user">
                    <strong>TimeIT User Name</strong>
                    <span>Personal Workspace</span>
                    </div>
                </div>
        </aside>
    );
}
