import React, { useEffect, useState } from "react";
import { Button, Backdrop } from "@material-ui/core";
import DisplayFrom from "../displayForm";
import { Modal } from "@material-ui/core";
import { Typography } from "@material-ui/core";

function DisplayModal({ setDB, database, values, setValues }) {
  const [isOpen, setOpen] = useState(values.status);
  const [data, setData] = useState({});

  useEffect(() => {
    if (values.type === "edit") {
      const index = database.findIndex((item) => item.id === values.id);
      const { id, emailID, firstName, lastName, location, pwd } =
        database[index];
      console.log("data : " + JSON.stringify(database[index]));
      setData({
        ...data,
        id: id,
        email: emailID,
        fName: firstName,
        lName: lastName,
        address: location,
        password: pwd,
      });
    }
  }, [values.type]);

  useEffect(() => {
    setOpen(values.status);
  }, [values.status]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    const index = database.findIndex((item) => item.id === values.id);
    let updateArray = [...database];
    updateArray.splice(index, 1);
    setOpen(false);
    setDB(updateArray);
  };

  return (
    <Modal
      style={{ height: "500px", width: "500px" }}
      BackdropComponent={Backdrop}
      onClose={handleClose}
      open={isOpen}
    >
      <>
        {console.log("Modal :" + isOpen)}
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
          onClick={() => handleClose}
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
      </>
    </Modal>
  );
}

export default DisplayModal;
