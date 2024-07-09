import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";
import Hero from "../components/Hero/Hero";
import Popular from "../components/Popular/Popular";

function Homepage() {
    return(
        <div>
            <Header/>
            <NavBar/>
            <Hero/>
            <Popular/>
            <Footer/>
        </div>
    )
}

export default Homepage;