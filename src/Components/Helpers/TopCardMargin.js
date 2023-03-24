import React, { useContext } from "react";
import { Paper, Box } from "@mui/material";
import { Textfit } from "react-textfit";
import { flexBoxSx, Sx } from "../../Styles/SXstyles";
// import { gameContext } from "../../Context/GameStatusContext";
import { mediaQueryContext } from "../../Context/mediaQueryContext";

function TopCardMargin({ label, timer }) {
  //   const game = useContext(gameContext);
  const screen = useContext(mediaQueryContext);

  const marginHeight = screen.lg
    ? "70px"
    : screen.md
    ? { galaxyFold: "50px", lg: "50px" }
    : screen.sm
    ? "45px"
    : screen.xs
    ? "35px"
    : "40px";
  const componentWidth = screen.lg
    ? "170px"
    : screen.md
    ? "140px"
    : screen.sm
    ? "100px"
    : screen.xs
    ? "75px"
    : "90px";
  const defaultFontSize = screen.lg
    ? 75
    : screen.md
    ? 55
    : screen.sm
    ? 45
    : screen.xs
    ? 35
    : 40;
  return (
    <Box
      sx={{
        ...CardMarginSx,
        height: marginHeight,
      }}
    >
      <Box
        sx={{
          ...marginLabel,
          width: componentWidth,
          //   color:
          //     game.status === "result" || game.status === "intermission"
          //       ? "#fff"
          //       : "black",
        }}
      >
        <Textfit
          min={1}
          max={defaultFontSize}
          //   max={game.status === "result" ? 100 : defaultFontSize}
          mode={"single"}
          throttle={100}
          style={{
            ...flexBoxSx,
            paddingRight: ".15rem",
            justifyContent: "flex-start",
          }}
        >
          {label}
        </Textfit>
      </Box>
      {/* {game.status !== "result" && (
        <Paper sx={{ ...timerSx, width: componentWidth }}>
          <Textfit
            min={1}
            max={30}
            forceSingleModeWidth={false}
            throttle={100}
            mode={"single"}
            style={{ ...flexBoxSx, height: "95%" }}
          >
            {timer}
          </Textfit>
        </Paper>
      )} */}
      <Paper sx={{ ...timerSx, width: componentWidth }}>
        <Textfit
          min={1}
          max={30}
          forceSingleModeWidth={false}
          throttle={100}
          mode={"single"}
          style={{ ...flexBoxSx, height: "95%" }}
        >
          {timer}
        </Textfit>
      </Paper>
    </Box>
  );
}

export default TopCardMargin;

const CardMarginSx = { ...flexBoxSx, justifyContent: "space-between" };

const timerSx = {
  ...flexBoxSx,
  height: "90%",
  boxShadow: `-2.5px 2.5px 0 #000, 1px -2.5px 0 #000, -1px 2.5px 0 #000, 1px 2.5px 0 #000`,
  fontFamily: Sx.font.number,
  fontWeight: "bold",
  background: Sx.color.primary,
  color: "#fff",
};

const marginLabel = {
  opacity: 0.35,
  zIndex: -2,
  fontFamily: Sx.font.display,
};
