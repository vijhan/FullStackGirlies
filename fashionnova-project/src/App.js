import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Homepage from "./pages/Homepage";
import Women from "./pages/Women";
import Wallet from "./pages/Wallet";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Men from "./pages/Men";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ShopContextProvider from "../src/context/ShopContext";
import Product from "./pages/Product";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const handleRegister = () => {};

  return (
    <div className="App">
      <ShopContextProvider>
        <BrowserRouter>
          <Header />
          <NavBar />
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/women" element={<Women />} />
            <Route path="/men" element={<Men />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/product" element={<Product />}>
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route
              path="/profile"
              element={
                isAuthenticated ? (
                  <Profile
                    isAuthenticated={isAuthenticated}
                    onLogout={handleLogout}
                  />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route
              path="/register"
              element={<Register onRegister={handleRegister} />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
