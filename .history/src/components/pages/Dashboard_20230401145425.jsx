/** @format */

import React from "react";
import HOC from "../layout/HOC";


const Dashboard = () => {
 
  const card = [
    {
      title: "Total Installations",
      number: "1000",
      icon: <i className="fa-solid fa-gear text-2xl text-[#ff5370]"></i>,
      bg: "#ff5370",
      link: "/customer",
    },
    {
      progress: "bg-yellow-400",
      title: "Total Project's",
      number: data?.data?.booking,
      img: "",
      link: "/Notice/Labour",
      bg: "#ffb64d",
    },
    {
      title: "Total Hero's",
      number: data?.data?.hero,
      icon: <ImUsers className="text-2xl text-[#2ed8b6]" />,
      link: "/generateId",
      bg: "#2ed8b6",
    },

    {
      progress: "bg-yellow-400",
      title: "Total Revenue",
      number: "150",
      icon: <i className="fa-solid fa-money-bill text-2xl text-[#aa5de1]"></i>,
      bg: "#aa5de1",
      link : "/revenue"
    },

    {
      progress: "bg-yellow-400",
      title: "Category Section",
      number: "8",
      icon: <i className="fa-solid fa-money-bill text-2xl text-[#aa5de1]"></i>,
      bg: "#aa5de1",
      link: "/pay",
    },

    {
      title: "Total Customer's",
      number: data?.data?.user,
      icon: <i className="fa-solid fa-user text-2xl text-[#4099ff]"></i>,
      link: "/customer",
      bg: "#4099ff",
    },
  ];

  return (
    <>
      <section className="grid md:grid-cols-3 grid-cols-2 gap-y-6 gap-x-4 cursor-pointer">
      
      </section>
    </>
  );
};

export default HOC(Dashboard);
