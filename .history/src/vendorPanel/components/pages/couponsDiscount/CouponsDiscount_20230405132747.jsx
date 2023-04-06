import axios from "axios";
import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import HOC from "../../layout/HOC";

const CouponsDiscount = () => {
  const RestaurantId = localStorage.getItem("VendorId")
 
  const [ data , setData ] = useState([])

  const fetch = async () => {
    try { 
      const { data } = await axios.get(`https://b7w3czz0m2.execute-api.ap-south-1.amazonaws.com/development/api/getAllCouponsOfRestaurant/${RestaurantId}`)
    }catch(e) { 
      console.log(e)
    }
  }


  return (
    <>
    <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
        <p style={{ fontSize: "20px", color: "black" }}>
          All Coupons
        </p>
        <Button variant="outline-success" style={{ fontSize: "20px" }}>
          Add Coupons
        </Button>
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
                <th>Coupon Code</th>
                <th>Discount</th>
                <th>Create Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img
                    src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
                    alt=""
                    style={{ width: "100px" }}
                  />
                </td>
                <td>Food Name</td>
                <td>Lorem Ipsum </td>
                <td>₹525.0 </td>
                <td>₹229.5</td>
                <td>5</td>
                <td>
                    <p>10 Pack</p>
                    <p>15 Pack</p>
                    <p>20 Pack</p>
                    
                </td>
                <td>15%</td>
                <td>
                  <i className="fa-solid fa-trash" style={{ color: "red" }}></i>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
    </>
  );
};

export default HOC(CouponsDiscount);
