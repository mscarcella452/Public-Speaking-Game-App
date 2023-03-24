import { useState, useContext } from "react";
import { useToggle } from "../Helpers/CustomHooks";
import { Paper, Box, Button } from "@mui/material";
import { marginSx, flexBoxSx, Sx } from "../Styles/SXstyles";
import FlipContainer from "./Helpers/FlipContainer";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import { useToggleRulesBtnIcon } from "../Helpers/CustomHooks";

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

function Header({ sizeProps }) {
  const { height, width, borderRadius, wordsPositioning } = sizeProps;
  const flipProps = { width, borderRadius };
  //  const [rulesBtnIcon, toggleRulesIcon] = useToggleRulesBtnIcon(
  //    game,
  //    btnDispatch
  //  );
  const [rulesBtnIcon, setRulesBtnIcon] = useState(
    <HelpCenterIcon sx={topButtonIconSx} />
  );

  return (
    <Box sx={{ ...marginSx, height: height, minHeight: height }}>
      <FlipContainer
        flipProps={flipProps}
        active={true}
        backgroundPosition={wordsPositioning.topLeftSx}
      >
        <Button sx={topBtnSx}>
          <DisabledByDefaultIcon sx={topButtonIconSx} />
        </Button>
      </FlipContainer>
      <FlipContainer
        flipProps={flipProps}
        active={true}
        backgroundPosition={wordsPositioning.topRightSx}
      >
        <Button sx={topBtnSx}>{rulesBtnIcon}</Button>
      </FlipContainer>
    </Box>
  );
}

export default Header;

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
