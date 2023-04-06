/** @format */

import React from "react";
import { useState } from "react";
import HOC from "../../layout/HOC";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const Restaurant = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="head-cont">
        <h1 className="display-6">All Restaurant</h1>
        <button
          className="btn btn-outline-success"
          onClick={() => setShow(!show)}
        >
          Add Restaurant
        </button>
      </div>

      <div className="table-cont">
        <Table striped bordered hover className="table">
          <thead>
            <tr>
              <th>Restaurant Image</th>
              <th>Restaurant Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Contact</th>
              <th>Coupons</th>
              <th>Banner</th>
              <th>Categories</th>
              <th>Dishes</th>
              <th>Catering Service</th>
              <th>Orders</th>
              <th>Transactions</th>
              <th>Subscription Plan</th>
              <th>Actions</th>
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
                <Link to="/admin/vendor-coupon/45785412547854">
                  <button
                    type="button"
                    className="btn btn-outline-success"
                    style={{ fontSize: "16px" }}
                  >
                    Coupons
                  </button>
                </Link>
              </td>
              <td>
                <Link to="/admin/vendor-banner/45785412547854">
                  <button
                    type="button"
                    className="btn btn-outline-success"
                    style={{ fontSize: "16px" }}
                  >
                    Banner
                  </button>
                </Link>
              </td>
              <td>
                <Link to="/admin/vendor-category/:id">
                  <button
                    type="button"
                    className="btn btn-outline-success"
                    style={{ fontSize: "16px" }}
                  >
                    Categories
                  </button>
                </Link>
              </td>
              <td>
                <Link to="/admin/vendor-dishes/:id">
                  <button
                    type="button"
                    className="btn btn-outline-success"
                    style={{ fontSize: "16px" }}
                  >
                    Dishes
                  </button>
                </Link>
              </td>
              <td>
                <Link to="/admin/vendor-catering-service/:id">
                  <button
                    type="button"
                    className="btn btn-outline-success"
                    style={{ fontSize: "16px" }}
                  >
                    Catering Service
                  </button>
                </Link>
              </td>
              <td>
                <Link to="/admin/vendor-orders/:id">
                  <button
                    type="button"
                    className="btn btn-outline-success"
                    style={{ fontSize: "16px" }}
                  >
                    Orders
                  </button>
                </Link>
              </td>
              <td>
                <Link to="/admin/vendor-transaction/:id">
                  <button
                    type="button"
                    className="btn btn-outline-success"
                    style={{ fontSize: "16px" }}
                  >
                    Transactions
                  </button>
                </Link>
              </td>
              <td>
                <Link to="/admin/vendor-transaction/:id">
                  <button
                    type="button"
                    className="btn btn-outline-success"
                    style={{ fontSize: "16px" }}
                  >
                    Subscription Plan
                  </button>
                </Link>
              </td>
              <td>
                <i className="fa-solid fa-trash" style={{ color: "red" }}></i>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>

      {show ? (
        <>
          <div class="form-cont">
            <div className="head-cont">
              <h1 className="display-6">Add Restaurant</h1>
              <i className="fa-solid fa-x" onClick={() => setShow(false)}></i>
            </div>
            <form>
              <div class="mb-3">
                <label class="form-label">Image</label>
                <input
                  type="file"
                  class="form-control"
                  style={{ outline: "none", border: "none" }}
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Restaurant Name</label>
                <input type="text" class="form-control" />
              </div>
              <div class="mb-3">
                <label class="form-label">Restaurant Email</label>
                <input type="email" class="form-control" />
              </div>

              <div class="mb-3">
                <label class="form-label">Restaurant Address</label>
                <input type="text" class="form-control" />
              </div>

              <div class="mb-3">
                <label class="form-label">Restaurant Contact Details</label>
                <input type="number" class="form-control" />
              </div>

              <button type="submit" className="btn btn-primary">
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

export default HOC(Restaurant);
