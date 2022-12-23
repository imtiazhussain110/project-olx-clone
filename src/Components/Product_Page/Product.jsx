import React from "react";
import { useState } from "react";
import ProductInfo from "./First_Column/ProductInfo";
import ProductSlider from "./First_Column/ProductSlider";
import ProductLocation from "./Second_Column/ProductLocation";
import ProductPrice from "./Second_Column/ProductPrice";
import SellerDescription from "./Second_Column/SellerDescription";
import axios from "axios";
import { useParams } from "react-router-dom";
import loadingImg2 from "../../Images/loading2.gif";

function Product() {
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
    const data = res.data;
    setApiData(data);
    setIsLoading(false);
  });

  return (
    <>
      {isLoading ? (
        <div className=" text-center w-100">
          <img className=" w-25" src={loadingImg2} alt="" />
        </div>
      ) : (
        <div className="product-wrapper my-5 container px-5">
          <div className="product row w-100">
            <div className="col-lg-7">
              <ProductSlider imgPath={apiData.image} />
              <ProductInfo
                brand={apiData.brand}
                price={apiData.price}
                condition={apiData.condition}
                description={apiData.description}
              />
            </div>
            <div className="col-lg-5">
              <ProductPrice
                price={apiData.price}
                title={apiData.title}
                location={apiData.location}
              />
              <SellerDescription
                name={apiData.name}
                phoneNumber={apiData.phoneNumber}
              />
              <ProductLocation location={apiData.location} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Product;
