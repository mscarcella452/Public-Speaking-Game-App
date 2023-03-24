import MediaQueryContextProvider from "./mediaQueryContext";
import TimerContextProvider from "./TimerContext";

function GameContext({ children }) {
  return (
    <MediaQueryContextProvider>
      <TimerContextProvider>{children}</TimerContextProvider>
    </MediaQueryContextProvider>
  );
}

export default GameContext;
