import { useContext, memo, useEffect, useMemo } from "react";
import { Paper, Box } from "@mui/material";
import backgroundWords from "../../Images/backgroundWords.png";
import { mediaQueryContext } from "../../Context/mediaQueryContext";
import { flipPadding } from "../../Helpers/FunctionHelpers";
import { flexBoxSx, Sx, absolutePositionSx } from "../../Styles/SXstyles";

function FlipContainer({
  flipProps,
  active,
  backgroundPosition,
  Logo,
  children,
}) {
  const screen = useContext(mediaQueryContext);
  const padding = flipPadding(screen);
  const { width, borderRadius, backgroundColor } = flipProps;

  // useEffect(() => {
  //   console.log(" children changed");
  // }, [children]);
  // console.log("flip");

  return (
    <Box
      sx={{
        ...containerSx,
        width: width,
        padding: padding,
        borderRadius: borderRadius,
      }}
    >
      {/* FlipBox Inner */}
      <Box
        sx={{
          ...flipBoxInnerSx,
          borderRadius: borderRadius,
          transform: active && "rotateX(180deg)",
        }}
      >
        {/* FrontFlip */}
        <Box
          sx={{
            ...frontFlipSx,
            borderRadius: borderRadius,
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
        <Box
          sx={{
            ...backFlipSx,
            borderRadius: borderRadius,
            backgroundColor: backgroundColor,
          }}
        >
          {/* fabric overlay */}
          {/* <Paper elevation={1} sx={fabricSx} /> */}
          {/* <Paper elevation={1} sx={flipContainerSx.fabric} /> */}
          {children}
        </Box>
      </Box>
    </Box>
  );
}

export default memo(FlipContainer);

const fabricOverlaySx = {
  ...absolutePositionSx,
  zIndex: 7,
  opacity: 0.4,
  background: `url("https://www.transparenttextures.com/patterns/navy.png") repeat center`,
  backgroundSize: { galaxyFold: "100%", sm: "75%", lg: "50%" },
};

const fabricSx = {
  ...absolutePositionSx,
  background: `url("https://www.transparenttextures.com/patterns/navy.png")`,
  backgroundSize: { galaxyFold: "70%", xs: "40%", lg: "20%" },
  backgroundPosition: "center",
  backgroundRepeat: "repeat",
  opacity: 0.55,
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

const containerSx = {
  ...flexBoxSx,
  position: "relative",
  background: "rgb(15, 15, 15)",
  border: ".25px solid #333",
};

const flipBoxInnerSx = {
  width: "100%",
  height: "100%",
  transition: "transform 1.5s",
  transformStyle: "preserve-3d",
  position: "relative",
  backgroundColor: Sx.color.primary,
  color: "#fff",
  fontFamily: Sx.font.display,
  boxShadow:
    "-1px -1px 0 #333, 1px -1px 0 #333, -1px 1px 0 #333, 1px 1.5px 0 #333",
};

const frontFlipSx = {
  ...flexBoxSx,
  position: "absolute",
  backfaceVisibility: "hidden",
  overflow: "hidden",
};

const backFlipSx = {
  ...frontFlipSx,
  transform: "rotateX(180deg)",
  position: "relative",
  zIndex: 20,
  color: "#fff",
};
