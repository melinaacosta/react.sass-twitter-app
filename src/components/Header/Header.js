import React from "react";
import "./Header.scss";
import TwitterLogo from "../../assets/img/twitter-logo.png";

export default function Header() {
  return (
    <div className="header">
      <img src={TwitterLogo} alt="tweets simulator" />
      <h1>Inicio</h1>
    </div>
  );
}
