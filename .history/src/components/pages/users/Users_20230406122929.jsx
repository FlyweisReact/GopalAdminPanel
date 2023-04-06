/** @format */

import HOC from "../../layout/HOC";
import { Table } from "react-bootstrap";

const Users = () => {
  return (
    <>
      <section>
      <div className="head-cont">
        <h1 className="display-6">All Users</h1>
      </div>

        <div
          style={{
            width: "100%",
            overflowY: "auto",
            fontSize: "16px",
            marginTop: "20px",
          }}
        >
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
                <td>
                  <i class="fa-solid fa-trash" style={{ color: "red" }}></i>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};

export default HOC(Users);
