import { useState, useContext, useMemo } from "react";
import { Paper, Box, Button } from "@mui/material";
import { marginSx, flexBoxSx } from "../../Styles/SXstyles";
import FlipContainer from "../Helpers/FlipContainer";
// import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { gameDispatchContext } from "../../Context/GameContext";
import { timerDispatchContext } from "../../Context/TimerContext";

const topButtonIconSx = {
  fontSize: {
    galaxyFold: "20px",
    mobile: "20px",
    xs: "20px",
    sm: "25px",
    md: "25px",
    lg: "25px",
    xl: "25px",
  },
  "@media (min-height: 1024px)": { fontSize: "40px" },
};

function TopBtnContainer({ game, load, sizeProps }) {
  const gameDispatch = useContext(gameDispatchContext);
  const timerDispatch = useContext(timerDispatchContext);
  const { height, width, borderRadius, wordsPositioning } = sizeProps;
  const flipProps = useMemo(() => {
    return { width, borderRadius };
  }, [sizeProps]);

  function handleRules() {
    // delayFunction
    function delayRules() {
      gameDispatch({ type: "TOGGLE_RULES_BTN" });
      (game.on || (!game.on && !game.rules)) &&
        gameDispatch({ type: "TOGGLE_RULES_CARD" });
      gameDispatch({ type: "TOGGLE_RULES" });
    }

    gameDispatch({ type: "TOGGLE_RULES_BTN" });
    if (game.on) {
      gameDispatch({ type: "TOGGLE_RULES_CARD" });
      setTimeout(() => delayRules(), 1200);
    } else {
      game.rules && gameDispatch({ type: "TOGGLE_RULES_CARD" });
      setTimeout(() => delayRules(), 1000);
    }
  }

  function handleQuit() {
    gameDispatch({ type: "GAME_OFF" });
    setTimeout(() => gameDispatch({ type: "GAME_READY" }), 1500);
  }

  return (
    <Box sx={{ ...marginSx, height: height, minHeight: height }}>
      <FlipContainer
        flipProps={flipProps}
        active={game.on && !game.rules && game.rulesCard}
        backgroundPosition={wordsPositioning.topLeftSx}
      >
        <Button sx={topBtnSx} onClick={handleQuit}>
          <DisabledByDefaultIcon sx={topButtonIconSx} />
        </Button>
      </FlipContainer>
      <FlipContainer
        flipProps={flipProps}
        active={game.rulesBtn}
        backgroundPosition={wordsPositioning.topRightSx}
      >
        <Button sx={topBtnSx} onClick={handleRules}>
          {/* {rulesBtnIcon} */}
          {game.rules ? (
            <CheckBoxIcon sx={topButtonIconSx} />
          ) : (
            <HelpCenterIcon sx={topButtonIconSx} />
          )}
        </Button>
      </FlipContainer>
    </Box>
  );
}

export default TopBtnContainer;

const topBtnSx = {
  ...flexBoxSx,
  color: "#fff",
  fontSize: {
    galaxyFold: "20px",
    // mobile: "20px",
    // xs: "20px",
    sm: "25px",
    // md: "25px",
    // lg: "25px",
    // xl: "20px",
  },
};
