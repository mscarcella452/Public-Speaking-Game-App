import MediaQueryContextProvider from "./mediaQueryContext";
import TimerContextProvider from "./TimerContext";
import GameStatusProvider from "./GameStatusContext";
import StorageProvider from "./StorageContext";

function GameContext({ children }) {
  return (
    <MediaQueryContextProvider>
      <TimerContextProvider>
        <StorageProvider>
          <GameStatusProvider>{children}</GameStatusProvider>
        </StorageProvider>
      </TimerContextProvider>
    </MediaQueryContextProvider>
  );
}

export default GameContext;
