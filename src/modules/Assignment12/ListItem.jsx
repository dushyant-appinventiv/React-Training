import React from "react";
import { Button, Card, CardContent, Typography } from "@material-ui/core";

function ListItem({ task, remove, theme }) {
  return (
    <Card
      style={{
        padding: "5px",
        width: "200px",
        height: "fit-content",
        margin: "10px",
        backgroundColor: theme.backgroundColor
      }}
      raised
    >
      <CardContent>
        <Typography gutterBottom variant={"h5"} color={"primary"}>
          {task.title}
        </Typography>
        <Button
          onClick={() => remove({ type: "REMOVE", payload: task.id })}
          variant={"outlined"}
          color={"secondary"}
        >
          {"Done"}
        </Button>
      </CardContent>
    </Card>
  );
}

export default ListItem;
