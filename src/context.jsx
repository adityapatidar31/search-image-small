/* eslint-disable react/prop-types */
import { useState } from "react";
import AppContest from "./hooks/globalContext";

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [searchQuery, setSearchQuery] = useState("cat");
  function toggleDarkTheme() {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
  }
  return (
    <AppContest.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchQuery, setSearchQuery }}
    >
      {children}
    </AppContest.Provider>
  );
};
