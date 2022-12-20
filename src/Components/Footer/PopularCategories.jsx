import React from "react";

function PopularCategories() {
  return (
    <>
      <section>
        <span className="fs-6 fw-bolder">Popular Categories</span>
        <ul className="list-unstyled ps-0 py-3">
          <li className="">
            <a className="footer-links" href="">
              <span>Cars</span>
            </a>
          </li>
          <li className="">
            <a className="footer-links" href="">
              <span>Flats for rent</span>
            </a>
          </li>
          <li className="">
            <a className="footer-links" href="">
              <span>Mobile Phones</span>
            </a>
          </li>
          <li className="">
            <a className="footer-links" href="">
              <span>Jobs</span>
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}

export default PopularCategories;
