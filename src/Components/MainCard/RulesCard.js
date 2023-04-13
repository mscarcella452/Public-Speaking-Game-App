import { useContext } from "react";
import { Textfit } from "react-textfit";
import { Box } from "@mui/material";
import { flexBoxSx, Sx, fabricSx } from "../../Styles/SXstyles";
// import { FabricOverlay } from "../Helpers/Overlays";
import RulesBox from "../Helpers/RulesBox";
import Grid from "@mui/material/Unstable_Grid2";
import { mediaQueryContext } from "../../Context/mediaQueryContext";

function RulesCard() {
  const screen = useContext(mediaQueryContext);
  const padding =
    screen.lg || screen.lg || screen.md
      ? "1rem 1.5rem"
      : screen.xs
      ? ".5rem"
      : ".75rem";

  const columns =
    screen.xl || screen.lg || screen.md ? { xs: 1, xl: 3 } : screen.sm ? 1 : 3;
  return (
    <Box
      sx={{
        ...flexBoxSx,
        padding: padding,
        background: "#fff",
        color: "#333",
        lineHeight: screen.xl
          ? 1.8
          : screen.lg || screen.md
          ? { xs: 1.55, lg: 1.5, xl: 1.75 }
          : screen.xs
          ? 1.75
          : 1.65,
      }}
    >
      <Box sx={fabricSx} />
      <Textfit
        min={0}
        max={screen.xl ? 100 : 30}
        mode='multi'
        style={{
          ...flexBoxSx,
          justifyContent: "flex-start",
          fontFamily: Sx.font.card,
        }}
      >
        <Box
          sx={{
            ...flexBoxSx,
            flexDirection: "column",
            gap: screen.xl
              ? "1.5rem"
              : screen.lg || screen.md
              ? { xs: "1.15rem", lg: ".75rem", xl: "1rem" }
              : screen.sm
              ? "1.15rem"
              : screen.xs
              ? ".5rem"
              : ".75rem",
          }}
        >
          {/* description */}
          <Box sx={{ height: 1, width: 1, textAlign: "justify" }}>
            When it's your turn, you will give a 40 second improptu speech on a
            random topic. You might be asked to explain quantum physics (good
            f*cken luck) or to tell the story of how you broke your arm at magic
            camp. It doesn't matter if you're not an expert on the topic or if
            the story you tell is completely made up...{" "}
            <span style={spanDescriptionSx}>
              You just have to do three things:
            </span>
          </Box>
          {/* 3 rules: */}
          <Grid container columns={columns} sx={{ width: 1, height: 1 }}>
            <RulesBox screen={screen}>
              - Speak for the entire 40 seconds.
            </RulesBox>
            <RulesBox screen={screen}>
              - Stay relevant to the topic. (Best of ability)
            </RulesBox>
            <RulesBox screen={screen}>
              - Don't pause, hesitate, say 'Umm', 'Uhh', etc.
            </RulesBox>
          </Grid>
          {/* if you Fail */}
          <Box sx={{ height: 1, width: 1, textAlign: "center" }}>
            If you can't, tap the <span style={spanFailSx}>'FAIL'</span> button.
          </Box>
        </Box>
      </Textfit>
      {/* <FabricOverlay zIndex={-1} /> */}
    </Box>
  );
}

export default RulesCard;

// style

const spanDescriptionSx = {
  textDecoration: "underline",
  fontWeight: "bold",
};
const spanFailSx = {
  fontWeight: "bold",
  color: Sx.color.primary,
  textDecoration: "underline",
};
