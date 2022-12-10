import React from "react";

function ProductInfo() {
  return (
    <>
      <div className="container border rounded-2 p-3 my-2">
        <h2 className="productInfoHeading fw-bold">Details</h2>
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-between">
            <p className="fs-14 grayShade">Brand</p>
            <p className="fs-14">Apple iPhone</p>
          </div>
          <div className="col-lg-6 d-flex justify-content-between">
            <p className="fs-14 grayShade">Price</p>
            <p className="fs-14">Rs. 57,000</p>
          </div>
          <div className="col-lg-6 d-flex justify-content-between">
            <p className="fs-14 grayShade">Condition</p>
            <p className="fs-14">Used</p>
          </div>
        </div>
        <hr />
        <h2 className="productInfoHeading fw-bold">Description</h2>

        <div className="">
          <p className="fs-14 m-0">condition 10/10</p>
          <p className="fs-14 m-0">battery health 82 </p>
          <p className="fs-14 m-0">LLA model </p>
          <p className="fs-14 m-0">e sim non active </p>
          <p className="fs-14 m-0">water pack</p>
          <p className="fs-14 m-0">urgent sale serious buyer contact</p>
        </div>
      </div>
    </>
  );
}

export default ProductInfo;
