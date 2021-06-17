import { useState } from "react";

const FormHook = ({ Validation }) => {
  const [values, setValues] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    address: "",
  });

  //   console.log(Validation(values));
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(values));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setValues({
      ...values,
      [name]: value,
    });
  };
  return { handleChange, values, handleSubmit, errors };
};

export default FormHook;
