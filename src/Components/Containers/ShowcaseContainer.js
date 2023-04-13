import { useState, useReducer, useContext } from "react";
import {
  useTopic,
  useWinTidbit,
  useFailTidbit,
} from "../../Helpers/CustomHooks";
import { cardReducer, initialCardValue } from "../../Helpers/showCaseReducers";
import { delay } from "../../Helpers/FunctionHelpers";
import { flexBoxSx } from "../../Styles/SXstyles";
import { Box } from "@mui/material";
import MiddleContainer from "./MiddleContainer";
import BottomBtnContainer from "./BottomBtnContainer";
import { timerDispatchContext } from "../../Context/TimerContext";
import {
  storageContext,
  storageDispatchContext,
} from "../../Context/StorageContext";

function ShowcaseContainer({ mainSize, bottomSize, game, gap }) {
  const timerDispatch = useContext(timerDispatchContext);
  const storage = useContext(storageContext);
  const storageDispatch = useContext(storageDispatchContext);
  const [card, cardDispatch] = useReducer(cardReducer, initialCardValue);
  const [failSpeech, setFailSpeech] = useState(true);
  const [currentTopic, topicGenerator, usedTopicIndex] = useTopic(storage);
  const [winTidbit, getWinTidbit, usedWinIndex] = useWinTidbit(storage);
  const [failTidbit, getFailTidbit, usedFailIndex] = useFailTidbit(storage);

  function endTurn(fail) {
    setFailSpeech(fail);
    fail && timerDispatch({ type: "TOGGLE_TIMER" });
    fail ? getFailTidbit() : getWinTidbit();
    storageDispatch({
      type: "UPDATE_TIDBIT_INDEX",
      winIndex: usedWinIndex,
      failIndex: usedFailIndex,
    });

    const toggleFlip = () => cardDispatch({ type: "TOGGLE_FLIP" });
    const resultcard = () => {
      cardDispatch({ type: "RESULT_CARD" });
      timerDispatch({ type: "RESET" });
    };
    delay(toggleFlip, resultcard);
  }

  function generateTopic() {
    topicGenerator();
    !game.fullVersion &&
      storageDispatch({ type: "TURN_COUNT", payload: usedTopicIndex });
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
          failSpeech={failSpeech}
          currentTopic={currentTopic}
          currentTidbit={failSpeech ? failTidbit : winTidbit}
        />
      </Box>
      <BottomBtnContainer
        sizeProps={bottomSize}
        game={game}
        card={card}
        cardDispatch={cardDispatch}
        handleFailSpeech={handleFailSpeech}
        generateTopic={generateTopic}
      />
    </Box>
  );
}

export default ShowcaseContainer;
