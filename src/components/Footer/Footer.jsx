import React from "react";
import { Link } from "react-router-dom";
import { MdEmail, MdFacebook } from "react-icons/md";
import { FiPhoneCall, FiInstagram, FiTwitter } from "react-icons/fi";
import {FaYoutube } from "react-icons/fa";


function Footer() {
  return (
    <div className="bg-gray-500">
      <div className="grid-cols-3 gap-x-72 flex flex-row ">
        <div>
          <img src={require("./logo.png")} alt="" />
          <br></br>
          <h1>YOUR MEAL PARTNER</h1>
        </div>
        <div>
          <h1>Menu</h1>
           <Link
            to="/"className="underline hover:underline-offset-4">
              Home
            </Link>
            <br></br>
            <Link
            to="/"className="underline hover:underline-offset-4">
              How it Works
            </Link>
            <br></br>
            <Link
            to="/"className="underline hover:underline-offset-4">
              Recipe Resources
            </Link>
        </div>

        <div>
            <MdEmail/> info@utamuDelicacies.com
            <FiPhoneCall/> +655 879 545
            <div className="box-border  w-32 p-4 bg-white flex space-x-2">
                <MdFacebook/>
                <FiInstagram/>
                <FiTwitter/>
                <FaYoutube/>

            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
