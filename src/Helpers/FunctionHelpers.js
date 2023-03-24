export function screenSize(screen) {
  const appGap = screen.xl
    ? "3rem"
    : screen.lg
    ? "2rem"
    : screen.md
    ? "1.5rem"
    : "1rem";

  const appPadding = screen.xl
    ? "3.5rem"
    : screen.lg
    ? "2rem"
    : screen.md || screen.sm
    ? "1.5rem"
    : screen.xs
    ? "1rem"
    : "1.25rem";

  const paddingPositioning = `calc( -${appPadding} - 3px )`;

  // header --------------------------------------------------------------
  const headerBoxHeight = screen.xl
    ? "50px"
    : screen.lg || screen.md || screen.sm
    ? "40px"
    : screen.xs
    ? "30px"
    : "35px";

  // 10px wider than height
  const headerBoxWidth = screen.xl
    ? "60px"
    : screen.lg || screen.md || screen.sm
    ? "50px"
    : screen.xs
    ? "40px"
    : "45px";

  // mainBox --------------------------------------------------------------
  const mainBoxHeight = screen.xl
    ? "850px"
    : screen.lg
    ? "475px"
    : screen.md
    ? "500px"
    : screen.sm
    ? "650px"
    : screen.xs
    ? "100%"
    : "100%";

  const mainBoxWidth = screen.xl
    ? "1100px"
    : screen.lg
    ? "1000px"
    : screen.md
    ? "850px"
    : screen.sm
    ? "700px"
    : screen.xs
    ? "100%"
    : "100%";

  // for top background words positioning on mainBox --> footer height - header height
  const footerHeaderDifference =
    screen.xl || screen.lg || screen.md
      ? "20px"
      : screen.sm
      ? "15px"
      : screen.xs
      ? "5px"
      : "15px";

  // footer --------------------------------------------------------------
  const footerBoxHeight = screen.xl
    ? "70px"
    : screen.lg || screen.md
    ? "60px"
    : screen.sm
    ? "55px"
    : screen.xs
    ? "35px"
    : "50px";

  return {
    padding: appPadding,
    gap: appGap,

    header: {
      height: headerBoxHeight,
      width: headerBoxWidth,
      wordsPositioning: {
        topLeftSx: { top: paddingPositioning, left: paddingPositioning },
        topRightSx: { top: paddingPositioning, right: paddingPositioning },
      },
    },

    main: {
      height: mainBoxHeight,
      width: mainBoxWidth,
      wordsPositioning: {
        left: `calc(((100vw - 100% ) / 2) * -1)`,
        top: `calc(((100vh - 100% - ${footerHeaderDifference}) / 2) * -1)`,
      },
    },

    footer: {
      height: footerBoxHeight,
      wordsPositioning: {
        bottomLeftSx: { bottom: paddingPositioning, left: paddingPositioning },
        bottomCenterSx: { bottom: paddingPositioning },
        bottomRightSx: {
          bottom: paddingPositioning,
          right: paddingPositioning,
        },
      },
    },
  };
}
// -----------------------------------------------

// export function checkIntermission() {
//   return !storage.fullVersion && storage.topicCount >= intermisisonTrigger
//     ? true
//     : false;
// }
