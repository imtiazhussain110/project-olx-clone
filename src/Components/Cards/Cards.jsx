import React from "react";
import firstImg from "../../Images/first.jfif";
import Card from "./Card";

export default function Cards() {
  return (
    <div className="container-fluid py-3">
      <h4 className="">Fresh Recommendations</h4>
      <div className="cardContainer row gy-2">
        <div className=" col-md-4 col-lg-3 col-sm-6">
          <Card imgSrc={firstImg} />
        </div>
        <div className="m col-md-4 col-lg-3 col-sm-6">
          <Card imgSrc={firstImg} />
        </div>
        <div className="m col-md-4 col-lg-3 col-sm-6">
          <Card imgSrc={firstImg} />
        </div>
        <div className="m col-md-4 col-lg-3 col-sm-6">
          <Card imgSrc={firstImg} />
        </div>
        <div className="m col-md-4 col-lg-3 col-sm-6">
          <Card imgSrc={firstImg} />
        </div>
        <div className="m col-md-4 col-lg-3 col-sm-6">
          <Card imgSrc={firstImg} />
        </div>
        <div className="m col-md-4 col-lg-3 col-sm-6">
          <Card imgSrc={firstImg} />
        </div>
        <div className="m col-md-4 col-lg-3 col-sm-6">
          <Card imgSrc={firstImg} />
        </div>
        <div className="m col-md-4 col-lg-3 col-sm-6">
          <Card imgSrc={firstImg} />
        </div>
        <div className="m col-md-4 col-lg-3 col-sm-6">
          <Card imgSrc={firstImg} />
        </div>
        <div className="m col-md-4 col-lg-3 col-sm-6">
          <Card imgSrc={firstImg} />
        </div>
        <div className="m col-md-4 col-lg-3 col-sm-6">
          <Card imgSrc={firstImg} />
        </div>
        <div className="m col-md-4 col-lg-3 col-sm-6">
          <Card imgSrc={firstImg} />
        </div>
      </div>
    </div>
  );
}
