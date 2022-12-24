import React from "react";
import facebook from "../../Images/facebook-icon.svg";
import twitter from "../../Images/twitter-icon.svg";
import insta from "../../Images/insta-icon.svg";
import youtube from "../../Images/youtube-icon.svg";
import appStore from "../../Images/app-store.svg";
import appGallery from "../../Images/app-gallery.svg";
import playStore from "../../Images/play-store.svg";

function FollowUS() {
  return (
    <>
      <section>
        <span className=" fs-6 fw-bold">Follow us</span>
        <div className="py-3">
          <a href="" target="_blank">
            <img src={facebook} alt="Facebook Logo" className="social-icons" />
          </a>
          <a href="" target="_blank">
            <img src={twitter} alt="Twitter Logo" className="social-icons " />
          </a>
          <a href="" target="_blank">
            <img src={youtube} alt="Youtube Logo" className="social-icons" />
          </a>
          <a href="" target="_blank">
            <img src={insta} alt="Instagram Logo" className="social-icons" />
          </a>
        </div>
        <div>
          <a href="" target="_blank">
            <img src={appStore} alt="App Store" className="store-icons" />
          </a>
          <a href="" target="_blank">
            <img
              src={playStore}
              alt="Google Play"
              className="store-icons my-xs-2 my-sm-2 my-md-2 "
            />
          </a>
          <a href="" target="_blank">
            <img
              src={appGallery}
              alt="App Gallery"
              className="store-icons mt-xs-2 my-sm-2 my-md-2"
            />
          </a>
        </div>
      </section>
    </>
  );
}

export default FollowUS;
