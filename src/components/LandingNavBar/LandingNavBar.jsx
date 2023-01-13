import React from "react";
import { NavLink } from "react-router-dom";
// import "./NavBar.css";

function LandingNavBar() {
  return (
    <nav class="flex items-center justify-between  bg-gray-400 p-2">
      <img src={require("./logo.png")} className="h-24 w-32" alt="" />
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="lg:flex-grow pr-4 flex space-x-4 justify-end">
          <NavLink
            className="bg-gray-600 py-3 px-6 text-lg rounded-md w-40  hover:bg-gray-500 text-white"
            to="/dashboard"
            exact
          >
            Admin
          </NavLink>
          <NavLink
            className="bg-gray-600 py-3 px-6 text-lg rounded-md w-40 hover:bg-gray-500 text-white"
            to="/home"
            exact
          >
            Customer
          </NavLink>
          <NavLink
            className="bg-gray-600 py-3 px-6 text-lg rounded-md w-40  hover:bg-gray-500 text-white"
            to="/register"
            exact
          >
            Register
          </NavLink>

          <NavLink
            className="bg-gray-600 py-3 px-6 text-lg rounded-md w-40 hover:bg-gray-500 text-white"
            to="/login"
            exact
          >
            Login
          </NavLink>

        </div>
      </div>
    </nav>
  );
}

export default LandingNavBar;
