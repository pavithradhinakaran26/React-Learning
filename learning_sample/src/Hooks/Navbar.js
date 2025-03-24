import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">Dashboard</h2>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div style={{ transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }}></div>
        <div style={{ opacity: menuOpen ? 0 : 1 }}></div>
        <div style={{ transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }}></div>
      </div>

   <ul className={menuOpen ? "show" : ""}>
       <li><Link to="/login">Logout</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;