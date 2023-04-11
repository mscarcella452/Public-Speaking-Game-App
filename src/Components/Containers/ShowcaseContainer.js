import { useState, useEffect, useReducer, useContext } from "react";
import {
  cardReducer,
  initialCardValue,
  btnReducer,
  initialBtnValue,
} from "../../Helpers/reducers";
import { delay } from "../../Helpers/FunctionHelpers";
import { flexBoxSx } from "../../Styles/SXstyles";
import { Box } from "@mui/material";
import MiddleContainer from "./MiddleContainer";
import BottomBtnContainer from "./BottomBtnContainer";
import { timerDispatchContext } from "../../Context/TimerContext";

function ShowcaseContainer({ mainSize, bottomSize, game, gap }) {
  const timerDispatch = useContext(timerDispatchContext);
  const [card, cardDispatch] = useReducer(cardReducer, initialCardValue);
  // const [btn, btnDispatch] = useReducer(btnReducer, initialBtnValue);
  // useEffect(() => {
  //   console.log("gap changed");
  // }, [gap]);

  function endTurn(fail) {
    const toggleFlip = () => cardDispatch({ type: "TOGGLE_FLIP" });
    const resultcard = () => {
      cardDispatch({ type: "RESULT_CARD" });
      timerDispatch({ type: "RESET" });
      // btnDispatch({ type: "RESULT_STATE" });
    };

    fail && timerDispatch({ type: "TOGGLE_TIMER" });
    // btnDispatch({ type: "LOAD" });
    delay(toggleFlip, resultcard);
    // console.log("hey");
  }

  const handleCompleteSpeech = () => endTurn(false);
  const handleFailSpeech = () => endTurn(true);

  return (
    <Box sx={{ ...flexBoxSx, flexDirection: "column", gap: gap }}>
      <Box sx={flexBoxSx}>
        <MiddleContainer
          sizeProps={mainSize}
          game={game}
          card={card}
          handleCompleteSpeech={handleCompleteSpeech}
        />
      </Box>
      <BottomBtnContainer
        sizeProps={bottomSize}
        game={game}
        // btn={btn}
        // btnDispatch={btnDispatch}
        card={card}
        cardDispatch={cardDispatch}
        handleFailSpeech={handleFailSpeech}
      />
    </Box>
  );
}

export default ShowcaseContainer;
