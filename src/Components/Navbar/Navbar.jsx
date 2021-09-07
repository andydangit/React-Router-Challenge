import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import "./Navbar.css";

function Navbar() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  return (
    <nav>
      <NavLink className="logo" to="/">
        React Router
      </NavLink>

      <div className="nav-links">
        <NavLink activeClassName="selectedPage" className="link" to="/about">
          About
        </NavLink>
        <NavLink activeClassName="selectedPage" className="link" to="/contact">
          Contact
        </NavLink>
        <NavLink activeClassName="selectedPage" className="link" to="/blog">
          Blog
        </NavLink>
        <NavLink activeClassName="selectedPage" className="link" to="/admin">
          Admin
        </NavLink>
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>{isLoggedIn? "logout" : "login"} </button>
      </div>
    </nav>
  );
}

export default Navbar;
