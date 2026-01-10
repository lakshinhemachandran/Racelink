import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "/racelink_logo_nobg.png";

const Navbar = () => {
  return (
    <nav>
      <div className="brand">
        <Link to="/">
          <img src={logo} alt="Racelink Logo"/>
        </Link>
      </div>
      <ul>
        <li><Link to="/drivers">Drivers</Link></li>
        <li><Link to="/races">Races</Link></li>
        <li><Link to="/teams">Teams</Link></li>
        <li><Link to="/search">Search</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
