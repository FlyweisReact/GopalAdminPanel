/** @format */

import React from "react";
import { Table } from "react-bootstrap";
import HOC from "../layout/HOC";

const RestaurantOrder = () => {
  return (
    <>
      <p style={{ color: "black", fontSize: "20px" }}>Orders</p>

      <div style={{width : '100%' , overflow : 'auto'}}>
        <Table str
      </div>
    </>
  );
};

export default HOC(RestaurantOrder);
