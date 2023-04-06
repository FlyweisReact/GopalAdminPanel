/** @format */

import React, { useState } from "react";
import HOC from "../layout/HOC";

const AdminVBanner = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="head-cont">
        <h1 className="display-6">All Restaurant Banners</h1>
      </div>

      <div className="card-cont">
        <div className="card">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/295/163/719/anime-anime-boys-picture-in-picture-kimetsu-no-yaiba-kamado-tanjir%C5%8D-hd-wallpaper-preview.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <button>Delete</button>
          </div>
        </div>
        <div className="card">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/295/163/719/anime-anime-boys-picture-in-picture-kimetsu-no-yaiba-kamado-tanjir%C5%8D-hd-wallpaper-preview.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <button>Delete</button>
          </div>
        </div>
        <div className="card">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/295/163/719/anime-anime-boys-picture-in-picture-kimetsu-no-yaiba-kamado-tanjir%C5%8D-hd-wallpaper-preview.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <button>Delete</button>
          </div>
        </div>
      </div>

      {show ? (
        <>
          <div class="form-cont">
            <div className="head-cont">
              <h1 className="display-6">Add Banner</h1>
              <i className="fa-solid fa-x" onClick={() => setShow(false)}></i>
            </div>
            <form>
              <div class="mb-3">
                <label className="form-label">Banner</label>
                <input
                  type="file"
                  className="form-control"
                  style={{ border: "none", outline: "none" }}
                />
              </div>
              <div class="mb-3">
                <label className="form-label">Title</label>
                <input type="text" className="form-control" />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default HOC(AdminVBanner);
