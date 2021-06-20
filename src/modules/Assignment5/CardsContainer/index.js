import {
  Box,
  Button,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
  FormControl,
  Select,
} from "@material-ui/core";
import { PersonAddSharp, SearchSharp, ShoppingCart } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles({
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
  dataTypeNum: {
    appearance: "none",
    WebkitAppearance: "none",
    MozAppearance: "none",
  },
  inputContainerStyle: {
    display: "grid",
    gridTemplateColumns: "50% 50%",
    gap: "10px",
    alignItems: "center",
    margin: "2% 0%",
  },
  btnStyles: {
    height: "55px",
  },
  shoppingBtnStyle: {
    color: "#8D8D8D",
  },
});

export default function CardsCotainer() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item md={6}>
        <Box
          component={Paper}
          textAlign={"center"}
          width={"95%"}
          padding={"16px 20px"}
        >
          <div className={classes.inputContainerStyle}>
            <Button
              className={classes.colorBlueBtn + " " + classes.btnStyles}
              startIcon={<ShoppingCart />}
            >
              {"BUY"}
            </Button>
            <Button
              className={classes.btnStyles + " " + classes.shoppingBtnStyle}
              variant={"outlined"}
              startIcon={<ShoppingCart />}
            >
              {"SELL"}
            </Button>
          </div>
          <div className={classes.inputContainerStyle}>
            <TextField
              type={"number"}
              className={classes.dataTypeNum}
              label={"Amount"}
              variant={"outlined"}
              color={"primary"}
            />
            <FormControl variant="outlined">
              <Select
                native
                inputProps={{
                  name: "countryName",
                  id: "country-select",
                }}
              >
                <option value={"USA"}>{"USA"}</option>
                <option value={"IND"}>{"IND"}</option>
                <option value={"ESP"}>{"ESP"}</option>
              </Select>
            </FormControl>
          </div>
          <div className={classes.inputContainerStyle}>
            <FormControl variant="outlined">
              <Select
                native
                inputProps={{
                  name: "countryName",
                  id: "country-select",
                }}
              >
                <option value={"IN"}>{"India"}</option>
                <option value={"AFG"}>{"Afghanistan"}</option>
                <option value={"ESP"}>{"Spain"}</option>
              </Select>
            </FormControl>
            <FormControl variant="outlined">
              <Select
                native
                defaultValue={"All Online Offers"}
                inputProps={{
                  name: "countryName",
                  id: "country-select",
                }}
              >
                <option value={"Offers"}>{"All online offers"}</option>
                <option value={"NEFT"}>{"NEFT Transfer"}</option>
                <option value={"PAYTM"}>{"PayTM"}</option>
              </Select>
            </FormControl>
          </div>
          <Button
            variant={"contained"}
            color={"primary"}
            className={classes.btnStyles + " " + classes.colorBlueBtn}
            fullWidth
            startIcon={<SearchSharp />}
          >
            {"Search"}
          </Button>
        </Box>
      </Grid>
      <Grid item md={6}>
        <Box
          width={"95%"}
          component={Paper}
          textAlign={"center"}
          padding={"25px 0px"}
        >
          <Typography variant={"h4"} gutterBottom>
            {"Buy Monero"}
          </Typography>
          <Typography variant={"h4"} gutterBottom>
            {"Sell Monero"}
          </Typography>
          <Typography variant={"h4"} gutterBottom>
            {"Cash or Online"}
          </Typography>
          <Typography variant={"h4"} gutterBottom>
            {"Anywhere"}
          </Typography>
          <Button
            className={classes.colorGreenBtn}
            startIcon={<PersonAddSharp />}
          >
            {"SIGN UP FREE"}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
