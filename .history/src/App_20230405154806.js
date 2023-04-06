/** @format */

import { Routes, Route } from "react-router-dom";
import Login from "./components/forms/Login";
import Dashboard from "./components/pages/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Banner from "./components/pages/banner/Banner";
import Orders from "./components/pages/orders/Orders";
import VendorLogin from "./vendorPanel/components/forms/VendorLogin.jsx";
import VendorProducts from "./vendorPanel/components/pages/products/VendorCategory";
import VendorCategories from "./vendorPanel/components/pages/categories/VendorCategories";
import VendorOrders from "./vendorPanel/components/pages/orders/VendorOrders";
import VendorSupport from "./vendorPanel/components/pages/support/VendorSupport";
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
import VendorAddProduct from "./vendorPanel/components/pages/products/VendorAddProduct";
import VendorViewProduct from "./vendorPanel/components/pages/products/VendorViewProduct";
import Payment2 from "./components/pages/paymentGateway/payment2";
import Notification from "./components/pages/notifications";
import Setting from "./components/pages/setting/Setting";
import Restaurant from "./components/pages/Restaurant/Restaurant";
import Dishes from "./components/pages/Dishes/Dishes";
import PlanType from "./vendorPanel/components/pages/planType";
import MealType from "./vendorPanel/components/pages/VendorBanner";
import VendorDishes from "./vendorPanel/components/pages/vendorDishes";
import VendorNotification from "./vendorPanel/components/pages/vendorNotification";
import CateringServices from  "./components/pages/cateringServices";
import DeliveryAgents from "./components/pages/deliveryAgents";
import AdminBanner from "./components/pages/AdminBanner";
import AdminMeal from "./components/pages/AdminMeal";
import RestaurantOrder from "./components/pages/RestaurantOrder";
import Catering from "./components/pages/Catering";
import Users from "./components/pages/users/Users";
import Transaction from "./components/pages/Transaction";

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




        {/* /restaurant/:id/coupons */}

        {/* ---------------Vendor Panel----------------------- */}
        <Route path="/vendorLogin" element={<VendorLogin />} />
        <Route path="/vendorDashboard" element={<VendorDashboard />} />
        <Route path="/vendorCoupons" element={<CouponsDiscount />} />
        <Route path="/Vendor/Banner" element={<MealType />} />
        <Route path="/Vendor/Category" element={<VendorCategories />} />


        <Route path="/vendorViewProduct/:id" element={<VendorViewProduct />} />
        <Route path="/vendorAddProduct" element={<VendorAddProduct />} />
        <Route path="/vendorCategories" element={<VendorCategories />} />
        <Route path="/vendorOrders" element={<VendorOrders />} />
        <Route path="/vendorSupport" element={<VendorSupport />} />
        <Route path="/commission" element={<Commission />} />
        <Route path="/vendorReports" element={<VendorReports />} />
        <Route path="/vendorComplaints" element={<VendorComplaints />} />
        <Route path="/vendorComments" element={<VendorComments />} />
        <Route path="/vendorTransactions" element={<VendorTransactions />} />
        <Route path="/vendorUsers" element={<VendorUsers />} />
        <Route path="/vendorPrivacy" element={<VendorPrivacy />} />
        <Route path="/vendorFavorites" element={<VendorFavorites />} />
        <Route path="/vendorCommission" element={<Commission />} />
        <Route path="/vendorPlanType" element={<PlanType />} />
        <Route path="/vendorDishes" element={<VendorDishes />} />
        <Route path="/vendorNotification" element={<VendorNotification />} />
        <Route path="/cateringServices" element={<CateringServices />} />
      </Routes>
    </>
  );
}

export default App;
