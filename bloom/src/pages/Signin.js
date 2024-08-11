import React, { useState } from "react";
import Bloomslogo from "../images/Bloomslogo.png";
// import axios from "axios";
import { register } from "./Auth";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("password does not match");
      return;
    }
    try {
      await register(email, password);
      setSuccess("Registration successful you can now login");
      setError("");
      setEmail("");
      setPassword("");
      window.location.href = "/li";
    } catch (error) {
      console.error("Registration error", error);
      setError("Registration Failed");
      setSuccess("");
    }
  };
  return (
    <>
      <div className="log">
        <img src={Bloomslogo} alt="" />
        <br />
        <br />
        <p>Lets Signin or create your Account using Email ID!</p>
        <form onSubmit={handleRegister}>
          <label>E-mail ID</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
            required
            value={email}
          />
          <br />
          <br />
          <label>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter password"
            required
            value={password}
          />
          <br />
          <br />
          <label>Confirm Password</label>
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="Enter password"
            value={confirmPassword}
            required
          />
          <br />
          <br />
          <button type="submit">Submit</button>
          {error && <p style={{ color: "red" }}>{}error</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}
        </form>
      </div>
    </>
  );
};

export default Signin;
