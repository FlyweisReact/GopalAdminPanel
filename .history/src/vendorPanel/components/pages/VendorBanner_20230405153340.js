/** @format */

import React from "react";
import HOC from "../layout/HOC";

const VendorBanner = () => {
  return (
    <>
      <h1 class="display-6">Banners</h1>

      <div class="card" style={{ width: "18rem" }}>
        <img src="https://c4.wallpaperflare.com/wallpaper/295/163/719/anime-anime-boys-picture-in-picture-kimetsu-no-yaiba-kamado-tanjir%C5%8D-hd-wallpaper-preview.jpg" class="card-img-top" alt="..." />
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
