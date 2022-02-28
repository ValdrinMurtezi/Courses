import React, { useState } from "react";
import "../styles/slider.scss";
import Items from "./Data.js";

function Slider() {
  const [item, setItem] = useState(0);
  const { name, photo, description } = Items[item];

  const checkItem = (index) => {
    if (index > Items.length - 1) {
      return 0;
    }
    if (index < 0) {
      return Items.length - 1;
    }
    return index;
  };

  const prevItem = () => {
    setItem((item) => {
      let newItem = item + 1;
      return checkItem(newItem);
    });
  };

  const nextItem = () => {
    setItem((item) => {
      let newItem = item - 1;
      return checkItem(newItem);
    });
  };

  return (
    <div className="slider">
      <div className="article">
        <img src={photo} alt="theimage" />

        <h2>{name}</h2>
        <p>{description}</p>
        <div className="btns">
          <button onClick={prevItem}>
            <i className="fa-solid fa-angles-left"></i>
          </button>
          <button onClick={nextItem}>
            <i className="fa-solid fa-angles-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slider;
