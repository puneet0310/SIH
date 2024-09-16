import React, { useState } from "react";
import { UseJPLogin } from "../Hooks/UseJPLogin";
import { UseJSLogin } from "../Hooks/UseJSLogin";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa"; // Import updated icons

import videosrc from "./assets/videoBg.mp4";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { JPlogin, error } = UseJPLogin();
  const { Userlogin, usererror } = UseJSLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (type === "JP") {
      await JPlogin(email, password);
    } else if (type === "JS") {
      await Userlogin(email, password);
    }
  };

  return (
    <div className="videoBg">
      <style>{`@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
* {
  font-family: poppins, sans-serif;
  font-size: 1rem;
  margin: 0;
  padding: 0;
  background-color: rgb(255, 254, 253);
}
.videoBg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.login-container {
  display: flex;
  justify-content: center;
  background-color: white;
  margin-top: 250px;
  border: 10px;
  z-index: 1;
}
.dropDownList {
  border-radius: 25px;
}
.onscreenU {
  font-size: 1.2rem;
}
.userNameIn {
  border-radius: 25px;
  width: 50vh;
  padding: 7px;
}
.onscreenP {
  font-size: 1.2rem;
}
.passwordIn {
  border-radius: 25px;
  width: 50vh;
  padding: 7px;
}
.submitBtn {
  background-color: #9767f0;
  width: 100px;
  height: 35px;
  margin-top: 25px;
  margin-left: 150px;
}
.form-group {
  border: 15px;
  border-color: black;
}
.Heading {
  font-size: 3.5rem;
  font-weight: 900;
  margin-left: 150px;
}
.submitBtn:hover {
  background-color: #ad81ff;
  width: 100px;
  height: 35px;
  margin-top: 25px;
  margin-left: 150px;
}
`}</style>
      <video autoPlay muted loop id="background-video">
        <source src={videosrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="login-container">
        <div className="login-form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <p className="Heading">Login</p>
              <label htmlFor="user">Select User Type</label>
              <br />
              <select
                id="user"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="dropDownList"
              >
                <option value="">Select</option>
                <option value="JP">JOB PROVIDER</option>
                <option value="JS">Looking for an JOB</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="username" className="onscreenU">
                Username
              </label>
              <br />
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="userNameIn"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="onscreenP">
                Password
              </label>
              <br />
              <div style={{ position: "relative" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="passwordIn"
                />
                <span
                  className="show-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </span>
              </div>
            </div>
            <input type="submit" value="Login" className="submitBtn" />
          </form>
          {error && <div className="error-message">{error}</div>}
          {usererror && <div className="error-message">{usererror}</div>}
        </div>
      </div>
    </div>
  );
};

export default Login;
