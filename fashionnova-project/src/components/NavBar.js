import React from "react";
import SearchBar from "./SearchBar";
import { NavLink, Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="App-nav">
      <ul className="App-nav-list">
        <li>
          <NavLink to='/home'>Home</NavLink>
        </li>
        <li>
          <a href="#new">New Arrivals</a>
        </li>
        <li>
          <a href="#women">Women</a>
        </li>
        <li>
          <a href="#men">Men</a>
        </li>
        <li>
          <a href="#sale">Sale</a>
        </li>
        <li>
          <Link to='/about'>About Us</Link>
        </li>
      </ul>
      <SearchBar />
    </nav>
  );
}

export default NavBar;
