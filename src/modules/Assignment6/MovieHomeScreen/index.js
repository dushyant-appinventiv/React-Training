import React, { useState } from "react";
import { Grid, Container, makeStyles, Button } from "@material-ui/core";
import MovieCard from "../../../component/Assignment6/movieCard";

const useStyles = makeStyles({
  movieContainer: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
});

function MovieHomeScreen() {
  const classes = useStyles();
  const [rating1, setRating1] = useState(3);
  const [rating2, setRating2] = useState(2);
  const [rating3, setRating3] = useState(4);

  const changeRate1 = () => {
    console.log("Rating 1 changed");
    setRating1((Math.floor(Math.random() * 10) + 1) % 7);
  };

  const changeRate2 = () => {
    console.log("Rating 2 changed");
    setRating2((Math.floor(Math.random() * 10) + 1) % 7);
  };

  setTimeout(() => {
    setRating3((Math.floor(Math.random() * 10) + 1) % 7);
  }, 2500);

  return (
    <Container className={classes.movieContainer} maxWidth={"md"}>
      <Grid
        style={{ maxWidth: "300px" }}
        container
        alignItems={"center"}
        direction={"column"}
      >
        <Grid item>
          <MovieCard name={"card1"} rating={rating1} />
        </Grid>
        <Grid item>
          <Button
            onClick={() => changeRate1()}
            variant={"contained"}
            color={"secondary"}
            type={"button"}
          >
            {"Change Rating 1"}
          </Button>
        </Grid>
      </Grid>
      <Grid
        style={{ maxWidth: "300px" }}
        container
        alignItems={"center"}
        direction={"column"}
      >
        <Grid item>
          <MovieCard name={"card2"} rating={rating2} />
        </Grid>
        <Grid item>
          <Button
            onClick={() => changeRate2()}
            variant={"contained"}
            color={"secondary"}
            type={"button"}
          >
            {"Change Rating 2"}
          </Button>
        </Grid>
      </Grid>
      <Grid
        style={{ maxWidth: "300px" }}
        container
        alignItems={"center"}
        direction={"column"}
      >
        <Grid item>
          <MovieCard name={"card3"} rating={rating3} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default MovieHomeScreen;
