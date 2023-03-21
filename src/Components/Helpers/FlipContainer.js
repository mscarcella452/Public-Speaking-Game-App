import React from "react";
import { Paper, Box } from "@mui/material";

function FlipContainer({ flipContainerSx, active, overlay, children }) {
  return (
    <Box sx={flipContainerSx.container}>
      {/* FlipBox Inner */}
      <Box
        sx={{
          ...flipContainerSx.inner,
          transform: active && "rotateX(180deg)",
        }}
      >
        {/* FrontFlip */}
        <Box sx={flipContainerSx.front}>{overlay}</Box>
        {/* BackFlip */}
        <Box sx={flipContainerSx.back}>
          {/* fabric overlay */}
          <Paper elevation={1} sx={flipContainerSx.fabric} />
          {children}
        </Box>
      </Box>
    </Box>
  );
}

export default FlipContainer;
