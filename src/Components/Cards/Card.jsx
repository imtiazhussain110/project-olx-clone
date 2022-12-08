import React from "react";

function Cards(props) {
  return (
    <>
      <div className="col-md-4 col-sm-6 col-lg-3">
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
            <i className="fa-regular fa-heart heart-icon position-absolute"></i>
            <p className="card-text">
              Toyota Belta X Business
              <p> Package 1.3 2010</p>
            </p>

            <h5 className="fw-bold price">Rs 1,900,000</h5>
            <p className="cardFooter">Mall Road, Lahore . 1 week ago</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
