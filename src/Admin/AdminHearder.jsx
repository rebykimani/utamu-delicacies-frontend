import React from "react";
import { FiLogOut } from "react-icons/fi";
import { NavLink } from "react-router-dom";

function AdminHearder() {
  return (
    <div className="bg-gray-500">
      <div className="flex justify-evenly">
        <img src={require("./logo.png")} alt="" />
        <h1 className=" text-white text-3xl mt-6 ml-3">ADMIN</h1>
        <div class="lg:flex-grow pr-4 flex space-x-4 justify-end mt-10 ">
        <NavLink
            className=" underline underline-offset-2 py-3 px-6 text-lg rounded-md w-40 hover:bg-slate-50"
            to="/dashboard"
            exact
          >
            Dashboard
          </NavLink>
          <NavLink
            className=" underline underline-offset-2 py-3 px-6 text-lg rounded-md w-40 hover:bg-slate-50"
            to="/todaysMeal"
            exact
          >
            Today's Meal
          </NavLink>
          <NavLink
            className=" underline underline-offset-2 py-3 px-6 text-lg rounded-md w-40 hover:bg-slate-50"
            to="/order"
            exact
          >
            Order
          </NavLink>
          <NavLink
            className="underline underline-offset-2 py-3 px-6 text-lg rounded-md w-40 hover:bg-slate-50"
            to="/amount"
            exact
          >
            Amount
          </NavLink>
          <div className="">
          <a href="register">
            <div className="flex space-x-4 mt-6 hover:bg-white">
              Logout <FiLogOut size="20px" />
            </div>
          </a>
        </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHearder;
