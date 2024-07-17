import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const Profile = ({ isAuthenticated, onLogout }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const loggedInUser = users.find(
        (user) => user.email === localStorage.getItem("loggedInUser")
      );
      setUser(loggedInUser);
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    onLogout();
  };

  return (
    <>
      <div className="profile">
        <h2>Profile</h2>
        {user ? (
          <div className="profile-details">
            <p>
              <strong>Full Name:</strong> {user.fullName}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Address:</strong> {user.address}
            </p>
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default Profile;
