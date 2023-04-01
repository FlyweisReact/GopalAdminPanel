/** @format */

import React, { useState } from "react";
import { VscEyeClosed, VscEye } from "react-icons/vsc";
import { HiOutlineMail } from "react-icons/hi";
import { BiLogInCircle } from "react-icons/bi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Oval } from "react-loader-spinner";

const Login = () => {
  const [pass, setPass] = useState(false);
  const [inputpass, setInputpass] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const login = async (values) => {
    setLoading(true);
    const url =
      "https://b7w3czz0m2.execute-api.ap-south-1.amazonaws.com/development/api/admin/login";
    try {
      const res = await axios.post(url, values);
      localStorage.setItem("direct", res.data.token);
      console.log(res?.data);
      setLoading(false);
      navigate("/dashboard");
      toast.success("Welcome");
    } catch (err) {
      console.log("err", err);
      toast.error("Please try again");
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <form
          className="w-96 mx-3 sm:mx-0 sm:w-4/5 md:w-4/6 lg:w-4/5 xl:w-1/2 flex flex-col items-center bg-white p-5 md:py-10 rounded-tl-3xl rounded-br-3xl"
          onSubmit={login}
        >
          <p style={{fontSize : '3rem' , fontWeight : '600'}}>
            Admin Panel
          </p>
          <section className="py-7 space-y-6">
            <div style={{display : 'flex' , gap : '10px' , alignItems : 'center'}}>
              <input
                type="email"
                placeholder="username@gmail.com"
                name="email"
                required
                style={{background : 'transparent'}}
              />
              <HiOutlineMail className="text-xl " />
            </div>
            <div className="shadow-2xl sm:w-96 border border-[rgb(240,72,88)] space-x-4 flex items-center w-64  p-2 rounded-full">
              <input
                type={inputpass ? "text" : "password"}
                placeholder="password"
                name="password"
                required
                className="outline-none px-0.5  bg-transparent tracking-wider w-full"
              />

              <span
                onClick={() => {
                  setPass(!pass);
                  setInputpass(!inputpass);
                }}
                className="text-xl cursor-pointer hover:scale-90 "
              >
                {pass ? <VscEyeClosed /> : <VscEye />}
              </span>
            </div>

            <button
              type="submit"
              className="py-2 cursor-pointer tracking-wider bg-[rgb(240,72,88)] flex justify-center items-center w-full rounded-full font-medium   "
            >
              {loading ? (
                <Oval height={30} secondaryColor="black" color="black" />
              ) : (
                <div className="flex items-center">
                  <span className="flex items-center justify-center">
                    LOG In
                  </span>
                  <BiLogInCircle className="pl-1.5 text-2xl" />
                </div>
              )}
            </button>
            <button
              type="button"
              onClick={() => navigate("/vendorLogin")}
              className="py-2 cursor-pointer tracking-wider bg-[rgb(240,72,88)] flex justify-center items-center w-full rounded-full font-medium   "
            >
              Vendor Login
            </button>
          </section>
        </form>
      </div>
    </>
  );
};

export default Login;
