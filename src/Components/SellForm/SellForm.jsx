import React from "react";
import "./SellForm.css";
import upload from "../../Images/upload.svg";
import sellerProfile from "../../Images/sellerProfile.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function SellForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [condition, setCondition] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [productImage, setProductImage] = useState(null);

  // Handling form inputs

  const handleFormInput = (e) => {
    const id = e.target.name;
    if (id === "formTitle") setTitle(e.target.value);
    else if (name === "formDescription") setDescription(e.target.value);
    else if (name === "formBrand") setBrand(e.target.value);
    else if (name === "formCondition") setCondition(e.target.value);
    else if (name === "formPrice") setPrice(e.target.value);
    else if (name === "formLocation") setLocation(e.target.value);
    else if (name === "formName") setName(e.target.value);
    else if (name === "formPhoneNumber") setPhoneNumber(e.target.value);
  };

  const handleInputImage = (e) => {
    setProductImage(e.target.files[0]);
  };

  // Sending form data using axios

  const productData = {
    title,
    description,
    brand,
    condition,
    price,
    location,
    name,
    phoneNumber,
    productImage,
  };

  const postData = async () => {
    // Setting input values back to empty after submitting data
    setTitle("");
    setDescription("");
    setBrand("");
    setCondition("");
    setPrice("");
    setLocation("");
    setName("");
    setPhoneNumber("");
    setProductImage(null);

    try {
      await axios({
        method: "post",
        url: "https://fakestoreapi.com/products'",
        data: productData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container formContainer my-5 pb-3 px-0 bg-primary border-0 shadow mx-sm-5">
        <h6 className=" fw-bold color text-center text-uppercase pt-4 pb-1 text-white">
          post your add
        </h6>
        <form onSubmit={(e) => e.preventDefault()} className="bg-white px-3">
          <hr />
          <h6 className="color">Please enter details of your product.</h6>
          <div className="mb-3">
            <label
              htmlFor="formTitle"
              className="form-label fw-bold fs-6 color"
            >
              Add title
            </label>
            <input
              type="text"
              className="form-control"
              name="formTitle"
              placeholder="Title of your post"
              onChange={handleFormInput}
              value={title}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="formDescription"
              className="form-label fw-bold color"
            >
              Description
            </label>
            <textarea
              className="form-control"
              name="formDescription"
              placeholder="Description"
              rows={3}
              onChange={handleFormInput}
              value={description}
            />
          </div>
          <div className="">
            <label
              htmlFor="formBrand"
              className="form-label fw-bold fs-6 mt-2 color"
            >
              Brand
            </label>
            <input
              type="text"
              className="form-control"
              name="formBrand"
              placeholder="Brand"
              onChange={handleFormInput}
              value={brand}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="formCondition"
              className="form-label fw-bold fs-6 mt-2 color"
            >
              Condition
            </label>
            <input
              type="text"
              className="form-control"
              name="formCondition"
              placeholder="Condition"
              onChange={handleFormInput}
              value={condition}
            />
          </div>
          <hr />
          <div className="mb-3 p-3">
            <label
              htmlFor="formPrice"
              className="form-label fw-bold fs-6 mt-2 color"
            >
              SET A PRICE
            </label>
            <input
              type="number"
              className="form-control"
              name="formPrice"
              placeholder="Rs"
              onChange={handleFormInput}
              value={price}
            />
          </div>
          <hr />
          <div className="container px-5">
            <div className="">
              <h6 className="fw-bold color">Upload photos of your product</h6>
              <div
                className="border border-2 rounded-3 my-1 mx-auto justify-content-center align-items-center max-width d-flex flex-column"
                style={{ height: "10rem" }}
              >
                <img src={upload} alt="" className="camera-icon" />
                <input
                  multiple
                  type="file"
                  onChange={handleInputImage}
                  className="fs-14 w-75 mt-2"
                  name="image"
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="mb-3 p-3">
            <label
              htmlFor="formLocation"
              className="form-label fw-bold fs-6 mt-2 color"
            >
              Location
            </label>
            <input
              type="text"
              className="form-control"
              name="formLocation"
              placeholder="location"
              onChange={handleFormInput}
              value={location}
            />
          </div>
          <hr />
          <div className="row">
            <div className="col-md-1  mt-4 ">
              <img
                src={sellerProfile}
                alt=""
                className="ms-4 mt-1"
                style={{ width: "4rem" }}
              />
            </div>
            <div className="col-md-11 ">
              <div className="mb-3 p-3">
                <label
                  htmlFor="formName"
                  className="form-label fw-bold fs-6 mt-2 color"
                >
                  Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="formName"
                  placeholder="Name"
                  onChange={handleFormInput}
                  value={name}
                />
              </div>
              <div className="mb-3 p-3">
                <label
                  htmlFor="formPhoneNumber"
                  className="form-label fw-bold fs-6 mt-2 color "
                >
                  Mobile Phone Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="formPhoneNumber"
                  placeholder="Phone Number"
                  onChange={handleFormInput}
                  value={phoneNumber}
                />
              </div>
            </div>
          </div>
          <hr />

          <button
            type="submit"
            onClick={postData}
            className="sellFormBtn p-2 my-2 text-white"
          >
            Post Now
          </button>
        </form>
      </div>
      <Link
        to="/"
        className="sellFormBtn py-2 text-decoration-none position-fixed border border-2 border-dark go-back-from-sellFrom py-2 px-3 fw-bold my-2 text-white"
      >
        Go Back
      </Link>
    </>
  );
}

export default SellForm;
