import React from "react";
import { Paper, Box } from "@mui/material";
import { flexBoxSx } from "../Styles/SXstyles";
import FlipContainer from "./Helpers/FlipContainer";
import { flipContainerHeaderSx } from "../Styles/FlipContainerStyles";

function Header() {
  return (
    <Box sx={headerSx}>
      <FlipContainer flipContainerSx={flipContainerHeaderSx} active={false}>
        children
      </FlipContainer>
      <FlipContainer flipContainerSx={flipContainerHeaderSx} active={false}>
        children
      </FlipContainer>
    </Box>
  );
}

const headerHeight = {
  height: "40px",
  minHeight: { galaxyFold: "30px", xl: "40px" },
  "@media (min-height: 1024px)": { height: "60px" },
};

const headerSx = {
  ...flexBoxSx,
  justifyContent: "space-between",
  gap: "1rem",
  ...headerHeight,
  width: "100%",
};

export default Header;
