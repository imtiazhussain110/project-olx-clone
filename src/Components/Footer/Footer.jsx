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
      <div class="row footer container-fluid px-5 mx-auto gx-5">
        <div class="col-md-2 py-4">
          <PopularCategories />
        </div>
        <div class="col-md-2 py-4">
          <TrendingSearches />
        </div>
        <div class="col-md-2 py-4">
          <About />
        </div>
        <div class="col-md-2 py-4">
          <Olx />
        </div>
        <div class="col-md-4 py-4 px-5">
          <FollowUS />
        </div>
      </div>
      <CopyRight />
    </>
  );
}

export default Footer;
