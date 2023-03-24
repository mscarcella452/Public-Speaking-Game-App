import React, { useContext } from "react";
import { Box } from "@mui/material";
import { Sx } from "../../Styles/SXstyles";
import { mainCardContainerSx } from "./GameCard";
import TopCardMargin from "../Helpers/TopCardMargin";
import CardContent from "../Helpers/CardContent";
// import { FabricOverlay } from "../Helpers/Overlays";
import { mediaQueryContext } from "../../Context/mediaQueryContext";

function IntermissionCard({ timer }) {
  const screen = useContext(mediaQueryContext);
  return (
    <Box sx={{ ...mainCardContainerSx, background: Sx.color.secondary }}>
      {/* <ColorOverlay /> */}
      <TopCardMargin label={"TIMEOUT:"} timer={timer} />

      <CardContent>
        Upgrade the game to play without Timeouts!!{" "}
        <span
          style={{
            textDecoration: `line-through black`,
            textDecorationThickness: screen.lg || screen.md ? "1.75px" : "1px",
          }}
        >
          Remember, I'll always love you. But a little less each time you don't
          upgrade. You'll be like a toy I used to play with. You'll be my little
          hammy down. Except, I will break you. Kisses.
        </span>
      </CardContent>

      {/* <FabricOverlay /> */}
    </Box>
  );
}

export default IntermissionCard;
