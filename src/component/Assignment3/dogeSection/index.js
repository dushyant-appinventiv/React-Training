import React from "react";
import "./dogeSection.scss";

function DogeSection(props) {
  return (
    <div className={"dogeContainer"}>
      <div className={"dogeImage"}>
        <img src={props.imgSrc} alt={props.imgAlt} />
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
