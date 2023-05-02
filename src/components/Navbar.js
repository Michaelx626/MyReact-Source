import React from "react";

export default function NavBar() {
  return (
    <nav className="navbar justify-content-end">
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Contact Me
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
