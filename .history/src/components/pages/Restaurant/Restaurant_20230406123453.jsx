/** @format */

import React from "react";
import { useState } from "react";
import HOC from "../../layout/HOC";
import { Button, Table } from "react-bootstrap";

const Restaurant = () => {

  return (
    <>
      <div className="head-cont">
        <h1 className="display-6">All Restaurant</h1>
        <button className="btn btn-outline-success">Add Restaurant</button>
      </div>
      <section>

      <div className="table-cont">
        <Table striped bordered hover className="table">
          <thead>
            <tr>
            <th>Restaurant Image</th>
                <th>Restaurant Name</th>
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
                    className="img-thumbnail"
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
                <th>Restaurant Image</th>
                <th>Restaurant Name</th>
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
      </section>
    </>
  );
};

export default HOC(Restaurant);
