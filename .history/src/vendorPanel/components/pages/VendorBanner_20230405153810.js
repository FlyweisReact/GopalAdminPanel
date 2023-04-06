/** @format */

import React from "react";
import HOC from "../layout/HOC";

const VendorBanner = () => {
  return (
    <>
      <h1 className="display-6">Banners</h1>

      <div className="card" >
        <img src="https://c4.wallpaperflare.com/wallpaper/295/163/719/anime-anime-boys-picture-in-picture-kimetsu-no-yaiba-kamado-tanjir%C5%8D-hd-wallpaper-preview.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
        </div>
      </div>
    </>
  );
};

export default HOC(VendorBanner);
