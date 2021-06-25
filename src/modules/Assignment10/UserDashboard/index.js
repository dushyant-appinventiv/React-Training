import React, { useEffect, useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import AuthorCard from "../../../component/Assignment10/authorCard";

const defaultImg = "https://reqres.in/img/faces/7-image.jpg";

function getFormBody(userDetail) {
  // userDetail = { email, password };
  var formBody = [];
  //   generating urlencoded data
  for (var property in userDetail) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(userDetail[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
  return formBody;
}

export default function UserDashboard({ userData }) {
  const [data, setData] = useState([]);
  const [addForm, setAddForm] = useState(false);
  const [addFromValues, setAddFormValues] = useState({
    avatar: defaultImg,
    first_name: "",
    last_name: "",
    email: "",
  });

  useEffect(() => {
    setData(userData);
  }, [userData]);

  const handleAddSubmit = async (e) => {
    e.preventDefault();
    const addUser = await fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody(addFromValues),
    })
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => console.log("Error : ", err));
    console.log("Added user: ", addUser);
    let users = data;
    users.push(addUser);
    console.log("List : ", users);
    setData(users);
    setAddForm(false);
  };

  return (
    <Container maxWidth={"md"}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        width={"100%"}
        alignItems={"center"}
      >
        <Typography variant={"h3"} color={"textSecondary"}>
          {"Dashboard"}
        </Typography>
        {!addForm ? (
          <Button
            color={"secondary"}
            onClick={() => setAddForm(true)}
            variant={"outlined"}
          >
            {"ADD USER"}
          </Button>
        ) : (
          <Button
            color={"secondary"}
            onClick={() => setAddForm(false)}
            variant={"contained"}
          >
            {"CANCEL"}
          </Button>
        )}
      </Box>
      {addForm ? (
        <Box>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
            onSubmit={(e) => handleAddSubmit(e)}
          >
            <TextField
              label={"First Name"}
              variant={"outlined"}
              color={"primary"}
              margin={"normal"}
              onChange={(e) =>
                setAddFormValues({
                  ...addFromValues,
                  first_name: e.target.value,
                })
              }
            />
            <TextField
              label={"Last Name"}
              variant={"outlined"}
              color={"primary"}
              margin={"normal"}
              onChange={(e) =>
                setAddFormValues({
                  ...addFromValues,
                  last_name: e.target.value,
                })
              }
            />
            <TextField
              label={"Email ID"}
              variant={"outlined"}
              color={"primary"}
              margin={"normal"}
              onChange={(e) =>
                setAddFormValues({ ...addFromValues, email: e.target.value })
              }
            />
            <Button type={"submit"} variant={"contained"} color={"primary"}>
              {"ADD"}
            </Button>
          </form>
        </Box>
      ) : null}
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        maxWidth={"100%"}
      >
        {data?.map((user) => (
          <AuthorCard
            key={user.id}
            index={user.id}
            updateDate={user.updateDate || ""}
            userEmail={user.email}
            fName={user.first_name}
            lName={user.last_name}
            imgSrc={user.avatar}
          />
        ))}
      </Box>
    </Container>
  );
}
