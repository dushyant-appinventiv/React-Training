import React, { Component } from "react";
import ReusableBox from "../../component/reusableBox";
import "./index.css";

class Home extends Component {
  renderBox(heading, buttonHead, extraClass = "") {
    return (
      <div className={"itemContainer"}>
        <h3> {heading} </h3>
        <button> {buttonHead} </button>
      </div>
    );
  }

  render() {
    return (
      <div className={"homeContainer"}>
        <h1>{"Hello form Home"}</h1>
        {this.renderBox("First Container", "Click First", "")}
        {this.renderBox("Second Container", "CLick Second", "")}
        <ReusableBox heading={"Third Container"} buttonHead={"Click Third"} />
        <ReusableBox heading={"Fourth Contianer"} buttonHead={"Click Fourth"} />
      </div>
    );
  }
}

export default Home;
