import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../App.css";

function Navbar({ user }) {
  return (
    <div>
      <nav className="bg-slate-200 flex items-center justify-between h-36 ">
      <img src={require("./logo.png")} className="h-24 w-32" alt="" />
        <div className="text-3xl">
          <NavLink to={"/home"} exact="true">
            Utamu Delicacies
          </NavLink>
        </div>
        <div className="items">
          <ul className="flex space-x-4">
            <NavLink to={"/home"} exact="true" className="btn-text">
              Home
            </NavLink>

            <Link to={"/profile"} className="btn-text">
              <h3 className="">{user ? `${user.first_name}` : "Account"}</h3>
            </Link>

            <NavLink to={"/cart"} exact="true" className="btn-text mr-4">
              Cart
            </NavLink>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
