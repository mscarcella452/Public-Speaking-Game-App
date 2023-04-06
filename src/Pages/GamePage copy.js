import { useState, useContext, useMemo, useEffect, useCallback } from "react";
import { useTopic, useTidbit } from "../Helpers/CustomHooks";
import { intermisisonTrigger } from "../Context/StorageContext";
import { Paper, Box } from "@mui/material";
import { flexBoxSx, Sx, absolutePositionSx } from "../Styles/SXstyles";
import TopBtnContainer from "../Components/Containers/TopBtnContainer";
import MiddleContainer from "../Components/Containers/MiddleContainer";
import BottomBtnContainer from "../Components/Containers/BottomBtnContainer";
import backgroundWords from "../Images/backgroundWords.png";
import { mediaQueryContext } from "../Context/mediaQueryContext";
import { screenSize } from "../Helpers/FunctionHelpers";
import { gameContext, gameDispatchContext } from "../Context/GameStatusContext";
import {
  storageContext,
  storageDispatchContext,
} from "../Context/StorageContext";

function GamePage() {
  const screen = useContext(mediaQueryContext);
  const game = useContext(gameContext);
  const gameDispatch = useContext(gameDispatchContext);
  const storage = useContext(storageContext);
  const storageDispatch = useContext(storageDispatchContext);
  const [failSpeech, setFailSpeech] = useState(true);
  const [topic, getTopic, usedTopicIndex] = useTopic(storage);
  const [tidbit, getTidbit, usedTidbitIndex] = useTidbit(storage, failSpeech);
  const size = useMemo(() => screenSize(screen), [screen]);

  function load(func, flip) {
    if (flip === "toggleFlip") {
      gameDispatch({ type: "LOAD" });
      setTimeout(() => {
        func();
        gameDispatch({ type: "LOAD" });
      }, 1250);
    } else if (flip === "delay") {
      gameDispatch({ type: "LOAD" });
      setTimeout(() => func(), 1250);
    } else {
      func();
      gameDispatch({ type: "LOAD" });
    }
  }

  const checkIntermission = () => {
    return !storage.fullVersion && storage.topicCount >= intermisisonTrigger
      ? true
      : false;
  };

  // const triggerIntermission = () => {};

  function startRound() {
    getTopic();
    const showTopic = () => gameDispatch({ type: "TOPIC_STATUS" });
    game.status === "off" ? load(showTopic) : load(showTopic, "toggleFlip");
  }

  function endRound(updateIndexType) {
    getTidbit();
    storageDispatch({ type: "TURN_COUNT", payload: usedTopicIndex });
    storageDispatch({ type: updateIndexType, payload: usedTidbitIndex });
    gameDispatch({ type: "RESULT_STATUS" });
  }

  function triggerFailedSpeech() {
    // load
    // resetTimer
    setFailSpeech(true);
    endRound("UPDATE_FAIL_INDEX");
  }

  function completeSpeech() {
    // load
    // resetTimer
    setFailSpeech(false);
    endRound("UPDATE_SUCCESS_INDEX");
  }

  // const mainContent = game.status !== "result" ? topic : tidbit;
  const mainContent = useMemo(() => {
    return game.status !== "result" ? topic : tidbit;
  }, [tidbit, topic, game.status]);

  return (
    <Paper
      sx={{
        ...containerSx,
        padding: size.padding,
        gap: size.gap,
      }}
    >
      <TopBtnContainer game={game} load={load} sizeProps={size.header} />

      <MiddleContainer
        sizeProps={size.main}
        game={game}
        mainContent={mainContent}
        completeSpeech={completeSpeech}
      />

      <BottomBtnContainer
        game={game}
        load={load}
        handleStartRound={startRound}
        triggerFailedSpeech={triggerFailedSpeech}
        sizeProps={size.footer}
      />
    </Paper>
  );
}
export default GamePage;

const containerSx = {
  ...flexBoxSx,
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100vh",
  gap: "1rem",
  background: Sx.color.primary,
  "&::before": {
    content: '""',
    ...absolutePositionSx,
    backgroundImage: `url(${backgroundWords})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  "&::after": {
    content: '""',
    ...absolutePositionSx,
    zIndex: 0,
    backgroundImage: `url("https://www.transparenttextures.com/patterns/navy.png")`,
    backgroundSize: { galaxyFold: "70%", xs: "40%", lg: "20%" },
    backgroundPosition: "center",
    backgroundRepeat: "repeat",
    opacity: 0.55,
  },
};
