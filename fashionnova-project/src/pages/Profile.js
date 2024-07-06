import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Profile = ({ isAuthenticated }) => {
  useEffect(() => {
    if (!isAuthenticated) {
      return <Navigate to="login" />;
    }
  }, [isAuthenticated]);

  return (
    <>
      <Header />
      <NavBar />
      <h2>Profile</h2>
      <Footer />
    </>
  );
};

export default Profile;
