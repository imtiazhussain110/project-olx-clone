import React from "react";
import sellerImage from "../../../Images/sellerProfile.png";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
function SellerDescription(props) {
  return (
    <>
      <div className="container border rounded-2 my-2 py-4 px-3">
        <h2 className="sellerDescriptionTitle fs-5">Seller Description</h2>
        <div className="sellerProfile d-flex">
          <img
            src={sellerImage}
            className="sellerImage"
            alt="seller profile image"
          />
          <div className="sellerNameAndTime max-height my-auto ms-2">
            <h3 className="sellerName m-0 fw-bold">Olx User</h3>
            <p className="memberTime grayShade m-0">Member since Jul 2022</p>
          </div>
          <ArrowForwardIosOutlinedIcon
            role="button"
            className="ms-auto max-height my-auto fs-4"
          />
        </div>
        <button className="btn btn-lg w-100 chatWithSellerBtn text-white fw-bold rounded-1 my-3">
          Chat with seller
        </button>
        <div className="sellerContactDetail text-center">
          <LocalPhoneOutlinedIcon className="fs-3" />

          <span className="fs-14 text-primary ms-3 fw-bold">
            +92 123 333 5678
          </span>
        </div>
      </div>
    </>
  );
}

export default SellerDescription;
