import { Box, Paper, Button, Typography } from "@material-ui/core";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { cardsData } from "../../../data";

export default function MovieDescBox(props) {
  const { movieID } = useParams();
  const data = cardsData.find((item) => item.id == movieID);
  console.log(props);

  return (
    <Box
      margin={"20px 0px"}
      component={Paper}
      maxWidth={800}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-evenly"}
      alignItems={"center"}
      padding={2}
    >
      <Typography
        gutterBottom
        align={"center"}
        color={"secondary"}
        variant={"h4"}
      >
        {data.title}
      </Typography>
      <Box width={400} padding={0} margin={"0px 0px 20px"}>
        <img
          alt={"movie-img"}
          width={"100%"}
          height={"200px"}
          src={data.imgSrc}
        />
      </Box>
      <Typography
        variant={"subtitle2"}
        color={"textSecondary"}
        align={"justify"}
        gutterBottom
      >
        {data.desc}
      </Typography>
      <Button variant={"outlined"} color={"secondary"}>
        <Link style={{ textDecoration: "none" }} to={"/dashboard"}>
          {"GO BACK"}
        </Link>
      </Button>
    </Box>
  );
}
