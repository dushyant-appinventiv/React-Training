import React from "react";
import "./dogeSection.scss";

function DogeSection(props) {
  return (
    <div className={"dogeContainer"}>
      <div className={"dogeImage"}>
        {props.arrowImg === "" ? null : (
          <img
            src={props.arrowImg}
            alt={props.arrowAlt}
            className={"dogeDownArrow"}
          />
        )}
        <img src={props.imgSrc} alt={props.imgAlt} />
        {props.timerHead === "" ? null : (
          <div className={"dogeTimer " + props.timerColor}>
            <h4> {props.timerHead} </h4>
            <p> {props.timerText} </p>
          </div>
        )}
      </div>
      <div className={"dogeHeader"}>
        <div className={"numberTab " + props.color}>{props.number}</div>
        <div className={"title"}>{props.heading}</div>
      </div>
      <div className={"dogeContent"}>{props.content}</div>
    </div>
  );
}

export default DogeSection;
