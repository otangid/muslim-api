"use client";

import React, { createContext, useContext, useMemo, useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const ColorModeContext = createContext({ toggleColorMode: () => {}, mode: "light" });

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      paper: "#282828",
      default: "#1d2021",
    },
    info: {
      main: "#689d6a",
    },
    primary: {
      main: "#458588",
    },
    secondary: {
      main: "#b16286",
    },
    error: {
      main: "#cc241d",
    },
    warning: {
      main: "#bc7f02",
    },
    success: {
      main: "#98971a",
    },
    text: {
      primary: "#fbf1c7",
      secondary: "#ebdbb2",
      disabled: "#d5c4a1",
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      paper: "#fbf1c7",
      default: "#f9f5d7",
    },
    info: {
      main: "#689d6a",
    },
    primary: {
      main: "#458588",
    },
    secondary: {
      main: "#b16286",
    },
    error: {
      main: "#cc241d",
    },
    warning: {
      main: "#bc7f02",
    },
    success: {
      main: "#98971a",
    },
    text: {
      primary: "#282828",
      secondary: "#3c3836",
      disabled: "#504945",
    },
  },
});

export const ColorModeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<"light" | "dark">("dark"); // Default ke dark

  // Simpan/Ambil pilihan user dari LocalStorage agar tidak reset saat refresh
  useEffect(() => {
    const savedMode = localStorage.getItem("themeMode") as "light" | "dark";
    if (savedMode) setMode(savedMode);
  }, []);

  const colorMode = useMemo(
    () => ({
      mode,
      toggleColorMode: () => {
        setMode((prev) => {
          const newMode = prev === "light" ? "dark" : "light";
          localStorage.setItem("themeMode", newMode);
          return newMode;
        });
      },
    }),
    [mode],
  );

  // Definisi tema custom kamu di sini
  const theme = useMemo(() => (mode === "light" ? lightTheme : darkTheme), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export const useColorMode = () => useContext(ColorModeContext);
