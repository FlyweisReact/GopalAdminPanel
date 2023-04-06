import HOC from "../../layout/HOC";
import {  Table } from "react-bootstrap";

const CouponsDiscount = () => {
  return (
    <>
      <div className="head-cont">
        <h1 className="display-6">Privacy Policy</h1>
      </div>

      <div className="table-cont">
        <Table striped bordered hover className="table">
          <thead>
            <tr>
              <th>Privacy Policy</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rajesh</td>
              <td>Success</td>
              <td>
              
              </td>
            </tr>
          </tbody>
        </Table>
      </div>

   
    </>
  );
};

export default HOC(CouponsDiscount);
