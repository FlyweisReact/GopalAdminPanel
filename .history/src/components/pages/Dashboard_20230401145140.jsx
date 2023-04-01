import React from "react";
import HOC from "../layout/HOC";
import {
  MdOutlineLibraryBooks,
  MdCategory,
  MdInfo,
  MdVerifiedUser,
  MdList,
} from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import {useState, useEffect} from 'react';
import axios from 'axios';
import auth from ".././Auth";
import { IoMdClose } from "react-icons/io";

export const dash = (data) => {
  // console.log(data, "dsjkfhjkashfjk");
  return data;
};
const Dashboard = () => {
  const [popup, setPopup] = useState(false);
  const [edit, setEdit] = useState([]);
  const [img, setImg] = useState(
    "https://media.istockphoto.com/vectors/real-estate-design-element-vector-id1308743863?b=1&k=20&m=1308743863&s=170667a&w=0&h=QlOIRhpsyxG-PM5EJNiNImCF1cJY07YpMbKGZKLFZF8="
  );
  const [image, setImage] = useState("");
 // const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addCat, setAddCat] = useState(false);
  const [name, setName] = useState("");
  const params = useParams();
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [plans, setPlans] = useState([]);

  const fetchOrders = async () => {
    const url = `https://b7w3czz0m2.execute-api.ap-south-1.amazonaws.com/development/api/adminMeal`;
    console.log("fetchorderurl", url);
    try {
      const res = await axios.get(url, auth);
      console.log("res", res?.data);
      setPlans(res?.data);
      setLoading(false);
    } catch (err) {
      console.log("err", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <>
 
  </>
  /*  <>
      <section className="grid md:grid-cols-3 grid-cols-2 gap-y-6 gap-x-4 cursor-pointer">
        { Card }
        {card.map((cardItem, index) => {
          return (
            <div
              className="px-5 py-8 bg-slate-200 space-y-2 shadow-xl flex flex-col  rounded-md"
              // onClick={() => Goto(cardItem.redirectionUrl)}
              key={index}
            >
              <div className="grid  justify-between grid-cols-4">
                <div className="flex flex-col col-span-3 space-y-1">
                  <span className="tracking-widest text-gray-900">
                    {cardItem.title}
                  </span>
                  <span className="tracking-wider text-gray-700 text-xl md:text-2xl font-semibold cursor-pointer">
                    {cardItem.number}
                  </span>
                </div>
                <div className="flex rounded-full w-10 h-10 sm:w-12 sm:h-12 bg-white justify-center items-center cursor-pointer">
                  {cardItem.icon}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
    
    
    
    
    
    
    
    
    
    */
  );
};

export default HOC(Dashboard);
