import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Login from "../Login";

function SignUpAdmin({ setStoredToken }) {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [customer, setCustomer] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // const API = "http://localhost:3000";
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:3000/users", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        users: {
          username,
          email,
          password,
          customer,
          admin,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
        console.log(data);
      });
    setName("");
    setEmail("");
    setPassword("");
    setCustomer(false);
    setAdmin(false);
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      navigate("/dashboard");
    }
  }, []);

  // Flag to indicate if the user has successfully registered
  const [registered, setRegistered] = useState(false);
  // Register the user using the provided username, email, and password
  const handleRegister = () => {
    // Validate the provided values
    if (!username || !email || !password) {
      toast.error("Please enter a valid username, email, and password.", {
        position: "top-center",
      });
      return;
    } else if (!customer && !admin) {
      toast.error("Please select either customer or admin", {
        position: "top-center",
      });
      return;
    }
  };

  return (
    <div className="bg-orange-50">
      <div>
        <br></br>
        <h1 className="text-center text-black font-mono text-4xl">
          {" "}
          <span>WELCOME TO UTAMU DELICACIES</span>
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-row space-x-4 mx-44 my-8 ">
          <img className="rounded-t-md" src={require("./food.jpg")} alt="" />

          <form className="input-field">
            <label>
              Username:
              <br />
              <input
                className="field"
                type="text"
                name="name"
                value={username}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <br />
            <label>
              Email
              <br />
              <input
                className="field"
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <br />
            <label>
              Password
              <br />
              <input
                className="field"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              </label>
            {/* </label> */}
            <br />
            {/* <label className="px-3">
              <input
                className="px-4"
                type="radio"
                checked={customer}
                onChange={() => {
                  setCustomer(true);
                  setAdmin(false);
                }}
              />
              Customer
            </label>
            <label>
              <input
                type="radio"
                checked={admin}
                onChange={() => {
                  setCustomer(true);
                  setAdmin(false);
                }}
              />
              Admin
            </label> */}
            <br />
            {/* <button onClick={handleSubmit}>Submit</button> */}
            <button onClick={handleSubmit} className="field">
              Submit
            </button>
            <p className="input-field">
              Already have an account?{" "}
              <Link to="/loginadmin" className="field">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
export default SignUpAdmin;
