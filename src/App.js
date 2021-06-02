import React from "react";
import Home, { Home1 } from "./modules/home";

class App extends React.Component {
  render() {
    return (
      <>
        <Home />
        <Home1 />
      </>
    );
  }
}

export default App;
