import {
  Container,
  MenuItem,
  TextField,
  Button,
  Box,
  Paper,
  makeStyles,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { apiData } from "../../../data";

// getting data from api and storing in local Storage
window.localStorage.setItem("carsDB", JSON.stringify(apiData.cars));
window.localStorage.setItem("bikesDB", JSON.stringify(apiData.bikes));

const useStyles = makeStyles({
  boxWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 200,
    width: 400,
    padding: 0,
  },
  flexCenterStyle: {
    display: "flex",
    justifyContent: "center",
  },
});

let bikesData = [];
let carsData = [];

export default function HomeScreen() {
  const classes = useStyles();

  const history = useHistory();

  const [category, setCategory] = useState("");
  const [vehicleID, setVehicleName] = useState("");

  // getting data from localstorage after component has rendered
  useEffect(() => {
    bikesData = JSON.parse(window.localStorage.getItem("bikesDB"));
    carsData = JSON.parse(window.localStorage.getItem("carsDB"));
  }, []);

  function handleHomeSubmit(e) {
    e.preventDefault();
    let vehicleData = {};
    if (category === "cars") {
      vehicleData = carsData.find((item) => item.id === vehicleID);
    } else {
      vehicleData = bikesData.find((item) => item.id === vehicleID);
    }
    window.localStorage.setItem("data", JSON.stringify(vehicleData));
    window.localStorage.setItem("dataCategory", category);
    history.push("/editPage");
  }

  return (
    <Container className={classes.flexCenterStyle} maxWidth={"lg"}>
      <Box component={Paper} className={classes.boxWrapper}>
        <form onSubmit={(e) => handleHomeSubmit(e)}>
          <TextField
            select
            color={"secondary"}
            variant={"outlined"}
            fullWidth
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            label={"Category"}
            required
          >
            <MenuItem value={"cars"}> {"Cars"} </MenuItem>
            <MenuItem value={"bikes"}> {"Bikes"} </MenuItem>
          </TextField>
          <TextField
            color={"secondary"}
            select
            variant={"outlined"}
            fullWidth
            label={"Vehicle Name"}
            value={vehicleID}
            placeholder={"Vehicle Name"}
            onChange={(e) => setVehicleName(e.target.value)}
            required
          >
            {category === "cars"
              ? carsData.map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.name}
                  </MenuItem>
                ))
              : bikesData.map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.name}
                  </MenuItem>
                ))}
          </TextField>
          <Button
            style={{ margin: "15px 0px" }}
            type={"submit"}
            variant={"contained"}
            color={"secondary"}
          >
            {"Search"}
          </Button>
        </form>
      </Box>
    </Container>
  );
}
