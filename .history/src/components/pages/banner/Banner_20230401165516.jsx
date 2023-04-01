/** @format */

import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { IoMdClose } from "react-icons/io";
import { AiOutlineEdit, AiFillCamera } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import { toast } from "react-toastify";

import HOC from "../../layout/HOC";
import axios from "axios";
import BaseUrl from "../../BaseUrl";
import auth from "../../Auth";
import { Oval } from "react-loader-spinner";

const Banner = () => {
  const [prop, setProp] = useState([]);
  const [popup, setPopup] = useState(false);
  let token = localStorage.getItem("Shaft");
  const [edit, setEdit] = useState("");
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(false);
  const [coupons, setCoupons] = useState([]);

  const fetchCoupons = async () => {
    const url =
      "https://b7w3czz0m2.execute-api.ap-south-1.amazonaws.com/development/api/getAllCouponsOfRestaurantByAdmin";
    try {
      const res = await axios.get(url, auth);
      console.log(res?.data?.requiredResults);
      setCoupons(res?.data?.requiredResults);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    fetchCoupons();
  }, []);

  /*const editBanner = async (e) => {
    e.preventDefault();
    const url = BaseUrl() + "/api/banner";
    const fd = new FormData();
    fd.append("banner", image);
    try {
      const res = await axios.patch(url, fd, auth);
      fetchBanners();
    } catch (err) {
      console.log("err", err);
    }
  };*/

  return (
    <>
      <section>
        <div >
          <span >
            Coupons
          </span>
        </div>
        <div>
          <div className=" wcomp overflow-y-auto">
            <table>
              <thead>
                <tr>
                  <th >
                    Coupon Name
                  </th>
                  <th >
                    Discount %
                  </th>
                  <th >
                    Created At
                  </th>
                  <th >
                    Updated At
                  </th>
                </tr>
              </thead>
              <tbody>
                {coupons?.map((item) => {
                  return (
                    <tr className="tracking-wider text-gray-900">
                      <td>
                        {item?.name}
                      </td>
                      <td>
                        {item?.discountPercent}
                      </td>
                      <td>
                        {item?.createdAt}
                      </td>
                      <td>
                        {item?.updatedAt}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default HOC(Banner);
