import React from "react";
import "./Header.css";

import logo from "./Images/logo.png";

export default function Header() {
  return (
    <div className="Header">
      <img src={logo} alt="In The Air Weather App Logo" />
    </div>
  );
}
