import React from "react";
import HOC from "../../../vendorPanel/components/layout/HOC";
import { MdDashboardCustomize, MdOutlineLibraryBooks } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";

export const dash = (data) => {
  console.log(data, "dsjkfhjkashfjk");
  return data;
};
const VendorDashboard = () => {
  const card = [
    {
      progress: "bg-blue-400",
      title: "All Users",
      number: "10",
      icon: <FaUserFriends className="text-2xl text-[rgb(240,72,88)]" />,
    },
    {
      progress: "bg-green-400",
      title: "All Products",
      number: "100",
      icon: (
        <MdOutlineLibraryBooks className="text-2xl text-[rgb(240,72,88)]" />
      ),
    },
    {
      progress: "bg-yellow-400",
      title: "All Orders",
      number: "150",
      icon: <MdDashboardCustomize className="text-2xl text-[rgb(240,72,88)]" />,
    },
    {
      progress: "bg-yellow-400",
      title: "All Categories",
      number: "150",
      icon: <MdDashboardCustomize className="text-2xl text-[rgb(240,72,88)]" />,
    },
  ];
  return (
    <>
      <section className="grid md:grid-cols-3 grid-cols-2 gap-y-6 gap-x-4">
      
      </section>
    </>
  );
};

export default HOC(VendorDashboard);
