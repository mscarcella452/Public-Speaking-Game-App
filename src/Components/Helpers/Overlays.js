import { useContext } from "react";
import { Sx, absolutePositionSx, flexBoxSx } from "../../Styles/SXstyles";
import { Paper, Box } from "@mui/material";
import backgroundWords from "../../Images/backgroundWords.png";
// import { gameContext } from "../../Context/GameStatusContext";

export function FabricOverlay({ zIndex, backgroundSize }) {
  return <Paper sx={{ ...fabricOverlaySx, zIndex, ...backgroundSize }} />;
}
export function BackgroundWordsOverlay({ zIndex, backgroundSize }) {
  return (
    <Paper sx={{ ...backgroundWordsOverlaySx, zIndex, ...backgroundSize }} />
  );
}

export const fabricOverlaySx = {
  ...absolutePositionSx,
  zIndex: 7,
  opacity: 0.4,
  background: `url("https://www.transparenttextures.com/patterns/navy.png") repeat center`,
  backgroundSize: { galaxyFold: "100%", sm: "75%", lg: "50%" },
};

export const backgroundWordsOverlaySx = {
  ...flexBoxSx,
  background: `url(${backgroundWords}) no-repeat center`,
  backgroundSize: "cover",
  justifyContent: "flex-start",
  flexDirection: "column",
  ...absolutePositionSx,
  boxSizing: "border-box",
  zIndex: 7,
  height: "100vh",
  gap: "1rem",
  // overflow: "scroll",
};
