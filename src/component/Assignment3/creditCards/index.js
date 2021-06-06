import React from "react";
import "./index.scss";

function CreditCard(props) {
  return (
    <div className={"creditContainer " + props.color}>
      <div className={"creditBrand"}>
        <img src={props.imgSrc} alt={"visa-logo"} />
      </div>
      <div className={"creditBody"}>
        <p>****</p> <p>****</p>
        <p> **** </p>
        <p>379533</p>
      </div>
      <div className={"creditFooter"}>
        <div>
          <h4>{"Card Holder"}</h4>
          <p>{"Georgina Harris"}</p>
        </div>
        <div>
          <h4> {"Expiry Date"} </h4>
          <p> {"08/03/2022"} </p>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
