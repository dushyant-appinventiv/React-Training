function Validation(values) {
  let errors = {};

  if (!values.fName) {
    errors.firstName = "Required First Name";
  } else if (values.fName.length < 4) {
    errors.firstName = "Too short, min 4 characters required";
  }

  if (!values.lName) {
    errors.lastName = "Required Last Name";
  } else if (values.lName.length < 4) {
    errors.lastName = "Too short, min 4 characters required";
  }

  if (!values.email) {
    errors.email = "Required Email ID";
  } else if (!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i.test(values.email)) {
    errors.email = "Invalid Email ID";
  }

  if (!values.address) {
    errors.address = "Required Address";
  }

  if (!values.password) {
    errors.password = "Required Password";
  } else if (values.password.length < 4) {
    errors.password = "Password Length too short";
  }

  return errors;
}

export default Validation;
