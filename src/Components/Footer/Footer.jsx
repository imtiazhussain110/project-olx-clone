import React from "react";
import CopyRight from "./CopyRight";
import PopularCategories from "./PopularCategories";
import TrendingSearches from "./TrendingSearches";
import About from "./About";
import Olx from "./Olx";
import FollowUS from "./FollowUS";

function Footer() {
  return (
    <>
      <div className="row footer container-fluid px-lg-5 px-md-5 px-sm-5 px-xs-0 mx-auto gx-5 py-4">
        <div className="col-md-2 ">
          <PopularCategories />
        </div>
        <div className="col-md-2 ">
          <TrendingSearches />
        </div>
        <div className="col-md-2 ">
          <About />
        </div>
        <div className="col-md-2 ">
          <Olx />
        </div>
        <div className="col-md-4  px-lg-5">
          <FollowUS />
        </div>
      </div>
      <CopyRight />
    </>
  );
}

export default Footer;
