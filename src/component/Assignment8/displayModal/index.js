import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle, Button } from "@material-ui/core";
import DisplayFrom from "../displayForm";
import { DialogActions } from "@material-ui/core";
import { DialogContentText } from "@material-ui/core";

let data = {};

function DisplayModal({ status, setDB, id, database, type }) {
  const [isOpen, setOpen] = useState(status);

  useEffect(() => {
    const index = database.findIndex((item) => item.id === id);
    const { id, emailID, firstName, lastName, location, pwd } = database[index];
    data = {
      ...data,
      id: id,
      email: emailID,
      fName: firstName,
      lName: lastName,
      address: location,
      password: pwd,
    };
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    const index = database.findIndex((item) => item.id === id);
    let updateArray = [...database];
    updateArray.splice(index, 1);
    setDB(updateArray);
    setOpen(false);
  };

  return (
    <Dialog maxWidth={"md"} PaperComponent open={isOpen}>
      <DialogTitle>{type === "edit" ? "Edit Form" : "Delete Box"} </DialogTitle>
      <DialogContent>
        {type === "edit" ? (
          <DisplayFrom
            initialSet={data}
            status={"edit"}
            data={database}
            updateDatabase={setDB}
          />
        ) : (
          <DialogContentText>
            {"Are you sure you want to delete this entry !"}
          </DialogContentText>
        )}
      </DialogContent>
      <DialogActions>
        <Button
          variant={"outlined"}
          color={"primary"}
          onClick={() => handleClose}
        >
          {"Close"}
          {type === "delete" ? (
            <Button
              variant={"outlined"}
              color={"secondary"}
              onClick={() => handleDelete}
            >
              {"Yes, Delete"}
            </Button>
          ) : null}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DisplayModal;
