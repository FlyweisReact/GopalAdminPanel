import React from 'react'
import HOC from '../../layout/HOC'
import { Table } from 'react-bootstrap';

const VendorOrder = () => {


  return (
    <>
      <div className="head-cont">
        <h1 className="display-6">All Orders</h1>
      </div>

      <div className="table-cont">
        <Table striped bordered hover className="table">
          <thead>
            <tr>
              <th>User</th>
              <th>Dish</th>
              <th>Amount</th>
              <th>Price</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((i, index) => (
              <tr key={index}>
                <td>
                  <img src={i.image} alt="" className="img-thumbnail" />
                </td>
                <td> {i.title} </td>
                <td> {i.Description} </td>
                <td> ₹{i.price} </td>
                <td style={{ textDecoration: "line-through" }}>
                  {" "}
                  ₹{i.dPrice}{" "}
                </td>
                <td> {i.rating} </td>
                <td> {i.discount} </td>
                <td> Lunch </td>
                <td>
                  <i className="fa-solid fa-trash" />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default HOC(VendorOrder)