import { createContext, useReducer } from "react";

let initialList = [
  {
    id: "1",
    title: "selected either the",
    completed: false,
  },
  {
    id: "2",
    title: "Who will be easy for those services",
    completed: false,
  },
  {
    id: "3",
    title: "I fly less",
    completed: false,
  },
  {
    id: "4",
    title: "and on time",
    completed: true,
  },
  {
    id: "5",
    title:
      "an intense experience because they provide the resilience and the like",
    completed: false,
  },
];

const listReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "REMOVE":
      const index = state.findIndex((item) => item.id === action.payload);
      state.splice(index, 1);
      return [...state];
    default:
      return state;
  }
};

export const ListContext = createContext();

export const ListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(listReducer, initialList);

  return (
    <ListContext.Provider value={{ state, dispatch }}>
      {children}
    </ListContext.Provider>
  );
};
