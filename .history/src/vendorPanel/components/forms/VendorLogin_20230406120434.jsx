/** @format */

import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Oval } from "react-loader-spinner";

const VendorLogin = () => {
  const [pass, setPass] = useState(false);
  const [inputpass, setInputpass] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [email, setE] = useState("");
  const [password, setP] = useState("");

  const login = async (e) => {
    e.preventDefault();
    setLoading(true);
    const url =
      "https://b7w3czz0m2.execute-api.ap-south-1.amazonaws.com/development/api/restaurant/login";
    try {
      const { data } = await axios.post(url, { email, password });
      localStorage.setItem("Vendortoken", data?.tokrn);
      localStorage.setItem("VendorId", data?.r);
      setLoading(false);
      navigate("/vendorDashboard");
      toast.success("Welcome");
    } catch (err) {
      console.log(err?.response?.data?.message);
      toast.error(err?.response?.data?.message);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center bg-slate-100" style={{bac}}>
        <Formik>
          <Form className="shadow-2xl w-96 mx-3 sm:mx-0 sm:w-4/5 md:w-4/6 lg:w-4/5 xl:w-1/2 flex flex-col items-center bg-white p-5 md:py-10 rounded-tl-3xl rounded-br-3xl">
            <span
              className=" text-center text-[rgb(85, 51, 255)]"
              style={{ fontSize: "4rem", color: "#0d9488" }}
            >
              Restaurant Panel
            </span>
            <section className="py-7 space-y-6">
              <div
                className="sm:w-96 border border-[rgb(240,72,88)] space-x-4 flex items-center w-64  p-2"
                style={{ width: "100%" }}
              >
                <Field
                  type="email"
                  placeholder="username@gmail.com"
                  name="email"
                  required
                  onChange={(e) => setE(e.target.value)}
                  className="outline-none px-1  bg-transparent tracking-wider w-full"
                  style={{ fontSize: "20px" }}
                />
                <i
                  className="fa-sharp fa-solid fa-envelope"
                  style={{ fontSize: "20px", color: "#0d9488" }}
                ></i>
              </div>

              <div
                className="sm:w-96 border border-[rgb(240,72,88)] space-x-4 flex items-center w-64  p-2 "
                style={{ width: "100%" }}
              >
                <Field
                  type={inputpass ? "text" : "password"}
                  placeholder="password"
                  name="password"
                  required
                  onChange={(e) => setP(e.target.value)}
                  className="outline-none px-0.5  bg-transparent tracking-wider w-full"
                  style={{ fontSize: "20px" }}
                />

                <span
                  onClick={() => {
                    setPass(!pass);
                    setInputpass(!inputpass);
                  }}
                  className="text-xl cursor-pointer hover:scale-90 "
                >
                  {pass ? (
                    <i
                      className="fa-sharp fa-solid fa-eye-slash"
                      style={{ fontSize: "20px", color: "#0d9488" }}
                    ></i>
                  ) : (
                    <i
                      className="fa-solid fa-eye"
                      style={{ fontSize: "20px", color: "#0d9488" }}
                    ></i>
                  )}
                </span>
              </div>

              <button type="submit" className="button3" onClick={login}>
                {loading ? (
                  <Oval height={30} secondaryColor="black" color="black" />
                ) : (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                    }}
                  >
                    <span>LOG In</span>
                    <i
                      className="fa-solid fa-right-to-bracket"
                      style={{  fontSize: "20px" }}
                    ></i>
                  </div>
                )}
              </button>
              <button
                type="button"
                onClick={() => navigate("/")}
                className="buttonClass2"
              >
                Admin Login
              </button>
            </section>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default VendorLogin;
