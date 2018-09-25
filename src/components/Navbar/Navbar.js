import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = props => (
  <nav className="navbar navbar-expand-md bg-white navbar-light fixed-top">
  <div className="container-fluid">
  <Link className="navbar-brand" to="/">
      NYT Article Search
    </Link>
    
    <div>
      <section>
        <div></div>
        <ul className="nav navbar-nav ml-auto">
          <li className="nav-item nav-link">
          </li>
          <li className="nav-item nav-link">
            <Link
              to="/"
              className={
                window.location.pathname === "/saved"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Saved Articles
            </Link>
          </li>
        </ul>
      </section>
    </div>
    </div>
  </nav>
);

export default Navbar;
