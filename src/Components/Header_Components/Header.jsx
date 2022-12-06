import React from "react";
import Bottom from "./Bottom";
import Top from "./Top";

function Header() {
  return (
    <>
      <header className="pt-2 sticky-lg-top">
        <Top />
        <Bottom />
      </header>
    </>
  );
}

export default Header;
