import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import {
  BiLogOutCircle,
} from "react-icons/bi";

import {
  MdDashboardCustomize,

} from "react-icons/md";

const Sidebar = ({ hamb, setHamb }) => {
  const navigate = useNavigate()
  const nav = [
    {
      icon: (
        <MdDashboardCustomize className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/vendorDashboard",
      name: "Dashboard",
    },
    {
      icon: (
        <CgProfile className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/vendorCoupons",
      name: "Coupons",
    },
    {
      icon: (
        <CgProfile className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/vendorPlanType",
      name: "Plan-Type",
    },
    {
      icon: (
        <CgProfile className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/vendorMealType",
      name: "Meal-Type",
    },
    {
      icon: (
        <CgProfile className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/vendorDishes",
      name: "Dishes",
    },
    {
      icon: (
        <CgProfile className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/vendorNotification",
      name: "Notifications",
    },
  ];


  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <>
       <div
        className="p-4 h-auto"
        style={{ backgroundColor: "#262626", minHeight: "100vh" }}
      >
        <div className="w-full md:hidden relative  p-2 mb-4">
          <RiCloseLine
            onClick={() => setHamb(!hamb)}
            className="text-3xl  absolute top-2 sm:hover:rotate-[228deg] transition-transform font-bold right-2 sm:hover:text-[22px] text-[rgb(241,146,46)] cursor-pointer"
          />
        </div>
        <figure className="flex  flex-col items-center">
          <span
            style={{
              fontSize: "2rem",
              textAlign: "center",
              color: "#fff",
            }}
          >
            Admin Panel
          </span>
        </figure>
        <nav className="py-2">
          {nav.map((nav) => {
            return (
              <Link
                to={nav.link}
                key={nav.name}
                style={{ textDecoration: "none" }}
              >
                <span
                  className="flex my-3 items-center cursor-pointer   tracking-wider p-2 rounded-sm gap-2"
                  style={{ color: "#fff", fontSize: "2rem" }}
                >
                  {nav.icon} {nav.name}
                </span>
              </Link>
            );
          })}

          <span
            className="flex my-3 items-center cursor-pointer text-gray-900    tracking-wider p-2 rounded-sm"
            style={{
              color: "#fff",
              fontSize: "20px",
              display: "flex",
              gap: "10px",
            }}
            onClick={() => logOut()}
          >
            <i class="fa-solid fa-user"></i> Logout
          </span>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
