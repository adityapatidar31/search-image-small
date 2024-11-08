/* eslint-disable react/prop-types */
import { useState } from "react";
import AppContest from "./hooks/globalContext";

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  function toggleDarkTheme() {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
  }
  return (
    <AppContest.Provider value={{ isDarkTheme, toggleDarkTheme }}>
      {children}
    </AppContest.Provider>
  );
};
