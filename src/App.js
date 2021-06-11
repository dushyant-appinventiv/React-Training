import React from "react";
import "./App.css";

// ASSIGNEMENT-6
import Form from "./component/Assignment6/forms";

// ASSIGNMENT-5
// import MaterialLayout from "./modules/Assignment5/mainPage";

// ASSIGNMENT-4
// import Header from "./modules/Assignment4/Header";
// import Problems from "./modules/Assignment4/Problems";
// import SideBar from "./modules/Assignment4/Sidebar";

// ASSIGNEMENT-3
// import Footer from "./modules/Assignment3/Footer";
// import DogecoinBody from "./modules/Assignment3/Dogecoin";
// import CardsSection from "./modules/Assignment3/CardsDisplay";
// import BigData from "./component/Assignment3/bigImgSection";
// import { bigData } from "./data.ass3";
// import AboutDoge from "./modules/Assignment3/AboutDoge";
// import CoverPage from "./modules/Assignment3/CoverPage";

class App extends React.Component {
  render() {
    return (
      <div className={"appWrapperAssignment6"}>
        {/* ASSIGNMENT 3 */}
        {/* <CoverPage />
        <CardsSection />
        <DogecoinBody />
        <BigData
          key={bigData[0].id}
          imgSrc={bigData[0].imgSrc}
          imgAlt={bigData[0].imgAlt}
          heading={bigData[0].heading}
          points={bigData[0].points}
        />
        <AboutDoge />
        <BigData
          key={bigData[1].id}
          imgSrc={bigData[1].imgSrc}
          imgAlt={bigData[1].imgAlt}
          heading={bigData[1].heading}
          points={bigData[1].points}
        />
        <Footer /> */}
        {/* ASSIGNEMNT 5 */}
        {/* <div>
          <SideBar />
        </div>
        <div>
          <Header />
          <Problems />
        </div> */}
        <Form />
      </div>
    );
  }
}

export default App;
