/** @format */

import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import HOC from "../../layout/HOC";

const CouponsDiscount = () => {
  const RestaurantId = localStorage.getItem("VendorId");
  const  token = localStorage.getItem("Vendortoken")
  const [data, setData] = useState([]);

  const fetch = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://b7w3czz0m2.execute-api.ap-south-1.amazonaws.com/development/api/getAllCouponsOfRestaurant/${RestaurantId}`
      );
      setData(data);
    } catch (e) {
      console.log(e);
    }
  }, [RestaurantId]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <>
      <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
        <p style={{ fontSize: "20px", color: "black" }}>All Coupons</p>
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
            {data?.requiredResults?.map((i, index) => (
              <tr key={index}>
                <td> {i.name} </td>
                <td> {i.discountPercent} </td>
                <td> {i.createdAt?.slice(0,10)} </td>
                <td>
                  <i className="fa-solid fa-trash" /> 
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default HOC(CouponsDiscount);
