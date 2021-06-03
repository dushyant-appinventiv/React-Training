import React from "react";

class ReusableBox extends React.Component {
  render() {
    const { heading, buttonHead } = this.props;
    return (
      <div className={"itemContainer"}>
        <h3> {heading} </h3>
        <button> {buttonHead} </button>
      </div>
    );
  }
}

export default ReusableBox;
