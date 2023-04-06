/** @format */

import React from "react";
import { Button, Table } from "react-bootstrap";
import HOC from "../layout/HOC";

const AdminVSubscription = () => {
  return (
    <>
      <div className="head-cont">
        <h1 className="display-6">All Subscription Plan</h1>
      </div>

      <div className="table-cont">
        <Table striped bordered hover className="table">
          <thead>
            <tr>
              <th>Restaurant</th>
              <th>Plan Type</th>
              <th>Sub Type</th>
              <th>Meal Type</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Red Chilly</td>
              <td>Trial</td>
              <td>Breakfast</td>
              <td>Veg Meal Type</td>
              <td>Requested</td>
              <td>
                <Button variant="outline-success" style={{ fontSize: "16px" }}>
                  Request
                </Button>
              </td>
            </tr>
            
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default HOC(AdminVSubscription);
