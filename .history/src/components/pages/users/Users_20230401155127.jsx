import React, { useEffect, useState } from "react";
import { GrFormClose } from "react-icons/gr";
import HOC from "../../layout/HOC";
import axios from "axios";
import auth from "../../Auth";
import BaseUrl from "../../BaseUrl";
import { toast } from "react-toastify";

const Users = () => {




  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white ">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Users
          </span>
        </div>

        <div className=" wcomp overflow-y-auto">
     
        </div>
      </section>
    </>
  );
};

export default HOC(Users);
