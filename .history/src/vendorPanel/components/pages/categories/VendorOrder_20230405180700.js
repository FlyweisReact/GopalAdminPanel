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
           <tr>
            <td>Demo</td>
            <td>Dum Biryani</td>
            <td>Dum Biryani</td>
           </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default HOC(VendorOrder)