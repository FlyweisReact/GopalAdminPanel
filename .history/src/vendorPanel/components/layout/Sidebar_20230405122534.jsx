import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import {
  BiLogOutCircle,
} from "react-icons/bi";
import image from "../../../assets/Final Direct2U Logo-01.png";

import {
  MdDashboardCustomize,

} from "react-icons/md";

const Sidebar = ({ hamb, setHamb }) => {
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

  
    {
      icon: (
        <BiLogOutCircle className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/vendorLogin",
      name: "Logout",
    },
  ];
  return (
    <>
      <aside  className="p-4 h-auto"
        style={{ backgroundColor: "#262626", minHeight: "100vh" }}>
 
        <div className="w-full md:hidden relative  p-2 mb-4">
          <RiCloseLine
            onClick={() => setHamb(!hamb)}
            className="text-3xl  absolute top-2 sm:hover:rotate-[228deg] transition-transform font-bold right-2 sm:hover:text-[22px] text-[rgb(241,146,46)] cursor-pointer"
          />
        </div>
        {/* Logo */}
        <figure className="flex  flex-col items-center">
          <span className="font-bold text-[rgb(241,146,46)]">
           
          </span>
        </figure>
        {/* Nav-menu */}
        <nav className="py-6">
          {nav.map((nav) => {
            return (
              <Link to={nav.link} key={nav.name} className="">
                <span className="flex my-3 items-center cursor-pointer text-gray-900    tracking-wider p-2 rounded-sm">
                  {nav.icon} {nav.name}
                </span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
