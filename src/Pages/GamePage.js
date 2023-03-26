import { useContext } from "react";
import { Paper, Box } from "@mui/material";
import { flexBoxSx, Sx, absolutePositionSx } from "../Styles/SXstyles";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Main from "../Components/Main";
import backgroundWords from "../Images/backgroundWords.png";
import { mediaQueryContext } from "../Context/mediaQueryContext";
import { screenSize, flipBorderRadius } from "../Helpers/FunctionHelpers";
import { gameContext, gameDispatchContext } from "../Context/GameStatusContext";

function GamePage() {
  const screen = useContext(mediaQueryContext);
  const game = useContext(gameContext);
  const gameDispatch = useContext(gameDispatchContext);
  const size = screenSize(screen);

  const footerActive = {
    leftBtn: game.status === "Topic" && game.flip,
    centerBtn: game.status === "Topic" && game.flip,
  };

  function load(func, flip) {
    if (flip === "toggleFlip") {
      gameDispatch({ type: "LOAD" });
      setTimeout(() => {
        func();
        gameDispatch({ type: "LOAD" });
      }, 1250);
    } else if (flip === "delay") {
      gameDispatch({ type: "LOAD" });
      setTimeout(() => {
        func();
      }, 1250);
    } else {
      func();
      gameDispatch({ type: "LOAD" });
    }
    // if (flip === "flipFirst") {
    //   gameDispatch({ type: "LOAD" });
    //   setTimeout(() => func(), 1250);
    // } else if (flip === "flipSandwich") {
    //   gameDispatch({ type: "LOAD" });
    //   setTimeout(() => {
    //     func();
    //     gameDispatch({ type: "LOAD" });
    //   }, 1250);
    // } else {
    //   func();
    //   gameDispatch({ type: "LOAD" });
    // }
  }

  return (
    <Paper
      sx={{
        ...containerSx,
        padding: size.padding,
        gap: size.gap,
      }}
    >
      <Header game={game} load={load} sizeProps={size.header} />

      <Main sizeProps={size.main} game={game} />

      <Footer game={game} load={load} sizeProps={size.footer} />
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
