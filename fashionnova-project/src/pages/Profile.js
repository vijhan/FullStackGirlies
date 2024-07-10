import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

const Profile = ({ isAuthenticated }) => {
  useEffect(() => {
    if (!isAuthenticated) {
      return <Navigate to="login" />;
    }
  }, [isAuthenticated]);

  return (
    <>
      <h2>Profile</h2>
    </>
  );
};

export default Profile;
