import React from 'react';

const navigationItems = [
  { label: 'Dashboard', icon: '▦', active: true },
  { label: 'Tasks', icon: '✓', active: false },
  { label: 'Calendar', icon: '▣', active: false },
  { label: 'Time Tracking', icon: '◷', active: false },
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
                    const isActive = activePage === item.label;

                    return (
                        <button
                            key={item.label}
                            type="button"
                            className={`sidebar-link ${isActive ? 'active' : ''}`}
                            onClick={() => onNavigate(item.label)}
                            aria-current={isActive ? 'page' : undefined}
                        >
                            <span className="sidebar-icon" aria-hidden="true">
                                {item.icon}
                            </span>
                            <span>{item.label}</span>
                        </button>
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