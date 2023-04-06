/** @format */

import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Oval } from "react-loader-spinner";

const Login = () => {
  const [pass, setPass] = useState(false);
  const [inputpass, setInputpass] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const login = async (values) => {
    setLoading(true);
    const url =
      "https://b7w3czz0m2.execute-api.ap-south-1.amazonaws.com/development/api/admin/login";

    try {
      const res = await axios.post(url, values);
      localStorage.setItem("direct", res.data.token);
      setLoading(false);
      navigate("/dashboard");
      alert("Welcome Admin")
    } catch (err) {
      setError(true);
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className="w-full h-screen flex flex-col justify-center items-center "
        style={{ backgroundColor: "#6610f2" }}
      >
        <Formik
          initialValues={{
            email: "admin@example.com",
            password: "test1234",
          }}
          onSubmit={(values) => {
            login(values);
          }}
        >
          <Form className="shadow-2xl w-96 mx-3 sm:mx-0 sm:w-4/5 md:w-4/6 lg:w-4/5 xl:w-1/2 flex flex-col items-center bg-white p-5 md:py-10 rounded-tl-3xl rounded-br-3xl">
            {error ? (
              <div className="alertDiv">
                <i className="fa-solid fa-circle-xmark" onClick={() => setError(false)}></i>
                <p>No Admin exist with provided Email</p>
              </div>
            ) : (
              ""
            )}

            <span
              className=" text-center text-[rgb(85, 51, 255)]"
              style={{ fontSize: "4rem", color: "rgb(85, 51, 255)" }}
            >
              Admin Panel
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
                  className="outline-none px-1  bg-transparent tracking-wider w-full"
                  style={{ fontSize: "20px" }}
                />
                <i
                  className="fa-sharp fa-solid fa-envelope"
                  style={{ fontSize: "20px", color: "rgb(85, 51, 255)" }}
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
                      style={{ fontSize: "20px", color: "rgb(85, 51, 255)" }}
                    ></i>
                  ) : (
                    <i
                      className="fa-solid fa-eye"
                      style={{ fontSize: "20px", color: "rgb(85, 51, 255)" }}
                    ></i>
                  )}
                </span>
              </div>
              <button type="submit" className="button2">
                {loading ? (
                  <Oval height={30} secondaryColor="black" color="black" style={{display : 'block' , mar}} />
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
                      style={{ color: "#fff", fontSize: "20px" }}
                    ></i>
                  </div>
                )}
              </button>
              <button
                type="button"
                onClick={() => navigate("/vendorLogin")}
                className="buttonClass"
              >
                Restaurant Login
              </button>
            </section>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default Login;
