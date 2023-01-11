import React from "react";
import { useState, useEffect } from "react";
import ProductInfo from "./First_Column/ProductInfo";
import ProductSlider from "./First_Column/ProductSlider";
import ProductLocation from "./Second_Column/ProductLocation";
import ProductPrice from "./Second_Column/ProductPrice";
import SellerDescription from "./Second_Column/SellerDescription";
import axios from "axios";
import { useParams } from "react-router-dom";
import loadingImg2 from "../../Images/loading2.gif";
import { useDispatch, useSelector } from "react-redux";
import { setSingleProduct } from "../../Redux/Actions/actions";

function Product() {
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const product = useSelector((state) => state.product.product);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      const data = res.data;
      dispatch(setSingleProduct(data));
      setIsLoading(false);
    });
  }, [id]);
  console.log(product);
  return (
    <>
      {isLoading ? (
        <div className=" text-center w-100">
          <img className="loading" src={loadingImg2} alt="" />
        </div>
      ) : (
        <div className="product-wrapper my-5 container px-5">
          <div className="product row w-100">
            <div className="col-lg-7">
              <ProductSlider imgPath={product.image} />
              <ProductInfo
                rating={product.rating.rate}
                price={product.price}
                condition={product.condition}
                description={product.description}
              />
            </div>
            <div className="col-lg-5">
              <ProductPrice
                price={product.price}
                title={product.title}
                location={product.location}
              />
              <SellerDescription
                name={product.name}
                phoneNumber={product.phoneNumber}
              />
              <ProductLocation location={product.location} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Product;
