import React from "react";
import "./index.scss";
import { aboutDogeimg, spendDogeData } from "../../../data.ass3";

// IMAGES
import Check from "../../../images3/check.svg";

function getAboutImg(item) {
  return (
    <div className={"aboutImgDoge"}>
      <img src={item.image} alt={item.altText} />
      <div className={"aboutImgContent"}>
        <img src={Check} alt={"check-icon"} />
        <h4>{item.title}</h4>
      </div>
    </div>
  );
}

function getSpendImg(item) {
  return (
    <div className={"spendImgContent"}>
      <img src={item.image} alt={item.altText} />
      <p> {item.title} </p>
    </div>
  );
}

function AboutSection() {
  return (
    <div className={"backgroundAboutDogeWrapper"}>
      <div className={"aboutDogecoinWrapper"}>
        <div className={"aboutDogeContainer"}>
          {getAboutImg(aboutDogeimg[0])}
          <div className={"aboutDogeDesc"}>
            <h1> {"What is Dogecoin?"} </h1>
            <p>
              {
                "Dogecoin (Doge) is a cryptocurrency created by software engineers in 2013. It’s been stated that it was created jokingly as a homage to Bitcoin, but with recent price surges, it’s becoming a much more serious investment for crypto-enthusiasts. "
              }
            </p>
          </div>
          {getAboutImg(aboutDogeimg[1])}
        </div>
        <div className={"spendDogeContainer"}>
          <h1> {"Where Can I Spend my Dogecoin?"} </h1>
          <p>
            {
              "There are a variety of fashion and clothing shops online accepting Doge as payment. You can also use your Doge to pay for domains and hosting, or online casinos."
            }
          </p>
          <div className={"spendImgContainer"}>
            {spendDogeData.map((item) => getSpendImg(item))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
