/** @format */

import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import HOC from "../../layout/HOC";
import axios from "axios";
import auth from "../../Auth";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Table } from "react-bootstrap";

const Orders = () => {
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
        </div>

        <div  style={{width : '100%' , overflow : 'auto'}}>
          <Table striped bordered hover>
            <thead>
              <tr >
                <th>
                  Plan Type
                </th>

                <th>
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {plans?.map((e, index) => {
                return (
                  <tr key={index} className="tracking-wider text-gray-900 ">
                    <td className=" py-3 w-36 md:text-base text-sm ">
                      {e.Plantype}
                    </td>
                    <td className="px-4 py-3 md:text-base text-sm">Actions</td>
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

export default HOC(Orders);
