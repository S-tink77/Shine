import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/programs">Programs</Link></li>
          <li><Link to="/get-involved">Get Involved</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/news">News & Updates</Link></li>
          <li><Link to="/donate">Donate</Link></li>
          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/legal">Legal/Privacy</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;