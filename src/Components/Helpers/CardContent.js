import React, { useContext } from "react";
import { Textfit } from "react-textfit";
import { Box } from "@mui/material";
import { flexBoxSx, Sx } from "../../Styles/SXstyles";
import { mediaQueryContext } from "../../Context/mediaQueryContext";

function CardContent({ children }) {
  const screen = useContext(mediaQueryContext);
  return (
    <Box
      sx={{
        ...flexBoxSx,
        fontFamily: Sx.font.card,
        padding: 0,
        color: "#fff",
        lineHeight: screen.xl || screen.lg || screen.md ? 2 : 1.5,
        textAlign: screen.justfiy ? "justfiy" : "center",
        textShadow:
          screen.xl || screen.lg || screen.md
            ? `-2px 2px 0 #000, 1px -2px 0 #000, -1px 2px 0 #000, 1px 2px 0 #000`
            : screen.sm
            ? `-1.5px 1.5px 0 #000, 1px -1.5px 0 #000, -1px 1.5px 0 #000, 1px 1.5px 0 #000`
            : screen.xs
            ? `-1.15px 1.15px 0 #000, 1px -1.15px 0 #000, -1px 1.15px 0 #000, 1px 1.15px 0 #000`
            : `-1.25px 1.25px 0 #000, 1px -1.25px 0 #000, -1px 1.25px 0 #000, 1px 1.25px 0 #000`,
      }}
    >
      <Textfit
        min={1}
        max={
          screen.lg ? 60 : screen.md ? 45 : screen.sm ? 40 : screen.xs ? 28 : 35
        }
        throttle={100}
        // mode={"multi"}
        style={{
          ...flexBoxSx,
          height: screen.xl || screen.lg || screen.md ? "82%" : "85%",
        }}
      >
        {children}
      </Textfit>
    </Box>
  );
}

export default CardContent;
