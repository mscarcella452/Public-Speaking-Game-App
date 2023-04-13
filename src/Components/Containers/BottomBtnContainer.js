import { useContext, memo, useReducer, useEffect, useMemo } from "react";
import { delay } from "../../Helpers/FunctionHelpers";
import { Box, Button } from "@mui/material";
import { marginSx, Sx, flexBoxSx } from "../../Styles/SXstyles";
import FlipContainer from "../Helpers/FlipContainer";
import FooterBtnText from "../Helpers/FooterBtnText";
import { gameDispatchContext } from "../../Context/GameContext";
import { timerDispatchContext } from "../../Context/TimerContext";
import { btnReducer, initialBtnValue } from "../../Helpers/showCaseReducers";

function BottomBtnContainer({
  game,
  card,
  cardDispatch,
  handleFailSpeech,
  generateTopic,
  sizeProps,
}) {
  const gameDispatch = useContext(gameDispatchContext);
  const timerDispatch = useContext(timerDispatchContext);
  const { height, width, borderRadius, wordsPositioning } = sizeProps;
  const flipProps = useMemo(() => {
    return { width, borderRadius, backgroundColor: Sx.color.secondary };
  }, [sizeProps]);
  const [btn, btnDispatch] = useReducer(btnReducer, initialBtnValue);

  useEffect(() => {
    // needed b/c complete speech timer expire function in parent component and btnDispatch in this component. ??? would context and importing btnDispatch in parent cause middleContainer to re-render when btn changes
    card.type === "result" && btnDispatch({ type: "RESULT_STATE" });
  }, [card]);

  // bottomLefttBtn
  function handleBtnLeft() {
    if (btn.state === "topic") {
      btnDispatch({ type: "SPEECH_STATE" });
      timerDispatch({ type: "TOGGLE_TIMER" });
    } else console.log("upgrade game");
  }

  function handleBtnRight() {
    const showGameCard = () => {
      cardDispatch({ type: "GAME_CARD" });
      btnDispatch({ type: "TOPIC_STATE" });
    };
    if (game.on) {
      const toggleFlip = () => cardDispatch({ type: "TOGGLE_FLIP" });
      delay(toggleFlip, showGameCard);
    } else {
      gameDispatch({ type: "GAME_ON" });
      showGameCard();
      // need better name than toggle rules flip
      gameDispatch({ type: "TOGGLE_RULES_FLIP" });
    }
    generateTopic();
  }
  const defaultActive = useMemo(
    () => !game.rules && game.rulesFlip && card.flip,
    [game.rules, game.rulesFlip, card.flip]
  );

  return (
    <Box sx={{ ...marginSx, height: height, minHeight: height }}>
      <FlipContainer
        flipProps={flipProps}
        active={defaultActive && btn.state === "topic"}
        backgroundPosition={wordsPositioning.bottomLeftSx}
      >
        <Button onClick={handleBtnLeft} sx={bottomBtnSx}>
          <FooterBtnText>{btn.leftBtn}</FooterBtnText>
        </Button>
      </FlipContainer>
      <FlipContainer
        flipProps={flipProps}
        active={defaultActive && btn.state === "speech"}
        backgroundPosition={wordsPositioning.bottomCenterSx}
      >
        <Button onClick={handleFailSpeech} sx={bottomBtnSx}>
          <FooterBtnText>Fail</FooterBtnText>
        </Button>
      </FlipContainer>
      <FlipContainer
        flipProps={flipProps}
        // active={gameStatus === "off" || gameStatus === "result"}
        active={
          game.on
            ? defaultActive && btn.state === "result"
            : game.playBtn && !game.rules
        }
        backgroundPosition={wordsPositioning.bottomRightSx}
      >
        <Button onClick={handleBtnRight} sx={bottomBtnSx}>
          <FooterBtnText>
            {game.on && btn.state === "result" ? "Next" : "Play"}
          </FooterBtnText>
        </Button>
      </FlipContainer>
    </Box>
  );
}

export default memo(BottomBtnContainer);

const bottomBtnSx = {
  ...flexBoxSx,
  fontFamily: Sx.font.display,
  padding: ".5rem",
  color: "#fff",
  textTransform: "uppercase",
};
