import React from "react";
import { useEffect, useState } from "react";
import ProductInfo from "./First_Column/ProductInfo";
import ProductSlider from "./First_Column/ProductSlider";
import ProductLocation from "./Second_Column/ProductLocation";
import ProductPrice from "./Second_Column/ProductPrice";
import SellerDescription from "./Second_Column/SellerDescription";
import axios from "axios";

function Product({ cardIndex }) {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${cardIndex}`).then((res) => {
      const data = res.data;
      setApiData(data);
    });
  }, []);

  return (
    <>
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
    </>
  );
}

export default Product;
