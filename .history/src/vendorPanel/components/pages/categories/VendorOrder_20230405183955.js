/** @format */

import React, { useState } from "react";
import HOC from "../../layout/HOC";
import { Table } from "react-bootstrap";

const VendorOrder = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <div className="head-cont">
        <h1 className="display-6">All Orders</h1>
       
      </div>

      <div className="table-cont">
        <Table striped bordered hover className="table">
          <thead>
            <tr>
              <th>User</th>
              <th>Dish</th>
              <th>Price</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rajesh</td>
              <td>Dum Biryani</td>
              <td>5,000</td>
              <td>12/02/2020</td>
              <td>Success</td>
              <td>
                <i className="fa-solid fa-edit" onClick={() => setShow(true)} />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>

      {show ? (
        <>
          <div class="form-cont">
            <div className="head-cont">
              <h1 className="display-6">Edit Status</h1>
              <i class="fa-solid fa-x" onClick={() => setShow(false)}></i>
            </div>
            <form>
              <div class="mb-3">
                <label class="form-label">Email address</label>
                <input type="email" class="form-control" />
              </div>
              <div class="mb-3">
                <label class="form-label">Password</label>
                <input type="password" class="form-control" />
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default HOC(VendorOrder);
