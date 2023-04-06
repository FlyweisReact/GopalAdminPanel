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
              <h1 className="display-6">Edit Status</h1>
              <i className="fa-solid fa-x" onClick={() => setShow(false)}></i>
            </div>
            <form>
              <select
                className="form-select my-3 mb-3"
                aria-label="Default select example"
              >
                <option selected>--Select Your Prefrence --</option>
                <option value="1">Success</option>
                <option value="2">Pending</option>
                <option value="3">Denied</option>
              </select>
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
