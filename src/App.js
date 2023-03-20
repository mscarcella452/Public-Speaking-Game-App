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
          background: Sx.color.primary,
          overflow: "scroll",
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
