import React from "react";
import { Paper, Box } from "@mui/material";
import { flexBoxSx, Sx } from "../Styles/SXstyles";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Main from "../Components/Main";
import {
  FabricOverlay,
  BackgroundWordsOverlay,
} from "../Components/Helpers/Overlays";
import backgroundWords from "../Images/backgroundWords.png";

function GamePage() {
  return (
    <Paper
      sx={{
        ...flexBoxSx,
        flexDirection: "column",
        justifyContent: "space-around",
        height: "100vh",
        // width: "100vw",
        padding: "1rem 2rem",
        gap: "1rem",
        background: "transparent",
        background: `url(${backgroundWords})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header />

      {/* <Box
        sx={{
          ...flexBoxSx,
          height: "100%",
          width: "100%",
          overflow: "hidden",
        }}
      > */}
      <Main />
      {/* </Box> */}

      <Footer />
    </Paper>
  );
}
export default GamePage;
