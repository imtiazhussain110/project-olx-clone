import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function Cards(props) {
  const initialPosts = 8;

  const [apiData, setApiData] = useState([]);
  const [morePosts, setMorePosts] = useState(initialPosts);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`).then((result) => {
      const data = result.data;
      setApiData(data);
    });
  }, []);

  // load more
  const loadMore = () => {
    setMorePosts(morePosts + initialPosts);
  };

  // to pass data from Cards.jsx to it's parent component App.jsx
  const onCardClick = (index) => {
    props.onClick(index);
  };

  return (
    <>
      <div className="container-fluid px-5 my-5 ">
        <h4 className="p-3">Fresh Recomendations</h4>
        <div className="row gy-3 ">
          {apiData.slice(0, morePosts).map((item, index) => {
            return (
              <div className="col-md-4 col-sm-6 col-lg-3">
                <Link
                  onClick={() => {
                    onCardClick(index + 1);
                  }}
                  className="text-decoration-none"
                  to="/product"
                >
                  <div
                    key={index}
                    className="card position-relative"
                    style={{ height: "auto", minHeight: "310px" }}
                  >
                    <img
                      src={item.image}
                      className="card-img-top card-img"
                      alt="product"
                    />
                    <button className="featur-btn position-absolute border-0 rounded p-1 fw-bold">
                      FEATURED
                    </button>
                    <div className="card-body position-relative pb-0">
                      <span className="feature-line position-absolute top-0 start-0"></span>
                      <FavoriteBorderIcon className="position-absolute text-dark heart-icon" />

                      <p className="card-text text-dark w-lg-75">
                        {item.title.slice(0, 40)}
                      </p>

                      <h5 className="fw-bold price text-dark">
                        Rs {item.price}
                      </h5>
                      <p className="cardFooter position-absolute bottom-0">
                        Lahore • 1 week ago
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="container-fluid py-3">
          {morePosts < apiData.length ? (
            <button
              onClick={loadMore}
              className="load-more-btn btn btn-md border border-2 border-dark mx-auto d-block fw-bold"
            >
              Load More
            </button>
          ) : (
            <p className="text-center mt-3 grayShade">
              You have reached the end of the page!
            </p>
          )}
        </div>
      </div>
    </>
  );
}
