import React from "react";
import LandingNavBar from "../LandingNavBar/LandingNavBar";

function Landing() {
  return (
    <div className="bg-sky-800">
      <LandingNavBar />
      <div className="flex flex-row space-x-4 mx-12 my-8">
        <div class="box-border p-2  bg-slate-50 flex flex-col space-y-4 rounded-md  ">
          <div className=" max-w-xl grid grid-cols-1 gap-9">
            <h1 className="">DO MORE WITH YOUR TIME</h1>
            <h3 className="text-2xl font-semibold">
              BOOK YOUR MEAL IN ADVANCE AT UTAMU DELICACIES
            </h3>
            <button className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 w-40 rounded-full ">
              Make your order
            </button>
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
