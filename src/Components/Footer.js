import React from "react";
import { Paper, Box } from "@mui/material";
import { flexBoxSx } from "../Styles/SXstyles";
import { flipContainerFooterSx } from "../Styles/FlipContainerStyles";
import FlipContainer from "./Helpers/FlipContainer";

function Footer() {
  return (
    <Box sx={footerSx}>
      <FlipContainer flipContainerSx={flipContainerFooterSx} active={false}>
        children
      </FlipContainer>
      <FlipContainer flipContainerSx={flipContainerFooterSx} active={false}>
        children
      </FlipContainer>
      <FlipContainer flipContainerSx={flipContainerFooterSx} active={false}>
        children
      </FlipContainer>
    </Box>
  );
}

export default Footer;

const footerFlipHeight = { minHeight: "40px", height: "70px" };

const footerSx = {
  ...flexBoxSx,
  justifyContent: "space-between",
  gap: "1rem",
  ...footerFlipHeight,
  width: "100%",
};
