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
     <MdOutlineInfo style={{fontSize : '20px'}} />
      ),
      link: "/restaurants",
      name: "Restaurant",
    },
    {
      icon: (
         <MdOutlineInfo style={{fontSize : '20px'}} />
      ),
      link: "/cateringServices",
      name: "Catering Services",
    },
    {
      icon: (
       <MdOutlineInfo style={{fontSize : '20px'}} />
      ),
      link: "/deliveryAgents",
      name: "Delivery Agents",
    },
    {
      icon: (
         <MdOutlineInfo style={{fontSize : '20px'}} />
      ),
      link: "/dishes",
      name: "Dishes",
    },
    {
      icon: (
         <MdOutlineInfo style={{fontSize : '20px'}} />
      ),
      link: "/profile",
      name: "Profile Update",
    },

    {
      icon: (
         <MdOutlineInfo style={{fontSize : '20px'}} />
      ),
      link: "/dashboard",
      name: "Meal Type",
    },
  
    {
      icon: (
         <MdOutlineInfo style={{fontSize : '20px'}} />
      ),
      link: "/banners",
      name: "Coupons",
    },
    {
      icon: (
         <MdOutlineInfo style={{fontSize : '20px'}} />
      ),
      link: "/orders",
      name: "Plan Types",
    },
    {
      icon: (
       <MdOutlineInfo style={{fontSize : '20px'}} />
      ),
      link: "/payment-3",
      name: "Catering Payments",
    },
    {
      icon: (
        <MdOutlineInfo style={{fontSize : '20px'}} />
      ),
      link: "/notifications",
      name: "Notifications",
    },

     {
       icon: (
          <MdOutlineInfo style={{fontSize : '20px'}} />
       ),
       link: "/payment",
       name: "Payments",
    },
    {
      icon: (
        <MdOutlineInfo style={{fontSize : '20px'}} />
      ),
      link: "/setting",
      name: "Cancellation Policy",
    },
    {
      icon: (
        <MdOutlineInfo style={{fontSize : '20px'}} />
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
                  className="flex my-3 items-center cursor-pointer   tracking-wider p-2 rounded-sm gap-2"
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
