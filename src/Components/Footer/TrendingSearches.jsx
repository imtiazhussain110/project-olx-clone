import React from "react";

function TrendingSearches() {
  return (
    <>
      <section>
        <span className="fs-6 fw-bolder ">Trending Searches</span>
        <ul className="list-unstyled ps-0 py-3">
          <li className="py-1">
            <a className="footer-links" href="">
              <span>Bikes</span>
            </a>
          </li>
          <li className="py-1">
            <a className="footer-links" href="">
              <span>Watches</span>
            </a>
          </li>
          <li className="py-1">
            <a className="footer-links" href="">
              <span>Books</span>
            </a>
          </li>
          <li className="py-1">
            <a className="footer-links" href="">
              <span>Dogs</span>
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}

export default TrendingSearches;
