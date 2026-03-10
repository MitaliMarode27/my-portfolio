import { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="logo">
        Portfolio
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <NavLink to="/">Home</NavLink>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <NavLink to="/projects">All Projects</NavLink>
      </ul>

      <div 
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

    </nav>
  );
}

export default Navbar;