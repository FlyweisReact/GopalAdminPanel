/** @format */

import React from "react";
import { Button, Table } from "react-bootstrap";
import HOC from "../layout/HOC";

const Catering = () => {
  return (
    <>
      <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
        <p style={{ fontSize: "20px", color: "black" }}>
          All Catering Services
        </p>
        <Button variant="outline-success" style={{ fontSize: "20px" }}>
          Add Catering Service
        </Button>
      </div>

      <div
          style={{
            width: "100%",
            overflow: "auto",
            marginTop: "20px",
            fontSize: "16px",
          }}
        >
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Image</th>
                <th>TItle</th>
                <th>Email</th>
                <th>Address</th>
                <th>Contact</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img
                    src="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/6/y/t/p60213-16645391636336da1b89ad3.jpg?w=400"
                    alt=""
                    style={{ width: "100px" }}
                  />
                </td>
                <td>Saffron</td>
                <td>Saffron@gmail.com</td>
                <td>Grater Noida </td>
                <td>4521445217</td>
                <td>
                  <i className="fa-solid fa-trash" style={{ color: "red" }}></i>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
    </>
  );
};

export default HOC(Catering);
