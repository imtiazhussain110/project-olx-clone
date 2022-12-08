import React from "react";
import { useState } from "react";
import DropDown from "./DropDown";

function Categories() {
  const [isArrowUp, setIsArrowUp] = useState(false);

  const handleArrow = () => {
    if (!isArrowUp) setIsArrowUp(true);
    else setIsArrowUp(false);
  };

  const arrowStyle = {
    transform: isArrowUp ? "rotate(180deg)" : "",
    transition: "transform 200ms ease",
  };

  const categoryStyle = {
    display: isArrowUp ? "block" : "none",
  };
  return (
    <div className="container-fuid border ">
      <div className="categorylist w-75 mx-auto my-3">
        <ul className=" list-inline">
          <li
            onClick={handleArrow}
            className="category-heading list-inline-item fw-bold text-dark"
          >
            ALL CATEGORIES
            <i
              className="fa-solid fa-angle-down fs-6 arrowDown"
              style={arrowStyle}
            ></i>
          </li>
          <li
            style={categoryStyle}
            className="allCategories position-absolute left-0 bg-white shadow p-5"
          >
            <DropDown />
          </li>
          <li className="list-inline-item ms-2 main-category">Mobile Phones</li>
          <li className="list-inline-item ms-2 main-category">Cars</li>
          <li className="list-inline-item ms-2 main-category">Motorcycles</li>
          <li className="list-inline-item ms-2 main-category">Houses</li>
          <li className="list-inline-item ms-2 main-category">
            TV-Video-Audio
          </li>
          <li className="list-inline-item ms-2 main-category">Tablets</li>
          <li className="list-inline-item ms-2 main-category">Land & Plots</li>
        </ul>
      </div>
    </div>
  );
}

export default Categories;
