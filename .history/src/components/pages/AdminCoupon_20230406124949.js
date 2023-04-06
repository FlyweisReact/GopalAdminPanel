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
              <th>Restaurant Name</th>
              <th>Coupon Code</th>
              <th>Discount</th>
              <th>Created At</th>
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
                <button
                  type="button"
                  className="btn btn-outline-success"
                  style={{ fontSize: "16px" }}
                >
                  Coupons
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-outline-success"
                  style={{ fontSize: "16px" }}
                >
                  Banner
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-outline-success"
                  style={{ fontSize: "16px" }}
                >
                  Categories
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-outline-success"
                  style={{ fontSize: "16px" }}
                >
                  Dishes
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-outline-success"
                  style={{ fontSize: "16px" }}
                >
                  Catering Service
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-outline-success"
                  style={{ fontSize: "16px" }}
                >
                  Orders
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-outline-success"
                  style={{ fontSize: "16px" }}
                >
                  Transactions
                </button>
              </td>
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

export default HOC(AdminCoupon);
