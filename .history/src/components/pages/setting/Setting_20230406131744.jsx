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
              <td> publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final </td>
              <td>
                <i className="fa-solid fa-edit" />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>

   
    </>
  );
};

export default HOC(CouponsDiscount);
