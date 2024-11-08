/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import AppContest from "./hooks/globalContext";

function getInitialDarkMode() {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches;

  return prefersDarkMode;
}

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => getInitialDarkMode());
  const [searchQuery, setSearchQuery] = useState("cat");
  function toggleDarkTheme() {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
  }
  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);
  return (
    <AppContest.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchQuery, setSearchQuery }}
    >
      {children}
    </AppContest.Provider>
  );
};
