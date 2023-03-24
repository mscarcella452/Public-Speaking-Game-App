import { useContext } from "react";
import { Textfit } from "react-textfit";
import { Paper, Box } from "@mui/material";
import { flexBoxSx, Sx, absolutePositionSx } from "../../Styles/SXstyles";
import { mediaQueryContext } from "../../Context/mediaQueryContext";
function Logo() {
  const screen = useContext(mediaQueryContext);
  return (
    <Paper elevation={0} sx={logoSx}>
      {/* <Box sx={{ zIndex: 1 }} /> */}
      <Box
        sx={{
          ...cartoonSx,
          backgroundSize:
            screen.xl || screen.lg
              ? "250px"
              : screen.md
              ? "210px"
              : screen.sm
              ? "170px"
              : screen.xs
              ? "85px"
              : "110px",
        }}
      />
      <Textfit
        min={1}
        max={180}
        style={{
          ...flexBoxSx,
          zIndex: 1,
          padding: screen.xl || screen.lg || screen.md ? "1.5rem" : "1.25rem",
          textShadow:
            screen.xl || screen.lg || screen.md
              ? `-8px 8px 0 #000, 1px -4px 0 #000, -1px 4px 0 #000, 1px 4px 0 #000`
              : `-5px 5px 0 #000, 1px -2.5px 0 #000, -1px 2.5px 0 #000, 1px 2.5px 0 #000`,
        }}
      >
        Public Speaking
      </Textfit>
    </Paper>
  );
}

export default Logo;

const logoSx = {
  ...flexBoxSx,
  background: "transparent",
  position: "relative",
  color: "#fff",
  lineHeight: "1",
  textAlign: "center",
  textDecoration: `underline ${Sx.color.secondary}`,
  // background: `url("https://clipground.com/images/anxiety-fear-clipart-1.png") repeat center`,
  // backgroundSize: "inherit",
};

const cartoonSx = {
  // background: `url("https://webstockreview.net/images/anxiety-clipart-transparent-7.png") no-repeat center`,
  // background: `url("https://easydrawingguides.com/wp-content/uploads/2020/10/Cartoon-Angry-Face-Step-10.png") repeat center`,
  // backgroundSize: "210px",
  opacity: 0.75,
  background: `url("https://clipground.com/images/anxiety-fear-clipart-1.png") repeat center`,
  backgroundSize: "inherit",
  // background: Sx.color.primary,
  ...absolutePositionSx,
};
