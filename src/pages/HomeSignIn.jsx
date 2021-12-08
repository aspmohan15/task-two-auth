import React from "react";
import GoogleAuth from "../components/GoogleAuth";
import Login from "../components/Login";
import { Link } from "react-router-dom";
import "../css/loginCss.css";

export default function HomeSignIn() {
  return (
    <>
      <Login />
      <div className="google-auth-btn">
        <GoogleAuth />
      </div>
      <div>
        <Link
          to="/userDetails"
          className="redirect-content"
          style={{ textDecoration: "none" }}
        ></Link>
      </div>
    </>
  );
}
