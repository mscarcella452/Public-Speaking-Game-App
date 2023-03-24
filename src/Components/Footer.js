import { useContext } from "react";
import { Paper, Box } from "@mui/material";
import { marginSx } from "../Styles/SXstyles";
import { flipContainerFooterSx } from "../Styles/FlipContainerStyles";
import FlipContainer from "./Helpers/FlipContainer";

function Footer({ sizeProps }) {
  const { height, wordsPositioning } = sizeProps;

  return (
    <Box sx={{ ...marginSx, height: height, minHeight: height }}>
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
