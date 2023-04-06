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
              ? "fixed top-0 left-0 wcomp bg-[rgb(0,0,0,0.5)] transition-all duration-150 w-full flex justify-center items-center overflow-y-auto  h-screen "
              : "hidden"
          }
        >
          <div className="bg-slate-100 sm:h-[90vh] h-[80vh] overflow-y-auto  lg:w-3/6  md:w-4/6 w-5/6 mx-auto  rounded-lg">
            <div className="flex sticky top-0 py-3 px-5 bg-slate-100 justify-between">
              <span className=" font-semibold text-[rgb(240,72,88)] ">
                Add Restaurant
              </span>
              <div className="text-[rgb(240,72,88)] py-0.5 text-2xl cursor-pointer font-medium tracking-wider">
                <IoMdClose
                  onClick={() => {
                    // setEdit("");
                    setPopup(false);
                  }}
                />
              </div>
            </div>

            <form className="grid  grid-cols-1 gap-x-7 gap-y-4 p-4">
              <div className="inline-flex  w-full flex-col">
                <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                  Restaurant Name
                </label>
                <input
                  required
                  type="text"
                  className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(240,72,88)]"
                />
              </div>
              <div className="inline-flex  w-full flex-col">
                <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                  Email
                </label>
                <input
                  required
                  type="email"
                  className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(240,72,88)]"
                />
              </div>
              <div className="inline-flex  w-full flex-col">
                <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                  Address
                </label>
                <input
                  required
                  type="text"
                  className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(240,72,88)]"
                />
              </div>
              <div className="inline-flex  w-full flex-col">
                <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                  Password
                </label>
                <input
                  required
                  type="password"
                  placeholder=""
                  className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(240,72,88)]"
                />
              </div>
              <div className="inline-flex  w-full flex-col">
                <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                  Tagline
                </label>
                <input
                  required
                  type="text"
                  placeholder=""
                  className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(240,72,88)]"
                />
              </div>
              <div className="inline-flex  w-full flex-col">
                <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                  Phone No.
                </label>
                <input
                  required
                  type="tel"
                  placeholder=""
                  className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(240,72,88)]"
                />
              </div>

              <div className="inline-flex  w-full flex-col">
                <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                  Profile Image
                </label>
                <input
                  required
                  type="file"
                  placeholder=""
                  className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(240,72,88)]"
                />
              </div>
              <div className="inline-flex  w-full flex-col">
                <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                  Menu Image
                </label>
                <input
                  required
                  type="file"
                  placeholder=""
                  className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(240,72,88)]"
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
                    style={{width : '100px'}}
                  />
                </td>
                <td>Saffron</td>
                <td>Saffron@gmail.com</td>
                <td>Grater Noida </td>
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
