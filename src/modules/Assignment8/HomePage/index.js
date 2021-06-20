import DisplayList from "../../../component/Assignment8/displayList";
import DisplayFrom from "../../../component/Assignment8/displayForm";
import {
  Container,
  makeStyles,
  Paper,
  Box,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import DisplayModal from "../../../component/Assignment8/displayModal";

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
  userfName: "",
  userlName: "",
  userEmail: "",
  userAddress: "",
  userPassword: "",
};

function HomeScreen() {
  const classes = useStyles();
  const [database, setDatabase] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [modalVales, setModalValues] = useState({
    type: "",
    id: "",
    status: false,
  });
  console.log("Database: ", database);
  console.log("Modal Values :", modalVales);
  return (
    <Container className={classes.flexColCenter}>
      <Box margin={10} padding={2} maxWidth={500} component={Paper}>
        <DisplayFrom
          data={database}
          initialSet={initialValues}
          updateDatabase={setDatabase}
          status={"add"}
          setModal={""}
        />
      </Box>
      <DisplayModal
        values={modalVales}
        setValues={setModalValues}
        database={database}
        setDB={setDatabase}
      />
      <TextField
        fullWidth
        value={searchText}
        label={"Search"}
        onChange={(e) => setSearchText(e.target.value)}
        type={"search"}
        variant={"outlined"}
        color={"primary"}
      />
      <DisplayList
        data={database}
        search={searchText}
        setModal={setModalValues}
      />
    </Container>
  );
}

export default HomeScreen;
