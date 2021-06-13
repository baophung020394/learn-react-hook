import React, { useState } from "react";
import './ColorBox.scss';
ColoBox.propTypes = {};

function getRandomColor() {
  const COLOR_LIST = ["deeppink", "red", "yellow", "green", "blue"];

  // Math.trunc lay so nguyen
  // Math.random return con số thập phân < 1
  const randomIndex = Math.trunc(Math.random() * 5);
  // console.log(COLOR_LIST[0]);
  return COLOR_LIST[randomIndex];
}

function ColoBox() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("box_color") || "deeppink";
    console.log(initColor);
    return initColor;
  });
  function handleBoxClick() {
    // get random color -> set color
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem("box_color", newColor);
  }

  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    >
    </div>
  );
}

export default ColoBox;
