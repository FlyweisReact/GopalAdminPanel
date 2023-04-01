import React from 'react'
import HOC from '../layout/HOC'
import { Table } from 'react-bootstrap'

const AdminBanner = () => {
  return (
    <>
          <section>
        <div>
          <p
            style={{
              color: "black",
              fontSize: "20px",
              textDecoration: "underline",
            }}
          >
            {" "}
            All Users
          </p>
        </div>

        <div style={{ width: "100%", overflowY: "auto" , fontSize : '16px'  , marginTop : '2%'}}>
          <Table striped bordered hover>
            <thead>
            <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Action</th>
            </tr>

            </thead>
            <tbody>
              <tr>
                <td>Demo</td>
                <td>Demo@gmail.com</td>
                <td>1234567890</td>
                <td><i class="fa-solid fa-trash" style={{color : 'red'}}></i></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </section>
    </>
  )
}

export default HOC(AdminBanner)