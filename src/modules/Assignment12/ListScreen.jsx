import { Box, Container, TextField, Button } from "@material-ui/core";
import React, { useContext, useState } from "react";
import ListItem from "./ListItem";
import { nanoid } from "nanoid";
import { ListContext } from "./listReducer";
import { ThemeContext } from "./themeReducer";

function ListScreen() {
  const { state, dispatch } = useContext(ListContext);
  const { themeState, themeDispatch } = useContext(ThemeContext);
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD",
      payload: {
        id: nanoid(),
        title: task
      }
    });
    setTask("");
  };

  return (
    <Container
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
      }}
      maxWidth={"md"}
    >
      <Box width={"100%"} padding={1}>
        <form
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly"
          }}
          onSubmit={(e) => task ? handleSubmit(e) : null}
        >
          <TextField
            value={task}
            onChange={(e) => setTask(e.target.value)}
            label={"Task"}
            color={"primary"}
            variant={"outlined"}
            margin={"normal"}
          />
          <Button variant={"contained"} color={"primary"} type={"submit"}>
            {"ADD"}
          </Button>
        </form>
        <Button
          onClick={() =>
            themeState.lightTheme
              ? themeDispatch({ type: "DARK" })
              : themeDispatch({ type: "LIGHT" })
          }
          variant={"contained"}
          color={"secondary"}
        >
          {"Toggle Theme"}
        </Button>
      </Box>
      {state.map((item) => (
        <ListItem
          key={item.id}
          theme={themeState}
          task={item}
          remove={dispatch}
        />
      ))}
    </Container>
  );
}

export default ListScreen;
