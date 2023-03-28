import React, { useContext, memo } from "react";
import { Textfit } from "react-textfit";
import { flexBoxSx, Sx } from "../../Styles/SXstyles";
import { mediaQueryContext } from "../../Context/mediaQueryContext";

function FooterBtnText({ children }) {
  const screen = useContext(mediaQueryContext);
  // console.log("ho");
  return (
    <Textfit
      min={1}
      max={
        screen.xl
          ? 50
          : screen.lg || screen.md
          ? 40
          : screen.sm
          ? 30
          : screen.xs
          ? 22
          : 30
      }
      throttle={100}
      mode={"single"}
      style={{
        ...flexBoxSx,
        height: screen.xl || screen.lg || screen.md ? "82%" : "85%",
      }}
    >
      {children}
    </Textfit>
  );
}

export default memo(FooterBtnText);
