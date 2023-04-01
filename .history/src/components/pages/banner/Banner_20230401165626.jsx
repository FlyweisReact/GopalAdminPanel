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
import { Table } from "react-bootstrap";

const Banner = () => {
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


  return (
    <>
      <section>
        <div>
          <span style={{ color: "black", fontSize: "20px" }}>Coupons</span>
        </div>
        <div>
          <div
            style={{
              width: "100%",
              overflowY: "auto",
              fontSize: "16px",
              marginTop: "2%",
            }}
          >
            <Table striped bordered hover >
              <thead>
                <tr>
                  <th>Coupon Name</th>
                  <th>Discount %</th>
                  <th>Created At</th>
                  <th>Updated At</th>
                </tr>
              </thead>
              <tbody>
                {coupons?.map((item) => {
                  return (
                    <tr>
                      <td>{item?.name}</td>
                      <td>{item?.discountPercent}</td>
                      <td>{item?.createdAt}</td>
                      <td>{item?.updatedAt}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
      </section>
    </>
  );
};

export default HOC(Banner);
