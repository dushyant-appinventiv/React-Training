import {
  Paper,
  Link,
  TableContainer,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Table,
  Typography,
  makeStyles,
  Tooltip,
  Button,
} from "@material-ui/core";
import { AccountBalanceSharp, FlagSharp } from "@material-ui/icons";
import React from "react";

const dataBuyerTable = [
  {
    seller: "sfoefonoen (32.53%)",
    method: {
      bank: " IMPS Bank Transfer India",
      type: "UPI",
    },
    price: "34934.32 INR",
    limits: "2500.00 - 20000.00 INR",
  },
  {
    seller: "sfoefonoen (32.53%)",
    method: {
      bank: " IMPS Bank Transfer India",
      type: "UPI",
    },
    price: "34934.32 INR",
    limits: "2500.00 - 20000.00 INR",
  },
  {
    seller: "sfoefonoen (32.53%)",
    method: {
      bank: " IMPS Bank Transfer India",
      type: "UPI",
    },
    price: "34934.32 INR",
    limits: "2500.00 - 20000.00 INR",
  },
  {
    seller: "sfoefonoen (32.53%)",
    method: {
      bank: " IMPS Bank Transfer India",
      type: "UPI",
    },
    price: "34934.32 INR",
    limits: "2500.00 - 20000.00 INR",
  },
  {
    seller: "sfoefonoen (32.53%)",
    method: {
      bank: " IMPS Bank Transfer India",
      type: "UPI",
    },
    price: "34934.32 INR",
    limits: "2500.00 - 20000.00 INR",
  },
];

const useStyles = makeStyles({
  flexRowCenter: {
    display: "flex",
    alignItems: "center",
  },
  methodCellStyle: {
    width: "85%",
    justifyContent: "space-evenly",
    cursor: "pointer",
  },
  linkStyle: {
    fontSize: "16px",
    fontWeight: 400,
    fontFamily: "Roboto, Helvetica, Arial, sans-serif;",
    color: "#1465C0",
    "&:hover": {
      color: "#444",
    },
  },
  priceStyle: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif;",
    color: "#388538",
    fontWeight: "500",
    cursor: "pointer",
  },
  statusGreen: {
    backgroundColor: "#81C784",
  },
  statusWarning: {
    backgroundColor: "#FFD54F",
    color: "#ffffff",
  },
  circleStatus: {
    borderRadius: "50%",
    border: "none",
    height: 16,
    width: 16,
    margin: "0px 8px ",
  },
  tooltipStyle: {
    fontSize: 16,
    backgroundColor: "#1465C0",
    color: "#fff",
    padding: "12px",
  },
  buySellBtnStyle: {
    backgroundColor: "#ffba1f",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#b28215",
    },
  },
  tableHeadStyle: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    color: "#424242",
    fontSize: 16,
    fontWeight: "600",
  },
  iconDiv: {
    padding: 0,
  },
});

export default function InfoTable() {
  const classes = useStyles();

  function getBuyData(item) {
    return (
      <TableRow hover>
        <TableCell padding={"inherit"}>
          <Link
            className={classes.linkStyle + " " + classes.flexRowCenter}
            underline={"true"}
            href={"#"}
          >
            {item.seller}
            <Tooltip
              placement={"top"}
              title={"Hello"}
              classes={{ tooltip: classes.tooltipStyle }}
            >
              <div
                className={classes.circleStatus + " " + classes.statusGreen}
              ></div>
            </Tooltip>
          </Link>
        </TableCell>
        <TableCell>
          <div
            className={classes.flexRowCenter + " " + classes.methodCellStyle}
          >
            <div>
              <FlagSharp className={classes.iconDiv} />
            </div>
            <div>
              <Typography
                className={classes.flexRowCenter}
                variant={"subtitle1"}
                color={"inherit"}
              >
                <AccountBalanceSharp /> {item.method.bank}
              </Typography>
              <Typography variant={"subtitle1"} color={"textSecondary"}>
                {item.method.type}
              </Typography>
            </div>
          </div>
        </TableCell>
        <TableCell>
          <Typography variant={"h5"} className={classes.priceStyle}>
            {item.price}
          </Typography>
        </TableCell>
        <TableCell padding={"0px 10px 0px 0px"} align={"right"}>
          <Typography variant={"subtitle1"}> {item.limits} </Typography>
        </TableCell>
        <TableCell align={"center"}>
          <Button variant={"contained"} className={classes.buySellBtnStyle}>
            {"BUY"}
          </Button>
        </TableCell>
      </TableRow>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table padding={"none"}>
        <TableHead>
          <TableRow>
            <TableCell padding={"0px 10px"} className={classes.tableHeadStyle}>
              {"Buyer"}
            </TableCell>
            <TableCell
              padding={"0px 0px 0px 20px"}
              className={classes.tableHeadStyle}
            >
              {"Payment Method"}
            </TableCell>
            <TableCell className={classes.tableHeadStyle}>
              {"Price/XMR"}
            </TableCell>
            <TableCell
              padding={"0px 10px 0px 0px"}
              align={"right"}
              className={classes.tableHeadStyle}
            >
              {"Limits"}
            </TableCell>
            <TableCell align={"right"}> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{dataBuyerTable.map((item) => getBuyData(item))}</TableBody>
      </Table>
    </TableContainer>
  );
}
