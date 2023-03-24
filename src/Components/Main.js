import React, { useContext } from "react";
import { Box } from "@mui/system";
import FlipContainer from "./Helpers/FlipContainer";
import { flipContainerMainSx } from "../Styles/FlipContainerStyles";
import Logo from "./Helpers/Logo";
import { Sx } from "../Styles/SXstyles";
import { mediaQueryContext } from "../Context/mediaQueryContext";

function Main() {
  const screen = useContext(mediaQueryContext);
  const maxHeight = screen.xl
    ? "850px"
    : screen.lg
    ? "475px"
    : screen.md
    ? "500px"
    : screen.sm
    ? "650px"
    : screen.xs
    ? "100%"
    : "100%";

  const maxWidth = screen.xl
    ? "1100px"
    : screen.lg
    ? "1000px"
    : screen.md
    ? "850px"
    : screen.sm
    ? "700px"
    : screen.xs
    ? "100%"
    : "100%";

  // footer height - header height
  const topDifference =
    screen.xl || screen.lg || screen.md
      ? "20px"
      : screen.sm
      ? "15px"
      : screen.xs
      ? "5px"
      : "15px";

  return (
    <Box
      sx={{
        ...mainSx,
        maxHeight: maxHeight,
        maxWidth: maxWidth,
      }}
    >
      <FlipContainer
        flipContainerSx={flipContainerMainSx}
        active={true}
        backgroundPosition={{
          left: `calc(((100vw - 100% ) / 2) * -1)`,
          top: `calc(((100vh - 100% - ${topDifference}) / 2) * -1)`,
        }}
        Logo={<Logo />}
      >
        children of the corn
      </FlipContainer>
    </Box>
  );
}

export default Main;

const mainSx = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  zIndex: 2,
};
