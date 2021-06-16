import React from "react";
import DisplayModal from "../displayModal";
import {
  TableBody,
  Button,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Paper,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  editBtnStyle: {
    backgroundColor: "rgb(246, 225, 65)",
    color: "#ffffff",
    border: "none",
    outline: "none",
    transition: "backgroundColor 0.5s",
    "&:hover": {
      backgroundColor: "rgba(175, 156, 8,1)",
    },
  },
  deleteBtnStyle: {
    backgroundColor: "rgb(245, 66, 66)",
    color: "#ffffff",
    border: "none",
    outline: "none",
    transition: "backgroundColor 0.5s",
    "&:hover": {
      backgroundColor: "rgba(179, 9, 9, 1)",
    },
  },
  btnCellStyle: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

function DisplayList({ data, updateDB }) {
  const classes = useStyles();

  const handleEditClick = (index) => (
    <DisplayModal
      status={true}
      type={"edit"}
      database={data}
      id={index}
      setDB={updateDB}
    />
  );

  const handleDeleteClick = (index) => (
    <DisplayModal
      status={true}
      type={"delete"}
      database={data}
      id={index}
      setDB={updateDB}
    />
  );

  return (
    <>
      <TableContainer component={Paper}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell variant={"head"}> {"First Name"} </TableCell>
              <TableCell variant={"head"}> {"Last Name"} </TableCell>
              <TableCell variant={"head"}> {"Email ID"} </TableCell>
              <TableCell variant={"head"}> {"Address"} </TableCell>
              <TableCell variant={"head"}> </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((item) => (
              <TableRow key={item.id} hover>
                <TableCell> {item.firstName} </TableCell>
                <TableCell> {item.lastName} </TableCell>
                <TableCell> {item.emailID} </TableCell>
                <TableCell> {item.location} </TableCell>
                <TableCell className={classes.btnCellStyle} align={"center"}>
                  <Button
                    className={classes.editBtnStyle}
                    variant={"contained"}
                    onClick={() => handleEditClick(item.id)}
                  >
                    {"Edit"}
                  </Button>
                  <Button
                    variant={"contained"}
                    className={classes.deleteBtnStyle}
                    onClick={() => handleDeleteClick(item.id)}
                  >
                    {"Delete"}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default DisplayList;
