/** @format */

import React from "react";
import { Button } from "react-bootstrap";
import HOC from "../layout/HOC";

const Catering = () => {
  return (
    <>
      <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
        <p style={{ fontSize: "20px", color: "black" }}>
          All Catering Services
        </p>
        <Button variant="outline-success" style={{ fontSize: "20px" }}>
          Add Catering Service
        </Button>
      </div>
    </>
  );
};

export default HOC(Catering);
