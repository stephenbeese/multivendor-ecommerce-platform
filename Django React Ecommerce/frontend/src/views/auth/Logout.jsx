import React from "react";
import { useEffect } from "react";
import { logout } from "../../utils/auth";
import { Link } from "react-router-dom";

export default function Logout() {
  useEffect(() => {
    logout();
  }, []);
  return (
    <div>
      <h1>Logout</h1>
      <Link to={"/register"}>Register</Link>
      <br />
      <Link to={"/login"}>Login</Link>
    </div>
  );
}
