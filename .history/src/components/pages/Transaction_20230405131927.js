import React from 'react'
import { Button, Table } from 'react-bootstrap'
import HOC from '../layout/HOC'

const Transaction = () => {
  return (
   <>
          <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
        <p style={{ fontSize: "20px", color: "black" }}>
          All Transaction
        </p>
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
             <td>500 </td>
              </tr>
            </tbody>
          </Table>
        </div>
   </>
  )
}

export default HOC(Transaction)