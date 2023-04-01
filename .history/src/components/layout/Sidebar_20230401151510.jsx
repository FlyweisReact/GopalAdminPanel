import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { MdPermDataSetting } from "react-icons/md";
import { Link } from "react-router-dom";
import { BsBorderWidth } from "react-icons/bs";
import {  MdOutlineInfo } from "react-icons/md";
import { BiUser, BiRestaurant, BiDish } from "react-icons/bi";
import { GiKnightBanner } from "react-icons/gi";
import { BiLogOutCircle } from "react-icons/bi";
import {  BiMoney } from "react-icons/bi";
import { AiFillProfile } from "react-icons/ai";

import {
  MdDashboardCustomize,

} from "react-icons/md";

const Sidebar = ({ hamb, setHamb }) => {
  const nav = [
    {
      icon: (
        <BiUser className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/users",
      name: "Users",
    },
    {
      icon: (
        <BiRestaurant className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/restaurants",
      name: "Restaurant",
    },
    {
      icon: (
        <BiRestaurant className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/cateringServices",
      name: "Catering Services",
    },
    {
      icon: (
        <BiRestaurant className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/deliveryAgents",
      name: "Delivery Agents",
    },
    {
      icon: (
        <BiDish className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/dishes",
      name: "Dishes",
    },
    {
      icon: (
        <AiFillProfile className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/profile",
      name: "Profile Update",
    },

    {
      icon: (
        <MdDashboardCustomize className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/dashboard",
      name: "Meal Type",
    },
  
    {
      icon: (
        <GiKnightBanner className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/banners",
      name: "Coupons",
    },
    {
      icon: (
        <BsBorderWidth className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/orders",
      name: "Plan Types",
    },
    {
      icon: (
        <BsBorderWidth className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/payment-3",
      name: "Catering Payments",
    },
    {
      icon: (
        <BsBorderWidth className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/notifications",
      name: "Notifications",
    },

     {
       icon: (
         <BiMoney className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
       ),
       link: "/payment",
       name: "Payments",
    },
    {
      icon: (
        <MdPermDataSetting className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/setting",
      name: "Cancellation Policy",
    },
    {
      icon: (
        <MdOutlineInfo className="text-2xl" />
      ),
      link: "/about-us",
      name: "About Us",
    },
 
  ];
  return (
    <>
       <div
        className="p-4"
        style={{width : '100%'}}
      >
        <div className="w-full md:hidden relative  mb-4">
          <RiCloseLine
            onClick={() => setHamb(!hamb)}
            className="text-3xl  absolute top-2 sm:hover:rotate-[228deg] transition-transform font-bold right-2 sm:hover:text-[22px] text-[rgb(241,146,46)] cursor-pointer"
          />
        </div>
        <figure className="flex  flex-col items-center">
          <span
            style={{ fontSize: "3rem", textAlign: "center", color: "#fff" }}
          >
            Admin Panel
          </span>
        </figure>
        <nav className="py-6">
          {nav.map((nav) => {
            return (
              <Link to={nav.link} key={nav.name} style={{textDecoration : 'none'}} >
                <span
                  className="flex my-3 items-center cursor-pointer   tracking-wider p-2 rounded-sm"
                  style={{ color: "#aac0bb" , fontSize : '2rem' }}
                >
                  {nav.icon} {nav.name}
                </span>
              </Link>
            );
          })}

          <span
            className="flex my-3 items-center cursor-pointer text-gray-900    tracking-wider p-2 rounded-sm"
            style={{ color: "#aac0bb" }}
          >
            <BiLogOutCircle className="text-xl mr-3" /> Logout
          </span>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
