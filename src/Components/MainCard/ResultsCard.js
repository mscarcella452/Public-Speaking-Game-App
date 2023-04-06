import { useMemo } from "react";
import { Box } from "@mui/material";
import { flexBoxSx, Sx } from "../../Styles/SXstyles";
// import { mainCardContainerSx } from "../../Styles/SXstyles";
import TopCardMargin from "../Helpers/TopCardMargin";
import CardContent from "../Helpers/CardContent";
// import { ColorOverlay, FabricOverlay } from "../Helpers/Overlays";

function ResultCard({ speechFail, tidbit }) {
  const result = useMemo(() => (speechFail ? "FAIL" : "100%"), [speechFail]);
  const backgroundColor = useMemo(
    () => (speechFail ? Sx.color.fail : Sx.color.success),
    [speechFail]
  );
  return (
    <Box
      sx={{
        ...mainCardContainerSx,
        backgroundColor: backgroundColor,
      }}
    >
      {/* <ColorOverlay /> */}
      <TopCardMargin label={result} color={"#fff"} />
      <CardContent>{tidbit}</CardContent>
      {/* <FabricOverlay /> */}
    </Box>
  );
}

export default ResultCard;

export const mainCardContainerSx = {
  ...flexBoxSx,
  fontWeight: "bold",
  flexDirection: "column",
  justifyContent: "flex-start",
  // gap: {
  //   galaxyFold: ".75rem",
  //   mobile: ".75rem",
  //   xs: "1.25rem",
  //   sm: "1.25rem",
  //   md: "1.25rem",
  //   lg: "1.5rem",
  // },
  fontFamily: Sx.font.card,
  padding: {
    galaxyFold: ".75rem",
    mobile: ".75rem",
    xs: "1rem",
    sm: "1.25rem",
    md: "1.25rem",
    lg: "1rem",
  },

  "@media (min-height: 1024px)": {
    // gap: "1.5rem",
    padding: "1.5rem",
  },
  "@media (max-height: 414px)": {
    // gap: "1rem",
    padding: { galaxyFold: ".5rem", sm: ".75rem" },
  },
  "@media (max-height: 280px)": { padding: ".35rem .5rem" },
  zIndex: 10,
};
