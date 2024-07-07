import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainContent from "../components/MainContent";
import React from "react";
import Hero from "../components/Hero/Hero";

function Homepage() {
    return(
        <div>
            <Header/>
            <NavBar/>
            <Hero/>
            {/* <MainContent /> */}
            <Footer/>
        </div>
    )
}

export default Homepage;