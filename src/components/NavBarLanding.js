import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

function Navbar({ setIsAuthenticated }) {
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/login");
  }
  return (
    <div>
      <nav className="bg-black flex items-center justify-between h-36 ">
        <img src={require("./logo.png")} className="h-24 w-32" alt="" />
        <div className="text-3xl text-white">
          <NavLink to={"/home"} exact="true">
            Utamu Delicacies
          </NavLink>
        </div>
        <div className="items">
          <ul className="flex space-x-4 ">
            <NavLink
              to={"/home"}
              exact="true"
              className="btn-text text-white bg-gray-700"
            >
              Home
            </NavLink>

            {/* <Link to={"/profile"} className="btn-text">
              <h3 className="">{user ? `${user.first_name}` : "Account"}</h3>
            </Link> */}

            <NavLink
              to={"/orderCustomer"}
              exact="true"
              className="btn-text mr-4 text-white hover: bg-gray-700"
            >
              Cart
            </NavLink>
            <div className="btn-text mr-4">
              <a href="/">
                <div
                  className="flex space-x-4 mt-6 hover:bg-gray-600 text-white"
                  onClick={handleLogout}
                >
                  Logout <FiLogOut size="20px" />
                </div>
              </a>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
