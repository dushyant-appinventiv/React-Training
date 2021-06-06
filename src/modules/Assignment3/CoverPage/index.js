import React from "react";
import Header from "../Header";
import "./index.scss";
import Button from "../../../component/Assignment3/button";

function CoverPage() {
  return (
    <div className={"coverWrapper"}>
      <Header />
      <div className={"coverContainer"}>
        <div className={"coverContentSection"}>
          <h1> {"Buy & Sell Dogecoin Online"} </h1>
          <h3> {"Add Doge to your crypto wallet"} </h3>
          <p>
            {
              "Instant, fun, and free from the traditional banking system. Buy Dogecoin with your debit or credit card today."
            }
          </p>
        </div>
        <div className={"coverBoxSection"}>
          <div className={"coverBox"}>
            <div className={"btnContainer"}>
              <button type={"button"} className={"buyBtn"}>
                {"BUY"}
              </button>
              <button type={"button"} className={"sellBtn"}>
                {"SELL"}
              </button>
            </div>
            <div className={"inputContainer"}>
              <input type={"number"} value={"100"} />
              <hr />
              <select>
                <option selected value={"USD"}>
                  {"USD"}
                </option>
                <option value={"EUR"}>{"EUR"}</option>
                <option value={"AUD"}>{"AUD"}</option>
                <option value={"CAD"}>{"CAD"}</option>
              </select>
            </div>
            <hr className={"inputDivider"} />
            <div className={"inputContainer"}>
              <input type={"number"} value={"0.43141"} />
              <hr />
              <select>
                <option selected value={"BTC"}>
                  {"BTC"}
                </option>
                <option value={"ETH"}>{"ETH"}</option>
                <option value={"LTC"}>{"LTC"}</option>
                <option value={"DOGE"}>{"DOGE"}</option>
              </select>
            </div>
            <div style={{ textAlign: "center", marginTop: 30 }}>
              <Button
                color={"green"}
                width={250}
                height={50}
                content={"buy doge"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoverPage;
