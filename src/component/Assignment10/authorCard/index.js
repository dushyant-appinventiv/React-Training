import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Button,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from "@material-ui/core";

export default function AuthorCard({
  index,
  userEmail,
  lName,
  fName,
  imgSrc,
  updateDate,
}) {
  return (
    <Card style={{ maxWidth: 300, margin: "15px 0" }} raised>
      <CardMedia
        component={"img"}
        image={imgSrc}
        alt={"movie image"}
        height={140}
      />
      <CardContent>
        <Typography variant={"h5"} color={"secondary"} gutterBottom>
          {fName + " " + lName}
        </Typography>
        <Typography
          variant={"subtitle2"}
          component={"p"}
          color={"textSecondary"}
        >
          {userEmail}
        </Typography>
        <Typography
          variant={"subtitle2"}
          component={"p"}
          color={"textSecondary"}
        >
          {!updateDate ? "New User" : `Updated: ${updateDate}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button color={"primary"} size={"small"}>
          <Link to={`/userDesc/${index}`} style={{ textDecoration: "none" }}>
            {"View & Edit"}
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}
