import React, { useState, useEffect } from "react";
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

function DisplayList({ data, setModal, search }) {
  const classes = useStyles();
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    setSearchString(search);
  }, [search]);

  const handleEditClick = (index) =>
    setModal({
      status: true,
      id: index,
      type: "edit",
    });

  const handleDeleteClick = (index) =>
    setModal({
      status: true,
      id: index,
      type: "delete",
    });

  const filterData = () => {
    const filterData = data.filter((item) =>
      item.firstName.toLowerCase().includes(searchString.toLowerCase())
    );

    return filterData?.map((item) => (
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
    ));
  };

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
              <TableCell variant={"head"} />
            </TableRow>
          </TableHead>
          <TableBody>
            {!Boolean(searchString)
              ? data?.map((item) => (
                  <TableRow key={item.id} hover>
                    <TableCell> {item.firstName} </TableCell>
                    <TableCell> {item.lastName} </TableCell>
                    <TableCell> {item.emailID} </TableCell>
                    <TableCell> {item.location} </TableCell>
                    <TableCell
                      className={classes.btnCellStyle}
                      align={"center"}
                    >
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
                ))
              : filterData()}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default DisplayList;
