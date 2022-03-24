import React, { useState } from "react";
import "../styles/header.scss";

function Header() {
  const [active, setActive] = useState(false);
  const [menu, setMenu] = useState(true);

  const changeMenu = () => {
    setMenu(!menu);
  };

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className="header">
      <div className="logo">Technology.</div>
      <nav className={active ? "links active" : "links"}>
        <ul>
          <li>
            <a href="#section1">Home</a>
          </li>
          <li>
            <a href="#section1">About</a>
          </li>
          <li>
            <a href="#section1">Projects</a>
          </li>
          <li>
            <a href="h#section1">Contact</a>
          </li>
        </ul>
      </nav>
      <div onClick={showMenu} className="menu">
        <i
          onClick={changeMenu}
          className={!menu ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
        ></i>
      </div>
    </div>
  );
}

export default Header;
