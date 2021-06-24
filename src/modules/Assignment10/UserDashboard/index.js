import React, { useEffect, useState } from "react";
import { Container, Box } from "@material-ui/core";
import AuthorCard from "../../../component/Assignment10/authorCard";

export default function UserDashboard({ userData }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(userData);
  }, [userData]);

  return (
    <Container maxWidth={"md"}>
      <h1> {"Dashboard"} </h1>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        maxWidth={"100%"}
      >
        {data?.map((user) => (
          <AuthorCard
            key={user.id}
            index={user.id}
            updateDate={user.updateDate || ""}
            userEmail={user.email}
            fName={user.first_name}
            lName={user.last_name}
            imgSrc={user.avatar}
          />
        ))}
      </Box>
    </Container>
  );
}
