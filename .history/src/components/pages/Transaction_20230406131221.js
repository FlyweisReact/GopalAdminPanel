import React from 'react'
import { Table } from 'react-bootstrap'
import HOC from '../layout/HOC'

const Transaction = () => {
  return (
   <>
         <div className="head-cont">
        <h1 className="display-6">All Transaction</h1>
      </div>

      <div
          style={{
            width: "100%",
            overflow: "auto",
            marginTop: "20px",
            fontSize: "16px",
          }}
        >
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Restaurant</th>
                <th>User</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Payment Method</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
             <td>Restaurant</td>
             <td>User</td>
             <td>₹500 </td>
             <td>12/02/2023 </td>
             <td>Online </td>
             <td>Success </td>
              </tr>
            </tbody>
          </Table>
        </div>
   </>
  )
}

export default HOC(Transaction)