/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import HOC from "../layout/HOC";

const AdminBanner = () => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("direct")
  const [show, setShow] = useState(false);;

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://b7w3czz0m2.execute-api.ap-south-1.amazonaws.com/development/api/adminbanner",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData( data)
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData()
  },[])

  return (
    <>
      <div className="head-cont">
        <h1 className="display-6" style={{color : 'black'}}>Banners</h1>
        <button
          className="btn btn-outline-success"
          onClick={() => setShow(!show)}
        >
          Add Banner
        </button>
      </div>

      <div className="card-cont">
      {data?.map((i , index) => (
        <div className="card" key={index}>
          <img
             src={i.images?.[0]} 
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <button>Delete</button>
          </div>
        </div>
  
        ))}
       
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
                <label  className="form-label">
                  Banner
                </label>
                <input
                  type="file"
                  className="form-control"
                  style={{border : 'none' , outline  : 'none'}}
                />
              </div>
              <div class="mb-3">
                <label  className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                />
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

export default HOC(AdminBanner);
