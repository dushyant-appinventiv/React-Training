import { makeStyles, Paper } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { StarSharp } from "@material-ui/icons";
import React, { memo } from "react";

const useStyles = makeStyles({
  movieCardStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: 250,
    height: 200,
    padding: 20,
    margin: "20px",
  },
  iconStyle: {
    color: "lightgreen",
  },
});

function MovieCard(props) {
  const classes = useStyles();
  console.log("Card renderded : " + props.name);
  return (
    <Box component={Paper} className={classes.movieCardStyle}>
      <Typography variant={"h4"} color={"secondary"}>
        {"Movie Name"}
      </Typography>
      <Typography variant={"subtitle1"} color={"primary"}>
        {[...Array(props.rating)].map((e, i) => (
          <StarSharp key={i} className={classes.iconStyle} />
        ))}
      </Typography>
      <Typography variant={"subtitle1"} color={"primary"}>
        {"Best Action movie made so far"}
      </Typography>
    </Box>
  );
}

export default memo(MovieCard);