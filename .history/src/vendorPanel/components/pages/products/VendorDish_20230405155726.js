/** @format */

import React from "react";
import { Table } from "react-bootstrap";
import HOC from "../../layout/HOC";

const VendorDish = () => {
  const data = [
    {
      name: "Breakfast",
    },
    {
      name: "Lunch",
    },
    {
      name: "Dinner",
    },
  ];

  return (
    <>
      <div className="head-cont">
        <h1 className="display-6">Dishes</h1>
        <button className="btn btn-outline-success">Add Dishes</button>
      </div>

      <div className="table-cont">
        <Table striped bordered hover className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Description</th>
              <th>price</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((i, index) => (
              <tr key={index}>
                <td>{i.name}</td>
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

export default HOC(VendorDish);
