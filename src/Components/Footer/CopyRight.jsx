import React from "react";

function CopyRight() {
  return (
    <>
      <div className="copyRight text-lg-end text-md-end text-center py-2">
        <div className="text-white container-fluid">
          <span className="copyRightText ">
            Free Classifieds in Pakistan <span>•</span> © 2006-
            {new Date().getFullYear()} OLX
          </span>
        </div>
      </div>
    </>
  );
}

export default CopyRight;
