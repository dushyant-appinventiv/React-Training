import React from "react";
import "./header.css";

function Header() {
  return (
    <div className={"headerContainer"}>
      <h1 className={"heading"}>
        Start now your <span>free plan</span>
      </h1>
      <p className={"contactBox"}>
        Are you a corporate?
        <a href='www.google.com'> Contact us </a>
      </p>
    </div>
  );
}

export default Header;
