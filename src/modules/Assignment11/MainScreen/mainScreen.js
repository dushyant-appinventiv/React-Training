import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeAPIcall } from "./actions";
import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";

function getCards(item) {
  return (
    <Card
      style={{ height: "200px", width: "300px", margin: "10px" }}
      key={item.id}
    >
      <CardMedia
        component={"div"}
        style={{
          width: "100%",
          backgroundColor: `${item.color}`,
          height: "80px",
        }}
      />
      <CardContent>
        <Typography color={"secondary"} variant={"h5"}>
          {item.name}
        </Typography>
        <Typography color={"primary"} variant={"subtitle1"}>
          {item.year}
        </Typography>
        <Typography color={"textSecondary"} variant={"subtitle1"}>
          {item.pantone_value}
        </Typography>
      </CardContent>
    </Card>
  );
}

function MainText() {
  const { textEle } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(makeAPIcall());
  }, []);

  return (
    <Container
      style={{
        alignItems: "center",
        justifyContent: "space-evenly",
        display: "flex",
        flexWrap: "wrap",
      }}
      maxWidth={"md"}
    >
      {textEle.map((item) => getCards(item))}
    </Container>
  );
}

export default MainText;
