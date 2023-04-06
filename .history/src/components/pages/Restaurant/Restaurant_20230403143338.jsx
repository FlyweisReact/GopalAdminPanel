/** @format */

import React from "react";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import HOC from "../../layout/HOC";
import { Button, Table } from "react-bootstrap";

const Restaurant = () => {
  const [popup, setPopup] = useState(false);

  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <p style={{ fontSize: "20px", color: "black" }}>All Restaurant</p>
          <Button
            onClick={() => {
              setPopup(!popup);
            }}
            variant="outline-success"
            style={{ fontSize: "20px" }}
          >
            Add Restaurant
          </Button>
        </div>
        <section
          className={
            popup
              ? "fixed top-0 left-0 wcomp  transition-all duration-150 w-full flex justify-center items-center overflow-y-auto  h-screen "
              : "hidden"
          }
        
        >
          <div className="sm:h-[90vh] h-[80vh] overflow-y-auto  lg:w-3/6  md:w-4/6 w-5/6 mx-auto  rounded-lg"   style={{backgroundColor : '#fff' , boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <div className="flex sticky top-0 py-3 px-5 bg-slate-100 justify-between">
              <span style={{ fontSize: "2rem", color: "#6610f2" }}>
                Add Restaurant
              </span>
              <div style={{ color: "#6610f2", fontSize: "2rem" }}>
                <i
                  className="fa-solid fa-circle-xmark"
                  style={{
                    color: "#6610f2",
                    fontSize: "2rem",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setPopup(false);
                  }}
                ></i>
              </div>
            </div>

            <form style={{ padding: "20px" }}>
              <div className="mb-3">
                <p style={{ color: "#000", fontSize: "18px" }}>
                  Restaurant Name
                </p>
                <input
                  required
                  type="text"
                  style={{
                    border: "1px solid black",
                    width: "100%",
                    padding : '2px',
                    outline: "none",
                    color: "#000",
                    backgroundColor: "transparent",
                    fontSize : '18px'
                  }}
                />
              </div>
           
           
              <button
                type="submit"
                value="Add"
                className="bg-[rgb(240,72,88)] cursor-pointer w-40 hover:bg-[rgb(240,72,88)] py-1 rounded-full"
              >
                Add
              </button>
            </form>
          </div>
        </section>
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
                <th>Restaurant Image</th>
                <th>Restaurant Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Contact</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img
                    src="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/6/y/t/p60213-16645391636336da1b89ad3.jpg?w=400"
                    alt=""
                    style={{ width: "100px" }}
                  />
                </td>
                <td>Saffron</td>
                <td>Saffron@gmail.com</td>
                <td>Grater Noida </td>
                <td>4521445217</td>
                <td>
                  <i className="fa-solid fa-trash" style={{ color: "red" }}></i>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};

export default HOC(Restaurant);
