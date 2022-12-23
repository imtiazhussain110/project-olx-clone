import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

function ProductListingCategory() {
  const { category } = useParams();
  const [categories, setCategories] = useState({
    electronics: false,
    jewelery: false,
    men: false,
    women: false,
  });

  const handleElectronics = () => {
    setCategories({
      electronics: true,
      jewelery: false,
      men: false,
      women: false,
    });
  };

  const handleJewelery = () => {
    setCategories({
      electronics: false,
      jewelery: true,
      men: false,
      women: false,
    });
  };

  const handleMens = () => {
    setCategories({
      electronics: false,
      jewelery: false,
      men: true,
      women: false,
    });
  };

  const handleWomens = () => {
    setCategories({
      electronics: false,
      jewelery: false,
      men: false,
      women: true,
    });
  };

  return (
    <div>
      <ul className="list-unstyled ms-3 my-2">
        <li className="fs-14 mb-1">
          <Link
            onClick={handleElectronics}
            to="/electronics"
            className="text-decoration-none fs-14 grayShade categoryFilter"
            style={
              categories.electronics
                ? { color: "#002F34" }
                : { color: "rgba(0, 47, 52, .64)" }
            }
          >
            Electronics
          </Link>
        </li>
        <li className="fs-14 mb-1">
          <Link
            onClick={handleJewelery}
            to="/jewelery"
            className="text-decoration-none fs-14 grayShade categoryFilter"
            style={
              categories.jewelery
                ? { color: "#002F34" }
                : { color: "rgba(0, 47, 52, .64)" }
            }
          >
            Jewelery
          </Link>
        </li>
        <li className="fs-14 mb-1">
          <Link
            onClick={handleMens}
            to="/men's clothing"
            className="text-decoration-none fs-14 grayShade categoryFilter"
            style={
              categories.men
                ? { color: "#002F34" }
                : { color: "rgba(0, 47, 52, .64)" }
            }
          >
            Men's Clothing
          </Link>
        </li>
        <li className="fs-14 mb-1">
          <Link
            onClick={handleWomens}
            to="/women's clothing"
            className="text-decoration-none fs-14 grayShade categoryFilter"
            style={
              categories.women
                ? { color: "#002F34" }
                : { color: "rgba(0, 47, 52, .64)" }
            }
          >
            Women's Clothing
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default ProductListingCategory;
