import React, { useContext } from "react";
import { Box } from "@mui/system";
import FlipContainer from "./Helpers/FlipContainer";
import { flipContainerMainSx } from "../Styles/FlipContainerStyles";
import Logo from "./Helpers/Logo";
import { Sx } from "../Styles/SXstyles";

function Main({ sizeProps }) {
  const { height, width, wordsPositioning } = sizeProps;

  return (
    <Box sx={{ ...mainSx, maxHeight: height, maxWidth: width }}>
      <FlipContainer
        flipContainerSx={flipContainerMainSx}
        active={false}
        backgroundPosition={wordsPositioning}
        Logo={<Logo />}
      >
        The similarities of playing the "Oregon Trail" pc game on its highest
        difficulty, and the real life Oregon Trail.
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
