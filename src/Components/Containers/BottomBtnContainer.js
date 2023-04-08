import { useContext, useReducer, memo, useEffect, useMemo } from "react";
import { Paper, Box, Button } from "@mui/material";
import { marginSx, Sx, flexBoxSx } from "../../Styles/SXstyles";
import FlipContainer from "../Helpers/FlipContainer";
import FooterBtnText from "../Helpers/FooterBtnText";
import { gameDispatchContext } from "../../Context/GameStatusContext";
import { timerDispatchContext } from "../../Context/TimerContext";

function BottomBtnContainer({
  game,
  gameStatus,
  setGameStatus,
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
  const [btn, btnDispatch] = useReducer(btnReducer, initialBtnValue);

  useEffect(() => {
    if (!game.on) {
      btnDispatch({ type: "LOAD" });
      setTimeout(() => btnDispatch({ type: "START_GAME" }), 1200);
    }
  }, [game.on]);

  // dispatch functions
  const startSpeech = () => btnDispatch({ type: "SPEECH_STATE" });

  // bottomLefttBtn
  function handleBtnLeft() {
    if (btn.state === "topic") {
      startSpeech();
      timerDispatch({ type: "TOGGLE_TIMER" });
    } else console.log("upgrade game");
  }

  // middleButton
  function handleFailSpeech() {
    // load(triggerFailedSpeech, "toggleFlip");
    btnDispatch({ type: "RESULT_STATE" });
    setGameStatus("result");
    timerDispatch({ type: "RESET" });
  }

  function handleBtnRight() {
    !game.on && gameDispatch({ type: "TOGGLE_GAME" });

    btnDispatch({ type: "TOPIC_STATE" });
    setGameStatus("gameActive");
  }

  return (
    <Box sx={{ ...marginSx, height: height, minHeight: height }}>
      <FlipContainer
        flipProps={flipProps}
        active={btn.state === "topic"}
        backgroundPosition={wordsPositioning.bottomLeftSx}
      >
        <Button onClick={handleBtnLeft} sx={bottomBtnSx}>
          <FooterBtnText>{btn.leftBtn}</FooterBtnText>
        </Button>
      </FlipContainer>
      <FlipContainer
        flipProps={flipProps}
        active={btn.state === "speech"}
        backgroundPosition={wordsPositioning.bottomCenterSx}
      >
        <Button onClick={handleFailSpeech} sx={bottomBtnSx}>
          <FooterBtnText>Fail</FooterBtnText>
        </Button>
      </FlipContainer>
      <FlipContainer
        flipProps={flipProps}
        // active={gameStatus === "off" || gameStatus === "result"}
        active={btn.state === "startGame" || btn.state === "result"}
        backgroundPosition={wordsPositioning.bottomRightSx}
      >
        <Button onClick={handleBtnRight} sx={bottomBtnSx}>
          <FooterBtnText>{btn.rightBtn}</FooterBtnText>
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

// btn Reducer

const initialBtnValue = {
  state: "load",
  leftBtn: "Start",
  rightBtn: "Play",
};

function btnReducer(btn, action) {
  switch (action.type) {
    case "LOAD":
      return {
        ...btn,
        state: "load",
      };
    case "START_GAME":
      return {
        ...btn,
        rightBtn: "Play",
        state: "startGame",
      };
    case "TOPIC_STATE":
      return {
        ...btn,
        state: "topic",
      };
    case "SPEECH_STATE":
      return {
        state: "speech",
        leftBtn: "Start",
        rightBtn: "Next",
      };
    case "RESULT_STATE":
      return {
        ...btn,
        state: "result",
      };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}
