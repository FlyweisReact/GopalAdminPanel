import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { toast } from "react-toastify";
import HOC from "../../layout/HOC";
import axios from "axios";
import { TiDelete } from "react-icons/ti";

const CouponsDiscount = () => {
  const [popup, setPopup] = useState(false);
  const token = localStorage.getItem("Vendortoken");
  const [edit, setEdit] = useState("");
  const [coupons, setCoupons] = useState([]);
  const [restaurantId, setResId] = useState("");

  const fetchCoupons = async () => {
    const url = "https://b7w3czz0m2.execute-api.ap-south-1.amazonaws.com/development/api/getAllCouponsOfRestaurant/63f4823419c730ffe0f71135";

    try {
      const {data} = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
     // console.log(data);
      setCoupons(data);
      setResId(data.requiredResults?.[0].restaurantId);
      console.log(restaurantId);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    fetchCoupons();
  }, []);

  const [name, setN] = useState("");
  const [discountPercent, setD] = useState("");
  //const restaurantId = "63f4823419c730ffe0f71135";

  const addCoupon = async (e) => {
    e.preventDefault();
    const url = "https://b7w3czz0m2.execute-api.ap-south-1.amazonaws.com/development/api/createcoupen";
    const token = localStorage.getItem("Vendortoken");
    try {
      const res = await axios.post(
        url,
        { name, discountPercent, restaurantId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res)
      toast.success("Coupon added SuccessFully");
      fetchCoupons();
    } catch (err) {
      console.log("err", err);
    }
  };

  const deleteCoupon = async (id) => {
    const url = `https://b7w3czz0m2.execute-api.ap-south-1.amazonaws.com/development/api/deleteCouponById/${id}`;
    console.log(id);
    try {
      const res = await axios.delete(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Deleted Successfully");
      fetchCoupons();
    } catch (err) {
      console.log("err", err);
      toast.error("Please try again");
    }
  };

  return (
    <>
    <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
        <p style={{ fontSize: "20px", color: "black" }}>
          All Catering Services
        </p>
        <Button variant="outline-success" style={{ fontSize: "20px" }}>
          Add Catering Service
        </Button>
      </div>

      <div
          style={{
            width: "100%",
            overflow: "auto",
            marginTop: "20px",
            fontSize: "16px",
          }}
        >
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Image</th>
                <th>TItle</th>
                <th>Description</th>
                <th>Discounted Price</th>
                <th>Actual Price</th>
                <th>Ratings</th>
                <th>Packs</th>
                <th>Discount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img
                    src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
                    alt=""
                    style={{ width: "100px" }}
                  />
                </td>
                <td>Food Name</td>
                <td>Lorem Ipsum </td>
                <td>₹525.0 </td>
                <td>₹229.5</td>
                <td>5</td>
                <td>
                    <p>10 Pack</p>
                    <p>15 Pack</p>
                    <p>20 Pack</p>
                    
                </td>
                <td>15%</td>
                <td>
                  <i className="fa-solid fa-trash" style={{ color: "red" }}></i>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
    </>
  );
};

export default HOC(CouponsDiscount);
