import React from "react";
import plus from "../../Images/plus.svg";
import sellBorder from "../../Images/sellBtn.svg";

function SellButton() {
  return (
    <div title="Sell" className=" sellButtonContainer position-relative">
      <span className="sellButton position-absolute">
        <img className="img-fluid" src={plus} alt="plus" />
        Sell
      </span>
      <img src={sellBorder} alt="sell button borders" />
    </div>
  );
}

export default SellButton;
