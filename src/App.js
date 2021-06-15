import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

// ASSIGNMENT 7
import HomeScreen from "./modules/Assignment7/HomeScreen";
import EditScreen from "./modules/Assignment7/EditScreen";

// ASSIGNEMENT-6
// import MovieHomeScreen from "./modules/Assignment6/MovieHomeScreen";
// import Login from "./modules/Assignment6/LoginScreen";
// import SignIn from "./modules/Assignment6/SignupScreen";

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

        {/* ASSIGNMENT 6 */}
        {/* <Router>
          <Switch>
            <Route exact path={"/"}>
              <SignIn />
            </Route>
            <Route exact path={"/login"}>
              <Login />
            </Route>
            <Route exact path={"/movies"}>
              <MovieHomeScreen />
            </Route>
          </Switch>
        </Router> */}
        <Router>
          <Switch>
            <Route exact path={"/"}>
              <HomeScreen />
            </Route>
            <Route exact path={"/editPage"}>
              <EditScreen />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
