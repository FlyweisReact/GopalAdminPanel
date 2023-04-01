/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import HOC from "../layout/HOC";

const AdminMeal = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://b7w3czz0m2.execute-api.ap-south-1.amazonaws.com/development/api/adminMeal"
      );
      setData(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div style={{display : 'flex'}}>
        <p style={{ fontSize: "20px", color: "black" }}>Admin Meals</p>
        <Button variant="outline-success" style={{fontSize : '20px'}}>Add Meal</Button>
      </div>

      <div style={{ width: "100%", overflowX: "auto", marginTop: "20px" , fontSize : '16px'}}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Type of Meal</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((i, index) => (
              <tr key={index}>
                <td> {i.typeOfMeal} </td>
                <td>
                  <i class="fa-solid fa-trash" style={{ color: "red" }}></i>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default HOC(AdminMeal);
