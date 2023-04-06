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
import VendorSupport from "./vendorPanel/components/pages/support/VendorTransaction";
import VendorDashboard from "./vendorPanel/components/pages/VendorDashboard";
import CouponsDiscount from "./vendorPanel/components/pages/couponsDiscount/CouponsDiscount";
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
import VendorSubscription from "./vendorPanel/components/pages/VendorSubscription";
import AdminCoupon from "./components/pages/AdminCoupon";
import AdminVBanner from "./components/pages/AdminVBanner";
import AdminVCategories from "./components/pages/AdminVCategories";
import AdminVDishes from "./components/pages/AdminVDishes";
import AdminVCatering from "./components/pages/AdminVCatering";
import AdminVOrders from "./components/pages/AdminVOrders";
import AdminVTransaction from "./components/pages/AdminVTransaction";
import AdminVSubscription from "./components/pages/AdminVSubscription";

function App() {
  return (
    <>
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin/banner" element={<AdminBanner />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/restaurants" element={<Restaurant />} />
        <Route path="/deliveryAgents" element={<DeliveryAgents />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/admin/restaurant-orders" element={<RestaurantOrder />} />
        <Route path="/admin/payment" element={<Transaction />} />
        <Route path="/admin/vendor-coupon/:id" element={<AdminCoupon />} />
        <Route path="/admin/vendor-banner/:id" element={<AdminVBanner />} />
        <Route
          path="/admin/vendor-category/:id"
          element={<AdminVCategories />}
        />
        <Route path="/admin/vendor-dishes/:id" element={<AdminVDishes />} />
        <Route
          path="/admin/vendor-catering-service/:id"
          element={<AdminVCatering />}
        />
        <Route path="/admin/vendor-orders/:id" element={<AdminVOrders />} />
        <Route
          path="/admin/vendor-transaction/:id"
          element={<AdminVTransaction />}
        />
        <Route
          path="/admin/vendor-subscription/:id"
          element={<AdminVSubscription />}
          
        />
        <Route path="/admin/users" element={<Users />} />



        <Route path="/admin/meals" element={<AdminMeal />} />
        <Route path="/dishes" element={<Dishes />} />
        <Route path="/payment" element={<Payment2 />} />
        <Route path="/banners" element={<Banner />} />
        <Route path="/admin/catering-service" element={<Catering />} />


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
        <Route path="/Vendor/Subscription" element={<VendorSubscription />} />
      </Routes>
    </>
  );
}

export default App;
