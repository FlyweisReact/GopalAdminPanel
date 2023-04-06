/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table, Form } from "react-bootstrap";
import HOC from "../layout/HOC";

const Restaurant = () => {
  const [modalShow, setModalShow] = useState(false);
  const [data, setData] = useState([]);

  const fetch = async () => {
    try {
      const { data } = await axios.get(
        "https://b7w3czz0m2.execute-api.ap-south-1.amazonaws.com/development/api/getDeliveryAgents"
      );
      setData(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <p style={{ fontSize: "20px", color: "black" }}>Delivery Agents</p>
          <Button
            variant="outline-success"
            style={{ fontSize: "20px" }}
            onClick={() => setModalShow(true)}
          >
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
              {data?.map((i, index) => (
                <tr key={index}>
                  <td> {i.restaurantId} </td>
                  <td> {i.discountPercent}% </td>
                  <td> {i.name} </td>
                  <td> {i.address} </td>
                  <td> {i.phone} </td>
                  <td> {i.email} </td>
                  <td> {i.isAvailable === true ? "true" : "false"} </td>
                  <td> {i.currentOrder} </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </section>

      <section className={modalShow ? "centerModal" : "hidden"} style={{height : '600px'}}>
          <div style={{display : 'flex' , justifyContent : 'space-between'}}>
            <p>Add Delivery Agent</p>
            <i class="fa-solid fa-x" style={{fontSize : '20px' , cursor : 'pointer'}} onClick={() => setModalShow(false)} ></i>
          </div>
          <form>
          <div>
            <p>Discount</p>
            <input type='number' />
          </div>
          <div>
            <p>Name</p>
            <input type='text' />
          </div>
          <div>
            <p>Address</p>
            <input type='text' />
          </div>
          <div>
            <p>Phone</p>
            <input type='number' />
          </div>
          <div>
            <p>email</p>
            <input type='number' />
          </div>
          <div>
            <p>restaurantId</p>
            <input type='number' />
          </div>
           <Button>Submit</Button>
          </form>
      </section>
    </>
  );
};

export default HOC(Restaurant);
