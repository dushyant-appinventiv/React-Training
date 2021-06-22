import { Typography, Button, Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import MovieCard from "../../../component/Assignment9/movieCard";
import { cardsData } from "../../../data";

function Dashboard() {
  const [logged, setLogged] = useState(
    JSON.parse(window.localStorage.getItem("token"))
  );
  const history = useHistory();

  useEffect(() => {
    if (!logged) {
      history.push("/");
    }
  }, [logged]);

  const handleLogOut = () => {
    window.localStorage.setItem("token", false);
    setLogged(JSON.parse(window.localStorage.getItem("token")));
  };

  return (
    <Box>
      <Box
        width={"100%"}
        display="flex"
        alignItems={"center"}
        justifyContent={"space-evenly"}
      >
        <Typography variant={"h3"} color={"secondary"} align={"center"}>
          {"DASHBOARD"}
        </Typography>
        <Button
          variant={"contained"}
          style={{ margin: "0px 60px" }}
          color={"secondary"}
          onClick={() => handleLogOut()}
        >
          {"LOG OUT"}
        </Button>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        flexWrap={"wrap"}
      >
        {cardsData.map((item) => (
          <MovieCard
            key={item.id}
            index={item.id}
            src={item.imgSrc}
            heading={item.title}
            short={item.content}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Dashboard;
