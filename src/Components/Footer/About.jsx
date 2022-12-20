import React from "react";

function About() {
  return (
    <>
      <section>
        <span className="fs-6 fw-bolder">About Us</span>
        <ul className="list-unstyled ps-0 py-3">
          <li className="">
            <a className="footer-links" href="">
              <span>About EMPG</span>
            </a>
          </li>
          <li className="">
            <a className="footer-links" href="">
              <span>OLX Blog</span>
            </a>
          </li>
          <li className="">
            <a className="footer-links" href="">
              <span>Contact Us</span>
            </a>
          </li>
          <li className="">
            <a className="footer-links" href="">
              <span>OLX for Businesses</span>
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}

export default About;
