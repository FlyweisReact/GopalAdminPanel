/** @format */

import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { toast } from "react-toastify";
import HOC from "../../layout/HOC";
import axios from "axios";
import { Table } from "react-bootstrap";

const CouponsDiscount = () => {
  const [popup, setPopup] = useState(false);
  const token = localStorage.getItem("Vendortoken");
  const [cancelPol, setCancelPol] = useState([]);

  const fetchCoupons = async () => {
    const url = `https://b7w3czz0m2.execute-api.ap-south-1.amazonaws.com/development/api/getAllCancellationPolicy`;

    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCancelPol(res?.data);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    fetchCoupons();
  }, []);

  const [msg, setMsg] = useState("");

  const addCoupon = async (e) => {
    e.preventDefault();
    const url =
      "https://b7w3czz0m2.execute-api.ap-south-1.amazonaws.com/development/api/createCancellationPolicy";
    const token = localStorage.getItem("direct");
    try {
      const res = await axios.post(
        url,
        { msg },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res?.data?._id);
      toast.success("CancellationPolicy added SuccessFully");
      fetchCoupons();
    } catch (err) {
      console.log("err", err);
    }
  };

  const deleteCoupon = async (id) => {
    const url = `https://b7w3czz0m2.execute-api.ap-south-1.amazonaws.com/development/api/deleteCancellationPolicyById/${id}`;
    console.log(id);
    try {
      const res = await axios.delete(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Deleted Successfully");
      fetchCoupons();
    } catch (err) {
      console.log("err", err);
      toast.error("Please try again");
    }
  };

  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span  style={{fontSize : '20px' , color : 'black'}}>
            Cancellation Policy
          </span>
          <button
            onClick={() => {
              setPopup(!popup);
            }}
          
            style={{fontSize : '20px' , color : 'black'}}
          >
            Create Cancellation Policy
          </button>
        </div>
        {/* Add Form */}
        <section
          className={
            popup
              ? "fixed top-0 left-0 wcomp bg-[rgb(0,0,0,0.5)] transition-all duration-150 w-full flex justify-center items-center overflow-y-auto  h-screen "
              : "hidden"
          }
        >
          <div className="bg-slate-100 sm:h-[90vh] h-[80vh] overflow-y-auto  lg:w-3/6  md:w-4/6 w-5/6 mx-auto  rounded-lg">
            <div className="flex sticky top-0 py-3 px-5 bg-slate-100 justify-between">
              <span className=" font-semibold text-[rgb(241,146,46)] ">
                Create Cancellation Policy
              </span>
              <div className="text-[rgb(241,146,46)] py-0.5 text-2xl cursor-pointer font-medium tracking-wider">
                <IoMdClose
                  onClick={() => {
                    setPopup(false);
                  }}
                />{" "}
              </div>
            </div>

            <form
              className="grid  grid-cols-1 gap-x-7 gap-y-4 p-4"
              onSubmit={addCoupon}
            >
              <div className="inline-flex  w-full flex-col">
                <label
                  htmlFor="name"
                  className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm"
                >
                  Cancellation Policy StateMent
                </label>
                <input
                  required
                  type="text"
                  name="couponCode"
                  onChange={(e) => setMsg(e.target.value)}
                  className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(241,146,46)]"
                />
              </div>
              <button
                type="submit"
                value="Add"
                className="bg-[rgb(241,146,46)] cursor-pointer w-40 hover:bg-[rgb(241,146,46)] py-1 rounded-full"
              >
                Add
              </button>
            </form>
          </div>
        </section>
        <div
          style={{
            width: "100%",
            overflowY: "auto",
            fontSize: "16px",
            marginTop: "2%",
          }}
        >
          <Table striped bordered hover>
            <thead>
              <tr>
                <th >
                  Cancellation Policy
                </th>
                <th>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {cancelPol?.requiredResults?.map((e, i) => {
                return (
                  <tr key={i} >
                    <td>{e.msg}</td>
                    <td>
                  <i class="fa-solid fa-trash" style={{ color: "red"  , cursor : 'pointer'}} onClick={() => deleteCoupon(e._id)} ></i>
                </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};

export default HOC(CouponsDiscount);
