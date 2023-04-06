/** @format */

import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = ({ hamb, setHamb }) => {
  const navigate = useNavigate()
  const nav = [
    {
      icon: <i class="fa-solid fa-user"></i>,
      link: "/dashboard",
      name: "Dashboard",
    },
    {
      icon: <i class="fa-solid fa-user"></i>,
      link: "/admin/banner",
      name: "Banners",
    },
    {
      icon: <i class="fa-solid fa-user"></i>,
      link: "/users",
      name: "Users",
    },
    {
      icon: <i class="fa-solid fa-user"></i>,
      link: "/orders",
      name: "Plan Types",
    },
    {
      icon: <i class="fa-solid fa-user"></i>,
      link: "/admin/meals",
      name: "Meals",
    },
    {
      icon: <i class="fa-solid fa-user"></i>,
      link: "/dishes",
      name: "Dishes",
    },
    
    {
      icon: <i class="fa-solid fa-user"></i>,
      link: "/banners",
      name: "Coupons",
    },
    {
      icon: <i class="fa-solid fa-user"></i>,
      link: "/setting",
      name: "Cancellation Policy",
    },
    {
      icon: <i class="fa-solid fa-user"></i>,
      link: "/payment",
      name: "Payments",
    },
    {
      icon: <i class="fa-solid fa-user"></i>,
      link: "/restaurants",
      name: "Restaurant",
    },
    {
      icon: <i class="fa-solid fa-user"></i>,
      link: "/deliveryAgents",
      name: "Delivery Agents",
    },

    {
      icon: <i class="fa-solid fa-user"></i>,
      link: "/notifications",
      name: "Notifications",
    },
    {
      icon: <i class="fa-solid fa-user"></i>,
      link: "//admin/restaurant/orders",
      name: "Notifications",
    },
  ];

  const logOut = () => {
    localStorage.clear()
    navigate('/')
  }

  return (
    <>
      <div className="p-4 h-auto" style={{backgroundColor:" rgb(38, 53, 68)" ,  minHeight: "100vh"}}>
        <div className="w-full md:hidden relative  p-2 mb-4">
          <RiCloseLine
            onClick={() => setHamb(!hamb)}
            className="text-3xl  absolute top-2 sm:hover:rotate-[228deg] transition-transform font-bold right-2 sm:hover:text-[22px] text-[rgb(241,146,46)] cursor-pointer"
          />
        </div>
        <figure className="flex  flex-col items-center">
          <span
            style={{ fontSize: "2rem" , textAlign: "center" ,color: "rgb(255, 255, 255)" }}
          >
            Admin Panel
          </span>
        </figure>
        <nav className="py-6">
          {nav.map((nav) => {
            return (
              <Link
                to={nav.link}
                key={nav.name}
                style={{ textDecoration: "none" }}
              >
                <span
                  className="flex my-3 items-center cursor-pointer   tracking-wider p-2 rounded-sm gap-2"
                  style={{ color: "#aac0bb", fontSize: "2rem" }}
                >
                  {nav.icon} {nav.name}
                </span>
              </Link>
            );
          })}

          <span
            className="flex my-3 items-center cursor-pointer text-gray-900    tracking-wider p-2 rounded-sm"
            style={{ color: "#aac0bb"  , fontSize : '20px' , display : 'flex' , gap : '10px'}}
            onClick={() =>logOut()}
          >
           <i class="fa-solid fa-user"></i>  Logout
          </span>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
