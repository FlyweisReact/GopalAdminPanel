
import HOC from "../../layout/HOC";
import { Table } from "react-bootstrap";

const Orders = () => {
       return (
    <>
      <div className="head-cont">
        <h1 className="display-6">All Plan Type</h1>
      </div>

      <div className="table-cont">
        <Table striped bordered hover className="table">
          <thead>
            <tr>
              <th>Plan Type</th>
              <th>Sub Type</th>
              <th>Meal Plate</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Trial</td>
              <td>Breakfast</td>
              <td>Veg Meal Plate</td>
              <td>12/02/2020</td>
              <td>Success</td>
              <td>
                <i
                  className="fa-solid fa-edit"
                 />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default HOC(Orders);
