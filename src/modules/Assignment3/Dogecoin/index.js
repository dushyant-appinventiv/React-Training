import React from "react";
import DogeSection from "../../../component/Assignment3/dogeSection";
import Button from "../../../component/Assignment3/button";
import "./index.scss";
import { blueSection, greenSection } from "../../../data.ass3";

function Dogecoin() {
  return (
    <div className={"backgroundDogeWrapper"}>
      <div className={"dogeSectionWrapper"}>
        <div className={"buyDogeContainer"}>
          <h1> {"How to Buy Dogecoin"} </h1>
          <p> {"Only 3 simple steps"} </p>
          <div className={"sectionWrapper"}>
            {blueSection.map((item) => (
              <DogeSection
                key={item.id}
                imgSrc={item.image}
                imgAlt={item.altText}
                color={"numBlue"}
                heading={item.title}
                content={item.desc}
                number={item.id}
                arrowImg={item.arrowImg}
                arrowAlt={item.arrowAlt}
                timerText={item.timerText}
                timerHead={item.timerHead}
                timerColor={"timerBlue"}
              />
            ))}
          </div>
          <Button color={"blue"} content={"Buy Dogecoin"} width={330} />
        </div>
        <div className={"sellDogeContainer"}>
          <h1> {"How to Sell Dogecoin"} </h1>
          <p> {"Only 3 simple steps"} </p>
          <div className={"sectionWrapper"}>
            {greenSection.map((item) => (
              <DogeSection
                key={item.id}
                imgSrc={item.image}
                imgAlt={item.altText}
                color={"numGreen"}
                heading={item.title}
                content={item.desc}
                number={item.id}
                arrowImg={item.arrowImg}
                arrowAlt={item.arrowAlt}
                timerText={item.timerText}
                timerHead={item.timerHead}
                timerColor={"timerGreen"}
              />
            ))}
          </div>
          <Button color={"green"} content={"sell bitcoin"} width={330} />
        </div>
      </div>
    </div>
  );
}

export default Dogecoin;
