import React from "react";
import { Paper, Box } from "@mui/material";
import backgroundWords from "../../Images/backgroundWords.png";

function FlipContainer({
  flipContainerSx,
  active,
  backgroundPosition,
  Logo,
  children,
}) {
  return (
    <Box
      sx={{
        ...flipContainerSx.container,
      }}
    >
      {/* FlipBox Inner */}
      <Box
        sx={{
          ...flipContainerSx.inner,
          transform: active && "rotateX(180deg)",
        }}
      >
        {/* FrontFlip */}
        <Box
          sx={{
            ...flipContainerSx.front,
          }}
        >
          <Box
            sx={{
              ...backgroundWordsSx,
              ...backgroundPosition,
            }}
          />
          {Logo}
        </Box>
        {/* BackFlip */}
        <Box sx={flipContainerSx.back}>
          {/* fabric overlay */}
          {/* <Paper elevation={1} sx={fabricSx} /> */}
          <Paper elevation={1} sx={flipContainerSx.fabric} />
          {children}
        </Box>
      </Box>
    </Box>
  );
}

export default FlipContainer;

const fabricSx = {
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  background: `url("https://www.transparenttextures.com/patterns/navy.png")`,
  backgroundSize: { galaxyFold: "70%", xs: "40%", lg: "20%" },
  backgroundPosition: "center",
  backgroundRepeat: "repeat",
  opacity: 0.65,
  zIndex: 2,
};

const backgroundWordsSx = {
  height: "100vh",
  width: "100vw",
  position: "absolute",
  background: `url(${backgroundWords})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",

  "&::before": {
    content: '""',
    ...fabricSx,
  },
};
