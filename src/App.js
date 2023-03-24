import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Paper } from "@mui/material";
import { Sx, flexBoxSx } from "./Styles/SXstyles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import GamePage from "./Pages/GamePage";

export const theme = createTheme({
  breakpoints: {
    values: {
      galaxyFold: 0,
      mobile: 300,
      xs: 389,
      sm: 625,
      md: 715,
      lg: 875,
      xl: 1100,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Paper
        sx={{
          ...flexBoxSx,
          height: "100vh",
          boxSizing: "border-box",
          fontFamily: Sx.font.display,
          backgroundColor: Sx.color.primary,
          // background: {
          //   galaxyFold: "pink",
          //   xs: "#aaa",
          //   sm: "teal",
          //   md: "green",
          //   lg: "white",
          //   xl: Sx.color.primary,
          // },
          overflow: "hidden",
          // background: `url(${backgroundWords})`,
          // backgroundSize: "cover",
          flexDirection: "column",
          width: "100vw",

          // "&::after": {
          //   content: '""',
          //   position: "absolute",
          //   top: 0,
          //   bottom: 0,
          //   left: 0,
          //   right: 0,
          //   backgroundColor: Sx.color.primary,
          //   zIndex: -1,
          //   // background: `url(${backgroundWords})`,
          //   // backgroundSize: "cover",
          // },
        }}
      >
        <Routes>
          <Route path='*' element={<GamePage />} />
        </Routes>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
