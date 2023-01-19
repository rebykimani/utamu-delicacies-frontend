import React from "react";
import Navbar from "./Navbar";
import { TopMeals } from "./Meals/mealCard";
import Footer from "../components/Footer/Footer";
import { NavLink, useNavigate } from "react-router-dom";
import "../App.css";

function MainMenu() {
  const navigate = useNavigate();
  function handleDestroySession(e) {
    e.preventDefault();
    fetch("https://buk-a-meal.herokuapp.com/logout", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        navigate("/");
      } else {
        alert();
      }
    });
  }

  return (
    <div className="home">
      {/* <div className="home-1"> */}
      <Navbar />
      <TopMeals />
      {/* <Footer /> */}
    </div>
  );
}

export default MainMenu;
