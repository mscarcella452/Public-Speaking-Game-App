import React, { useState, useContext } from "react";
import { Box } from "@mui/system";
import FlipContainer from "./Helpers/FlipContainer";
import Logo from "./Helpers/Logo";
import { Sx } from "../Styles/SXstyles";
import GameCard from "./MainCard/GameCard";
import RulesCard from "./MainCard/RulesCard";
import IntermissionCard from "./MainCard/IntermissionCard";
import Timer from "./Helpers/Timer";
// active timer = game.status === "speech"
function Main({ game, mainContent, completeSpeech, sizeProps }) {
  const { height, width, borderRadius, wordsPositioning } = sizeProps;
  // const [footerRTBtn, setFooterRtBtn] = useState('PLAY')
  // const [footerLTBtn, setFooterLtBtn] = useState('START')

  // const mainContent =
  //   "The similarities of playing the Oregon Trail pc game on its highest difficluts, and the real life Oregon Trail.";

  const triggerCompleteSpeech = () => console.log("timer please expire now");
  return (
    <Box sx={{ ...mainSx, maxHeight: height, maxWidth: width }}>
      <FlipContainer
        flipProps={{ borderRadius }}
        active={game.flip}
        backgroundPosition={wordsPositioning}
        Logo={<Logo />}
      >
        {game.rules && <RulesCard />}
        {!game.rules && game.status === "intermission" && (
          <IntermissionCard
            timer={
              <Timer
                active={game.status === "intermission"}
                expire={triggerCompleteSpeech}
              />
            }
          />
        )}

        {!game.rules && game.status !== "intermission" && (
          <GameCard
            mainContent={mainContent}
            timer={
              <Timer
                active={game.status === "speech"}
                expire={completeSpeech}
              />
            }
          />
        )}
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
