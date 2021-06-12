import React from "react";
import { Container, makeStyles } from "@material-ui/core";
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

  return (
    <Container className={classes.movieContainer} maxWidth={"md"}>
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </Container>
  );
}

export default MovieHomeScreen;
