// import React, { useState } from "react";
import Bloomslogo from "../images/Bloomslogo.png";
// // import axios from "axios";
// import { login } from "./Auth";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     console.log("email", email);
//     console.log("password", password);
//     try {
//       const token = await login(email, password);
//       console.log("login successful, token:", token);
//       alert("login successful");
//       setError();
//       window.location.href = "/";
//     } catch (err) {
//       console.error("login error", error);
//       setError("Login Failed");
//     }
//   };
//   return (
//     <>
//       <div className="log">
//         <img src={Bloomslogo} alt="" />
//         <br />
//         <br />
//         <p>Lets login to your Account!</p>
//         <form onSubmit={handleLogin}>
//           <label>E-mail ID</label>
//           <input
//             onChange={(e) => setEmail(e.target.value)}
//             type="email"
//             id="email"
//             placeholder="Enter email"
//             value={email}
//             required
//           />
//           <br />
//           <br />
//           <label>Password</label>
//           <input
//             onChange={(e) => setPassword(e.target.value)}
//             type="password"
//             id="password"
//             placeholder="Enter password"
//             value={password}
//             required
//           />
//           <br />
//           <br />
//           <button type="submit">Enter</button>
//           {error && <p style={{ color: "red" }}>{error}</p>}
//         </form>
//       </div>
//     </>
//   );
// };
// export default Login;
import React, { useState } from "react";
import { login } from "./Auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("email:", email);
    console.log("password:", password);

    try {
      const token = await login(email, password);
      console.log("Login Successful,token:", token);
      alert("login successful");
      setError("");
      window.location.href = "/";
    } catch (err) {
      console.error("login error:", err);
      setError("Login failed");
    }
  };

  return (
    <div>
      <div className="log">
        <img src={Bloomslogo} alt="" />
        <br />
        <br />
        <p>Lets login to your Account!</p>
        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input
            value={email}
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
          <br />
          <br />
          <label>Password</label>
          <input
            value={password}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <button type="submit">Submit</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
