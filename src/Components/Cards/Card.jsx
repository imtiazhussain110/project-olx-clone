import React from "react";
import { Link } from "react-router-dom";

function Cards(props) {
  return (
    <>
      <div className="col-md-4 col-sm-6 col-lg-3">
        <Link className="text-decoration-none" to="/product">
          <div
            className="card position-relative"
            style={{ height: "auto", minHeight: "310px" }}
          >
            <img
              src={props.srcImg}
              className="card-img-top card-img"
              alt="card image"
            />
            <button className="featur-btn position-absolute border-0 rounded p-1 fw-bold">
              FEATURED
            </button>
            <div className="card-body position-relative pb-0">
              <span className="feature-line position-absolute top-0 start-0"></span>
              <i className="fa-regular fa-heart heart-icon position-absolute text-dark"></i>
              <p className="card-text text-dark">
                Toyota Belta X Business <br /> Package 1.3 2010
              </p>

              <h5 className="fw-bold price text-dark">Rs 1,900,000</h5>
              <p className="cardFooter">Mall Road, Lahore . 1 week ago</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Cards;
