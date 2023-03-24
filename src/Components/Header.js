import { useContext } from "react";
import { Paper, Box } from "@mui/material";
import { marginSx } from "../Styles/SXstyles";
import FlipContainer from "./Helpers/FlipContainer";
import { flipContainerHeaderSx } from "../Styles/FlipContainerStyles";
import { mediaQueryContext } from "../Context/mediaQueryContext";

function Header({ wordsPositioning }) {
  const screen = useContext(mediaQueryContext);

  const boxHeight = screen.xl
    ? "50px"
    : screen.lg || screen.md || screen.sm
    ? "40px"
    : screen.xs
    ? "30px"
    : "35px";

  // 10px wider than height
  const boxWidth = screen.xl
    ? "60px"
    : screen.lg || screen.md || screen.sm
    ? "50px"
    : screen.xs
    ? "40px"
    : "45px";

  return (
    <Box sx={{ ...marginSx, height: boxHeight, minHeight: boxHeight }}>
      <FlipContainer
        flipContainerSx={{
          ...flipContainerHeaderSx,
          container: { ...flipContainerHeaderSx.container, width: boxWidth },
        }}
        active={false}
        backgroundPosition={wordsPositioning.topLeftSx}
      >
        children
      </FlipContainer>
      <FlipContainer
        flipContainerSx={{
          ...flipContainerHeaderSx,
          container: { ...flipContainerHeaderSx.container, width: boxWidth },
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
