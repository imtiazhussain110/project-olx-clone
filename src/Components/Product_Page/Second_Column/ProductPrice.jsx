import React from "react";

function ProductPrice() {
  return (
    <>
      <div className="container border pt-4 px-3 rounded-2">
        <div className="priceRow d-flex justify-content-between">
          <h2 className="priceRowPrice fw-bold">Rs. 57,000</h2>
          <div className="priceRowIcons">
            <i className="fa fa-share-nodes fs-4 pt-2"></i>
            <i className="fa-regular fa-heart fs-4 pt-2 ms-3"></i>
          </div>
        </div>
        <p className="grayShade">iphone xs non pta 64 gb</p>
        <div className="productPriceFooter d-flex justify-content-between">
          <p className="fs-12 grayShade">New Samanabad, Lahore</p>
          <p className="fs-12 grayShade">1 day ago</p>
        </div>
      </div>
    </>
  );
}

export default ProductPrice;
