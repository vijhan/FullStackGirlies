import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { NavLink, Link } from "react-router-dom";

function NavBar() {
  const [menu, setMenu] = useState("home");
  return (
    <nav className="App-nav">
      <ul className="App-nav-list">
        <li>
          <NavLink
            to="/home"
            onMouseOver={() => {
              setMenu("home");
            }}
          >
            Home{menu === "home" ? <hr /> : <></>}
          </NavLink>
        </li>
        <li>
          <Link
            to="/women"
            onMouseOver={() => {
              setMenu("women");
            }}
          >
            Women{menu === "women" ? <hr /> : <></>}
          </Link>
        </li>
        <li>
          <Link
            to="/men"
            onMouseOver={() => {
              setMenu("men");
            }}
          >
            Men{menu === "men" ? <hr /> : <></>}
          </Link>
        </li>
        <li>
          <Link
            to="/cart"
            onMouseOver={() => {
              setMenu("cart");
            }}
          >
            Cart{menu === "cart" ? <hr /> : <></>}
          </Link>
        </li>
        <li>
          <Link
            to="/wallet"
            onMouseOver={() => {
              setMenu("wallet");
            }}
          >
            Wallet{menu === "wallet" ? <hr /> : <></>}
          </Link>
        </li>
        <li>
          <Link
            to="/profile"
            onMouseOver={() => {
              setMenu("profile");
            }}
          >
            Profile{menu === "profile" ? <hr /> : <></>}
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            onMouseOver={() => {
              setMenu("about");
            }}
          >
            About Us{menu === "about" ? <hr /> : <></>}
          </Link>
        </li>
      </ul>
      <SearchBar />
    </nav>
  );
}

export default NavBar;
