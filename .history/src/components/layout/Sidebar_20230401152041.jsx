/** @format */

import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Sidebar = ({ hamb, setHamb }) => {
  const nav = [
    {
      icon: <i class="fa-solid fa-user"></i>,
      link: "/users",
      name: "Users",
    },
    {
      icon: <i class="fa-solid fa-user"></i>,
      link: "/restaurants",
      name: "Restaurant",
    },
    {
      icon: <i class="fa-solid fa-user"></i>,
      link: "/cateringServices",
      name: "Catering Services",
    },
    {
      icon: <i class="fa-solid fa-user"></i>,
      link: "/deliveryAgents",
      name: "Delivery Agents",
    },
    {
      icon: <i class="fa-solid fa-user"></i>,
      link: "/dishes",
      name: "Dishes",
    },
    {
      icon: <i class="fa-solid fa-user"></i>,
      link: "/profile",
      name: "Profile Update",
    },

    {
      icon: <i class="fa-solid fa-user"></i>,
      link: "/dashboard",
      name: "Meal Type",
    },

    {
      icon: <i class="fa-solid fa-user"></i>,
      link: "/banners",
      name: "Coupons",
    },
    {
      icon: <i class="fa-solid fa-user"></i>,
      link: "/orders",
      name: "Plan Types",
    },
    {
      icon: <i class="fa-solid fa-user"></i>,
      link: "/payment-3",
      name: "Catering Payments",
    },
    {
      icon: <i class="fa-solid fa-user"></i>,
      link: "/notifications",
      name: "Notifications",
    },

    {
      icon: <i class="fa-solid fa-user"></i>,
      link: "/payment",
      name: "Payments",
    },
    {
      icon: <i class="fa-solid fa-user"></i>,
      link: "/setting",
      name: "Cancellation Policy",
    },
    {
      icon: <i class="fa-solid fa-user"></i>,
      link: "/about-us",
      name: "About Us",
    },
  ];
  return (
    <>
      <div className="p-4" style={{backgroundColor:" rgb(38, 53, 68)"; min-height: 100vh}}>
        <div className="w-full md:hidden relative  mb-4">
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
            style={{ color: "#aac0bb" }}
          >
            Logout
          </span>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
