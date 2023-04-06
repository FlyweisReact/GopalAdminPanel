import React from 'react'
import { Table } from 'react-bootstrap'
import HOC from '../layout/HOC'

const VendorSubscription = () => {
  return (
    <>
          <div className="head-cont">
        <h1 className="display-6">All Subscription Plan</h1>
      </div>

      <div className="table-cont">
        <Table striped bordered hover className="table">
          <thead>
            <tr>
              <th>Plan Type</th>
              <th>Sub Type</th>
              <th>Meal Type</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Trial</td>
              <td>Breakfast</td>
              <td>Veg Meal Type</td>
              <td>Requested</td>
              <td>
              <Button></Button>
              </td>
              <td>
          
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default HOC(VendorSubscription)