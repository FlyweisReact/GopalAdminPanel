/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import HOC from "../layout/HOC";

const Restaurant = () => {

  const [ data , setData ] =  useState([])

  const fetch = async () => {
    try { 
      const { data } = await axios.get("https://b7w3czz0m2.execute-api.ap-south-1.amazonaws.com/development/api/getDeliveryAgents")
      setData(data)
    }catch(e) { 
      console.log(e)
    }
  }

  useEffect(() => {
    fetch()
  },[])

  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <p style={{ fontSize: "20px", color: "black" }}>Delivery Agents</p>
          <Button variant="outline-success" style={{ fontSize: "20px" }}>
            Add Delivery Agents
          </Button>
        </div>

        <div style={{ width: "100%", overflow: "auto", fontSize: "16px" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>restaurantId</th>
                <th>discountPercent</th>
                <th>name</th>
                <th>address</th>
                <th>phone</th>
                <th>email</th>
                <th>isAvailable</th>
                <th>currentOrder</th>
              </tr>
            </thead>
            <tbody>
            { data?.map((i , index) => (
              <tr key={index}>
                <td> {i.restaurantId} </td>
                <td> {i.discountPercent}% </td>
                <td> {i.name} </td>
                <td> {i.address} </td>
                <td> {i.phone} </td>
                <td> {i.email} </td>
                <td> {i.isAvailable === true "true"} </td>
                <td> {i.currentOrder} </td>
              </tr>
            ))}
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};

export default HOC(Restaurant);
