import React, { useContext, useEffect, useCallback } from "react";
import { Paper, Box } from "@mui/material";
import { Textfit } from "react-textfit";
import { flexBoxSx, Sx } from "../../Styles/SXstyles";
// import { gameContext } from "../../Context/GameStatusContext";
import { mediaQueryContext } from "../../Context/mediaQueryContext";

function TopCardMargin({ label, timer }) {
  //   const game = useContext(gameContext);
  const screen = useContext(mediaQueryContext);

  const marginHeight = screen.xl
    ? "80px"
    : screen.lg
    ? "60px"
    : screen.md
    ? "55px"
    : screen.sm
    ? "50px"
    : screen.xs
    ? "35px"
    : "40px";
  const componentWidth = screen.xl
    ? "170px"
    : screen.lg
    ? "150px"
    : screen.md
    ? "140px"
    : screen.sm
    ? "110px"
    : screen.xs
    ? "75px"
    : "90px";
  const defaultFontSize = screen.xl
    ? 70
    : screen.lg || screen.md
    ? 55
    : screen.sm
    ? 45
    : screen.xs
    ? 35
    : 40;

  const boxShadow = screen.xl
    ? `-3.5px 3.5px 0 #000, 1px -3.5px 0 #000, -1px 3.5px 0 #000, 1px 3.5px 0 #000`
    : screen.lg || screen.md || screen.sm
    ? `-2.5px 2.5px 0 #000, 1px -2.5px 0 #000, -1px 2.5px 0 #000, 1px 2.5px 0 #000`
    : `-1.5px 1.5px 0 #000, 1px -1.5px 0 #000, -1px 1.5px 0 #000, 1px 1.5px 0 #000`;

  const timerFontSize = screen.xl ? 50 : screen.lg || screen.md ? 35 : 30;
  return (
    <Box
      sx={{
        ...CardMarginSx,
        height: marginHeight,
        // background: "pink",
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
            textTransform: "uppercase",
          }}
        >
          {label}
        </Textfit>
      </Box>
      {timer && (
        <Paper sx={{ ...timerSx, width: componentWidth, boxShadow: boxShadow }}>
          <Textfit
            min={1}
            max={timerFontSize}
            forceSingleModeWidth={false}
            throttle={100}
            mode={"single"}
            style={{ ...flexBoxSx, height: "95%" }}
          >
            {timer}
          </Textfit>
        </Paper>
      )}
    </Box>
  );
}

export default TopCardMargin;

const CardMarginSx = { ...flexBoxSx, justifyContent: "space-between" };

const timerSx = {
  ...flexBoxSx,
  height: "90%",
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
