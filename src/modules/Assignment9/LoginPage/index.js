import React from "react";
import { TextField, Box, Paper, Button, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function LoginPage() {
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    window.localStorage.setItem("token", "true");
    history.push("/dashboard");
  }

  return (
    <Box
      component={Paper}
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
      justifyContent={"space-evenly"}
      maxHeight={400}
      padding={2}
      margin={4}
      maxWidth={300}
    >
      <Typography align={"center"} color={"textSecondary"} variant={"h4"}>
        {"LOG IN"}
      </Typography>
      <form onSubmit={(e) => handleSubmit(e)}>
        <TextField
          fullWidth
          variant={"outlined"}
          label={"Username"}
          required
          color={"primary"}
          margin={"normal"}
        />
        <TextField
          fullWidth
          required
          margin={"normal"}
          variant={"outlined"}
          label={"Email"}
          type={"email"}
          color={"primary"}
        />
        <TextField
          fullWidth
          required
          margin={"normal"}
          variant={"outlined"}
          label={"Password"}
          type={"password"}
          color={"primary"}
        />
        <Button
          type={"submit"}
          fullWidth
          variant={"contained"}
          color={"secondary"}
        >
          {"Submit"}
        </Button>
      </form>
    </Box>
  );
}

export default LoginPage;
