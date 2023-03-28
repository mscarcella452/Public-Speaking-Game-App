import { useContext, memo, useEffect, useMemo } from "react";
import { Paper, Box, Button } from "@mui/material";
import { marginSx, Sx, flexBoxSx } from "../Styles/SXstyles";
import FlipContainer from "./Helpers/FlipContainer";
import FooterBtnText from "./Helpers/FooterBtnText";
import { gameDispatchContext } from "../Context/GameStatusContext";
import { timerDispatchContext } from "../Context/TimerContext";

function Footer({
  game,
  handleStartRound,
  triggerFailedSpeech,
  load,
  sizeProps,
}) {
  const gameDispatch = useContext(gameDispatchContext);
  const timerDispatch = useContext(timerDispatchContext);
  const { height, width, borderRadius, wordsPositioning } = sizeProps;
  const flipProps = useMemo(() => {
    return { width, borderRadius, backgroundColor: Sx.color.secondary };
  }, [sizeProps]);

  // useEffect(() => {
  //   console.log("triggerFailedSpeech changed");
  // }, [triggerFailedSpeech]);

  // dispatch functions
  const startSpeech = () => gameDispatch({ type: "SPEECH_STATUS" });

  // bottomLefttBtn
  function handleBoxLeft() {
    if (game.status === "topic") {
      startSpeech();
      timerDispatch({ type: "TOGGLE_TIMER" });
    } else console.log("upgrade game");
  }

  // middleButton
  function handleFailSpeech() {
    load(triggerFailedSpeech, "toggleFlip");
    timerDispatch({ type: "RESET" });
  }

  return (
    <Box sx={{ ...marginSx, height: height, minHeight: height }}>
      <FlipContainer
        flipProps={flipProps}
        active={game.status === "topic"}
        backgroundPosition={wordsPositioning.bottomLeftSx}
      >
        <Button onClick={handleBoxLeft} sx={footerBtnSx}>
          <FooterBtnText>Start</FooterBtnText>
        </Button>
      </FlipContainer>
      <FlipContainer
        flipProps={flipProps}
        active={game.status === "speech"}
        backgroundPosition={wordsPositioning.bottomCenterSx}
      >
        <Button onClick={handleFailSpeech} sx={footerBtnSx}>
          <FooterBtnText>Fail</FooterBtnText>
        </Button>
      </FlipContainer>
      <FlipContainer
        flipProps={flipProps}
        active={game.status === "off" || game.status === "result"}
        backgroundPosition={wordsPositioning.bottomRightSx}
      >
        <Button onClick={handleStartRound} sx={footerBtnSx}>
          <FooterBtnText>Play</FooterBtnText>
        </Button>
      </FlipContainer>
    </Box>
  );
}

export default memo(Footer);

const footerBtnSx = {
  ...flexBoxSx,
  fontFamily: Sx.font.display,
  padding: ".5rem",
  color: "#fff",
  textTransform: "uppercase",
};
