import React, { Component } from "react";
import "./index.css";

class Home extends Component {
  render() {
    return (
      <div className={"homeContainer"}>
        <h1>{"Hello form Home"}</h1>
        <h2 id={"h2Head"}> H2 Heading </h2>
      </div>
    );
  }
}

export default Home;
