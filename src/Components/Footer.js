import { useContext } from "react";
import { Paper, Box } from "@mui/material";
import { marginSx, Sx } from "../Styles/SXstyles";
import FlipContainer from "./Helpers/FlipContainer";

function Footer({ sizeProps }) {
  const { height, width, borderRadius, wordsPositioning } = sizeProps;
  const flipProps = {
    width,
    borderRadius,
    backgroundColor: Sx.color.secondary,
  };

  return (
    <Box sx={{ ...marginSx, height: height, minHeight: height }}>
      <FlipContainer
        flipProps={flipProps}
        active={false}
        backgroundPosition={wordsPositioning.bottomLeftSx}
      >
        children
      </FlipContainer>
      <FlipContainer
        flipProps={flipProps}
        active={false}
        backgroundPosition={wordsPositioning.bottomCenterSx}
      >
        children
      </FlipContainer>
      <FlipContainer
        flipProps={flipProps}
        active={true}
        backgroundPosition={wordsPositioning.bottomRightSx}
      >
        children
      </FlipContainer>
    </Box>
  );
}

export default Footer;
