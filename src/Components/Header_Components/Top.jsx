import React from "react";
import { ReactComponent as Logo1 } from "../../Images/logo1.svg";
import { ReactComponent as Car } from "../../Images/car.svg";
import { ReactComponent as Buildings } from "../../Images/buildings.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

function Top() {
  const [isHoverCar, setIsHoverCar] = useState(false);

  const [isHoverProperty, setIsHoverProperty] = useState(false);

  const handleMouseEnterCar = (e) => {
    setIsHoverCar(true);
  };

  const handleMouseEnterProperty = (e) => {
    setIsHoverProperty(true);
  };

  const handleMouseLeave = () => {
    setIsHoverCar(false);
    setIsHoverProperty(false);
  };

  return (
    <>
      <div className="top container-fluid row w-75 mx-lg-auto">
        <div className="col-lg-1 col-2 col-sm-4 ">
          <Link to="/" className="max-width align-middle">
            <Logo1 fill="#3A77FF" />
          </Link>
        </div>
        <div className="col-lg-2 col-5 col-sm-4 text-center">
          <a
            href="#"
            className="motor text-decoration-none max-width"
            onMouseEnter={handleMouseEnterCar}
            onMouseLeave={handleMouseLeave}
          >
            <Car fill={isHoverCar ? "#3A77FF" : ""} />
          </a>
        </div>
        <div className="col-lg-2 col-4 col-sm-4 text-end text-lg-start">
          <a
            href="#"
            className="property text-decoration-none max-width"
            onMouseEnter={handleMouseEnterProperty}
            onMouseLeave={handleMouseLeave}
          >
            <Buildings fill={isHoverProperty ? "#3A77FF" : ""} />
          </a>
        </div>
      </div>
    </>
  );
}

export default Top;
