import React from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import ViewAgendaOutlinedIcon from "@mui/icons-material/ViewAgendaOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function FilterMenu(props) {
  const [disc, setDisc] = useState(false);
  const [fullView, setFullView] = useState(false);
  const [rowView, setRowView] = useState(false);
  const [condition, setCondition] = useState({
    new: false,
    used: false,
    openBox: false,
  });
  const [price, setPrice] = useState({
    low: false,
    high: false,
    none: true,
  });

  const { category } = useParams();

  //   handle card layout
  const handleFullView = () => {
    setRowView(false);
    setDisc(false);
    setFullView(true);
  };

  const handleDisc = () => {
    setDisc(true);
    setRowView(false);
    setFullView(false);
  };

  const handleRow = () => {
    setRowView(true);
    setDisc(false);
    setFullView(false);
  };

  //   handle condition filter
  const conditionBtn = (e) => {
    const value = e.target.value;
    if (value === "new")
      setCondition({ new: true, used: false, openBox: false });
    if (value === "used")
      setCondition({ new: false, used: true, openBox: false });
    if (value === "openBox")
      setCondition({ new: false, used: false, openBox: true });
  };

  // handle low/heigh price filter
  const priceBtn = (e) => {
    const value = e.target.value;
    if (value === "low") setPrice({ low: true, high: false, none: false });
    if (value === "high") setPrice({ low: false, high: true, none: false });
    if (value === "none") setPrice({ low: false, high: false, none: true });
  };

  return (
    <div>
      {/* Sort by price */}
      <div className="sortByContainer">
        <h3 className="fs-14 fw-bold">SORT BY:</h3>
        <div className="adjustScroll">
          <button
            className="filterBtns btn btn-sm border px-3"
            value="low"
            onClick={priceBtn}
            style={price.low ? { backgroundColor: "#23E5DB" } : null}
          >
            Low Price
          </button>
          <button
            className="filterBtns btn btn-sm border px-3 mx-2"
            value="high"
            onClick={priceBtn}
            style={price.high ? { backgroundColor: "#23E5DB" } : null}
          >
            High Price
          </button>
          <button
            className="filterBtns btn btn-sm border px-3 "
            value="none"
            onClick={priceBtn}
            style={price.none ? { backgroundColor: "#23E5DB" } : null}
          >
            None
          </button>
        </div>
      </div>
      <hr className="hr w-75 mx-auto" />
      {/* Select View */}
      <div className="my-3 ">
        <h3 className=" fs-14 fw-bold">VIEW</h3>
        <div className="adjustScroll ps-2">
          <button
            className="filterBtns btn btn-sm border px-2 "
            onClick={handleRow}
            style={
              rowView
                ? { backgroundColor: "#C8F8F6", outline: "2px solid #04b2a9" }
                : null
            }
          >
            <MenuOutlinedIcon />
            <span style={rowView ? { color: "#04b2a9" } : null}> List</span>
          </button>
          <button
            className="filterBtns btn btn-sm border px-2 mx-2"
            onClick={() => {
              props.handleDiscBtn();
              handleDisc();
            }}
            style={
              disc
                ? { backgroundColor: "#C8F8F6", outline: "2px solid #04b2a9" }
                : null
            }
          >
            <GridViewOutlinedIcon />
            <span style={disc ? { color: "#04b2a9" } : null}> Mosaic</span>
          </button>
          <button
            className="filterBtns btn btn-sm border px-2"
            onClick={() => {
              props.handleFullViewBtn();
              handleFullView();
            }}
            style={
              fullView
                ? { backgroundColor: "#C8F8F6", outline: "2px solid #04b2a9" }
                : null
            }
          >
            <ViewAgendaOutlinedIcon />
            <span style={fullView ? { color: "#04b2a9" } : null}> Gallery</span>
          </button>
        </div>
      </div>

      {/* Category Select (Accordion) */}
      <div className="accordion" id="categoryAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="categoryHeading">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
            >
              <span className="allCategoriesText">All Categories</span>
              <span className="fs-14 grayShade ms-1 d-none d-md-inline">
                ({category})
              </span>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="categoryHeading"
            data-bs-parent="#categoryAccordion"
          >
            <div className="accordion-body">
              <ul className="list-unstyled ms-3 my-2">
                <li className="fs-14 mb-1">
                  <Link
                    to="/electronics"
                    className="text-decoration-none fs-14 grayShade categoryFilter"
                  >
                    Electronics
                  </Link>
                </li>
                <li className="fs-14 mb-1">
                  <Link
                    to="/jewelery"
                    className="text-decoration-none fs-14 grayShade categoryFilter"
                  >
                    Jewelery
                  </Link>
                </li>
                <li className="fs-14 mb-1">
                  <Link
                    to="/men's clothing"
                    className="text-decoration-none fs-14 grayShade categoryFilter"
                  >
                    Men's Clothing
                  </Link>
                </li>
                <li className="fs-14 mb-1">
                  <Link
                    to="/women's clothing"
                    className="text-decoration-none fs-14 grayShade categoryFilter"
                  >
                    Women's Clothing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Location */}
      <div className=" border border-1 border-dark rounded-1 bg-white p-2 my-3 w-100">
        <input
          type="text"
          className="border-0 px-2 locationSearch"
          placeholder="Lahore, Punjab, Pakistan"
        />
        <KeyboardArrowDownIcon />
      </div>
      {/* Condition */}
      <div>
        <h3 className="fs-14 fw-bold">Conditions</h3>
        <div className="adjustScroll">
          <button
            className="filterBtns btn btn-sm border px-3"
            value="new"
            onClick={conditionBtn}
            style={condition.new ? { backgroundColor: "#23E5DB" } : null}
          >
            New
          </button>
          <button
            className="filterBtns btn btn-sm border px-3 mx-2"
            value="used"
            onClick={conditionBtn}
            style={condition.used ? { backgroundColor: "#23E5DB" } : null}
          >
            Used
          </button>
          <button
            className="filterBtns btn btn-sm border px-3"
            value="openBox"
            onClick={conditionBtn}
            style={condition.openBox ? { backgroundColor: "#23E5DB" } : null}
          >
            Open Box
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterMenu;
