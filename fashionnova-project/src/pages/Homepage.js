import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainContent from "../components/MainContent";
import React from "react";

function Homepage() {
    return(
        <div>
            <Header/>
            <NavBar/>
            <MainContent />
            <Footer/>
        </div>
    )
}

export default Homepage;