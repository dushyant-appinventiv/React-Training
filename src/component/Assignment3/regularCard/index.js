import React from "react";
import "./card.scss";

function Card(props) {
  return (
    <div className={"regCardContainer"} style={{ width: props.width }}>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
}

export default Card;
