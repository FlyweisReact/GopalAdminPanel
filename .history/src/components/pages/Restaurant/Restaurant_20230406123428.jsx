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

      <div className="table-cont">
        <Table striped bordered hover className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Discounted Price</th>
              <th>Rating</th>
              <th>Discount</th>
              <th>Pack</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          <tr>
                <td>
                  <img
                    src="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/6/y/t/p60213-16645391636336da1b89ad3.jpg?w=400"
                    alt=""
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
  
       
    </>
  );
};

export default HOC(Restaurant);
