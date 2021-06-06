import React from "react";
import Button from "../../../component/Assignment3/button";
import "./index.scss";

function getContent(item) {
  return (
    <div className={"bigDesc"}>
      <div className={"title"}>
        {item.img === "" ? null : <img src={item.img} alt={item.altText} />}{" "}
        {item.contentHead}
      </div>
      <p>{item.contentDesc}</p>
    </div>
  );
}

function BigImageSection(props) {
  return (
    <div className={"bigImgContainer"}>
      <img src={props.imgSrc} alt={props.imgAlt} />
      <div className={"bigSectionContent"}>
        <h1> {props.heading} </h1>
        {props.points.map((point) => getContent(point))}
        <div className={"bigFooter"}>
          <h2> {"Buy & Sell Dogecoin today"} </h2>
          <Button color={"blue"} width={150} height={45} content={"Sign up"} />
        </div>
      </div>
    </div>
  );
}

export default BigImageSection;
