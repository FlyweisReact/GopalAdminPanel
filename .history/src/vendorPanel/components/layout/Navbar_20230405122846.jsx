import { RiMenu4Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Fragment } from "react";
import { FiSettings } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Navbar = ({ hamb, setHamb }) => {

  return (
<>
<div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#441b8c",
          height: "50px",
          padding: "10px",
        }}
        className="my-1 rounded-sm  p-4 py-3 shadow-md items-center  bg-slate-200 space-x-4"
      >
        <RiMenu4Line
          onClick={() => setHamb(!hamb)}
          className="font-bold text-gray-900 hover:scale-90 cursor-pointer"
          style={{ color: "#aac0bb", fontSize: "20px" }}
        />
        <div
          style={{ display: "flex", gap: "10px" }}
          className="items-center space-x-2  pr-2"
        >
          <section className="flex sm:ml-auto justify-end sm:w-full items-center space-x-2  pr-2">
            <figcaption className="tracking-wider pl-1 font-semibold">
              <div
                className="lg:text-base text-sm text-gray-900  uppercase"
                style={{ color: "#aac0bb", fontSize: "20px" }}
              >
                Welcome
              </div>
            </figcaption>
          </section>
        </div>
      </div>
</>
  );
};

export default Navbar;
