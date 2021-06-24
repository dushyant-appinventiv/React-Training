import React from "react";
import AuthForms from "../../../component/Assignment10/authForms";
import { Container, Box } from "@material-ui/core";

export default function UserAuthScreen() {
  return (
    <Container
      maxWidth={"md"}
      style={{
        padding: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <Box>
        <AuthForms key={"register"} type={"register"} />
      </Box>
      <Box>
        <AuthForms key={"login"} type={"login"} />
      </Box>
    </Container>
  );
}
