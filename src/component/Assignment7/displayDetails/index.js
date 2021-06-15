import { Paper, Typography, Box } from "@material-ui/core";
import React, { memo, useEffect, useState } from "react";

// let bikesData = [];
// let carsData = [];

function DisplayDetails({ category, data }) {
  const [commonDB, setCommonDB] = useState({});

  const [bikeDB, setBikeDB] = useState([]);
  const [carsDB, setCarsDB] = useState([]);
  const [firstRender, setFirstRender] = useState(false);

  useEffect(() => {
    setBikeDB(JSON.parse(window.localStorage.getItem("bikesDB")));
    setCarsDB(JSON.parse(window.localStorage.getItem("carsDB")));
    setCommonDB(data);
    setFirstRender(true);
  }, [
    window.localStorage.getItem("bikesDB"),
    window.localStorage.getItem("carsDB"),
  ]);

  //   useEffect(() => {
  //     bikesData = ;JSON.parse(window.localStorage.getItem("bikesDB"))
  //     carsData = JSON.parse(window.localStorage.getItem("carsDB"));
  //   }, []);

  useEffect(() => {
    if (firstRender) {
      console.log("retriggered");
      if (category === "bikes") {
        const index = bikeDB.findIndex((item) => item.id === data.id);
        setCommonDB(bikeDB[index]);
      } else {
        const index = carsDB.findIndex((item) => item.id === data.id);
        setCommonDB(carsDB[index]);
      }
    }
  }, [bikeDB, carsDB]);

  return (
    <Box margin={"5% 0% 2%"} maxWidth={500} padding={10} component={Paper}>
      <Typography gutterBottom color={"secondary"} variant={"h5"}>
        {commonDB?.name}
      </Typography>
      <Typography gutterBottom variant={"subtitle1"} color={"textPrimary"}>
        {commonDB?.dod || commonDB?.year}
      </Typography>
      {category === "bikes" ? (
        <>
          <Typography
            gutterBottom
            variant={"subtitle2"}
            color={"textSecondary"}
          >
            {commonDB?.desc}
          </Typography>
          <Typography
            gutterBottom
            variant={"subtitle2"}
            color={"textSecondary"}
          >
            {commonDB?.dod || commonDB?.year}
          </Typography>
          <Typography
            gutterBottom
            variant={"subtitle2"}
            color={"textSecondary"}
          >
            {commonDB?.price}
          </Typography>
        </>
      ) : (
        <>
          <Typography variant={"subtitle2"} color={"textSecondary"}>
            {commonDB?.cylinders}
          </Typography>
          <Typography variant={"subtitle2"} color={"textSecondary"}>
            {commonDB?.weight_in_lbs}
          </Typography>
          <Typography variant={"subtitle2"} color={"textSecondary"}>
            {commonDB?.acceleration}
          </Typography>
        </>
      )}
    </Box>
  );
}

export default memo(DisplayDetails);
