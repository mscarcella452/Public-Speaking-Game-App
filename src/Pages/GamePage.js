import { useState, useContext } from "react";
import { useTopic, useTidbit } from "../Helpers/CustomHooks";
import { Paper, Box } from "@mui/material";
import { flexBoxSx, Sx, absolutePositionSx } from "../Styles/SXstyles";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Main from "../Components/Main";
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
  const size = screenSize(screen);

  const footerActive = {
    leftBtn: game.status === "Topic" && game.flip,
    centerBtn: game.status === "Topic" && game.flip,
  };

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

  function startRound() {
    const showTopic = () => gameDispatch({ type: "TOPIC_STATUS" });
    getTopic();
    storageDispatch({ type: "TURN_COUNT", payload: usedTopicIndex });
    game.status === "off" ? load(showTopic) : load(showTopic, "toggleFlip");
  }

  function endRound(updateType) {
    getTidbit();
    storageDispatch({ type: updateType, payload: usedTidbitIndex });
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

  const mainContent = game.status !== "result" ? topic : tidbit;

  return (
    <Paper
      sx={{
        ...containerSx,
        padding: size.padding,
        gap: size.gap,
      }}
    >
      <Header game={game} load={load} sizeProps={size.header} />

      <Main
        sizeProps={size.main}
        game={game}
        mainContent={mainContent}
        completeSpeech={completeSpeech}
      />

      <Footer
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
