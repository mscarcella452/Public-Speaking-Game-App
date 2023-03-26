import { useContext } from "react";
import { Paper, Box } from "@mui/material";
import { marginSx, Sx } from "../Styles/SXstyles";
import FlipContainer from "./Helpers/FlipContainer";
import FooterButton from "./Helpers/FooterButton";
import { gameDispatchContext } from "../Context/GameStatusContext";
import { timerDispatchContext } from "../Context/TimerContext";

function Footer({ game, toggleTimer, load, sizeProps }) {
  const gameDispatch = useContext(gameDispatchContext);
  const timerDispatch = useContext(timerDispatchContext);
  const { height, width, borderRadius, wordsPositioning } = sizeProps;
  const flipProps = {
    width,
    borderRadius,
    backgroundColor: Sx.color.secondary,
  };

  // dispatch functions
  const showTopic = () => gameDispatch({ type: "TOPIC_STATUS" });
  const startSpeech = () => gameDispatch({ type: "SPEECH_STATUS" });
  const dispatchFail = () => gameDispatch({ type: "RESULT_STATUS" });

  // bottomLefttBtn
  function handleBoxLeft() {
    if (game.status === "topic") {
      startSpeech();
      timerDispatch({ type: "TOGGLE_TIMER" });
    } else console.log("upgrade game");
  }

  // middleButton
  function handleFailSpeech() {
    load(dispatchFail, "toggleFlip");
    timerDispatch({ type: "RESET" });
  }

  // bottomRightBtn
  // const startGame = () => load(showTopic);
  function handleBoxRight() {
    // load topic
    game.status === "off" ? load(showTopic) : load(showTopic, "toggleFlip");
  }

  return (
    <Box sx={{ ...marginSx, height: height, minHeight: height }}>
      <FlipContainer
        flipProps={flipProps}
        active={game.status === "topic"}
        backgroundPosition={wordsPositioning.bottomLeftSx}
      >
        <FooterButton onClick={handleBoxLeft}>Start</FooterButton>
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
        <FooterButton onClick={handleBoxRight}>Play</FooterButton>
      </FlipContainer>
    </Box>
  );
}

export default Footer;
