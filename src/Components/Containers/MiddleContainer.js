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
  card,
  // mainContent,
  handleCompleteSpeech,
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
        active={game.on ? card.flip && game.rulesFlip : game.rulesFlip}
        // active={game.on ? card.flip : game.rules}
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
          Game Card (if card.type === "gameActive")
          */
          card.type === "game" ? (
            <GameCard
              mainContent={"Game"}
              // mainContent={mainContent}
              timer={
                <Timer
                  active={game.on && card.type === "game"}
                  game={game}
                  expire={handleCompleteSpeech}
                />
              }
            />
          ) : /* 
          Results Card (if card.type === "result")
          */ card.type === "result" ? (
            <ResultsCard
              mainContent={"result"}
              // mainContent={mainContent}
            />
          ) : card.type === "intermission" ? (
            /* 
          Intermission Card (if card.type === "intermission")
          */ <IntermissionCard
              timer={
                <Timer
                  active={card.type === "intermission"}
                  expire={triggerCompleteSpeech}
                />
              }
            />
          ) : null
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
