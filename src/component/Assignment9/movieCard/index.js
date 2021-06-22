import React from "react";
import {
  Card,
  Button,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from "@material-ui/core";
import { Link } from "react-router-dom";

function MovieCard({ index, src, heading, short }) {
  return (
    <Card style={{ maxWidth: 350, margin: "15px 0" }} raised>
      <CardMedia
        component={"img"}
        image={src}
        alt={"movie image"}
        height={140}
      />
      <CardContent>
        <Typography variant={"h5"} color={"secondary"} gutterBottom>
          {heading}
        </Typography>
        <Typography
          variant={"subtitle2"}
          component={"p"}
          color={"textSecondary"}
        >
          {short}
        </Typography>
      </CardContent>
      <CardActions>
        <Button color={"primary"} size={"small"}>
          <Link to={`/movieDesc/${index}`} style={{ textDecoration: "none" }}>
            {"Know More"}
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}

export default MovieCard;
