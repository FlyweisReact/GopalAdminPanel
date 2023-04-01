/** @format */

import React from "react";
import { useState, useEffect } from "react";
import HOC from "../layout/HOC";
import axios from "axios";
import auth from "../Auth";
import { Table, Button, Form } from "react-bootstrap";
import { IoMdClose } from "react-icons/io";

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const [popup, setPopup] = useState(false);


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
      const res = await axios.delete(
        `https://b7w3czz0m2.execute-api.ap-south-1.amazonaws.com/development/api/deleteNotification/${id}`,
        auth
      );
      console.log(res);
      alert("Deleted");
      fetchDishes();
    } catch (err) {
      console.log("err", err);
    }
  };
  const [message, setM] = useState("");

  const postHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://b7w3czz0m2.execute-api.ap-south-1.amazonaws.com/development/api/sendNotificationsByAdmin",
        { message }
      );
      console.log(data);
      props.onHide();
      alert("Added");
      fetchDishes();
    } catch (e) {
      console.log(e);
    }
  };

  function MyVerticallyCenteredModal(props) {
  
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Notification
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Notification</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setM(e.target.value)}
              />
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <>
  

      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <p style={{ color: "black", fontSize: "2rem" }}>Notifications</p>
          <Button style={{fontSize : '20px'}}  onClick={() => {
              setPopup(!popup);
            }} >Add</Button>
        </div>
        <div>
          <div
            style={{
              width: "100%",
              overflowY: "auto",
              fontSize: "16px",
              marginTop: "20px",
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
            <Form onSubmit={postHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Notification</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setM(e.target.value)}
              />
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
      
          </div>
        </section>
    </>
  );
};
export default HOC(Notification);
