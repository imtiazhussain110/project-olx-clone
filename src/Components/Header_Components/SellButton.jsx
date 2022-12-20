import React from "react";
import { Link } from "react-router-dom";
import plus from "../../Images/plus.svg";
import sellBorder from "../../Images/sellBtn.svg";

function SellButton() {
  return (
    <Link
      to="/sellForm"
      title="Sell"
      className=" sellButtonContainer position-relative text-dark"
    >
      <span className="sellButton position-absolute">
        <img className="img-fluid" src={plus} alt="plus" />
        Sell
      </span>
      <img src={sellBorder} alt="sell button borders" />
    </Link>
  );
}

export default SellButton;
