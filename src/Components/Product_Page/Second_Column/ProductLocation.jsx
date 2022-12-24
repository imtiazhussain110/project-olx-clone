import React from "react";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

function ProductLocation() {
  return (
    <>
      <div className="container border rounded-2 p-3">
        <h2 className="productLocationTitle">Posted in</h2>
        <p className="fs-12 grayShade">Barkat Market, Lahore</p>
        <div className="productLocationBox">
          <div className="location w-100 border rounded-2 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3043.131095895652!2d74.31969246334117!3d31.500981597492654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904710773389f%3A0x4df4dc1440f48ee1!2sBarkat%20Market!5e0!3m2!1sen!2s!4v1671835882758!5m2!1sen!2s"
              className="w-100"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="d-flex justify-content-between px-3 py-2">
              <p className="text-uppercase fw-bold fs-14 my-auto">
                see location
              </p>
              <KeyboardArrowRightOutlinedIcon
                role="button"
                className="ms-auto max-height my-auto fs-4"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductLocation;
