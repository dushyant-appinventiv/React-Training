import React from "react";
import "./index.css";
import HeaderImg from "../../../images/header.svg";

function Header() {
  return (
    <div className={"headContainer"}>
      <div className={"headContentSection"}>
        <h1>
          {"9 React Developer Tools"}
          <span> {"to create Better Apps Faster"} </span>
        </h1>
      </div>
      <div className='headImgSection'>
        <img src={HeaderImg} alt={"headerLogo"} />
      </div>
    </div>
  );
}

export default Header;
