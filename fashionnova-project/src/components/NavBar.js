import React from "react";
import SearchBar from "./SearchBar";

function NavBar() {
  return (
    <nav className="App-nav">
      <ul className="App-nav-list">
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
      </ul>
      <SearchBar />
    </nav>
  );
}

export default NavBar;
