import MediaQueryContextProvider from "./mediaQueryContext";

function GameContext({ children }) {
  return <MediaQueryContextProvider>{children}</MediaQueryContextProvider>;
}

export default GameContext;
