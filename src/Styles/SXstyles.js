export const Sx = {
  font: {
    display: "'Sunny Spells Basic', sans-serif",
    secondary: "'Averia Libre', cursive",
    number: "'Tilt Neon', cursive",
    card: "'Neucha', cursive",
  },
  color: {
    // fail: "#981010",
    primary: "#457b9d",
    secondary: "#be2f3a",
    success: "#0ead69",
    fail: "#9d6745",
  },
};

export const flexBoxSx = {
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxSizing: "border-box",
};

export const absolutePositionSx = {
  height: 1,
  width: 1,
  position: "absolute",
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
};

export const marginSx = {
  zIndex: 2,
  ...flexBoxSx,
  justifyContent: "space-between",
  gap: "1.5rem",
  width: "100%",
};

export const fabricSx = {
  ...absolutePositionSx,
  background: `url("https://www.transparenttextures.com/patterns/navy.png")`,
  backgroundSize: { galaxyFold: "70%", xs: "50%", md: "40%", lg: "20%" },
  // backgroundSize: "30%",
  backgroundPosition: "center",
  backgroundRepeat: "repeat",
  opacity: 0.4,
};
