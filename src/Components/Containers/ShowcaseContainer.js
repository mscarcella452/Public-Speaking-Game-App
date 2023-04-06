import { useEffect } from "react";
import { flexBoxSx } from "../../Styles/SXstyles";
import { Box } from "@mui/material";
import MiddleContainer from "./MiddleContainer";
import BottomBtnContainer from "./BottomBtnContainer";

function ShowcaseContainer({ mainSize, bottomSize, game, gap }) {
  // useEffect(() => {
  //   console.log("gap changed");
  // }, [gap]);
  return (
    <Box sx={{ ...flexBoxSx, flexDirection: "column", gap: gap }}>
      <Box sx={flexBoxSx}>
        <MiddleContainer sizeProps={mainSize} game={game} />
      </Box>
      <BottomBtnContainer sizeProps={bottomSize} game={game} />
    </Box>
  );
}

export default ShowcaseContainer;
