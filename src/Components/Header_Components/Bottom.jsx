import React from "react";
import logo2 from "../../Images/logo2.svg";
import SellButton from "./SellButton";

function Bottom() {
  return (
    <>
      <div className="container-fluid py-3 row gap-2 mx-auto w-75 bottom">
        {/* Conent of Bottom in larger screen */}

        <div className="searchContent border border-2 border-dark rounded-1 bg-white p-2 d-lg-none row sticky-top">
          <i class="fa fa-magnifying-glass col-1 max-width max-height mt-1"></i>
          <input
            type="text"
            className="border-0 px-2 col-10"
            placeholder="All ads in Pakistan"
          />
        </div>

        {/* Conent of Bottom in larger screen */}
        <img
          className="col-lg-1 d-none d-lg-block"
          src={logo2}
          alt="olx-logo"
        />
        {/* Country Search */}
        <div className="countrySearch border border-2 border-dark rounded-1 bg-white p-2 col-lg-3 d-none d-lg-block">
          <i class="fa fa-magnifying-glass"></i>
          <input
            type="text"
            className="border-0 px-2 countrySearchInput"
            placeholder="Pakistan"
          />
          <i class="fa-solid fa-angle-down arrowDown"></i>
        </div>
        {/* Products Search */}
        <div className="productSearch border border-2 border-dark rounded-1 bg-white col-lg-5 d-none d-lg-flex px-0">
          <input
            type="text"
            className="border-0 flex-grow-1 p-2 productSearchInput"
            placeholder="Cars, Mobiles Phones, and more..."
          />
          <button className="productSearchButton px-3 pt-2">
            <i class="fa-sharp fa-solid fa-magnifying-glass fs-5 text-white"></i>
          </button>
        </div>
        {/* Login  */}
        <button className=" border-0 bg-transparent col-lg-1 d-none d-lg-block">
          <a
            href="#"
            className="loginButton fw-bold text-decoration-none position-relative"
          >
            Login
          </a>
        </button>

        {/* Sell */}
        <div className="col-lg-1">
          <SellButton />
        </div>
      </div>
    </>
  );
}

export default Bottom;
