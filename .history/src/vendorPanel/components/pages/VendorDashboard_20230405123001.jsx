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
      {card.map((card, index) => {
          return (
            <div
              className="px-5 py-8 bg-slate-200 space-y-2 shadow-xl flex flex-col  rounded-md"
              key={index}
              onClick={() => navigate(`${card.link ? card.link : "#"}`)}
              style={{ cursor: "pointer", backgroundColor: `${card.bg}` , width : '100%' }}
            >
              <div className="grid  justify-between grid-cols-4">
                <div className="flex flex-col col-span-3 space-y-1">
                  <span
                    className="tracking-widest text-gray-900"
                    style={{ color: "white" , fontSize : '20px' }}
                  >
                    {card.title}
                  </span>
                  <span
                    className="tracking-wider text-gray-700 text-xl md:text-2xl font-semibold"
                    style={{ color: "white" , fontSize : '20px'  }}
                  >
                    {card.number}
                  </span>
                </div>
                <div className="flex rounded-full w-10 h-10 sm:w-12 sm:h-12 bg-white justify-center items-center myICons" >
                  {card.img ? <img src={card.img} alt=""  /> : card.icon}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default HOC(VendorDashboard);
