import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import axios from "axios";
import FilterMenu from "../FilterMenu/FilterMenu";

function Categories() {
  const [apiData, setApiData] = useState([]);
  const [isArrowUp, setIsArrowUp] = useState(false);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/categories`).then((result) => {
      const data = result.data;
      setApiData(data);
    });
  }, []);

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
      <div className="categorylist w-75 mx-auto my-3 d-flex justify-content-between position-relative">
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
            className="allCategories position-absolute left-0 bg-white shadow p-2 mt-1"
          >
            <DropDown apiData={apiData} />
          </li>

          {apiData.map((item, index) => {
            const str = item;
            const arr = str.split(" ");
            for (let i = 0; i < arr.length; i++) {
              arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
            }
            const str2 = arr.join(" ");
            return (
              <li
                key={index}
                className="list-inline-item ms-2 d-none d-lg-inline"
              >
                <Link
                  to={`/${item}`}
                  className="text-decoration-none fs-14 grayShade main-category"
                >
                  {str2}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Categories;
