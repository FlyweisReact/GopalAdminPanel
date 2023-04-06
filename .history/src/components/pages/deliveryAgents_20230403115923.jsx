import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import BaseUrl from "../BaseUrl";
import auth from "../Auth";
import { IoMdClose } from "react-icons/io";
import { GrFormClose } from "react-icons/gr";
import { toast } from "react-toastify";
import HOC from "../layout/HOC";
import { Oval } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import {BsEyeFill} from 'react-icons/bs'

const Restaurant = () => {
  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase">
            Delivery Agents
          </span>
    
        </div>
  
        <div className=" wcomp overflow-y-auto">

   
        </div>
      </section>
    </>
  );
};

export default HOC(Restaurant);
