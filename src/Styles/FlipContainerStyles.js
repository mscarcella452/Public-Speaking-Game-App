import { flexBoxSx, Sx } from "./SXstyles";
import { fabricOverlaySx } from "../Components/Helpers/Overlays";

const borderRadius = { mainFlip: "5px", footerFlip: "5px", headerFlip: "3px" };

const containerSx = {
  ...flexBoxSx,
  padding: {
    galaxyFold: "2px",
    mobile: "2x",
    xs: "3px",
    sm: "3px",
    md: "3px",
    lg: "3px",
  },
  boxShadow:
    "-3px -3px 0 #000 inset, 3px -3px 0 #000 inset, -3px 3px 0 #000 inset, 3px 3px 0 #000 inset",
  // boxShadow: "0px 0px 3px .5px #333 inset",
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
  boxShadow:
    "-1px -1px 0 #333, 1px -1px 0 #333, -1px 1px 0 #333, 1px 1.5px 0 #333",
  // border: ".25px solid #333",
};

const frontFlipSx = {
  ...flexBoxSx,
  position: "absolute",
  backfaceVisibility: "hidden",
  overflow: "hidden",
  // border: ".1px solid gold",
};

const backFlipSx = {
  ...frontFlipSx,
  // padding: { galaxyFold: ".5rem", mobile: ".75rem", sm: "1rem" },
  // background: "transparent",
  // backgroundColor: "#fff",
  // backgroundColor: Sx.color.primary,
  transform: "rotateX(180deg)",
  position: "relative",
  zIndex: 20,
};

export const flipContainerHeaderSx = {
  container: {
    ...containerSx,
    width: "50px",
    "@media (min-height: 1024px)": { width: "80px" },
    border: ".25px solid #333",
    borderRadius: borderRadius.headerFlip,
  },
  inner: { ...flipBoxInnerSx, borderRadius: borderRadius.headerFlip },
  front: { ...frontFlipSx, borderRadius: borderRadius.headerFlip },
  back: { ...backFlipSx, borderRadius: borderRadius.headerFlip },
  fabric: { borderRadius: borderRadius.headerFlip, opacity: 0.5 },
};

export const flipContainerMainSx = {
  container: {
    ...containerSx,
    borderRadius: borderRadius.mainFlip,
  },
  inner: { ...flipBoxInnerSx, borderRadius: borderRadius.mainFlip },
  front: { ...frontFlipSx, borderRadius: borderRadius.mainFlip },
  back: { ...backFlipSx, borderRadius: borderRadius.mainFlip },
  fabric: {
    ...fabricOverlaySx,
    borderRadius: borderRadius.mainFlip,
    opacity: 0.3,
  },
};
export const flipContainerFooterSx = {
  container: {
    ...containerSx,
    width: {
      galaxyFold: "30%",
      mobile: "33%",
      xs: "33%",
      sm: "33%",
      md: "200px",
      lg: "200px",
      xl: "200px",
    },
    borderRadius: borderRadius.footerFlip,
  },
  inner: { ...flipBoxInnerSx, borderRadius: borderRadius.footerFlip },
  front: { ...frontFlipSx, borderRadius: borderRadius.footerFlip },
  back: { ...backFlipSx, borderRadius: borderRadius.footerFlip },
  fabric: { borderRadius: borderRadius.footerFlip, opacity: 0.5 },
};

export const flipContainerSx = {
  // container------------------------------
  container: {
    main: {
      ...containerSx,
      border: ".25px solid #333",
      borderRadius: borderRadius.main,
    },
    btn: {
      ...containerSx,
      width: {
        galaxyFold: "30%",
        mobile: "33%",
        xs: "33%",
        sm: "33%",
        md: "200px",
        lg: "200px",
        xl: "200px",
      },
      border: ".25px solid #333",
      borderRadius: borderRadius.btn,
    },
    smBtn: {
      ...containerSx,
      width: "50px",
      "@media (min-height: 1024px)": { width: "80px" },
      border: ".25px solid #333",
      borderRadius: borderRadius.smBtn,
    },
  },
  // inner------------------------------
  inner: {
    default: {
      main: { ...flipBoxInnerSx, borderRadius: borderRadius.main },
      btn: { ...flipBoxInnerSx, borderRadius: borderRadius.btn },
      smBtn: { ...flipBoxInnerSx, borderRadius: borderRadius.smBtn },
    },
    overlay: {
      main: {
        ...flipBoxInnerSx,
        borderRadius: borderRadius.main,
        background: "transparent",
      },
      btn: {
        ...flipBoxInnerSx,
        borderRadius: borderRadius.btn,
        background: "transparent",
      },
      smBtn: {
        ...flipBoxInnerSx,
        borderRadius: borderRadius.smBtn,
        background: "transparent",
      },
    },
  },
  // front------------------------------
  front: {
    main: {
      ...frontFlipSx,
      borderRadius: borderRadius.main,
    },
    btn: {
      ...frontFlipSx,
      borderRadius: borderRadius.btn,
    },
    smBtn: {
      ...frontFlipSx,
      borderRadius: borderRadius.smBtn,
    },
  },
  // back------------------------------
  back: {
    main: {
      ...backFlipSx,
      borderRadius: borderRadius.main,
    },
    btn: {
      ...backFlipSx,
      borderRadius: borderRadius.btn,
    },
    smBtn: {
      ...backFlipSx,
      borderRadius: borderRadius.smBtn,
    },
  },
  // fabric------------------------------
  fabric: {
    main: {
      ...fabricOverlaySx,
      borderRadius: borderRadius.main,
      opacity: 0.3,
    },
    btn: {
      // ...fabricOverlaySx,
      borderRadius: borderRadius.btn,
      opacity: 0.5,
    },
    smBtn: {
      // ...fabricOverlaySx,
      borderRadius: borderRadius.smBtn,
      opacity: 0.3,
    },
  },
};
