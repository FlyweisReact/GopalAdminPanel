/** @format */

import HOC from "../../layout/HOC";
import { Table } from "react-bootstrap";

const Users = () => {
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

        <div style={{ width: "100%", overflowY: "auto" }}>
          <Table striped bordered hover>
            <thead>
            <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Phone Number</th>
            </tr>

            </thead>
            <tbody>
              <tr>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};

export default HOC(Users);
