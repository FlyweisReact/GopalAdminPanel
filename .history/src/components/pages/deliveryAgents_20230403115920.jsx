import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import BaseUrl from "../BaseUrl";
import auth from "../Auth";
import { IoMdClose } from "react-icons/io";
import { GrFormClose } from "react-icons/gr";
import { toast } from "react-toastify";
import HOC from "../layout/HOC";
import { Oval } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import {BsEyeFill} from 'react-icons/bs'

const Restaurant = () => {
  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase">
            Delivery Agents
          </span>
    
        </div>
  
        <div className=" wcomp overflow-y-auto">

          <table className="table-auto  w-full text-left whitespace-no-wrap">
            <thead>
              <tr className=" border-b bg-slate-200 shadow-xl text-gray-900">
                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  Restaurant Image
                </th>
                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  Restaurant Name
                </th>
                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  Email
                </th>
                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  Address
                </th>
                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  TagLine
                </th>
                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  Contact
                </th>
                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  Restaurant Menu
                </th>
                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  Role
                </th>
                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  Rating
                </th>
                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  Avg Rating
                </th>
                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm">
                Dishes
                </th>
                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm">
                Coupans
                </th>
                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm">
                Categories
                </th>
                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {restaurant?.map((e, i) => {
                return (
                  <tr key={i} className="tracking-wider text-gray-900">
                    <td className=" py-3 w-36 md:text-base text-sm ">
                      <img
                        src={`https://amol-home-foodie.herokuapp.com/${e.profile}`}
                        alt={e.name}
                        className="xl:w-36 shadow-xl rounded-lg lg:w-32 md:w-28 w-24"
                      />
                    </td>
                    <td
                      onClick={() => navigate(`/Restaurantby/${e._id}`)}
                      className="px-4 py-3 md:text-base text-sm cursor-pointer"
                    >
                      {e.name}
                    </td>
                    <td
                      onClick={() => navigate(`/Restaurantby/${e._id}`)}
                      className="px-4 py-3 md:text-base text-sm cursor-pointer"
                    >
                      {e.email}
                    </td>
                    <td
                      onClick={() => navigate(`/Restaurantby/${e._id}`)}
                      className="px-4 py-3 md:text-base text-sm cursor-pointer"
                    >
                      {e.address}
                    </td>
                    <td
                      onClick={() => navigate(`/Restaurantby/${e._id}`)}
                      className="px-4 py-3 md:text-base text-sm cursor-pointer"
                    >
                      {e.tagline}
                    </td>
                    <td
                      onClick={() => navigate(`/Restaurantby/${e._id}`)}
                      className="px-4 py-3 md:text-base text-sm cursor-pointer"
                    >
                      {e.contact}
                    </td>
                    <td
                      onClick={() => navigate(`/Restaurantby/${e._id}`)}
                      className="px-4 py-3 md:text-base text-sm cursor-pointer"
                    >
                      <img
                        src={`https://amol-home-foodie.herokuapp.com/${e.restaurantMenu}`}
                        alt={e.name}
                        className="xl:w-36 shadow-xl rounded-lg lg:w-32 md:w-28 w-24"
                      />
                    </td>
                    <td
                      onClick={() => navigate(`/Restaurantby/${e._id}`)}
                      className="px-4 py-3 md:text-base text-sm cursor-pointer"
                    >
                      {e.role}
                    </td>
                    <td
                      onClick={() => navigate(`/Restaurantby/${e._id}`)}
                      className="px-4 py-3 md:text-base text-sm cursor-pointer"
                    >
                      {e.numRatings}
                    </td>
                    <td
                      onClick={() => navigate(`/Restaurantby/${e._id}`)}
                      className="px-4 py-3 md:text-base text-sm cursor-pointer"
                    >
                      {e.avgStarRating}
                    </td>
                    <td className="px-4 py-3  space-x-3">
                      <button className="font-semibold tracking-widest">
                        <BsEyeFill
                          className="text-lg md:text-2xl"
                          onClick={() => navigate(`/${e._id}/dishes`)}
                        />
                      </button>
                    </td>
                    <td className="px-4 py-3  space-x-3">
                      <button className="font-semibold tracking-widest">
                        <BsEyeFill
                          className="text-lg md:text-2xl"
                          onClick={() => navigate(`/restaurant/${e._id}/coupons`)}
                        />
                      </button>
                    </td>
                    <td className="px-4 py-3  space-x-3">
                      <button className="font-semibold tracking-widest">
                        <BsEyeFill
                          className="text-lg md:text-2xl"
                          onClick={() => navigate(`/${e._id}/categories`)}
                        />
                      </button>
                    </td>
                    <td className="px-4 py-3  space-x-3">
                      <button className="font-semibold tracking-widest">
                        <GrFormClose
                          className="text-lg md:text-2xl"
                          onClick={() => deleteRestaurant(e._id)}
                        />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default HOC(Restaurant);
