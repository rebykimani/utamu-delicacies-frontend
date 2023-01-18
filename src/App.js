// import { useState } from React;
import "./App.css";
import React, { useState } from "react";
import Landing from "./components/LandingPage/Landing";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import Footer from "./components/Footer/Footer";
import Dashboard from "./Admin/Dashboard";
import TodaysMeal from "./Admin/TodaysMeal";
import Order from "./Admin/Order";
import Amount from "./Admin/Amount";
import Login from "./components/Login";
import Home from "./components/Home";
import MainMenu from "./components/MainMenu";
import MondayMeal from "./components/Meals/MondayMeal";
import Profile from "./components/Profile";


function App() {
  const [user, setUser] = React.useState(null);
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<SignUp />} />
        <Route exact path="/todaysMeal" element={<TodaysMeal />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/order" element={<Order />} />
        <Route exact path="/amount" element={<Amount />} />
        <Route exact path="/mainmenu" element={<MainMenu />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/profile" element={<Profile />} />
        {/* <Route exact path="/mondaymenu  */}
      </Routes>
      {/* <Dashboard /> */}
      <Footer />
    </div>
  );
}

export default App;
