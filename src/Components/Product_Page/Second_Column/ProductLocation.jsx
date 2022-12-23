import React from "react";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

function ProductLocation(props) {
  return (
    <>
      <div className="container border rounded-2 p-3">
        <h2 className="productLocationTitle">Posted in</h2>
        <p className="fs-12 grayShade">{props.location}</p>
        <div className="productLocationBox">
          <div className="location w-100 border rounded-2 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6801.2300259815265!2d74.30231937329555!3d31.534732175459236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919035e4493c7fd%3A0x4ed3aa9816c44036!2sNew%20Samanabad%20Samanabad%20Town%2C%20Lahore%2C%20Punjab%2054000%2C%20Pakistan!5e0!3m2!1sen!2s!4v1670642967375!5m2!1sen!2s"
              className="w-100 "
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
