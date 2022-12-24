import React from "react";
import { Link } from "react-router-dom";
import logo2 from "../../Images/logo2.svg";
import SellButton from "./SellButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

function Bottom() {
  return (
    <>
      <div className="container-fluid py-3 row gap-2 mx-auto w-75 bottom">
        {/* Content of Bottom in large screen */}
        <Link to="/" className="col-lg-1 d-none d-lg-block">
          <img className="mt-1" src={logo2} alt="olx-logo" />
        </Link>
        {/* Country Search */}
        <div className="countrySearch border border-2 border-dark rounded-1 bg-white p-2 col-lg-3 d-none d-lg-block">
          <SearchOutlinedIcon />
          <input
            type="text"
            className="border-0 px-2 countrySearchInput"
            placeholder="Pakistan"
          />
          <KeyboardArrowDownIcon />
        </div>
        {/* Products Search */}
        <div className="productSearch border border-2 border-dark rounded-1 bg-white col-lg-5 d-none d-lg-flex px-0">
          <input
            type="text"
            className="border-0 flex-grow-1 p-2 productSearchInput"
            placeholder="Cars, Mobiles Phones, and more..."
          />
          <button className="productSearchButton px-1">
            <SearchOutlinedIcon className="fs-1 text-white" />
          </button>
        </div>

        {/* Login  */}

        <button className=" border-0 bg-transparent col-lg-1 d-none d-lg-block p-0">
          <span className="loginButton fs-5 fw-bold text-decoration-none position-relative">
            Login
          </span>
        </button>

        {/* Sell */}
        <div className="col-lg-1 p-0">
          <SellButton />
        </div>
      </div>
    </>
  );
}

export default Bottom;
