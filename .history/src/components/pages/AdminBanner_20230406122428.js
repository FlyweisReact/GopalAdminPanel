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
      <section>
      <div className="head-cont">
        <h1 className="display-6">Banners</h1>
        <button
          className="btn btn-outline-success"
          onClick={() => setShow(!show)}
        >
          Add Banner
        </button>
      </div>

        <div className="main-cont">
        {data?.map((i , index) => (
          <div key={index} >
            <img src={i.images?.[0]} alt='' />
           </div>
        ))}

        </div>
      </section>
    </>
  );
};

export default HOC(AdminBanner);
