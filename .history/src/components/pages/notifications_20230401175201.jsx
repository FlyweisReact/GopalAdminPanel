/** @format */

import React from "react";
import { useState, useEffect } from "react";
import HOC from "../layout/HOC";
import axios from "axios";
import auth from "../Auth";
import { Table, Modal, Button, Form } from "react-bootstrap";

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  const [open, setShow] = useState(false);

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

  function MyVerticallyCenteredModal(props) {
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
      <MyVerticallyCenteredModal show={show} onHide={() => setShow(false)} />
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <p style={{ color: "black", fontSize: "2rem" }}>Notifications</p>
          <Button style={{fontSize : '20px'}} onClick={() => setShow(true)}>Add</Button>
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
    </>
  );
};
export default HOC(Notification);
