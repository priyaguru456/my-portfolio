import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">MyPortfolio</h2>
      <ul className="nav-links">
        <li>
  <Link to="home" smooth={true} duration={500} spy={true} activeClass="active-link">
    Home
  </Link>
</li>
<li>
  <Link to="about" smooth={true} duration={500} spy={true} activeClass="active-link">
    About
  </Link>
</li>
<li>
  <Link to="skills" smooth={true} duration={500} spy={true} activeClass="active-link">
    Skills
  </Link>
</li>
<li>
  <Link
    to="contact"
    smooth={true}
    duration={500}
    spy={true}
    activeClass="active-link"
    offset={-80} // height of navbar
  >
    Contact
  </Link>
</li>



      </ul>
    </nav>
  );
}

export default Navbar;
