import App from "@/App";
import AboutUs from "@/pages/AboutUs";
import AddCar from "@/pages/admin/AddCar";
import ManageCars from "@/pages/admin/ManageCars";
import ManageUsers from "@/pages/admin/ManageUsers";
import UpdateCar from "@/pages/admin/UpdateCar";
import Booking from "@/pages/Booking";
import BookNow from "@/pages/BookNow";
import CarDetails from "@/pages/CarDetails";
import Cars from "@/pages/Cars";
import Error from "@/pages/Error";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Payment from "@/pages/Payment";
import ProtectedRoute from "@/pages/ProtectedRoute";
import SignUp from "@/pages/SignUp";
import UserBookings from "@/pages/UserBookings";
import UserDashboard from "@/pages/UserDashboard";
import UserInfo from "@/pages/UserInfo";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cars",
        element: <Cars />,
      },
      {
        path: "/car/:id",
        element: <CarDetails />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/payment/:bookingId",
    element: <Payment />,
  },
  {
    path: "booking",
    element: (
      <ProtectedRoute>
        <Booking />
      </ProtectedRoute>
    ),
  },
  {
    path: "/book-now/:carId",
    element: (
      <ProtectedRoute>
        {" "}
        <BookNow />{" "}
      </ProtectedRoute>
    ),
  },
  {
    path: "/user-dashboard",
    element: (
      <ProtectedRoute>
        <UserDashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "user-info",
        element: <UserInfo />,
      },
      {
        path: "user-booking",
        element: <UserBookings />,
      },
    ],
  },
  {
    path: "/admin-dashboard",
    element: (
      <ProtectedRoute>
        <UserDashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "admin-info",
        element: <UserInfo />,
      },
      {
        path: "admin-booking",
        element: <UserBookings />,
      },
      {
        path: "manage-cars",
        element: <ManageCars />,
      },
      {
        path: "manage-users",
        element: <ManageUsers />,
      },
      {
        path: "add-car",
        element: <AddCar />,
      },
      {
        path: "update-car/:carId",
        element: <UpdateCar />,
      },
    ],
  },
]);
export default router;
