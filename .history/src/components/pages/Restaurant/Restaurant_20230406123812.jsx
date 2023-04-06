/** @format */

import React from "react";
import { useState } from "react";
import HOC from "../../layout/HOC";
import { Table } from "react-bootstrap";

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
                <input
                  type="text"
                  class="form-control"
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Restaurant Email</label>
                <input
                  type="email"
                  class="form-control"
                />
              </div>
             
              <div class="mb-3">
                <label class="form-label">Restaurant Address</label>
                <input
                  type="email"
                  class="form-control"
                />
              </div>
             
              <div class="mb-3">
                <label class="form-label">Restaurant Contact Details</label>
                <input
                  type="email"
                  class="form-control"
                />
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
