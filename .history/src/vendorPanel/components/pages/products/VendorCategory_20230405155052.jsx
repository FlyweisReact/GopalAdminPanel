/** @format */

import React from "react";
import HOC from "../../layout/HOC";

const VendorCategory = () => {
  return (
    <>
      <div className="head-cont">
        <h1 className="display-6">Category</h1>
        <button className="btn btn-outline-success">Add Category</button>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default HOC(VendorCategory);
