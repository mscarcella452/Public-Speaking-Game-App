import { useContext } from "react";
import { Paper, Box } from "@mui/material";
import { flexBoxSx, Sx, absolutePositionSx } from "../Styles/SXstyles";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Main from "../Components/Main";
import backgroundWords from "../Images/backgroundWords.png";
import { mediaQueryContext } from "../Context/mediaQueryContext";

function GamePage() {
  const screen = useContext(mediaQueryContext);
  const padding = screen.xl
    ? "3.5rem"
    : screen.lg
    ? "2rem"
    : screen.md || screen.sm
    ? "1.5rem"
    : screen.xs
    ? "1rem"
    : "1.25rem";

  const paddingPositioning = `calc( -${padding} - 3px )`;
  const wordsPositioning = {
    topLeftSx: { top: paddingPositioning, left: paddingPositioning },
    topRightSx: { top: paddingPositioning, right: paddingPositioning },
    bottomLeftSx: { bottom: paddingPositioning, left: paddingPositioning },
    bottomCenterSx: { bottom: paddingPositioning },
    bottomRightSx: { bottom: paddingPositioning, right: paddingPositioning },
  };

  return (
    <Paper
      sx={{
        ...containerSx,
        padding: padding,
        gap: screen.xl
          ? "3rem"
          : screen.lg
          ? "2rem"
          : screen.md
          ? "1.5rem"
          : "1rem",
      }}
    >
      <Header wordsPositioning={wordsPositioning} />

      <Main />

      <Footer wordsPositioning={wordsPositioning} />
    </Paper>
  );
}
export default GamePage;

const containerSx = {
  ...flexBoxSx,
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100vh",
  gap: "1rem",
  background: Sx.color.primary,
  "&::before": {
    content: '""',
    ...absolutePositionSx,
    backgroundImage: `url("https://www.transparenttextures.com/patterns/navy.png")`,
    backgroundSize: { galaxyFold: "70%", xs: "40%", lg: "20%" },
    backgroundPosition: "center",
    backgroundRepeat: "repeat",
    opacity: 0.65,
  },
  "&::after": {
    content: '""',
    ...absolutePositionSx,
    backgroundImage: `url(${backgroundWords})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    zIndex: 0,
  },
};
