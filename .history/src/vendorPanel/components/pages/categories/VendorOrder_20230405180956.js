import React, { useState } from 'react'
import HOC from '../../layout/HOC'
import { Table } from 'react-bootstrap';

const VendorOrder = () => {
  const [ show , setShow ] = useState(false)
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
              <th>Price</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
           <tr>
            <td>Rajesh</td>
            <td>Dum Biryani</td>
            <td>5,000</td>
            <td>12/02/2020</td>
            <td>Success</td>
            <td>
              <i className='fa-solid fa-edit' />
            </td>
           </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default HOC(VendorOrder)