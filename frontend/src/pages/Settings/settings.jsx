import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function Settings() {
    const [settings, setSettings] = useState({
        theme: "light",
        language: "English",
        timeFormat: "12-hour",
        dateFormat: "MM/DD/YYYY",
        taskReminders: true,
        dailyReminders: true,
        deadlineAlerts: true,
        questNotifications: true,
        streakReminders: true,
        dailyGoal: 5,
        weekStart: "Monday",
        workDuration: 25,
        breakDuration: 5,
        xpNotifications: true,
        streakTracking: true,
        showQuests: true,
    });

    const [saved, setSaved] = useState(false);

    function updateSettings(name, value) {
        setSettings(previous => ({
            ...previous,
            [name]: value
        }));
        setSaved(false);
    }

    function Toggle({label, name}) {
        return (
            <label className="setting-row">
                <span>{label}</span>
                <input
                    type="checkbox"
                    checked={settings[name]}
                    onChange={e => 
                        updateSettings(name, e.target.checked)
                    }
                />
            </label>
        );
    }

    function SelectSetting({label, name, options}) {
        return (
            <label className="setting-row">
                <span>{label}</span>
                <select
                    value={settings[name]}
                    onChange={e =>
                        updateSettings(name, e.target.value)
                    }
                >
                    {options.map(option => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </label>
        );
    }

    function NumberSetting({label, name, min, max}) {
        return (
            <label className="setting-row">
                <span>{label}</span>
                <input
                    type="number"
                    min={min}
                    max={max}
                    value={settings[name]}
                    onChange={e =>
                        updateSettings(name, Number(e.target.value))
                    }
                />
            </label>
        );
    }

    return (
        <div className="dashboard-layout">
            <Sidebar activePage="settings" />

            <main className="dashboard-content settings-main">
                <header className="dashboard-header">
                    <h1>Settings</h1>
                    <p>
                        Customize your TimeIT experience and manage your preferences.
                    </p>
                </header>

                <div className="settings-container">

                    <section className="settings-card">
                        <h2>General Settings</h2>
                        <p>Customize the appearance of Timeit.</p>

                        <selectSetting
                            label="Appearance"
                            name="theme"
                            options={["Light", "Dark", "System Default"]}
                        />

                        <selectSetting
                            label="Language"
                            name="language"
                            options={["English", "Spanish"]}
                        /> 

                        <selectSetting
                            label="Date Format"
                            name="dateFormat"
                            options={["MM/DD/YYYY", "DD/MM/YYYY"]}
                        />

                        <selectSetting
                            label="Time Format"
                            name="timeFormat"
                            options={["12-hour", "24-hour"]}
                        />
                    </section>

                    <section className="settings-card">
                        <h2>Notifications</h2>
                        <p>Manage your notification preferences.</p>

                        <Toggle label="Task Reminders" name="taskReminders" />
                        <Toggle label="Daily Reminders" name="dailyReminders" />
                        <Toggle label="Deadline Alerts" name="deadlineAlerts" />
                        <Toggle label="Quest Notifications" name="questNotifications" />
                        <Toggle label="Achievement Notifications" name="achievementNotifications" />
                        <Toggle label="Streak Reminders" name="streakReminders" />
                    </section>

                    <section className="settings-card">
                        <h2>Prouctivity</h2>
                        <p>Set your daily productivity settings.</p>

                        <NumberSetting
                            label="Daily Goal (tasks)"
                            name="dailyGoal"
                            min={1}
                            max={100}
                        />

                        <SelectSetting
                            label="Start of the Week"
                            name="weekStart"
                            options={["Monday", "Sunday"]}
                        />
                    </section>

                    <section className="settings-card">
                        <h2>Time Management</h2>
                        <p>Customize how you manage your </p>

                        <NumberSetting
                            label="Work Duration (minutes)"
                            name="workDuration"
                            min={5}
                            max={180}
                        />

                        <NumberSetting
                            label="Break Duration (minutes)"
                            name="breakDuration"
                            min={1}
                            max={60}
                        />
                    </section>

                    <section className="settings-card">
                        <h2>Gamification</h2>
                        <p>Control your rewards and progress notifications</p>

                        <Toggle label="XP Notifications" name="xpNotifications" />
                        <Toggle label="Streak Tracking" name="streakTracking" />
                        <Toggle label="Show Daily Quests" name="showQuests" />
                    </section>

                    <div className="settings-actions">
                        {saved && <span>Settings saved successfully!</span>}

                        <button
                            type="button"
                            onClick={() => setSaved(true)}
                        >
                            Save Changes
                        </button>
                    </div>

                </div>
            </main>
        </div>
    );
}