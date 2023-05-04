import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar justify-content-end">
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">
            About Me
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/portfolio">
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contactme">
            Contact Me
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/resume">
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}
