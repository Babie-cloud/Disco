import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
//import "../../../public/styles/login.scss";
import "../../../public/styles/Auth.scss";


// import ThemeToggle from "../../../public/styles/ThemeToggle";
// import AuthLayout from "./AuthLayout"; 
const Login = () => {
  return (
   <div className="auth-page">
  <div className="bubble bubble-1" />
  <div className="bubble bubble-2" />

  <div className="auth-card">
    <h2>Log in.</h2>

  

    <div className="text-center text-sm text-gray-400 mb-4">or</div>

    <form>
      <div>
        <label>Email</label>
        <input type="email" required />
      </div>
      <div>
        <label>Password</label>
        <input type="password" required />
      </div>
      <button type="submit">Log In.</button>
    </form>
     <button className="social-button mt-3">
      <FcGoogle /> Continue with Google
    </button>
    <button className="social-button facebook">
      <FaFacebookF /> Continue with Facebook
    </button>
    <div className="links">
      Don’t have an account? <a href="/signup">Create an account</a>
    </div>
    <div className="links secondary">
      <a href="/reset-password">Forgot password?</a>
    </div>
  </div>
</div>

  );
};

export default Login;
