/** @format */

import React from "react";
import { Table } from "react-bootstrap";
import HOC from "../../layout/HOC";

const VendorCategory = () => {
  return (
    <>
      <div className="head-cont">
        <h1 className="display-6">Category</h1>
        <button className="btn btn-outline-success">Add Category</button>
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
          <tr>
            <td>Breakfast</td>
            <td>
              
            </td>
          </tr>
        </tbody>
      </Table>
      </div>

    </>
  );
};

export default HOC(VendorCategory);
