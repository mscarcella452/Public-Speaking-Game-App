import React, { useContext } from "react";
import { Box } from "@mui/system";
import FlipContainer from "./Helpers/FlipContainer";
import Logo from "./Helpers/Logo";
import { Sx } from "../Styles/SXstyles";
import GameCard from "./MainCard/GameCard";
import RulesCard from "./MainCard/RulesCard";
import IntermissionCard from "./MainCard/IntermissionCard";
import Timer from "./Helpers/Timer";
// active timer = game.status === "speech"
function Main({ sizeProps }) {
  const { height, width, borderRadius, wordsPositioning } = sizeProps;

  const mainContent =
    "The similarities of playing the Oregon Trail pc game on its highest difficluts, and the real life Oregon Trail.";

  const triggerCompleteSpeech = () => console.log("timer please expire now");
  return (
    <Box sx={{ ...mainSx, maxHeight: height, maxWidth: width }}>
      <FlipContainer
        flipProps={{ borderRadius }}
        active={true}
        backgroundPosition={wordsPositioning}
        Logo={<Logo />}
      >
        {/* <GameCard
          mainContent={mainContent}
          timer={<Timer active={false} expire={triggerCompleteSpeech} />}
        /> */}
        <IntermissionCard
          timer={<Timer active={false} expire={triggerCompleteSpeech} />}
        />
        {/* <RulesCard /> */}
      </FlipContainer>
    </Box>
  );
}

export default Main;

const mainSx = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  zIndex: 2,
};
