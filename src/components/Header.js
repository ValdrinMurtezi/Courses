import React, { useState } from "react";
import "../styles/style.scss";

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
            <a href="https://www.youtube.com/">Home</a>
          </li>
          <li>
            {" "}
            <a href="https://www.youtube.com/">About</a>
          </li>
          <li>
            {" "}
            <a href="https://www.youtube.com/">Projects</a>
          </li>
          <li>
            <a href="https://www.youtube.com/">Contact</a>
          </li>
        </ul>
      </nav>
      <div onClick={showMenu} className="menu">
        <i
          onClick={changeMenu}
          className={!menu ? "fas-solid fa-xmark " : "fa-solid fa-bars"}
        ></i>
      </div>
    </div>
  );
}

export default Header;
