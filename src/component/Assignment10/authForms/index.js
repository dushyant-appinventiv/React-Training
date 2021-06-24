import React from "react";
import { useFormik } from "formik";
import { Typography, TextField, Button, Box, Paper } from "@material-ui/core";
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
  return errors;
};

let newRegister = [];

function getFormBody(userDetail) {
  // userDetail = { email, password };
  var formBody = [];
  //   generating urlencoded data
  for (var property in userDetail) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(userDetail[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
  return formBody;
}

function AuthForms(props) {
  const history = useHistory();

  const loginSubmit = async () => {
    console.log(formik.values);
    const tokens = JSON.parse(window.localStorage.getItem("regToken"));
    const regUserToken = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody(formik.values),
    })
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => console.log("Error : ", err));
    if (Boolean(tokens.find((item) => item.token === regUserToken.token))) {
      console.log("Registered user can login");
      formik.resetForm();
      history.push("/dashboard");
    } else {
      return;
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: async (values) => {
      console.log("On submit called");
      console.log(values);
      const user = await fetch("https://reqres.in/api/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: getFormBody(values),
      })
        .then((res) => res.json())
        .then((data) => data)
        .catch((err) => console.log("Error : ", err));

      // updating new user token to the registered users array
      console.log(user);
      if (Boolean(window.localStorage.getItem("regToken"))) {
        newRegister = JSON.parse(window.localStorage.getItem("regToken"));
      }
      newRegister = [...newRegister, user];
      console.log(newRegister);
      window.localStorage.setItem("regToken", JSON.stringify(newRegister));
      formik.resetForm();
      return;
    },
  });

  return (
    <>
      <Typography
        align={"center"}
        gutterBottom
        variant={"h4"}
        color={"secondary"}
      >
        {props.type === "register" ? "REGISTER" : "LOG IN"}
      </Typography>
      <Box maxHeight={400} maxWidth={300} component={Paper} padding={2}>
        <form
          onSubmit={props.type === "register" ? formik.handleSubmit : null}
          onReset={formik.handleReset}
        >
          <TextField
            error={formik.touched.email && Boolean(formik.errors.email)}
            margin={"normal"}
            fullWidth
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
          {props.type === "register" ? (
            <Button
              fullWidth
              disabled={false}
              type={"submit"}
              size={"large"}
              variant={"contained"}
              color={"primary"}
            >
              {"Register"}
            </Button>
          ) : (
            <Button
              fullWidth
              disabled={false}
              onClick={loginSubmit}
              size={"large"}
              variant={"contained"}
              color={"primary"}
            >
              {"Login"}
            </Button>
          )}
        </form>
      </Box>
    </>
  );
}

export default AuthForms;
