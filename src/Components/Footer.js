import { useContext } from "react";
import { Paper, Box } from "@mui/material";
import { marginSx, Sx } from "../Styles/SXstyles";
import FlipContainer from "./Helpers/FlipContainer";
import FooterButton from "./Helpers/FooterButton";

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
        active={true}
        backgroundPosition={wordsPositioning.bottomLeftSx}
      >
        <FooterButton>Upgrade</FooterButton>
      </FlipContainer>
      <FlipContainer
        flipProps={flipProps}
        active={true}
        backgroundPosition={wordsPositioning.bottomCenterSx}
      >
        <FooterButton>Fail</FooterButton>
      </FlipContainer>
      <FlipContainer
        flipProps={flipProps}
        active={true}
        backgroundPosition={wordsPositioning.bottomRightSx}
      >
        <FooterButton>Next</FooterButton>
      </FlipContainer>
    </Box>
  );
}

export default Footer;
