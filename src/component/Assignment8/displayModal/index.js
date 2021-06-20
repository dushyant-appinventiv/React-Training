import React, { useEffect, useState } from "react";
import {
  Button,
  makeStyles,
  Paper,
  Modal,
  Typography,
  Box,
} from "@material-ui/core";
import DisplayFrom from "../displayForm";

const useStyles = makeStyles({
  flexColCenter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

function DisplayModal({ setDB, database, values, setValues }) {
  const [data, setData] = useState({});
  const classes = useStyles();
  useEffect(() => {
    if (values.type === "edit") {
      const index = database.findIndex((item) => item.id === values.id);
      const { id, emailID, firstName, lastName, location, pwd } =
        database[index];
      setData({
        ...data,
        id: id,
        userEmail: emailID,
        userfName: firstName,
        userlName: lastName,
        userAddress: location,
        userPassword: pwd,
      });
    }
  }, [values.type]);

  const handleClose = () => {
    setValues({
      id: "",
      type: "",
      status: false,
    });
  };

  const handleDelete = () => {
    const index = database.findIndex((item) => item.id === values.id);
    let updateArray = [...database];
    updateArray.splice(index, 1);
    setValues({
      id: "",
      type: "",
      status: false,
    });
    setDB(updateArray);
  };

  return (
    <Modal
      onClose={handleClose}
      className={classes.flexColCenter}
      open={values.status}
    >
      <Box
        width={500}
        padding={2}
        className={classes.flexColCenter}
        component={Paper}
      >
        {values.type === "edit" ? (
          <Typography variant={"h4"} color={"textSecondary"}>
            {"Edit Form"}
          </Typography>
        ) : (
          <Typography variant={"h4"} color={"secondary"}>
            {"Delete Box"}
          </Typography>
        )}
        {values.type === "edit" ? (
          <DisplayFrom
            initialSet={data}
            status={"edit"}
            setModal={setValues}
            data={database}
            updateDatabase={setDB}
          />
        ) : (
          <Typography variant={"subtitle1"} color={"textPrimary"}>
            {"Are you sure you want to delete this entry !"}
          </Typography>
        )}
        <Button
          variant={"outlined"}
          color={"primary"}
          style={{ margin: "15px" }}
          onClick={() => {
            handleClose();
          }}
        >
          {"Close"}
        </Button>
        {values.type === "delete" ? (
          <Button
            variant={"outlined"}
            color={"secondary"}
            onClick={() => {
              handleDelete();
            }}
          >
            {"Yes, Delete"}
          </Button>
        ) : null}
      </Box>
    </Modal>
  );
}

export default DisplayModal;
