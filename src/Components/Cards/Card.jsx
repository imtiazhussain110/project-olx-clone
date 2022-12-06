import React from "react";

function Card(props) {
  return (
    <>
      <div className="card">
        <img
          className="cardImg card-img-top img-fluid bg-dark"
          src={props.imgSrc}
          alt="poster image"
        />
        <div
          title="LG V60 | V50 | V30 | V7 mobile phone"
          className="card-body pb-0"
        >
          <div className="card-title d-flex">
            <h2 className="fs-5">LG V60 | V50 | V30 | V7 mobile phone</h2>
            <i className="fa-regular fa-heart fs-4"></i>
          </div>
          <div className="card-text">
            <p className="fw-bold fs-4">Rs. 35,0000</p>
          </div>
          <p className="card-bottom-text text-secondary ">
            Civil Defence, Lahore <span>•</span> 2 weeks ago
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
