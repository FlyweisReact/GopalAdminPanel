/** @format */

import React from "react";
import { useState, useEffect } from "react";
import HOC from "../../layout/HOC";
import axios from "axios";
import auth from "../../Auth";
import { toast } from "react-toastify";
import { Table } from "react-bootstrap";

const Payment2 = () => {
  const [payments, setPayments] = useState([]);

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
          <p style={{ color: "black", fontSize: "20px" }}>All Transaction</p>
        </div>

        <div>
          <div
            style={{
              overflow: "auto",
              width: "100%",
              fontSize: "16px",
              marginTop: "20px",
            }}
          >
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Receipt</th>
                  <th> Status</th>
                  <th>User</th>
                  <th>Restaurant Name</th>
                </tr>
              </thead>
              <tbody>
                {payments?.map((e, i) => {
                  return (
                    <tr key={i}>
                      <td>{e.amount}</td>
                      <td>{e.status === true ? 'Done' : 'Failed'}</td>
                      <td>{e.receipt}</td>
                      <td>{e.amount_paid}</td>
                      <td>{e.date?.slice(0, 10)}</td>
                      <td>{e.orderStatus}</td>
                      <td>{e.userObject?.name}</td>
                      <td>{e.restaurantObject?.name}</td>
                      <td>{e.invoice}</td>
                      <td>{e.orderId}</td>
                       <td>{e.paymentMethod}</td>
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
export default HOC(Payment2);
