import { useContext } from "react";
import { Paper, Box } from "@mui/material";
import { marginSx } from "../Styles/SXstyles";
import { flipContainerFooterSx } from "../Styles/FlipContainerStyles";
import FlipContainer from "./Helpers/FlipContainer";
import { mediaQueryContext } from "../Context/mediaQueryContext";

function Footer({ wordsPositioning }) {
  const screen = useContext(mediaQueryContext);
  const boxHeight = screen.xl
    ? "70px"
    : screen.lg
    ? "60px"
    : screen.md
    ? "60px"
    : screen.sm
    ? "55px"
    : screen.xs
    ? "35px"
    : "50px";

  return (
    <Box sx={{ ...marginSx, height: boxHeight, minHeight: boxHeight }}>
      <FlipContainer
        flipContainerSx={flipContainerFooterSx}
        active={false}
        backgroundPosition={wordsPositioning.bottomLeftSx}
      >
        children
      </FlipContainer>
      <FlipContainer
        flipContainerSx={flipContainerFooterSx}
        active={false}
        backgroundPosition={wordsPositioning.bottomCenterSx}
      >
        children
      </FlipContainer>
      <FlipContainer
        flipContainerSx={flipContainerFooterSx}
        active={true}
        backgroundPosition={wordsPositioning.bottomRightSx}
      >
        children
      </FlipContainer>
    </Box>
  );
}

export default Footer;
