import { Container } from "@material-ui/core";
import { Box, Paper, Button, Typography, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

export default function UserViewEdit({ data, updateDB }) {
  const { userID } = useParams();
  const [currUserData, setCurrUser] = useState({});
  const [editState, setEditState] = useState(false);
  const [editValues, setEditValues] = useState({});
  const history = useHistory();

  useEffect(() => {
    setCurrUser(data.find((item) => item.id == userID));
    setEditValues(data.find((item) => item.id == userID));
  }, [data, userID]);

  const handleDelete = () => {
    const userData = data;
    const userIndex = userData.findIndex((item) => item.id == userID);
    userData.splice(userIndex, 1);
    updateDB(userData);
    history.push("/dashboard");
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const userData = data;
    const userIndex = userData.findIndex((item) => item.id == userID);
    const currUser = await fetch("https://reqres.in/api/users/2", {
      method: "PUT",
      body: editValues,
    })
      .then((res) => res.json())
      .then((resData) => resData)
      .catch((err) => console.log("Error : ", err));
    let editObj = {
      ...editValues,
      updateDate: currUser?.updatedAt.substring(0, 10),
    };
    userData.splice(userIndex, 1, editObj);
    window.localStorage.setItem("allUsers", JSON.stringify(userData));
    updateDB(userData);
    setEditState(false);
    history.push("/dashboard");
  };

  return (
    <Container
      maxWidth={"md"}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <Box
        margin={"20px 0px"}
        component={Paper}
        maxWidth={500}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        padding={2}
      >
        <Typography
          gutterBottom
          align={"center"}
          color={"secondary"}
          variant={"h4"}
        >
          {currUserData.first_name + " " + currUserData.last_name}
        </Typography>
        <Box width={400} padding={0} margin={"0px 0px 20px"}>
          <img
            alt={"movie-img"}
            width={"100%"}
            height={"200px"}
            src={currUserData.avatar}
          />
        </Box>
        <Typography
          variant={"subtitle2"}
          color={"textSecondary"}
          align={"justify"}
          gutterBottom
        >
          {currUserData.email}
        </Typography>
        <Box
          display={"flex"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          width={"100%"}
        >
          <Button variant={"outlined"} color={"secondary"}>
            <Link style={{ textDecoration: "none" }} to={"/dashboard"}>
              {"GO BACK"}
            </Link>
          </Button>
          <Button
            onClick={() => setEditState(true)}
            color={"primary"}
            variant={"contained"}
          >
            {"EDIT"}
          </Button>
          {editState ? (
            <Button
              onClick={() => setEditState(false)}
              color={"secondary"}
              variant={"contained"}
            >
              {"CLOSE EDIT"}
            </Button>
          ) : (
            <Button
              onClick={() => handleDelete()}
              color={"secondary"}
              variant={"outlined"}
            >
              {"DELETE"}
            </Button>
          )}
        </Box>
      </Box>
      {editState ? (
        <Box margin={"20px 0px"} component={Paper} maxWidth={500} padding={2}>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
            onSubmit={(e) => handleEditSubmit(e)}
          >
            <TextField
              label={"First Name"}
              onChange={(e) =>
                setEditValues({ ...editValues, first_name: e.target.value })
              }
              value={editValues?.first_name}
              variant={"outlined"}
              color={"primary"}
              margin={"normal"}
            />
            <TextField
              label={"Last Name"}
              onChange={(e) =>
                setEditValues({ ...editValues, last_name: e.target.value })
              }
              value={editValues?.last_name}
              variant={"outlined"}
              color={"primary"}
              margin={"normal"}
            />
            <Button type={"submit"} color={"primary"} variant={"outlined"}>
              {"EDIT PLEASE"}
            </Button>
          </form>
        </Box>
      ) : null}
    </Container>
  );
}
