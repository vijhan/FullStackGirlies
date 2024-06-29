import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";

export default function About() {
    return(
        <>
            <Header/> 
            <NavBar/> 
            <h2>About Us</h2>
            <p>We are an online clothing store dedicated to providing stylish and affordable clothing to the world.</p>
            <Footer/>
        </>
    )
}