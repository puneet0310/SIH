import React, { useState } from "react";
import { UseJPLogin } from "../Hooks/UseJPLogin";
import { UseJSLogin } from "../Hooks/UseJSLogin";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

// Import video file
import backgroundVideo from '../Components/assets/videoBg.mp4'; // Adjust path as needed

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
    <>
      {/* Internal CSS */}
      <style>{`
        .login-container {
          position: relative;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          
        }

        .bg-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -1;
        }

        .login-form-container {
          position: relative;
          background: rgba(255, 255, 255, 0.9);
          padding: 20px;
          border-radius: 10px;
          z-index: 1;
          box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
          width: 90%;
          max-width: 400px;
        }

        .form-group {
          margin-bottom: 15px;
        }

        .Heading {
          font-size: 24px;
          font-weight: bold;
          text-align: center;
          margin-bottom: 20px;
        }

        .dropDownList {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size: 16px;
        }

        .userNameIn,
        .passwordIn {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size: 16px;
          margin-top: 5px;
        }

        .submitBtn {
          width: 100%;
          background-color: #007bff;
          color: white;
          border: none;
          padding: 10px;
          cursor: pointer;
          border-radius: 5px;
          font-size: 16px;
          transition: background-color 0.3s ease;
        }

        .submitBtn:hover {
          background-color: #0056b3;
        }

        .show-password {
          position: absolute;
          right: 10px;
          top: 10px;
          cursor: pointer;
        }

        .error-message {
          color: red;
          margin-top: 10px;
          text-align: center;
        }

      `}</style>

      <div className="login-container">
        {/* Background video */}
        <video autoPlay muted loop className="bg-video">
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Form container */}
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
                <option value="JS">Looking for a JOB</option>
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
    </>
  );
};

export default Login;
