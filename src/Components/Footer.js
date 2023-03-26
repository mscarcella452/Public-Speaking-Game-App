import { useContext } from "react";
import { Paper, Box } from "@mui/material";
import { marginSx, Sx } from "../Styles/SXstyles";
import FlipContainer from "./Helpers/FlipContainer";
import FooterButton from "./Helpers/FooterButton";
import { gameDispatchContext } from "../Context/GameStatusContext";

function Footer({ game, load, sizeProps }) {
  const gameDispatch = useContext(gameDispatchContext);
  const { height, width, borderRadius, wordsPositioning } = sizeProps;
  const flipProps = {
    width,
    borderRadius,
    backgroundColor: Sx.color.secondary,
  };

  // dispatch functions
  const startSpeech = () => gameDispatch({ type: "SPEECH_STATUS" });
  const dispatchFail = () => gameDispatch({ type: "RESULT_STATUS" });

  // middleButton
  const handleFailSpeech = () => load(dispatchFail, "toggleFlip");

  // bottomRightBtn
  // const startGame = () => load(showTopic);
  // const nextRound = () => load(showTopic, "toggleFlip");
  const handleBottomRightBtn = () => {
    // load topic
    const showTopic = () => gameDispatch({ type: "TOPIC_STATUS" });
    game.status === "off" ? load(showTopic) : load(showTopic, "toggleFlip");
  };

  return (
    <Box sx={{ ...marginSx, height: height, minHeight: height }}>
      <FlipContainer
        flipProps={flipProps}
        active={game.status === "topic"}
        backgroundPosition={wordsPositioning.bottomLeftSx}
      >
        <FooterButton onClick={startSpeech}>Start</FooterButton>
      </FlipContainer>
      <FlipContainer
        flipProps={flipProps}
        active={game.status === "speech" && game.flip}
        backgroundPosition={wordsPositioning.bottomCenterSx}
      >
        <FooterButton onClick={handleFailSpeech}>Fail</FooterButton>
      </FlipContainer>
      <FlipContainer
        flipProps={flipProps}
        active={game.status === "off" || game.status === "result"}
        backgroundPosition={wordsPositioning.bottomRightSx}
      >
        <FooterButton onClick={handleBottomRightBtn}>Play</FooterButton>
      </FlipContainer>
    </Box>
  );
}

export default Footer;
