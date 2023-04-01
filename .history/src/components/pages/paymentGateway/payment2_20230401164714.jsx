/** @format */

import React from "react";
import BaseUrl from "../../BaseUrl";
import { useState, useEffect } from "react";
import HOC from "../../layout/HOC";
import { Oval } from "react-loader-spinner";
import axios from "axios";
import { useParams } from "react-router-dom";
import auth from "../../Auth";
import { GrFormClose } from "react-icons/gr";
import { toast } from "react-toastify";

const Payment2 = () => {
  const [loading, setLoading] = useState(false);
  const [payments, setPayments] = useState([]);
  const params = useParams();
  const [popup, setPopup] = useState(false);
  const [edit, setEdit] = useState(false);

  const url =
    "https://b7w3czz0m2.execute-api.ap-south-1.amazonaws.com/development/api/users/GetAllPaymentsByAdmin";

  const fetchDishes = async () => {
    try {
      const res = await axios.get(url, auth);
      setPayments(res?.data?.details);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    fetchDishes();
  }, []);

  const deleteDish = async (id) => {
   
    try {

      toast.success("Deleted Successfully");
      fetchDishes();
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <>
      <section>
        
        <div>
          <p style={{color : 'black' , fontSize : '20px'}}>All Transaction</p>
        </div>

        <div>
          <div >
            <table >
              <thead>
                <tr >
                  <th>
                    Amount
                  </th>
                  <th>
                    Amount Paid
                  </th>
                  <th>
                    Date
                  </th>
                  <th>
                    Order Status
                  </th>
                  <th>
                    User
                  </th>
                  <th>
                    Restaurant Name
                  </th>
                </tr>
              </thead>
              <tbody>
                {payments?.map((e, i) => {
                  return (
                    <tr key={i}>
                      <td >
                        {e?.amount}
                      </td>
                      <td >
                        {e?.amount_paid}
                      </td>
                      <td >
                        {e?.date}
                      </td>
                      <td >
                        {e?.orderStatus}
                      </td>
                      <td >
                        {e?.userObject?.name}
                      </td>
                      <td >
                        {e?.restaurantObject?.name}
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
export default HOC(Payment2);
