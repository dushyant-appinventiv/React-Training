import React from "react";
import "./index.scss";
import CreditCard from "../../../component/Assignment3/creditCards";
import RegCard from "../../../component/Assignment3/regularCard";
// IMAGES
import Visa from "../../../images3/visa.svg";
import Master from "../../../images3/masterCard.svg";

function CardsDisplay() {
  return (
    <div style={{ padding: "0% 8%" }}>
      <div className={"cardSectionWrapper"}>
        <div className={"cardsVisaContainer"}>
          <CreditCard imgSrc={Visa} color={"creditBlue"} />
        </div>
        <div className={"cardsMasterContainer"}>
          <CreditCard imgSrc={Master} color={"creditPink"} />
        </div>
        <div className={"regcardsContainer"}>
          <RegCard
            width={350}
            title={"Exchange your Dogecoin Instantly"}
            content={
              "Buy or Sell your Doge using your Visa or Mastercard debit or credit card"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default CardsDisplay;
