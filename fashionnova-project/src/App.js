import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import About from "./pages/About";
import Homepage from "./pages/Homepage";
import Women from "./pages/Women";
import Wallet from "./pages/Wallet";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Men from "./pages/Men";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  //Setting up preliminary authentication for now
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/women" element={<Women />} />
          <Route path="/men" element={<Men />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route
            path="/profile"
            element={
              isAuthenticated ? (
                <Profile isAuthenticated={isAuthenticated} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
