import React from "react";
import LandingNavBar from "../LandingNavBar/LandingNavBar";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="bg-orange-50">
      <LandingNavBar />
      <div className="flex flex-row space-x-4 mx-12 my-8">
        <div class="box-border p-2  bg-slate-50 flex flex-col space-y-4 rounded-md  ">
          <div className=" max-w-xl grid grid-cols-1 gap-9">
            <h1 className="">DO MORE WITH YOUR TIME</h1>
            <h3 className="text-2xl font-semibold">
              BOOK YOUR MEAL IN ADVANCE AT UTAMU DELICACIES
            </h3>
            <div className="flex space-x-3">
            {/* <Link to="/registeradmin" className="bg-cyan-500 rounded-full px-2 p-2 h-10 w-40 hover:bg-cyan-300"> Admin Login</Link>
            <Link to="/register" className="bg-cyan-500 rounded-full px-1 p-1 w-40 hover:bg-cyan-300">Customer Login</Link> */}
            </div>
            <div className="flex flex-row h-80 max-w-fit w-80 space-x-4">
              <img
                className=""
                src={require("./chicken.jpg")}
                alt=""
              />
              <img className="" src={require("./beverage.jpg")} alt="" />
            </div>
          </div>
        </div>
        <img
          className="object-none object-right rounded-t-md border-4"
          src={require("./food.jpg")}
          alt=""
        />
      </div>
    </div>
  );
}

export default Landing;
