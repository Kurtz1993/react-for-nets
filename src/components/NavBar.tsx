import React, { FC } from "react";
import logo from "../logo.svg";
import "./NavBar.scss";

const NavBar: FC = () => (
  <nav className="nav">
    <div className="nav__container">
      <img src={logo} alt="React Logo" className="nav__logo" />
    </div>

    <div className="nav__links">
      <span className="nav__link">Contact</span>
      <span className="nav__link">About</span>
    </div>
  </nav>
);

export default NavBar;
