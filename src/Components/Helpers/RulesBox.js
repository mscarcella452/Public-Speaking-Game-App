import React from "react";
import { Sx, flexBoxSx } from "../../Styles/SXstyles";
import { Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

function RulesBox({ screen, children }) {
  const padding = screen.xl
    ? "1rem"
    : screen.lg
    ? { lg: ".75rem", xl: "1rem" }
    : screen.md
    ? { xs: ".5rem 0", sm: ".5rem 2rem", lg: ".5rem 5rem", xl: "1rem" }
    : screen.sm
    ? ".5rem"
    : ".25rem";
  return (
    <Grid
      xs={1}
      sx={{
        width: "100%",
        padding: padding,
        lineHeight:
          screen.xl || screen.lg || screen.md ? 1.5 : screen.xs ? 1.1 : 1.2,
      }}
    >
      <Paper
        elevation={screen.xl || screen.lg || screen.md ? 3 : 1}
        style={{
          ...flexBoxSx,
          backgroundColor: Sx.color.secondary,
          padding: ".25rem .75rem",
          borderRadius: "5px",
          color: "#fff",
          textAlign: "left",
        }}
      >
        {children}
      </Paper>
    </Grid>
  );
}

export default RulesBox;
