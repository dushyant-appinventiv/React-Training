import React from "react";
import "./index.css";

function ReactDesc(props) {
  return (
    <div className={"reactContainer " + props.theme}>
      <div className={"contentSection"}>
        <h1>{props.heading}</h1>
        <p>{props.content}</p>
      </div>
      <div className={"imageSection"}>
        <img src={props.image} alt={props.alt} />
      </div>
    </div>
  );
}

export default ReactDesc;
