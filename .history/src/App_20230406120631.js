/** @format */

import { Routes, Route } from "react-router-dom";
import Login from "./components/forms/Login";
import Dashboard from "./components/pages/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Banner from "./components/pages/banner/Banner";
import Orders from "./components/pages/orders/Orders";
import VendorLogin from "./vendorPanel/components/forms/VendorLogin.jsx";

import VendorCategories from "./vendorPanel/components/pages/categories/VendorOrder";
import VendorOrders from "./vendorPanel/components/pages/orders/VendorOrders";
import VendorSupport from "./vendorPanel/components/pages/support/VendorTransaction";
import Commission from "./vendorPanel/components/pages/commission/Commission";
import VendorReports from "./vendorPanel/components/pages/reports/VendorReports";
import VendorComplaints from "./vendorPanel/components/pages/complaints/VendorComplaints";
import VendorComments from "./vendorPanel/components/pages/comments/VendorComments";
import VendorTransactions from "./vendorPanel/components/pages/transactions/VendorTransactions";
import VendorUsers from "./vendorPanel/components/pages/users/VendorUsers";
import VendorDashboard from "./vendorPanel/components/pages/VendorDashboard";
import VendorPrivacy from "./vendorPanel/components/pages/privacyPolicy/VendorPrivacy";
import VendorFavorites from "./components/pages/favorites/VendorFavorites";
import CouponsDiscount from "./vendorPanel/components/pages/couponsDiscount/CouponsDiscount";
import VendorAddProduct from "./vendorPanel/components/pages/products/VendorCatering";
import Payment2 from "./components/pages/paymentGateway/payment2";
import Notification from "./components/pages/notifications";
import Setting from "./components/pages/setting/Setting";
import Restaurant from "./components/pages/Restaurant/Restaurant";
import Dishes from "./components/pages/Dishes/Dishes";
import MealType from "./vendorPanel/components/pages/VendorBanner";
import DeliveryAgents from "./components/pages/deliveryAgents";
import AdminBanner from "./components/pages/AdminBanner";
import AdminMeal from "./components/pages/AdminMeal";
import RestaurantOrder from "./components/pages/RestaurantOrder";
import Catering from "./components/pages/Catering";
import Users from "./components/pages/users/Users";
import Transaction from "./components/pages/Transaction";
import VendorCategory from "./vendorPanel/components/pages/products/VendorCategory";
import VendorDish from "./vendorPanel/components/pages/products/VendorDish";
import VendorCatering from "./vendorPanel/components/pages/products/VendorCatering";

function App() {
  return (
    <>
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin/banner" element={<AdminBanner />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/admin/meals" element={<AdminMeal />} />
        <Route path="/dishes" element={<Dishes />} />
        <Route path="/payment" element={<Payment2 />} />
        <Route path="/banners" element={<Banner />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/deliveryAgents" element={<DeliveryAgents />} />
        <Route path="/restaurants" element={<Restaurant />} />
        <Route path="/admin/restaurant-orders" element={<RestaurantOrder />} />
        <Route path="/admin/catering-service" element={<Catering />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/payment" element={<Transaction />} />
        

        {/* ---------------Vendor Panel----------------------- */}
        <Route path="/vendorLogin" element={<VendorLogin />} />
        <Route path="/vendorDashboard" element={<VendorDashboard />} />
        <Route path="/vendorCoupons" element={<CouponsDiscount />} />
        <Route path="/Vendor/Banner" element={<MealType />} />
        <Route path="/Vendor/Category" element={<VendorCategory />} />
        <Route path="/Vendor/Dish" element={<VendorDish />} />
        <Route path="/Vendor/Catering-services" element={<VendorCatering />} />
        <Route path="/Vendor/Orders" element={<VendorCategories />} />
        <Route path="/Vendor/Transaction" element={<VendorSupport />} />
      </Routes>
    </>
  );
}

export default App;
