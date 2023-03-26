import React, { useContext } from "react";
import { Textfit } from "react-textfit";
import { Box, Button } from "@mui/material";
import { flexBoxSx, Sx } from "../../Styles/SXstyles";
import { mediaQueryContext } from "../../Context/mediaQueryContext";

function FooterButton({ onClick, children }) {
  const screen = useContext(mediaQueryContext);
  return (
    <Button
      onClick={onClick}
      sx={{
        ...flexBoxSx,
        fontFamily: Sx.font.display,
        padding: ".5rem",
        color: "#fff",
        textTransform: "uppercase",
      }}
    >
      <Textfit
        min={1}
        max={
          screen.xl
            ? 50
            : screen.lg || screen.md
            ? 40
            : screen.sm
            ? 30
            : screen.xs
            ? 22
            : 30
        }
        throttle={100}
        mode={"single"}
        style={{
          ...flexBoxSx,
          height: screen.xl || screen.lg || screen.md ? "82%" : "85%",
        }}
      >
        {children}
      </Textfit>
    </Button>
  );
}

export default FooterButton;
