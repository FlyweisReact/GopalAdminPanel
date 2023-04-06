/** @format */

import React from "react";
import { Button, Table } from "react-bootstrap";
import HOC from "../layout/HOC";

const Catering = () => {
  return (
    <>
         <div className="head-cont">
        <h1 className="display-6">Catering Services</h1>
        <button className="btn btn-outline-success">Add Catering Services</button>
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
            {data.map((i, index) => (
              <tr key={index}>
                <td>
                  <img src={i.image} alt="" className="img-thumbnail" />
                </td>
                <td> {i.title} </td>
                <td> {i.Description} </td>
                <td> ₹{i.price} </td>
                <td style={{ textDecoration: "line-through" }}>
                  {" "}
                  ₹{i.dPrice}{" "}
                </td>
                <td> {i.rating} </td>
                <td> {i.discount} </td>
                <td> 
                <p>10 Pack</p>
                <p>15 Pack</p>
                <p>20 Pack</p>
                 </td>
                <td>
                  <i className="fa-solid fa-trash" />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default HOC(Catering);
