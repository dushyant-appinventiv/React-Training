import React, { useState, useEffect } from "react";
import { makeStyles, Button, TextField } from "@material-ui/core";
import { nanoid } from "nanoid";

function Validation(values) {
  let errors = {};

  if (!values.userfName) {
    errors.firstName = "Required First Name";
  } else if (values.userfName.length < 4) {
    errors.firstName = "Too short, min 4 characters required";
  } else {
    errors.firstName = "";
  }

  if (!values.userlName) {
    errors.lastName = "Required Last Name";
  } else if (values.userlName.length < 4) {
    errors.lastName = "Too short, min 4 characters required";
  } else {
    errors.lastName = "";
  }

  if (!values.userEmail) {
    errors.email = "Required Email ID";
  } else if (!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i.test(values.userEmail)) {
    errors.email = "Invalid Email ID";
  } else {
    errors.email = "";
  }

  if (!values.userAddress) {
    errors.address = "Required Address";
  } else {
    errors.address = "";
  }

  if (!values.userPassword) {
    errors.password = "Required Password";
  } else if (values.userPassword.length < 4) {
    errors.password = "Password Length too short";
  } else {
    errors.password = "";
  }

  return errors;
}

const useStyles = makeStyles({
  flexColCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
  },

  inputFieldStyle: {
    margin: "15px 0px",
  },
});

let initialFocusState = {
  fNameFocus: false,
  lNameFocus: false,
  addressFocus: false,
  emailFocus: false,
  passwordFocus: false,
};

function DisplayFrom({ data, updateDatabase, initialSet, status, setModal }) {
  const classes = useStyles();
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState(initialSet);
  const [focusValues, setFocusValues] = useState(initialFocusState);

  useEffect(() => {
    if (focusValues.fNameFocus) {
      let fNameErrMsg = Validation(values).firstName;
      setErrors({ ...errors, firstName: fNameErrMsg });
    }
  }, [values.userfName, focusValues.fNameFocus]);

  useEffect(() => {
    if (focusValues.lNameFocus) {
      let lNameErrMsg = Validation(values).lastName;
      setErrors({ ...errors, lastName: lNameErrMsg });
    }
  }, [values.userlName, focusValues.lNameFocus]);
  useEffect(() => {
    if (focusValues.addressFocus) {
      let addressErrMsg = Validation(values).address;
      setErrors({ ...errors, address: addressErrMsg });
    }
  }, [values.userAddress, focusValues.addressFocus]);
  useEffect(() => {
    if (focusValues.emailFocus) {
      let emailErrMsg = Validation(values).email;
      setErrors({ ...errors, email: emailErrMsg });
    }
  }, [values.userEmail, focusValues.emailFocus]);
  useEffect(() => {
    if (focusValues.passwordFocus) {
      let passwordErrMsg = Validation(values).password;
      setErrors({ ...errors, password: passwordErrMsg });
    }
  }, [values.userPassword, focusValues.passwordFocus]);

  function handleAddSubmit(e) {
    e.preventDefault();
    const { firstName, lastName, email, password, address } =
      Validation(values);
    if (firstName || lastName || email || password || address) {
      setErrors({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        address: address,
      });
      return;
    }
    const { userfName, userlName, userAddress, userEmail, userPassword } =
      values;
    const updateObj = {
      id: nanoid(),
      firstName: userfName,
      lastName: userlName,
      emailID: userEmail,
      pwd: userPassword,
      location: userAddress,
    };
    setValues(initialSet);
    setFocusValues(initialFocusState);
    let updateArray = [...data];
    updateArray.splice(0, 0, updateObj);
    updateDatabase(updateArray);
  }

  function handleEditSubmit(e) {
    e.preventDefault();
    setErrors(Validation(values));
    const { id, userfName, userlName, userAddress, userEmail, userPassword } =
      values;
    const index = data.findIndex((item) => item.id === id);
    const updateObj = {
      id: id,
      firstName: userfName,
      lastName: userlName,
      emailID: userEmail,
      pwd: userPassword,
      location: userAddress,
    };
    let updateArray = data;
    updateArray.splice(index, 1, updateObj);
    updateDatabase(updateArray);
    setModal({
      type: "",
      id: "",
      status: false,
    });
  }

  return (
    <form
      onSubmit={(e) => {
        status === "edit" ? handleEditSubmit(e) : handleAddSubmit(e);
      }}
      className={classes.flexColCenter}
    >
      <TextField
        className={classes.inputFieldStyle}
        label={"First Name"}
        value={values.userfName}
        placeholder={"First Name"}
        onFocus={() => setFocusValues({ ...focusValues, fNameFocus: true })}
        onChange={(e) =>
          focusValues.fNameFocus &&
          setValues({ ...values, userfName: e.target.value })
        }
        error={Boolean(errors.firstName)}
        helperText={Boolean(errors.firstName) && errors.firstName}
        variant={"outlined"}
        color={"primary"}
      />
      <TextField
        className={classes.inputFieldStyle}
        label={"Last Name"}
        name={"lName"}
        value={values.userlName}
        placeholder={"Last Name"}
        onFocus={() => setFocusValues({ ...focusValues, lNameFocus: true })}
        onChange={(e) =>
          focusValues.lNameFocus &&
          setValues({ ...values, userlName: e.target.value })
        }
        error={Boolean(errors.lastName)}
        helperText={Boolean(errors.lastName) && errors.lastName}
        variant={"outlined"}
        color={"primary"}
      />
      <TextField
        className={classes.inputFieldStyle}
        label={"Address"}
        value={values.userAddress}
        placeholder={"Address"}
        onFocus={() => setFocusValues({ ...focusValues, addressFocus: true })}
        onChange={(e) =>
          focusValues.addressFocus &&
          setValues({ ...values, userAddress: e.target.value })
        }
        error={Boolean(errors.address)}
        helperText={Boolean(errors.address) && errors.address}
        variant={"outlined"}
        color={"primary"}
      />
      <TextField
        className={classes.inputFieldStyle}
        label={"Email ID"}
        name={"email"}
        value={values.userEmail}
        placeholder={"Email ID"}
        onFocus={() => setFocusValues({ ...focusValues, emailFocus: true })}
        onChange={(e) =>
          focusValues.emailFocus &&
          setValues({ ...values, userEmail: e.target.value })
        }
        error={Boolean(errors.email)}
        helperText={Boolean(errors.email) && errors.email}
        variant={"outlined"}
        color={"primary"}
      />
      <TextField
        className={classes.inputFieldStyle}
        label={"Password"}
        type={"password"}
        placeholder={"Password"}
        value={values.userPassword}
        onFocus={() => setFocusValues({ ...focusValues, passwordFocus: true })}
        onChange={(e) =>
          focusValues.passwordFocus &&
          setValues({ ...values, userPassword: e.target.value })
        }
        error={Boolean(errors.password)}
        helperText={Boolean(errors.password) && errors.password}
        variant={"outlined"}
        color={"primary"}
      />
      <Button type={"submit"} color={"secondary"} variant={"contained"}>
        {status === "edit" ? "EDIT" : "ADD"}
      </Button>
    </form>
  );
}

export default DisplayFrom;
