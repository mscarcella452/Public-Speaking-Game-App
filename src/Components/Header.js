import { useContext } from "react";
import { Paper, Box } from "@mui/material";
import { marginSx } from "../Styles/SXstyles";
import FlipContainer from "./Helpers/FlipContainer";
import { flipContainerHeaderSx } from "../Styles/FlipContainerStyles";

function Header({ sizeProps }) {
  const { height, width, wordsPositioning } = sizeProps;
  return (
    <Box sx={{ ...marginSx, height: height, minHeight: height }}>
      <FlipContainer
        flipContainerSx={{
          ...flipContainerHeaderSx,
          container: { ...flipContainerHeaderSx.container, width: width },
        }}
        active={false}
        backgroundPosition={wordsPositioning.topLeftSx}
      >
        children
      </FlipContainer>
      <FlipContainer
        flipContainerSx={{
          ...flipContainerHeaderSx,
          container: { ...flipContainerHeaderSx.container, width: width },
        }}
        active={false}
        backgroundPosition={wordsPositioning.topRightSx}
      >
        children
      </FlipContainer>
    </Box>
  );
}

export default Header;
