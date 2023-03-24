import { useContext } from "react";
import { Paper, Box } from "@mui/material";
import { marginSx } from "../Styles/SXstyles";
import FlipContainer from "./Helpers/FlipContainer";

function Header({ sizeProps }) {
  const { height, width, borderRadius, wordsPositioning } = sizeProps;
  const flipProps = { width, borderRadius };

  return (
    <Box sx={{ ...marginSx, height: height, minHeight: height }}>
      <FlipContainer
        flipProps={flipProps}
        active={false}
        backgroundPosition={wordsPositioning.topLeftSx}
      >
        children
      </FlipContainer>
      <FlipContainer
        flipProps={flipProps}
        active={false}
        backgroundPosition={wordsPositioning.topRightSx}
      >
        children
      </FlipContainer>
    </Box>
  );
}

export default Header;
