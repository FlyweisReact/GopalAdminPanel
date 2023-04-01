import React, { useEffect, useState } from "react";
import { GrFormClose } from "react-icons/gr";
import HOC from "../../layout/HOC";
import axios from "axios";
import auth from "../../Auth";
import BaseUrl from "../../BaseUrl";
import { toast } from "react-toastify";

const Users = () => {

  const [popup, setPopup] = useState(false);
  const [users, setUsers] = useState([]);
  const [data, setData] = useState([]);

  const fetchUsers = async () => {
    const url = BaseUrl() + "/api/admin/users";
    try {
      const res = await axios.get(url, auth);
      setUsers(res?.data);
    } catch (err) {
      console.log("err", err);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteuser = async (_id) => {
    const url = BaseUrl() + `/api/admin/users/${_id}`;
    try {
      const res = await axios.delete(url, auth);
      toast.success("User Deleted Success");
      fetchUsers();
    } catch (e) {
      setData(e.message);
      toast.error(e.name);
    }
  };

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
