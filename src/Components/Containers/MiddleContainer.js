import React, { useState, useContext, useEffect } from "react";
import { Box } from "@mui/system";
import FlipContainer from "../Helpers/FlipContainer";
import Logo from "../Helpers/Logo";
import Timer from "../Helpers/Timer";
import GameCard from "../MainCard/GameCard";
import RulesCard from "../MainCard/RulesCard";
import ResultsCard from "../MainCard/ResultsCard";
import IntermissionCard from "../MainCard/IntermissionCard";

// active timer = game.status === "speech"
function MiddleContainer({
  game,
  gameStatus,
  // mainContent,
  completeSpeech,
  sizeProps,
}) {
  const { height, width, borderRadius, wordsPositioning } = sizeProps;

  // const mainContent =
  //   "The similarities of playing the Oregon Trail pc game on its highest difficluts, and the real life Oregon Trail.";

  const triggerCompleteSpeech = () => console.log("timer please expire now");

  return (
    <Box
      sx={{
        ...mainSx,
        maxHeight: height,
        maxWidth: width,
      }}
    >
      <FlipContainer
        flipProps={{ borderRadius }}
        active={game.on}
        backgroundPosition={wordsPositioning}
        Logo={<Logo />}
      >
        {
          /* 
          rules Card (if rules.on)
          */
          game.rules ? (
            <RulesCard />
          ) : /* 
          Game Card (if gameStatus === "gameActive")
          */
          gameStatus === "gameActive" ? (
            <GameCard
              mainContent={"Game"}
              // mainContent={mainContent}
              timer={
                <Timer
                  active={gameStatus === "speech"}
                  expire={completeSpeech}
                />
              }
            />
          ) : /* 
          Results Card (if gameStatus === "result")
          */ gameStatus === "result" ? (
            <ResultsCard
              mainContent={"result"}
              // mainContent={mainContent}
            />
          ) : (
            /* 
          Intermission Card (if gameStatus === "intermission")
          */ <IntermissionCard
              timer={
                <Timer
                  active={gameStatus === "intermission"}
                  expire={triggerCompleteSpeech}
                />
              }
            />
          )
        }
      </FlipContainer>
    </Box>
  );
}

export default MiddleContainer;

const mainSx = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  zIndex: 2,
  background: "red",
};
