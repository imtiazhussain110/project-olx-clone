import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
    <div className="container-fuid border-bottom mb-5 ">
      <div className="categorylist w-75 mx-auto my-3">
        <ul className=" list-inline">
          <li
            onClick={handleArrow}
            className="category-heading list-inline-item fw-bold text-dark fs-14 grayShade "
          >
            ALL CATEGORIES
            <KeyboardArrowDownIcon style={arrowStyle} />
          </li>
          <li
            style={categoryStyle}
            className="allCategories position-absolute left-0 bg-white shadow p-5"
          >
            <DropDown />
          </li>
          <li className="list-inline-item ms-2 ">
            <Link
              to="/productlistings"
              className="text-decoration-none fs-14 grayShade main-category"
            >
              Electronics
            </Link>
          </li>
          <li className="list-inline-item ms-2 ">
            <Link
              to="/productlistings"
              className="text-decoration-none fs-14 grayShade main-category"
            >
              Jewelery
            </Link>
          </li>
          <li className="list-inline-item ms-2 ">
            <Link
              to="/productlistings"
              className="text-decoration-none fs-14 grayShade main-category"
            >
              Men's Clothing
            </Link>
          </li>

          <li className="list-inline-item ms-2">
            <Link
              to="/productlistings"
              className="text-decoration-none fs-14 grayShade main-category"
            >
              Women's Clothing
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Categories;
