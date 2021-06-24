import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

// ASSIGNMENT 10
import AppWrapper from "./modules/Assignment10/AppWrapper";

// ASSIGNMENT 9
// import Dashboard from "./modules/Assignment9/Dashboard";
// import LoginPage from "./modules/Assignment9/LoginPage";
// import MovieDescBox from "./component/Assignment9/movieDescBox";

// ASSIGNMENT 8
// import HomeScreen from "./modules/Assignment8/HomePage";

// ASSIGNMENT 7
// import HomeScreen from "./modules/Assignment7/HomeScreen";
// import EditScreen from "./modules/Assignment7/EditScreen";

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

function App() {
  return (
    // please do go through app.css for for classname for the following div
    <div className={"appWrapperAssignment9"}>
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

      {/* ASSIGNMENT 4 */}
      {/* <Header />
        <Problems />
        <SideBar /> */}

      {/* ASSIGNEMNT 5 */}
      {/* <MaterialLayout /> */}

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

      {/* ASSIGNMENT 7 */}
      {/* <Router>
          <Switch>
            <Route exact path={"/"}>
              <HomeScreen />
            </Route>
            <Route exact path={"/editPage"}>
              <EditScreen />
            </Route>
          </Switch>
        </Router> */}

      {/* ASSIGNMENT 8 */}
      {/* <HomeScreen /> */}

      {/* ASSIGNMENT 9 */}
      {/* <Router>
          <Switch>
            <Route path={"/"} exact>
              <LoginPage />
            </Route>
            <Route path={"/dashboard"}>
              <Dashboard />
            </Route>
            <Route path={"/movieDesc/:movieID"}>
              <MovieDescBox />
            </Route>
          </Switch>
        </Router> */}

      {/* ASSIGNMENT 10 */}
      <AppWrapper />
    </div>
  );
}

export default App;
