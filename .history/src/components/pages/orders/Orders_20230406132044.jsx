/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import { Table } from "react-bootstrap";

const Orders = () => {

  return (
    <>
      <section>
        <div>
          <p style={{ fontSize: "20px", color: "black" }}>Plan Types</p>
        </div>

        <div
          style={{
            width: "100%",
            overflow: "auto",
            fontSize: "16px",
            marginTop: "20px",
          }}
        >
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Plan Type</th>

                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {plans?.map((e, index) => {
                return (
                  <tr key={index}>
                    <td>{e.Plantype}</td>
                    <td>
                      <i
                        class="fa-solid fa-trash"
                        style={{ color: " red" }}
                      ></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};

export default HOC(Orders);
