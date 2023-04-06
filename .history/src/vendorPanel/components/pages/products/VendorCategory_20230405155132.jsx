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

    <Table striped bordered hover >
    <thead>
      
    </thead>

    </Table>
    </>
  );
};

export default HOC(VendorCategory);
