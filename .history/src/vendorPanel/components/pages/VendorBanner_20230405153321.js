/** @format */

import React from "react";
import HOC from "../layout/HOC";

const VendorBanner = () => {
  return (
    <>
      <h1 class="display-6">Banners</h1>

      <div class="card" style={{ width: "18rem" }}>
        <img src="https://e0.pxfuel.com/wallpapers/614/461/desktop-wallpaper-dark-demon-anime-aesthetic-dark-anime-mobile.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </>
  );
};

export default HOC(VendorBanner);
