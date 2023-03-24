import React, { createContext } from "react";
import { useMediaQuery } from "@mui/material";

export const mediaQueryContext = createContext();

function MediaQueryContextProvider({ children }) {
  const screen = {
    xl: useMediaQuery("(min-width: 720px)  and (min-height: 821px)"),
    lg: useMediaQuery("(min-width: 1050px) and (min-height: 415px)"),
    md: useMediaQuery("(min-width: 600px) and (min-height: 415px)"),
    sm: useMediaQuery("(min-width: 389px) and (min-height: 481px)"),
    xs: useMediaQuery("(max-width: 320px) or (max-height: 320px)"),
    justify: useMediaQuery("(min-width: 900px) and (min-height: 800px)"),
  };
  return (
    <mediaQueryContext.Provider value={screen}>
      {children}
    </mediaQueryContext.Provider>
  );
}

export default MediaQueryContextProvider;
