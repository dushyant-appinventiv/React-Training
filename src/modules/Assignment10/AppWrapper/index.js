import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserAuthScreen from "../UserAuthScreen";
import UserDashboard from "../UserDashboard";
import UserViewEdit from "../../../component/Assignment10/userViewEdit";

export default function AppWrapper() {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    const updateLocalStorage = async () => {
      const apiData = await fetch("https://reqres.in/api/users?page=2")
        .then((res) => res.json())
        .then((resData) => resData.data)
        .catch((err) => console.log("Error : ", err));
      window.localStorage.setItem("allUsers", JSON.stringify(apiData));
    };
    updateLocalStorage();
    const userData = JSON.parse(window.localStorage.getItem("allUsers"));
    setUsersList(userData);
  }, []);

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Router>
        <Switch>
          <Route path={"/"} exact component={UserAuthScreen} />
          <Route path={"/dashboard"}>
            <UserDashboard userData={usersList} />
          </Route>
          <Route path={"/userDesc/:userID"}>
            <UserViewEdit data={usersList} updateDB={setUsersList} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
