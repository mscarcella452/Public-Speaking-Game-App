import { useContext, useMemo } from "react";
import { Paper } from "@mui/material";
import { flexBoxSx, Sx, absolutePositionSx } from "../Styles/SXstyles";
import TopBtnContainer from "../Components/Containers/TopBtnContainer";
import ShowcaseContainer from "../Components/Containers/ShowcaseContainer";
import backgroundWords from "../Images/backgroundWords.png";
import { mediaQueryContext } from "../Context/mediaQueryContext";
import { screenSize } from "../Helpers/FunctionHelpers";
import { gameContext } from "../Context/GameContext";

function GamePage() {
  const screen = useContext(mediaQueryContext);
  const game = useContext(gameContext);
  const size = useMemo(() => screenSize(screen), [screen]);

  return (
    <Paper
      sx={{
        ...containerSx,
        padding: size.padding,
        gap: size.gap,
      }}
    >
      <TopBtnContainer sizeProps={size.header} game={game} />
      <ShowcaseContainer
        mainSize={size.main}
        bottomSize={size.footer}
        game={game}
        gap={size.gap}
        padding={size.padding}
      />
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
