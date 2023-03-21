import React from "react";
import { Box } from "@mui/system";
import FlipContainer from "./Helpers/FlipContainer";
import { flipContainerMainSx } from "../Styles/FlipContainerStyles";

function Main() {
  return (
    <Box sx={mainSx}>
      {/* <FlipContainer flipContainerSx={flipContainerMainSx} active={false}>
        children
      </FlipContainer> */}
    </Box>
  );
}

const mainFlipHeight = { height: "100%" };

const mainSx = {
  background: "grey",
  ...mainFlipHeight,
  width: "100%",
};

export default Main;
