/** @format */

import React from "react";
import BaseUrl from "../../BaseUrl";
import { useState, useEffect } from "react";
import HOC from "../../layout/HOC";
import { Oval } from "react-loader-spinner";
import axios from "axios";
import { useParams } from "react-router-dom";
import auth from "../../Auth";
import { GrFormClose } from "react-icons/gr";
import { toast } from "react-toastify";

const Dishes = () => {
  const [Dishes, setDishes] = useState([]);

  const url =
    "https://b7w3czz0m2.execute-api.ap-south-1.amazonaws.com/development/api/adminDishes";

  const fetchDishes = async () => {
    try {
      const res = await axios.get(url, auth);
      setDishes(res?.data);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    fetchDishes();
  }, []);


  return (
    <>
      <section>
        <div>
          <p style={{ color: "black", fontSize: "20px" }}>All Dishes</p>
        </div>
        <div>
          <div className=" wcomp overflow-y-auto">
        
            <table className="table-auto  w-full text-left whitespace-no-wrap">
              <thead>
                <tr className=" border-b bg-slate-200 shadow-xl text-gray-900">
                  <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                    Dish Image
                  </th>
                  <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                    Dish Name
                  </th>
                  <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                    Dish Description
                  </th>
                  <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                    Price for Small portion
                  </th>
                  <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                    Price for Medium portion
                  </th>
                  <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                    Price for Large portion
                  </th>
                  <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                    Currency
                  </th>
                  <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                    Likes
                  </th>

                  <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {Dishes?.map((e, i) => {
                  return (
                    <tr key={i} className="tracking-wider text-gray-900">
                      <td className=" py-3 w-36 md:text-base text-sm ">
                        <img src={e.foodImg} alt="" />
                      </td>
                      <td className="px-4 py-3 md:text-base text-sm cursor-pointer">
                        {e.dishName}
                      </td>
                      <td className="px-4 py-3 md:text-base text-sm cursor-pointer">
                        {e.description}
                      </td>
                      <td className="px-4 py-3 md:text-base text-sm cursor-pointer">
                        {e.priceForSmallPortion}
                      </td>
                      <td className="px-4 py-3 md:text-base text-sm cursor-pointer">
                        {e.priceForMediumPortion}
                      </td>
                      <td className="px-4 py-3 md:text-base text-sm cursor-pointer">
                        {e.priceForLargePortion}
                      </td>
                      <td className="px-4 py-3 md:text-base text-sm cursor-pointer">
                        {e.currency}
                      </td>
                      <td className="px-4 py-3 md:text-base text-sm cursor-pointer">
                        {e.numLikes}
                      </td>

                      <td className="px-4 py-3  space-x-3">
                      <i class="fa-solid fa-trash" style={{color : 'red'}}></i>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};
export default HOC(Dishes);
