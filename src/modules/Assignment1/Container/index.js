import React from "react";
import "./container.css";
import InfoBox from "../InfoBox";
import Header from "../Header";
import PurpleBox from "../PricingBox/PurpleBox";
import WhiteBox from "../PricingBox/WhiteBox";

function Container() {
  return (
    <div className={"mainContainer"}>
      <div className={"leftSection"}>
        <InfoBox />
      </div>
      <div className={"rightSection"}>
        <Header />
        <div className={"priceSection"}>
          <WhiteBox />
          <PurpleBox />
        </div>
      </div>
    </div>
  );
}

export default Container;
