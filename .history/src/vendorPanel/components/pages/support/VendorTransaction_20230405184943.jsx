import React from 'react'
import { Table } from 'react-bootstrap';
import HOC from '../../layout/HOC';

const VendorTransaction = () => {
  const [show, setShow] = use(false);
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
              <th>Price</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rajesh</td>
              <td>Dum Biryani</td>
              <td>5,000</td>
              <td>12/02/2020</td>
              <td>Success</td>
              <td>
                <i
                  className="fa-solid fa-edit"
                  onClick={() => setShow(!show)}
                />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>

      {show ? (
        <>
          <div class="form-cont">
            <div className="head-cont">
              <h1 className="display-6">Edit Status</h1>
              <i className="fa-solid fa-x" onClick={() => setShow(false)}></i>
            </div>
            <form>
              <select className="form-select my-3 mb-3" aria-label="Default select example">
                <option selected>--Select Your Prefrence --</option>
                <option value="1">Success</option>
                <option value="2">Pending</option>
                <option value="3">Denied</option>
              </select>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default HOC(VendorTransaction)