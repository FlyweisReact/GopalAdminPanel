/** @format */

import React from "react";
import { Table } from "react-bootstrap";
import HOC from "../layout/HOC";

const AdminCoupon = () => {
  return (
    <>
      <div className="head-cont">
        <h1 className="display-6">All Restaurant Coupon</h1>
      </div>

      <div className="table-cont">
        <Table striped bordered hover className="table">
          <thead>
            <tr>
              <th>Restaurant Name</th>
              <th>Restaurant Email</th>
              <th>Restaurant Contact</th>
              <th>Coupon Code</th>
              <th>Discount</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            <tr>
             
              <td>EAT ON</td>
              <td>EatOn@gmail.com</td>
              <td>Grater Noida </td>
              <td>1254125632</td>
              <td>50%</td>
              <td>12/02/2023</td>
             
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default HOC(AdminCoupon);
