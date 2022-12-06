import React from "react";
import { useState } from "react";

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
            className="list-inline-item fw-bold text-dark"
          >
            ALL CATEGORIES
            <i
              className="fa-solid fa-angle-down fs-6 arrowDown"
              style={arrowStyle}
            ></i>
          </li>
          <li
            style={categoryStyle}
            className="allCategories position-absolute left-0 bg-white shadow p-3"
          >
            <h1>Hello WOrld Hello WOrld Hello WOrld Hello WOrld</h1>
            <h1>Hello WOrld Hello WOrld Hello WOrld Hello WOrld</h1>
            <h1>Hello WOrld Hello WOrld Hello WOrld Hello WOrld</h1>
            <h1>Hello WOrld Hello WOrld Hello WOrld Hello WOrld</h1>
            <h1>Hello WOrld Hello WOrld Hello WOrld Hello WOrld</h1>
            <h1>Hello WOrld Hello WOrld Hello WOrld Hello WOrld</h1>
            <h1>Hello WOrld Hello WOrld Hello WOrld Hello WOrld</h1>
          </li>
          <li className="list-inline-item ms-2">Mobile Phones</li>
          <li className="list-inline-item ms-2">Cars</li>
          <li className="list-inline-item ms-2">Motorcycles</li>
          <li className="list-inline-item ms-2">Houses</li>
          <li className="list-inline-item ms-2">TV-Video_Audio</li>
          <li className="list-inline-item ms-2">Tablets</li>
          <li className="list-inline-item ms-2">Land & Plots</li>
        </ul>
      </div>
    </div>
  );
}

export default Categories;
