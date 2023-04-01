/** @format */

import React from "react";
import { useState, useEffect } from "react";
import HOC from "../layout/HOC";
import axios from "axios";
import auth from "../Auth";
import { Table } from "react-bootstrap";

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  const url =
    "https://b7w3czz0m2.execute-api.ap-south-1.amazonaws.com/development/api/getallNotifications";

  const fetchDishes = async () => {
    try {
      const res = await axios.get(url, auth);
      setNotifications(res?.data?.data);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    fetchDishes();
  }, []);

  const deleteDish = async (id) => {
    try {
      const res = await axios.delete(`https://b7w3czz0m2.execute-api.ap-south-1.amazonaws.com/development/api/deleteNotification/${id}`, auth);
      console.log(res)
     alert('Deleted')
      fetchDishes();
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            Notifications
          </span>
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
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Notifications</th>

                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {notifications?.map((e, i) => {
                  return (
                    <tr key={i}>
                      <td>{e?.message}</td>
                      <td>
                        <i
                          class="fa-solid fa-trash"
                          style={{ color: "red", cursor: "pointer" }}
                          onClick={() => deleteDish(e._id)}
                        ></i>
                      </td>
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
export default HOC(Notification);
