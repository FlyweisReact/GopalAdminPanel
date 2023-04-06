/** @format */

import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import HOC from "../../layout/HOC";

const CouponsDiscount = () => {
  const RestaurantId = localStorage.getItem("VendorId");
  const token = localStorage.getItem("Vendortoken");
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  const fetch = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://b7w3czz0m2.execute-api.ap-south-1.amazonaws.com/development/api/getAllCouponsOfRestaurant/${RestaurantId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(data);
    } catch (e) {
      console.log(e);
    }
  }, [RestaurantId, token]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <>
      <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
        <p style={{ fontSize: "20px", color: "black" }}>All Coupons</p>
        <Button
          variant="outline-success"
          style={{ fontSize: "20px" }}
          onClick={() => setShow(true)}
        >
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
                <td> {i.createdAt?.slice(0, 10)} </td>
                <td>
                  <i className="fa-solid fa-trash" />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {show ? (
        <section
          className={
            "fixed top-0 left-0 wcomp  transition-all duration-150 w-full flex justify-center items-center overflow-y-auto  h-screen "
          }
        >
          <div
            className="sm:h-[90vh] h-[80vh] overflow-y-auto  lg:w-3/6  md:w-4/6 w-5/6 mx-auto  rounded-lg"
            style={{
              backgroundColor: "#fff",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <div className="flex sticky top-0 py-3 px-5 bg-slate-100 justify-between">
              <span style={{ fontSize: "2rem", color: "#000" }}>
                Add Coupon
              </span>
              <div style={{ color: "#6610f2", fontSize: "2rem" }}>
                <i
                  className="fa-solid fa-circle-xmark"
                  style={{
                    color: "#000",
                    fontSize: "2rem",
                    cursor: "pointer",
                    
                  }}
                  onClick={() => setShow(false)}
                ></i>
              </div>
            </div>

            <form style={{ padding: "20px" }}>
              <div className="mb-3">
                <p style={{ color: "#000", fontSize: "18px" }}>
                 Coupon Code
                </p>
                <input
                  required
                  type="text"
                  style={{
                    border: "1px solid black",
                    width: "100%",
                    padding: "2px",
                    outline: "none",
                    color: "#000",
                    backgroundColor: "transparent",
                    fontSize: "18px",
                  }}
                />
              </div>
              <div className="mb-3">
                <p style={{ color: "#000", fontSize: "18px" }}>
             Discount
                </p>
                <input
                  required
                  type="email"
                  style={{
                    border: "1px solid black",
                    width: "100%",
                    padding: "2px",
                    outline: "none",
                    color: "#000",
                    backgroundColor: "transparent",
                    fontSize: "18px",
                  }}
                />
              </div>
              <div className="mb-3">
                <p style={{ color: "#000", fontSize: "18px" }}>
                  Restaurant Address
                </p>
                <input
                  required
                  type="text"
                  style={{
                    border: "1px solid black",
                    width: "100%",
                    padding: "2px",
                    outline: "none",
                    color: "#000",
                    backgroundColor: "transparent",
                    fontSize: "18px",
                  }}
                />
              </div>
              <div className="mb-3">
                <p style={{ color: "#000", fontSize: "18px" }}>
                  Restaurant Contact
                </p>
                <input
                  required
                  type="tel"
                  pattern="[0-9]{10}"
                  style={{
                    border: "1px solid black",
                    width: "100%",
                    padding: "2px",
                    outline: "none",
                    color: "#000",
                    backgroundColor: "transparent",
                    fontSize: "18px",
                  }}
                />
              </div>
              <div className="mb-3">
                <p style={{ color: "#000", fontSize: "18px" }}>Password</p>
                <input
                  required
                  type="password"
                  style={{
                    border: "1px solid black",
                    width: "100%",
                    padding: "2px",
                    outline: "none",
                    color: "#000",
                    backgroundColor: "transparent",
                    fontSize: "18px",
                  }}
                />
              </div>

              <Button
                variant="outline-success"
                style={{
                  fontSize: "20px",
                }}
              >
                Submit
              </Button>
            </form>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default HOC(CouponsDiscount);
