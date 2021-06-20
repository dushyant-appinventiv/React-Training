import { Paper, Typography, Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";

function DisplayDetails({ category, data }) {
  const [commonDB, setCommonDB] = useState(data);

  useEffect(() => {
    setCommonDB(data);
  }, [data]);

  return (
    <Box margin={"5% 0% 2%"} maxWidth={500} padding={3} component={Paper}>
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
            {commonDB?.weightInLbs}
          </Typography>
          <Typography variant={"subtitle2"} color={"textSecondary"}>
            {commonDB?.acceleration}
          </Typography>
        </>
      )}
    </Box>
  );
}

export default DisplayDetails;
