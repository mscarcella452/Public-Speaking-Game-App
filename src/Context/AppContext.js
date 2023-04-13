import MediaQueryContextProvider from "./mediaQueryContext";
import TimerContextProvider from "./TimerContext";
import GameProvider from "./GameContext";
import StorageProvider from "./StorageContext";

function AppContext({ children }) {
  return (
    <MediaQueryContextProvider>
      <TimerContextProvider>
        <StorageProvider>
          <GameProvider>{children}</GameProvider>
        </StorageProvider>
      </TimerContextProvider>
    </MediaQueryContextProvider>
  );
}

export default AppContext;
