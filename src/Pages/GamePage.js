import React from "react";
import { Paper, Box } from "@mui/material";
import { flexBoxSx } from "../Styles/SXstyles";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Main from "../Components/Main";
import {
  FabricOverlay,
  BackgroundWordsOverlay,
} from "../Components/Helpers/Overlays";

function GamePage() {
  return (
    <Paper
      sx={{
        ...flexBoxSx,
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
        width: "100%",
        padding: "2rem",
        gap: "1rem",
        background: "transparent",
      }}
    >
      <FabricOverlay />
      <BackgroundWordsOverlay />
      <Header />

      <Main />

      <Footer />
    </Paper>
  );
}

export default GamePage;
