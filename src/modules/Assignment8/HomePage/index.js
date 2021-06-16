import DisplayList from "../../../component/Assignment8/displayList";
import DisplayFrom from "../../../component/Assignment8/displayForm";
import { Container, makeStyles } from "@material-ui/core";
import React, { useState } from "react";

// function Validation(values) {
//   let errors = {};

//   if (!values.fName) {
//     errors.firstName = "Required First Name";
//   } else if (values.fName.length < 4) {
//     errors.firstName = "Too short, min 4 characters required";
//   }

//   if (!values.lName) {
//     errors.lastName = "Required Last Name";
//   } else if (values.lName.length < 4) {
//     errors.lastName = "Too short, min 4 characters required";
//   }

//   if (!values.email) {
//     errors.email = "Required Email ID";
//   } else if (!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i.test(values.email)) {
//     errors.email = "Invalid Email ID";
//   }

//   if (!values.address) {
//     errors.address = "Required Address";
//   }

//   if (!values.password) {
//     errors.password = "Required Password";
//   } else if (values.password.length < 4) {
//     errors.password = "Password Length too short";
//   }

//   return errors;
// }

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

const initialValues = {
  id: "",
  fName: "Example",
  lName: "LastName",
  email: "example@email.com",
  address: "Your Address",
  password: "123456",
};

function HomeScreen() {
  const classes = useStyles();
  //   const [errors, setErrors] = useState({});
  const [database, setDatabase] = useState([]);
  //   const [values, setValues] = useState({
  //     id: "",
  //     fName: "Example",
  //     lName: "lastExaple",
  //     email: "helpetext@gmail.com",
  //     password: "12345",
  //     address: "Noida / UP",
  //   });

  //   useEffect(() => {
  //     setErrors(Validation(values));
  //   }, [values]);

  //   function handleSubmit(e) {
  //     e.preventDefault();
  //     setErrors(Validation(values));
  //     const { fName, lName, address, email, password } = values;
  //     const updateObj = {
  //       id: nanoid(),
  //       firstName: fName,
  //       lastName: lName,
  //       emailID: email,
  //       pwd: password,
  //       location: address,
  //     };
  //     setValues({
  //       id: "",
  //       fName: "Example",
  //       lName: "lastExaple",
  //       email: "helpetext@gmail.com",
  //       password: "12345",
  //       address: "Noida / UP",
  //     });
  //     data.splice(0, 0, updateObj);
  //     setDatabase(data);
  //   }

  return (
    <Container className={classes.flexColCenter}>
      {/* <Box margin={10} padding={2} maxWidth={500} component={Paper}>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className={classes.flexColCenter}
        >
          <TextField
            className={classes.inputFieldStyle}
            label={"First Name"}
            value={values.fName}
            onChange={(e) => setValues({ ...values, fName: e.target.value })}
            error={Boolean(errors.firstName)}
            helperText={Boolean(errors.firstName) && errors.firstName}
            variant={"outlined"}
            color={"primary"}
          />
          <TextField
            className={classes.inputFieldStyle}
            label={"Last Name"}
            name={"lName"}
            value={values.lName}
            onChange={(e) => setValues({ ...values, lName: e.target.value })}
            error={Boolean(errors.lastName)}
            helperText={Boolean(errors.lastName) && errors.lastName}
            variant={"outlined"}
            color={"primary"}
          />
          <TextField
            className={classes.inputFieldStyle}
            label={"Address"}
            value={values.address}
            onChange={(e) => setValues({ ...values, address: e.target.value })}
            error={Boolean(errors.address)}
            helperText={Boolean(errors.address) && errors.address}
            variant={"outlined"}
            color={"primary"}
          />
          <TextField
            className={classes.inputFieldStyle}
            label={"Email ID"}
            name={"email"}
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            error={Boolean(errors.email)}
            helperText={Boolean(errors.email) && errors.email}
            variant={"outlined"}
            color={"primary"}
          />
          <TextField
            className={classes.inputFieldStyle}
            label={"Password"}
            type={"password"}
            value={values.password}
            onChange={(e) => setValues({ ...values, password: e.target.value })}
            error={Boolean(errors.password)}
            helperText={Boolean(errors.password) && errors.password}
            variant={"outlined"}
            color={"primary"}
          />
          <Button type={"submit"} color={"secondary"} variant={"contained"}>
            {"ADD"}
          </Button>
        </form>
      </Box> */}
      <DisplayFrom
        data={database}
        initialSet={initialValues}
        updateDatabase={setDatabase}
        status={"add"}
      />
      <DisplayList data={database} updateDB={setDatabase} />
    </Container>
  );
}

export default HomeScreen;
