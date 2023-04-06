/** @format */

import React from "react";
import { Table } from "react-bootstrap";

const AdminVCategories = () => {
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
        <h1 className="display-6"> All Restaurant Category</h1>
      </div>

      <div className="table-cont">
        <Table striped bordered hover className="table">
          <thead>
            <tr>
              <th>Category</th>
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

export default (AdminVCategories);
