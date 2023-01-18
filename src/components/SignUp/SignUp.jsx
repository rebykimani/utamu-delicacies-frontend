import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Login from "../Login";

function SignUp({ setStoredToken }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // const API = "http://localhost:3000";

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:3000/customers", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customers: {
          name,
          email,
          password,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.jwt);
        console.log(data);
        setStoredToken(data.jwt);
      });
    setName("");
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      navigate("/home");
    }
  }, []);

  // function handleRegister(event) {
  //   event.preventDefault();
  //   // Send a request to the server to register the user
  //   // ...
  //   // In the response, get the token and store it in local storage
  //   localStorage.setItem("token", "token");
  //   setIsAuthenticated(true);
  //   navigate("/dashboard");
  // }

  // function handleLogout() {
  //   localStorage.removeItem("token");
  //   setIsAuthenticated(false);
  //   navigate("/login");
  // }

  return (
    <div className="bg-sky-800">
      <div>
        <br></br>
        <h1 className="text-center text-white font-mono text-4xl">
          {" "}
          WELCOME TO UTAMU DELICACIES
        </h1>
      </div>

      <div className="flex items-center justify-center">
        <div className="flex flex-row space-x-4 mx-44 my-8 ">
          <img className="rounded-t-md" src={require("./food.jpg")} alt="" />
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit} className="bg-cyan-500 rounded-full p-2 hover:bg-cyan-300">Submit</button>
            <p>Already have an account?</p>
          <Link to="/login" className="bg-cyan-500 rounded-full p-2 w-8 hover:bg-cyan-300">Login</Link>
          </form>


          {/* // <ToastContainer /> */}
          {/* {registered && <Navigate to="/login" />} */}
        </div>
      </div>
    </div>
  );
}
export default SignUp;
