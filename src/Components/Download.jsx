import React from "react";
import downloadImg from "../Images/download-olx.jpg";
import appStore from "../Images/app-store.svg";
import appGallery from "../Images/app-gallery.svg";
import playStore from "../Images/play-store.svg";

function Download() {
  return (
    <>
      <section className="download-section mt-3">
        <div className="container d-flex justify-content-center pe-5">
          <img src={downloadImg} alt="download section image" />
          <div className="download-section-divider my-auto mx-5"></div>
          <div className="my-auto">
            <h5 className="fw-bold">Get Your App Today</h5>
            <a href="" target="_blank">
              <img
                src={appStore}
                alt="App Store"
                className="store-icon-download"
              />
            </a>
            <a href="" target="_blank">
              <img
                src={playStore}
                alt="Google Play"
                className="store-icon-download my-md-1"
              />
            </a>
            <a href="" target="_blank">
              <img
                src={appGallery}
                alt="App Gallery"
                className="store-icon-download"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Download;
