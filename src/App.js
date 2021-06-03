import React from "react";
import "./App.css";
import Header from "./modules/Assignment2/header";
import Footer from "./modules/Assignment2/footer";
import ReactContainer from "./component/Assignment2/reactDesc";
import { contentData } from "./data";

class App extends React.Component {
  render() {
    return (
      <div className={"appWrapperAssignment2"}>
        <Header />
        {contentData.map((item) => (
          <ReactContainer
            key={item.id}
            heading={item.heading}
            content={item.content}
            image={item.imgSrc}
            imageAlt={item.alt}
            theme={item.theme}
          />
        ))}
        <Footer />
      </div>
    );
  }
}

export default App;
