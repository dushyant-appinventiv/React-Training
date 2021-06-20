import React from "react";
import { useFormik } from "formik";
import { Box, Paper } from "@material-ui/core";
import {
  Container,
  Typography,
  TextField,
  Button,
  Link,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  if (!values.username) {
    errors.username = "Required";
  }
  return errors;
};

function Forms(props) {
  let history = useHistory();

  function loginSubmit() {
    console.log(formik.values);
    if (
      formik.values.email === localStorage.getItem("email") &&
      formik.values.password === localStorage.getItem("pwd")
    ) {
      history.push("/movies");
    } else {
      return;
    }
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: "",
    },
    validate,
    onSubmit: (values) => {
      console.log("On submit called");
      localStorage.setItem("email", values.email);
      localStorage.setItem("pwd", values.password);
      history.push("/login");
    },
  });

  return (
    <Container maxWidth={"sm"}>
      <Typography
        align={"center"}
        gutterBottom
        variant={"h4"}
        color={"secondary"}
      >
        {props.type === "signup" ? "SIGN UP" : "LOG IN"}
      </Typography>
      <Box component={Paper} padding={"20px"}>
        <form onSubmit={formik.handleSubmit}>
          {props.uname ? (
            <TextField
              error={formik.touched.username && Boolean(formik.errors.username)}
              margin={"normal"}
              fullWidth
              id={"username"}
              name={"username"}
              type={"string"}
              variant={"outlined"}
              value={formik.values.username}
              helperText={formik.touched.username && formik.errors.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              label={"Username"}
            />
          ) : null}
          <TextField
            error={formik.touched.email && Boolean(formik.errors.email)}
            margin={"normal"}
            fullWidth
            id={"email"}
            onBlur={formik.handleBlur}
            name={"email"}
            type={"email"}
            value={formik.values.email}
            variant={"outlined"}
            onChange={formik.handleChange}
            helperText={formik.touched.email && formik.errors.email}
            label={"Email"}
          />
          <TextField
            fullWidth
            id={"password"}
            name={"password"}
            margin={"normal"}
            variant={"outlined"}
            onBlur={formik.handleBlur}
            label={"Password"}
            type={"password"}
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          {props.type === "login" ? (
            <Link
              align={"left"}
              href={"/"}
              color={"secondary"}
              variant={"subtitle2"}
            >
              {"Sign In"}
            </Link>
          ) : null}
          <Button
            fullWidth
            disabled={false}
            type={"submit"}
            size={"large"}
            onClick={props.type === "login" ? loginSubmit : null}
            variant={"contained"}
            color={"primary"}
          >
            {props.type === "signup" ? "Sign Up" : "Log In"}
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default Forms;
