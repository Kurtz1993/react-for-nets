import React, { FC } from "react";
import { Link } from "react-router-dom";

import logo from "../logo.svg";
import "./NavBar.scss";

const NavBar: FC = () => (
  <nav className="nav">
    <div className="nav__container">
      <img src={logo} alt="React Logo" className="nav__logo" />
    </div>

    <div className="nav__links">
      <Link className="nav__link" to="/contact">
        Contact
      </Link>
      <Link className="nav__link" to="/about">
        About
      </Link>
      {/* <span className="nav__link">About</span> */}
    </div>
  </nav>
);

export default NavBar;
