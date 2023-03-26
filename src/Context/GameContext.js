import MediaQueryContextProvider from "./mediaQueryContext";
import TimerContextProvider from "./TimerContext";
import GameStatusProvider from "./GameStatusContext";

function GameContext({ children }) {
  return (
    <MediaQueryContextProvider>
      <TimerContextProvider>
        <GameStatusProvider>{children}</GameStatusProvider>
      </TimerContextProvider>
    </MediaQueryContextProvider>
  );
}

export default GameContext;
