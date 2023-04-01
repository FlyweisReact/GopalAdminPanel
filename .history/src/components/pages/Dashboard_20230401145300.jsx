/** @format */

import React from "react";
import HOC from "../layout/HOC";
import {
  MdOutlineLibraryBooks,
  MdCategory,
  MdInfo,
  MdVerifiedUser,
  MdList,
} from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import auth from ".././Auth";
import { IoMdClose } from "react-icons/io";

const Dashboard = () => {
 

  return (
    <>
      <section className="grid md:grid-cols-3 grid-cols-2 gap-y-6 gap-x-4 cursor-pointer">
      
      </section>
    </>
    /*  
      

    
    
    
    
    

       <section>
      <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
        <span className="tracking-widest text-slate-900 font-semibold uppercase ">
          Plan Type
        </span>
        <button
          onClick={() => {
            setEdit("");
            setPopup(!popup);
          }}
          className="md:py-2 px-3 md:px-4 py-1 rounded-full bg-[rgb(240,72,88)] text-white tracking-wider"
        >
          Add Plan
        </button>
      </div>
      <section
        className={
          popup
            ? "fixed top-0 left-0 wcomp bg-[rgb(0,0,0,0.5)] transition-all duration-150 w-full flex justify-center items-center overflow-y-auto  h-screen "
            : "hidden"
        }
      >
        <div className="bg-slate-100 overflow-y-auto  lg:w-3/6  md:w-4/6 w-5/6 mx-auto  rounded-lg">
          <div className="flex sticky top-0 py-3 px-5 bg-slate-100 justify-between">
            <span className=" font-semibold text-[rgb(240,72,88)] ">
              Add Plan
            </span>
            <div className="text-[rgb(240,72,88)] py-0.5 text-2xl cursor-pointer font-medium tracking-wider">
              <IoMdClose
                onClick={() => {
                  setEdit("");
                  setPopup(false);
                }}
              />
            </div>
          </div>

          <form className="grid  grid-cols-1 gap-x-7 gap-y-4 p-4">
      
            <div className="inline-flex  w-full flex-col">
              <label
                htmlFor="name"
                className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm"
              >
                Name
              </label>
              <input
                // value={edit ? edit.category : name}
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
                required
                type="text"
                placeholder=""
                className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(241,146,46)]"
              />
            </div>
            <div className="inline-flex  w-full flex-col">
              <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                Order Image
              </label>
              <input
                onChange={(e) => setImage(e.target.files[0])}
                required
                type="file"
                className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(241,146,46)]"
              />
            </div>
      

            <button
              type="submit"
              className="bg-[rgb(240,72,88)] flex items-center justify-center cursor-pointer w-40 hover:bg-[rgb(241,146,46)] py-1 rounded-full"
            >
              {/* {addCat ? (
                <Oval height={30} color="black" secondaryColor="black" />
              ) : (
                "Add"
              )} 
              Add Meals
            </button>
          </form>
        </div>
      </section>

      <div className=" wcomp overflow-y-auto">
        <table className="table-auto  w-full text-left whitespace-no-wrap">
          <thead>
            <tr className=" border-b bg-slate-200 shadow-xl text-gray-900">
              <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm">
                Meal Type
              </th>

              <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm">
                Actions
              </th>
              {/*<th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm">
                Email
              </th>
              <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
                Mobile No.
              </th>
              <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
                Address
              </th>
              <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
                Pincode
              </th>
              <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
                Role
              </th>
              <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {plans?.map((e, i) => {
              console.log("users===>", users);
              return (
                <tr key={i} className="tracking-wider text-gray-900 ">
                  <td className=" py-3 w-36 md:text-base text-sm ">
                     {e.typeOfMeal}
                  </td>
                  <td className="px-4 py-3 md:text-base text-sm">
                    Actions
                  </td>
                  
                  {/*<td className="px-4 py-3  space-x-3">
                    <button
                      className="md:py-2 px-3 md:px-4 py-1 rounded-full bg-[rgb(240,72,88)] text-white tracking-tight"
                      onClick={(id) => {
                        navigate(`/vieworder/${e._id}`);
                      }}
                    >
                      View Order
                    </button>
                    <button
                      className="md:py-2 px-2 md:px-2 py-1 rounded-full bg-[rgb(240,72,88)] text-white tracking-tight"
                      onClick={(id) => {
                        navigate(`/usertransactions/${e._id}`);
                      }}
                    >
                      View User Transactions
                    </button>
                  </td> 
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
    
    
    
    
    */
  );
};

export default HOC(Dashboard);
