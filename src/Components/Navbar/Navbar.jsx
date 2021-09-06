import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <NavLink className="logo" to="/">
        React Router 
      </NavLink>

      <div className="nav-links">
        <NavLink activeClassName="selectedPage"  className="link" to="/about">
          About
        </NavLink>
        <NavLink activeClassName="selectedPage"  className="link" to="/contact">
          Contact
        </NavLink>
        <NavLink activeClassName="selectedPage"  className="link" to="/blog">
          Blog
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
