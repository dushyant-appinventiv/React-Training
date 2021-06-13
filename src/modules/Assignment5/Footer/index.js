import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  makeStyles,
  Typography,
  Link,
  Container,
  Grid,
  IconButton,
  Box,
  Paper,
  MobileStepper,
} from "@material-ui/core";
import {
  AddSharp,
  CopyrightSharp,
  GitHub,
  Language,
  Reddit,
  Facebook,
  Telegram,
  Twitter,
  VpnLockSharp,
  KeyboardArrowRight,
  KeyboardArrowLeft,
} from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles({
  footerStyle: {
    width: "100%",
    padding: "0% 0% 1.5%",
    position: "relative",
  },
  colorGreen: {
    color: "#398538",
  },
  colorBlue: {
    color: "#1465C0",
  },
  flexDisplay: {
    display: "flex",
    alignItems: "center",
  },
  flexDisplayColumn: {
    display: "flex",
    flexDirection: "column",
  },
  justifyText: {
    justifyContent: "center",
  },
  textBold: {
    fontWeight: "bold",
  },
  copyRightIconStyle: {
    height: "18px",
    width: "18px",
    marginRight: "5px",
  },
  linkGridStyle: {
    margin: "10px 0px",
  },
  linkStyle: {
    fontSize: "16px",
    margin: "2px 0px",
    fontWeight: 400,
    fontFamily: "Roboto, Helvetica, Arial, sans-serif;",
    color: "#1465C0",
    "&:hover": {
      color: "#444",
    },
  },
  iconButtonStyle: {
    color: "#424242",
  },
  stepperStyle: {
    margin: "1% 0% 0%",
  },
});

function MoneroFooter() {
  const classes = useStyles();

  return (
    <div className={classes.footerStyle}>
      <div>
        <Typography variant={"h5"} color={"textSecondary"}>
          {"You can be the first one to "}
          <Button
            variant="outlined"
            className={classes.colorGreen}
            startIcon={<AddSharp />}
          >
            {"POST AN AD"}
          </Button>
          {" in the following categories:"}
        </Typography>
        <Typography
          className={classes.colorGreen + "  " + classes.flexDisplay}
          variant={"h6"}
          gutterBottom
        >
          <AddSharp />
          <Link color={"inherit"} href={"#"}>
            {"Buy Monero with cash in India"}
          </Link>
        </Typography>
        <div className={classes.flexDisplay + " " + classes.justifyText}>
          <Typography
            variant={"h6"}
            align={"center"}
            color={"textSecondary"}
            gutterBottom
          >
            <VpnLockSharp />
            {" Showing advertisements in"}
            <Typography variant={"inherit"} className={classes.textBold}>
              {" India"}
            </Typography>
          </Typography>
          <Button className={classes.colorBlue}>{" CHANGE"}</Button>
        </div>
      </div>
      <Container maxWidth={"md"}>
        <div>
          <Typography
            variant={"h6"}
            color={"textSecondary"}
            className={classes.textBold}
            gutterBottom
          >
            {"Protect your right to privacy - buy Monero."}
          </Typography>
          <Typography
            align={"left"}
            paragraph
            variant={"subtitle1"}
            color={"textSecondary"}
          >
            {
              "If you are concerned about the invasion of privacy - the best cryptocurrency to invest in is XMR. Monero is an untraceable coin developed with privacy by design in mind.Where to buy Monero? LocalMonero is the biggest, most trusted and well-established P2P Monero exchange in the XMR community. We have no KYC checks - you can simply buy Monero anonymously without ID verification with PayPal, credit card, gift card, cash by mail or convert bitcoin to Monero - our platform supports any payment method."
            }
          </Typography>
        </div>
        <div>
          <Typography
            variant={"h6"}
            color={"textSecondary"}
            className={classes.textBold}
            gutterBottom
          >
            {
              "Sell Monero to people worldwide or locally - support the community and make money with cryptocurrency.Protect your right to privacy - buy Monero."
            }
          </Typography>
          <Typography
            align={"left"}
            paragraph
            variant={"subtitle1"}
            color={"textSecondary"}
          >
            {
              "LocalMonero is the best place to sell XMR - whether it's your mining rewards, Monero price arbitrage, or you simply see the value in servicing the community. The escrow system and our secure Monero wallet provide you with a robust XMR trading experience - so you can convert XMR to USD, EUR, AUD, GBP or any other local currency with peace of mind."
            }
          </Typography>
        </div>
        <Box
          component={Paper}
          width={"80%"}
          margin={"3% 10%"}
          padding={"10px 15px"}
        >
          <Typography variant={"h4"} color={"textSecondary"}>
            {
              "LocalMonero/AgoraDesk now allows you to import reputation from LocalBitcoins and/or Paxful!"
            }
          </Typography>
          <Typography variant={"subtitle1"}>
            {
              "If you have an account on LocalBitcoins or Paxful and you'd like to import the reputation you have worked for while trading on these platforms, you can now do so! To do it, simply open your settings page and navigate to the reputation import tab. Your LocalBitcoins/Paxful trades will be added to your total trade count and your other stats will be displayed on your user page."
            }
          </Typography>
          <MobileStepper
            steps={10}
            position="static"
            className={classes.stepperStyle}
            nextButton={
              <Button size="small">
                Next
                <KeyboardArrowRight />
              </Button>
            }
            backButton={
              <Button size="small">
                <KeyboardArrowLeft />
                Back
              </Button>
            }
          />
        </Box>
      </Container>
      <Container maxWidth={"lg"}>
        <Typography
          className={classes.flexDisplay + " " + classes.justifyText}
          variant={"subtitle1"}
          color={"textSecondary"}
          gutterBottom
        >
          <CopyrightSharp className={classes.copyRightIconStyle} />
          {" 2021 Blue Sunday Limited"}
        </Typography>
        <Container maxWidth={"md"}>
          <Grid className={classes.linkGridStyle} container spacing={2}>
            <Grid item md={3} className={classes.flexDisplayColumn}>
              <Link
                href={"#"}
                underline={"always"}
                className={classes.linkStyle}
              >
                {"About"}
              </Link>
              <Link
                href={"#"}
                underline={"always"}
                className={classes.linkStyle}
              >
                {"Terms Of Service"}
              </Link>
              <Link
                href={"#"}
                underline={"always"}
                className={classes.linkStyle}
              >
                {"Fees"}
              </Link>
              <Link
                href={"#"}
                underline={"always"}
                className={classes.linkStyle}
              >
                {"Contact Us"}
              </Link>
              <Link
                href={"#"}
                underline={"always"}
                className={classes.linkStyle}
              >
                {"Law Enforcement Inquiries"}
              </Link>
            </Grid>
            <Grid item md={3} className={classes.flexDisplayColumn}>
              <Link
                href={"#"}
                underline={"always"}
                className={classes.linkStyle}
              >
                {"Security Bounty"}
              </Link>
              <Link
                href={"#"}
                underline={"always"}
                className={classes.linkStyle}
              >
                {"Affiliate"}
              </Link>
              <Link
                href={"#"}
                underline={"always"}
                className={classes.linkStyle}
              >
                {"Statistics"}
              </Link>
              <Link
                href={"#"}
                underline={"always"}
                className={classes.linkStyle}
              >
                {"API Docs"}
              </Link>
            </Grid>
            <Grid item md={3} className={classes.flexDisplayColumn}>
              <Link
                href={"#"}
                underline={"always"}
                className={classes.linkStyle}
              >
                {"LocalBitcoins Alternative"}
              </Link>
              <Link
                href={"#"}
                underline={"always"}
                className={classes.linkStyle}
              >
                {"Monero News"}
              </Link>
              <Link
                href={"#"}
                underline={"always"}
                className={classes.linkStyle}
              >
                {"Knowledge"}
              </Link>
              <Link
                href={"#"}
                underline={"always"}
                className={classes.linkStyle}
              >
                {"Monero Block Explorer"}
              </Link>
            </Grid>
            <Grid item md={3} className={classes.flexDisplayColumn}>
              <Link
                href={"#"}
                underline={"always"}
                className={classes.linkStyle}
              >
                {"Tor hidden service"}
              </Link>
              <Link
                href={"#"}
                underline={"always"}
                className={classes.linkStyle}
              >
                {"I2P"}
              </Link>
              <Link
                href={"#"}
                underline={"always"}
                className={classes.linkStyle}
              >
                {"B32 I2P"}
              </Link>
              <Link
                href={"#"}
                underline={"always"}
                className={classes.linkStyle}
              >
                {"AgoraDesk"}
              </Link>
            </Grid>
          </Grid>
          <div
            className={classes.flexDisplayColumn + " " + classes.flexDisplay}
          >
            <Button
              className={classes.colorBlue}
              startIcon={<Language />}
              size={"large"}
            >
              {"CHANGE LANGUAGE"}
            </Button>
            <div className={classes.justifyText + " " + classes.flexDisplay}>
              <IconButton className={classes.iconButtonStyle}>
                <Twitter />
              </IconButton>
              <IconButton className={classes.iconButtonStyle}>
                <Reddit />
              </IconButton>
              <IconButton className={classes.iconButtonStyle}>
                <FontAwesomeIcon icon={faHashtag} />
              </IconButton>
              <IconButton className={classes.iconButtonStyle}>
                <Facebook />
              </IconButton>
              <IconButton className={classes.iconButtonStyle}>
                <Telegram />
              </IconButton>
              <IconButton className={classes.iconButtonStyle}>
                <GitHub />
              </IconButton>
            </div>
          </div>
        </Container>
      </Container>
    </div>
  );
}

export default MoneroFooter;
