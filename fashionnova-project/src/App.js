import React from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
