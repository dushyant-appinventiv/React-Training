import React from "react";
import "./index.scss";
import BrandLogo from "../../../images3/brandlogo.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import User from "../../../images3/userImg.jpg";

function SupportHead() {
  return (
    <div className={"supportHeadContainer"}>
      <div className={"supportHamburger"}>
        <div className={"line"}></div>
      </div>
      <div className={"supportOptionSection"}>
        <img src={BrandLogo} alt={"brandLogo"} />
        <div className={"supportOptions"}>
          <FontAwesomeIcon icon={faCog} />
          <FontAwesomeIcon icon={faBell} />
          <img src={User} alt={"user"} />
        </div>
      </div>
    </div>
  );
}

export default SupportHead;
