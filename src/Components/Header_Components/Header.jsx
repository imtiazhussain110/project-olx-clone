import React from "react";
import Bottom from "./Bottom";
import Top from "./Top";

function Header() {
  return (
    <>
      <header className="header pt-2 sticky-lg-top">
        <Top />
        <Bottom />
      </header>
      {/* Content of Bottom in medium and small screen */}

      <div className="searchContentContainer sticky-top pb-3 pt-1 d-lg-none">
        <div className="searchContent border border-2 border-dark rounded-1 bg-white py-2 row mx-auto">
          <i className="fa fa-magnifying-glass col-1 max-width max-height mt-1"></i>
          <input
            type="text"
            className="searchContentInput border-0 px-2 col-10"
            placeholder="All ads in Pakistan"
          />
        </div>
      </div>
    </>
  );
}

export default Header;
