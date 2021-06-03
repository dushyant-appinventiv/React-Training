import React from "react";
import "./whitebox.css";

function PricingBox() {
  return (
    <div className={"container"}>
      <div className={"containerHead"}>
        <div className={"title"}>
          <h1>{"Lite"}</h1>
          <hr />
        </div>
        <div className={"payType"}>
          <h3>{"Free"}</h3>
          {"with restrictions"}
        </div>
      </div>
      <div className={"contentBody"}>
        {"Plan includes:"}
        <ul>
          <li>
            <div className={"icon"}>{"&#x2714;"}</div>
            <div className={"listItem"}>
              {"Manage conversations directly from your website"}
            </div>
          </li>
          <li>
            <div className={"icon"}> {"&#x2714;"} </div>
            <div className={"listItem"}> {"Bot without the AI service"} </div>
          </li>
          <li>
            <div className={"icon"}> {"&#x2714;"} </div>
            <div className={"listItem"}> {"Achieved chat for 30 days."} </div>
          </li>
          <li>
            <div className={"icon"}> {"&#x2714;"} </div>
            <div className={"listItem"}> {"Free, for always"} </div>
          </li>
        </ul>
      </div>
      <div className={"footer"}>
        <p>{"View all the features"}</p>
        <button type={"button"}> {"Start 14 days of free Pro plan"} </button>
      </div>
    </div>
  );
}

export default PricingBox;
