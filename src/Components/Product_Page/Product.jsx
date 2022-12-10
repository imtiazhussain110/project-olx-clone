import React from "react";
import ProductInfo from "./First_Column/ProductInfo";
import ProductSlider from "./First_Column/ProductSlider";
import ProductLocation from "./Second_Column/ProductLocation";
import ProductPrice from "./Second_Column/ProductPrice";
import SellerDescription from "./Second_Column/SellerDescription";

function Product() {
  return (
    <>
      <div className="product-wrapper my-5 container px-5">
        <div className="product row w-100">
          <div className="col-lg-7">
            <ProductSlider />
            <ProductInfo />
          </div>
          <div className="col-lg-5">
            <ProductPrice />
            <SellerDescription />
            <ProductLocation />
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
