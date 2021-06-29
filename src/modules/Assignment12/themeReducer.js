import React, { useReducer, createContext } from "react";

const initialTheme = {
  lightTheme: true,
  backgroundColor: "white",
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHT":
      return initialTheme;
    case "DARK":
      return { ...state, lightTheme: false, backgroundColor: "black" };
    default:
      return state;
  }
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeState, themeDispatch] = useReducer(themeReducer, initialTheme);
  return (
    <ThemeContext.Provider value={{ themeState, themeDispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
