/** @format */

import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import HOC from "../../layout/HOC";
import axios from "axios";
import auth from "../../Auth";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const [popup, setPopup] = useState(false);
  const [edit, setEdit] = useState([]);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [plans, setPlans] = useState([]);

  const fetchOrders = async () => {
    const url = `https://b7w3czz0m2.execute-api.ap-south-1.amazonaws.com/development/api/admin/getAllPlanTypeByAdmin`;
    try {
      const res = await axios.get(url, auth);
      setPlans(res?.data);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            Plan Type
          </span>
          <button
            onClick={() => {
              setEdit("");
              setPopup(!popup);
            }}
            className="md:py-2 px-3 md:px-4 py-1 rounded-full bg-[rgb(240,72,88)] text-white tracking-wider"
          >
            Add Plan
          </button>
        </div>
    

        <div className=" wcomp overflow-y-auto">
          <table className="table-auto  w-full text-left whitespace-no-wrap">
            <thead>
              <tr className=" border-b bg-slate-200 shadow-xl text-gray-900">
                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm">
                  Plan Type
                </th>

                <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {plans?.map((e, i) => {
                return (
                  <tr key={i} className="tracking-wider text-gray-900 ">
                    <td className=" py-3 w-36 md:text-base text-sm ">
                      {e.Plantype}
                    </td>
                    <td className="px-4 py-3 md:text-base text-sm">Actions</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default HOC(Orders);
