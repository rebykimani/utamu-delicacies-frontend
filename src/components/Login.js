import { useState, useRef } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import axios from 'axios';

import meat from "../components/img/logo.jpg";

import "../App.css";

function Login() {
  // setUser
 const api ="http://127.0.0.1:3000/login"
   const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios.post('api/session', {
        customers: formData
      });
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.error(error);
    }
  }
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [isShown, setIsShown] = useState(false);


  // const navigate = useNavigate();
  // const form = useRef(null);
  // const handleClick = () => {
  //   setIsShown((current) => !current);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (email === "" || password === "") {
  //     console.log("empty state");
  //     return;
  //   }

  //   console.log(
  //     JSON.stringify({
  //       email,
  //       password,
  //     })
  //   );

  //   fetch("http://127.0.0.1:3000/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     body: JSON.stringify({
  //       email,
  //       password,
  //     })
  //   }).then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => {setUser(user)
  //         user.customer === true ? navigate("/dashboard") : navigate("/mondaymenu");
  //       });

  //       setEmail("");
  //       setPassword("");
  //       setIsShown((current) => !current);
  //     } else {
  //       alert("Failed to Log in");
  //     }
  //   });

  //   form.current.reset();
  // };

  return (
    <div className="login">
      <div className="login-left">
        <img src={meat} alt="meet" />
      </div>
      <div className="login-right">
        <h1>Utamu delicacies</h1>
        <p>welcome To Utamu delicacies</p>

        <div className="login-label">
          <form className="login-label" onSubmit={handleSubmit}>
            <div className="login-label">
              <label className="label-1" htmlFor="email">
                Email:
              </label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="login-label">
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="btn-right">
              <button type="submit" className="btn-menu">
                Login
              </button>
              <div className="link">
                <NavLink to={"/register"} exact="true" className="">
                  Dont have an Account? <span>click here!!</span>
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
  );
}

export default Login;
