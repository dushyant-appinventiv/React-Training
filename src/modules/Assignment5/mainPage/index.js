import React from "react";
import SideBar from "../Sidebar";
import { Button, makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  drawer: {
    width: "60px",
  },
  button: {
    width: "150px",
  },
});

function MaterialLayout() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item md={1}>
        <SideBar />
      </Grid>
      <Grid item md={11} style={{ backgroundColor: "yellow" }}>
        <Button color={"primary"} variant={"contained"}>
          {"Hello there"}
        </Button>
      </Grid>
    </Grid>
  );
}

export default MaterialLayout;
