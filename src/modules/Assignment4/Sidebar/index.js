import React from "react";
import "./index.scss";
import BrandLogo from "../../../images3/brandlogo.jpeg";

function SideBar() {
  return (
    <aside>
      <div className={"supportAsideHead"}>
        <img src={BrandLogo} alt={"brandLogo"} />
      </div>
      <div className={"supportAsideContent"}>
        <h3> {"TOPICS"} </h3>
        <ul>
          <li>
            <div className={"listItem"}> {"affiliate programs"} </div>
          </li>
          <li>
            <div className={"listItem"}>{"buy & sell cryptocurrencies"}</div>
          </li>
          <li>
            <div className={"listItem"}> {"contact us"} </div>
          </li>
          <li>
            <div className={"listItem"}> {"my xcoins account"} </div>
          </li>
          <li>
            <div className={"listItem"}> {"orders"} </div>
          </li>
          <li>
            <div className={"listItem"}> {"payment mehtod"} </div>
          </li>
          <li>
            <div className={"listItem"}> {"security"} </div>
          </li>
          <li>
            <div className={"listItem"}> {"verification"} </div>
          </li>
          <li>
            <div className={"listItem"}> {"wallet"} </div>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default SideBar;
