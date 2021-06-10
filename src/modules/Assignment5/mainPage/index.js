import React from "react";
import SideBar from "../Sidebar";
import Footer from "../Footer";
import CardsContent from "../CardsContainer";
import {
  makeStyles,
  Grid,
  AppBar,
  Button,
  Toolbar,
  Typography,
  Box,
} from "@material-ui/core";
import { FingerprintSharp, PersonAddSharp } from "@material-ui/icons";
import InfoTable from "../../../component/Assignment5/infoTable";

const useStyles = makeStyles({
  drawer: {
    width: "60px",
  },
  button: {
    width: "150px",
  },
  displayFlexRow: {
    display: "flex",
    alignItems: "center",
  },
  displayFlexCol: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "6% 0% 0%",
  },
  colorWhite: {
    backgroundColor: "#ffffff",
  },
  justifyFlexEnd: {
    justifyContent: "flex-end",
  },
  colorGreenBtn: {
    backgroundColor: "#398538",
    color: "#ffffff",
    margin: "0px 5px",
    "&:hover": {
      backgroundColor: "#275d27",
    },
  },
  colorBlueBtn: {
    backgroundColor: "#1465C0",
    color: "#ffffff",
    margin: "0px 5px",
    "&:hover": {
      backgroundColor: "#0e4684",
    },
  },
  buySellBoxStyle: {
    width: "95%",
    margin: "4% 0%",
  },
  width100: {
    width: "100%",
  },
  colorGrey: {
    backgroundColor: "#F4F6F8",
  },
});

function MaterialLayout() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item md={1}>
        <SideBar />
      </Grid>
      <Grid
        item
        md={11}
        className={classes.displayFlexCol + " " + classes.colorGrey}
      >
        <AppBar className={classes.colorWhite}>
          <Toolbar
            className={classes.displayFlexRow + " " + classes.justifyFlexEnd}
          >
            <Button
              className={classes.colorGreenBtn}
              startIcon={<PersonAddSharp />}
            >
              {"SIGN UP FREE"}
            </Button>
            <Button
              className={classes.colorBlueBtn}
              startIcon={<FingerprintSharp />}
            >
              {"LOG IN"}
            </Button>
          </Toolbar>
        </AppBar>
        <CardsContent />
        <Box className={classes.buySellBoxStyle}>
          <Typography
            align={"left"}
            className={classes.width100}
            variant={"h4"}
            color={"textSecondary"}
            gutterBottom
          >
            {"Buy Monero online in India"}
          </Typography>
          <InfoTable />
        </Box>
        <Footer />
      </Grid>
    </Grid>
  );
}

export default MaterialLayout;
