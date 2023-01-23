import { useState, useRef } from "react";
import { useNavigate, NavLink, Link } from "react-router-dom";
import axios from "axios";

import meat from "../components/img/logo.jpg";

import "../App.css";

function LoginAdmin() {
  const navigate = useNavigate();

  // setUser
  const api = "http://127.0.0.1:3000/login";
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await axios
        .post(api, {
          users: formData,
        })
        .then((data) => {
          localStorage.setItem("token", data.token);
          navigate("/home");
          console.log(data);
        });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <div className="login">
        <div className="login-left">
          <img src={meat} alt="login-image" />
        </div>
        <div className="login-right">
          <span>welcome To Utamu delicacies</span>
          <p>Enter your details to login</p>

          <div className="">
            <form onSubmit={handleSubmit}>
              <div className="input-field">
                <label htmlFor="email">Email:</label> <br />
                <input
                  className="field"
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="input-field">
                <label htmlFor="password">Password </label> <br />
                <input
                  className="field"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="input-field">
                <Link to="/addNewMeal" className="field">
                  Login
                </Link>
                <div className="input-field">
                  <strong>Don't have an account? </strong>
                  <NavLink to={"/register"} exact="true" className="field">
                    <b className="field">Go to Register</b>
                  </NavLink>
                </div>
              </div>
            </form>

            {/* <div>
            {isShown && (
              <div>
                <h2>You are now logged in!</h2>
              </div>
            )}
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginAdmin;
