import Sidebar from "../../components/layout/Sidebar";
import "./profile.css";
import { useState } from "react";

const initialProfile = {
    fullName: "EddieBrock",
    email: "user@example.com",
    username: "EddieVBrock999",
    bio: "Hi! Welcome to my profile.",
};

export default function Profile() {
    const [profile, setProfile] = useState(initialProfile);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(initialProfile);
    const [message, setMessage] = useState("");

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((previousData) => ({
            ...previousData,
            [name]: value,
        }));
    }

    function handleEdit() {
        setMessage("");
        setIsEditing(true);
        setFormData(profile);
    }

    function handleSave(event) {
        event.preventDefault();
        setIsEditing(false);
        setProfile(formData);
        setMessage("Profile has been updated successfully.");
    }

    function handleCancel() {
        setIsEditing(false);
        setFormData(profile);
        setMessage("Profile update canceled.");
    }

    return (
        <div className="dashboard-layout">
            <Sidebar activatepage="Profile" />
            <main className="dashboard-main profile-main">
                <header className="dashboard-header">
                    <div>
                        <h1>Profile</h1>
                        <p>Manage profile information.</p>
                    </div>
                </header>

                <section className="profile-section">
                    <div className="profile-card">
                        <div className="profile-banner">

                        <div className="profile-avatar">
                            {profile.fullName.charAt(0).toUpperCase()}
                        </div>

                        <div className="profile-heading">
                            <h2>{profile.fullName}</h2>
                            <p>@{profile.username}</p>
                        </div>
                        </div>

                        <form className="profile-form" onSubmit={handleSave}>
                            <div className="profile-section-heading">
                                <h3>Profile Information</h3>

                                {!isEditing && (
                                    <button 
                                      type="button"
                                      className="profile-edit-button"
                                      onClick={handleEdit}
                                    >
                                        Edit Profile
                                    </button>
                                )}
                            </div>

                            <div className="profile-field">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    id="fullName"
                                    name="fullName"
                                    type="text"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    required
                                />
                            </div>

                            <div className="profile-field">
                                <label htmlFor="username">Username</label>
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    value={formData.username}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    required
                                />
                            </div>

                            <div className="profile-field">
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    required
                                />
                            </div>

                            <div className="profile-field">
                                <label htmlFor="bio">Bio</label>
                                <textarea
                                    id="bio"
                                    name="bio"
                                    value={formData.bio}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                />
                            </div>

                            {message && (
                                <p className="profile-success-message">{message}</p>
                            )}

                            {isEditing && (
                                <div className="profile-form-actions">
                                    <button
                                        type="button"
                                        className="profile-cancel-button"
                                        onClick={handleCancel}
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        type="submit"
                                        className="profile-save-button"
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            )}
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );

}