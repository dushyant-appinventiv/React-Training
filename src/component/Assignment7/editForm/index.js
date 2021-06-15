import { Box, Button, Paper, TextField, makeStyles } from "@material-ui/core";
import React, { useEffect, memo } from "react";
import { useState } from "react";

const useStyles = makeStyles({
  flexColCenter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  textFieldStyle: {
    margin: "10px 0px",
  },
});

let bikesData = [];
let carsData = [];

bikesData = JSON.parse(window.localStorage.getItem("bikesDB"));
carsData = JSON.parse(window.localStorage.getItem("carsDB"));

function EditForm({ category, data }) {
  const classes = useStyles();

  const [vehicleName, setName] = useState(data.name);
  const [dateOfDelivery, setDateOfDelivery] = useState(data.dod || data.year);
  const [description, setDescription] = useState(data.desc);
  const [vehiclePrice, setPrice] = useState(data.price);
  const [vehicleAcc, setAcceleration] = useState(data.acceleration);
  const [vehicleCylinders, setCylinders] = useState(data.cylinders);
  const [weight, setWeight] = useState(data.weight_in_lbs);

  function handleEditFormSubmit(e) {
    e.preventDefault();
    if (category === "bikes") {
      const editObject = {
        ...data,
        name: vehicleName,
        desc: description,
        price: vehiclePrice,
        dod: dateOfDelivery,
      };
      data = editObject;
      const index = bikesData.findIndex((item) => item.id === data.id);
      bikesData.splice(index, 1, data);
      window.localStorage.setItem("bikesDB", JSON.stringify(bikesData));
    } else {
      const editObject = {
        ...data,
        name: vehicleName,
        year: dateOfDelivery,
        acceleration: vehicleAcc,
        cylinders: vehicleCylinders,
        weight_in_lbs: weight,
      };
      data = editObject;
      const index = carsData.findIndex((item) => item.id === data.id);
      console.log(index);
      carsData.splice(index, 1, data);
      window.localStorage.setItem("carsDB", JSON.stringify(carsData));
    }
  }

  return (
    <Box component={Paper} width={"40%"} padding={"20px"}>
      <form
        onSubmit={(e) => handleEditFormSubmit(e)}
        className={classes.flexColCenter}
      >
        <TextField
          type={"input"}
          fullWidth
          value={vehicleName}
          onChange={(e) => setName(e.target.value)}
          className={classes.textFieldStyle}
          label={"Name your Vehicle"}
          variant={"outlined"}
          required
          color={"primary"}
        />
        <TextField
          fullWidth
          required
          value={dateOfDelivery}
          onChange={(e) => setDateOfDelivery(e.target.value)}
          type={"date"}
          className={classes.textFieldStyle}
          datatype={"date"}
          defaultValue={"2020-12-31"}
          label={"Delivery Date"}
          placeholder={"none"}
          color={"primary"}
        />
        {category === "bikes" ? (
          <>
            <TextField
              rows={5}
              required
              fullWidth
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              multiline
              rowsMax={5}
              color={"primary"}
              label={"Description"}
              variant={"outlined"}
            />
            <TextField
              fullWidth
              required
              value={vehiclePrice}
              onChange={(e) => setPrice(e.target.value)}
              className={classes.textFieldStyle}
              type={"number"}
              color={"primary"}
              label={"Price"}
              variant={"outlined"}
            />
          </>
        ) : (
          <>
            <TextField
              fullWidth
              required
              value={vehicleCylinders}
              onChange={(e) => setCylinders(e.target.value)}
              type={"number"}
              className={classes.textFieldStyle}
              label={"Cylinders"}
              color={"primary"}
              variant={"outlined"}
            />
            <TextField
              fullWidth
              required
              type={"number"}
              value={vehicleAcc}
              onChange={(e) => setAcceleration(e.target.value)}
              className={classes.textFieldStyle}
              label={"Acceleration Needed"}
              color={"primary"}
              variant={"outlined"}
            />
            <TextField
              fullWidth
              required
              type={"number"}
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              label={"Weight (in lbs)"}
              color={"primary"}
              className={classes.textFieldStyle}
              variant={"outlined"}
            />
          </>
        )}
        <Button type={"submit"} variant={"contained"} color={"primary"}>
          {"Edit Vehicle"}
        </Button>
      </form>
    </Box>
  );
}

export default memo(EditForm);
