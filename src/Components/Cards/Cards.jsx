import React from "react";
import Card from "./Card";
import img from "../../Images/first.jfif";

export default function Cards() {
  return (
    <>
      <div className="container-fluid px-5 my-5 ">
        <h4 className="p-3">Fresh Recomendations</h4>
        <div className="row gy-3 ">
          <Card srcImg={img} />
          <Card srcImg={img} />
          <Card srcImg={img} />
          <Card srcImg={img} />
          <Card srcImg={img} />
          <Card srcImg={img} />
          <Card srcImg={img} />
          <Card srcImg={img} />
          <Card srcImg={img} />
        </div>

        <div className="container-fluid py-3">
          <button className="load-more-btn btn btn-md border border-2 border-dark mx-auto d-block fw-bold">
            Load More
          </button>
        </div>
      </div>
    </>
  );
}
