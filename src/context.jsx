/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import AppContest from "./hooks/globalContext";

function getInitialDarkMode() {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const storedDarkMode = localStorage.getItem("darkTheme");

  if (storedDarkMode === null) {
    return prefersDarkMode;
  }

  return storedDarkMode === "true";
}

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => getInitialDarkMode());
  const [searchQuery, setSearchQuery] = useState("cat");
  function toggleDarkTheme() {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    localStorage.setItem("darkTheme", newDarkTheme);
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
