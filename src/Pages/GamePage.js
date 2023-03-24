import { useContext } from "react";
import { Paper, Box } from "@mui/material";
import { flexBoxSx, Sx, absolutePositionSx } from "../Styles/SXstyles";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Main from "../Components/Main";
import backgroundWords from "../Images/backgroundWords.png";
import { mediaQueryContext } from "../Context/mediaQueryContext";
import { screenSize } from "../Helpers/FunctionHelpers";

function GamePage() {
  const screen = useContext(mediaQueryContext);
  const size = screenSize(screen);

  return (
    <Paper
      sx={{
        ...containerSx,
        padding: size.padding,
        gap: size.gap,
      }}
    >
      <Header sizeProps={size.header} />

      <Main sizeProps={size.main} />

      <Footer sizeProps={size.footer} />
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
    backgroundImage: `url(${backgroundWords})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  "&::after": {
    content: '""',
    ...absolutePositionSx,
    zIndex: 0,
    backgroundImage: `url("https://www.transparenttextures.com/patterns/navy.png")`,
    backgroundSize: { galaxyFold: "70%", xs: "40%", lg: "20%" },
    backgroundPosition: "center",
    backgroundRepeat: "repeat",
    opacity: 0.55,
  },
};
