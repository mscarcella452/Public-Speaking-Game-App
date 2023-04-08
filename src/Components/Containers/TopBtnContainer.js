import { useState, useContext, useMemo } from "react";
import { Paper, Box, Button } from "@mui/material";
import { marginSx, flexBoxSx } from "../../Styles/SXstyles";
import FlipContainer from "../Helpers/FlipContainer";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import { gameDispatchContext } from "../../Context/GameStatusContext";

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
  const { height, width, borderRadius, wordsPositioning } = sizeProps;
  const flipProps = useMemo(() => {
    return { width, borderRadius };
  }, [sizeProps]);
  //  const [rulesBtnIcon, toggleRulesIcon] = useToggleRulesBtnIcon(
  //    game,
  //    btnDispatch
  //  );
  const [rulesBtnIcon, setRulesBtnIcon] = useState(
    <HelpCenterIcon sx={topButtonIconSx} />
  );

  function toggleRules() {
    gameDispatch({ type: "TOGGLE_RULES" });
  }

  function handleRules() {
    // if (game.status === "off") {
    //   !game.rules ? load(toggleRules) : load(toggleRules, "delay");
    // } else {
    //   load(toggleRules, "toggleFlip");
    //   // gameDispatch({ type: "LOAD" });
    // }
    gameDispatch({ type: "TOGGLE_RULES" });
  }

  function handleQuit() {
    gameDispatch({ type: "TOGGLE_GAME" });
  }

  return (
    <Box sx={{ ...marginSx, height: height, minHeight: height }}>
      <FlipContainer
        flipProps={flipProps}
        active={game.on && !game.rules}
        backgroundPosition={wordsPositioning.topLeftSx}
      >
        <Button sx={topBtnSx} onClick={handleQuit}>
          <DisabledByDefaultIcon sx={topButtonIconSx} />
        </Button>
      </FlipContainer>
      <FlipContainer
        flipProps={flipProps}
        active={true}
        backgroundPosition={wordsPositioning.topRightSx}
      >
        <Button sx={topBtnSx} onClick={handleRules}>
          {rulesBtnIcon}
        </Button>
      </FlipContainer>
    </Box>
  );
}

export default TopBtnContainer;

const topBtnSx = {
  ...flexBoxSx,
  // backgroundColor: Sx.color.primary,
  color: "#fff",
  // "&:hover": {
  //   backgroundColor: Sx.color.primary,
  //   opacity: 0.99,
  // },
  fontSize: {
    galaxyFold: "20px",
    mobile: "20px",
    xs: "20px",
    sm: "25px",
    md: "25px",
    lg: "25px",
    xl: "20px",
  },
};
