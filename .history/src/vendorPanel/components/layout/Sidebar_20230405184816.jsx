import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";


const Sidebar = ({ hamb, setHamb }) => {
  const navigate = useNavigate()
  const nav = [
    {
      icon: <i className="fa-solid fa-cart-shopping"></i>,
      link: "/vendorDashboard",
      name: "Dashboard",
    },
    {
      icon: <i className="fa-solid fa-cart-shopping"></i>,
      link: "/vendorCoupons",
      name: "Coupons",
    },
    {
      icon: <i className="fa-solid fa-cart-shopping"></i>,
      link: "/Vendor/Banner",
      name: "Banner",
    },
    {
      icon: <i className="fa-solid fa-cart-shopping"></i>,
      link: "/Vendor/Category",
      name: "Category",
    },
    {
      icon: <i className="fa-solid fa-bowl-food"></i>,
      link: "/Vendor/Dish",
      name: "Dishes",
    },
    {
      icon: <i className="fa-solid fa-bowl-food"></i>,
      link: "/Vendor/Catering-services",
      name: "Catering Services",
    },
    {
      icon: <i className="fa-solid fa-bowl-food"></i>,
      link: "/Vendor/Orders",
      name: "Orders",
    },
    {
      icon: <i className="fa-solid fa-bowl-food"></i>,
      link: "/Vendor/Transaction",
      name: "Transaction",
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
            Restaurant Panel
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
