import React from "react";
import "../assets/styles/components/Header.scss";
import logo from "../assets/static/logo.png";

const Header = () => (
  <header className="header">
    <img className="header__img" src={logo} alt="logoempresa" />
    <div className="header__menu">
      <div className="header__menu--Icon">
        <img src={menuIcon} alt="menu" />
      </div>
      <ul>
        <li>
          {" "}
          <a href="http://">Categories</a>{" "}
        </li>
        <li>
          {" "}
          <a href="http://">Stores</a>{" "}
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
