import "./App.css";
import React,{useState} from "react";
import Landing from "./components/LandingPage/Landing";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import Footer from "./components/Footer/Footer";
import Dashboard from "./Admin/Dashboard";
import TodaysMeal from "./Admin/TodaysMeal";
import Order from "./Admin/Order";
import Amount from "./Admin/Amount";
function App() {
  const [user, setUser] = useState(null);
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        {/* <Route exact path="/login" element={<LoginPage />} /> */}
        <Route exact path="/register" element={<SignUp />} />
        <Route exact path="/todaysMeal" element={<TodaysMeal />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/order" element={<Order />} />
        <Route exact path="/amount" element={<Amount />} />
      </Routes>
      {/* <Dashboard /> */}
      <Footer />
    </div>
  );
}

export default App;
