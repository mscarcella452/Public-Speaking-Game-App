import { useReducer, createContext } from "react";

export const gameContext = createContext();
export const gameDispatchContext = createContext();

const intialValue = {
  on: false,
  rules: false,
  playBtn: true,
  rulesBtn: true,
  rulesFlip: false,
};
// const intialValue = {
//   status: "off",
//   flip: false,
//   rules: false,
//   thirdBtnTitle: "Play",
// };

const gameReducer = (game, action) => {
  switch (action.type) {
    case "GAME_OFF":
      return {
        ...intialValue,
        playBtn: false,
        rulesBtn: false,
      };
    case "GAME_ON":
      return {
        ...game,
        on: true,
      };
    case "GAME_READY":
      return {
        ...intialValue,
      };
    case "TOGGLE_RULES_FLIP":
      return {
        ...game,
        rulesFlip: !game.rulesFlip,
      };
    case "TOGGLE_RULES_BTN":
      return {
        ...game,
        rulesBtn: !game.rulesBtn,
      };
    case "TOGGLE_RULES":
      return {
        ...game,
        rules: !game.rules,
      };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

function GameProvider({ children }) {
  const [game, gameDispatch] = useReducer(gameReducer, intialValue);
  return (
    <gameDispatchContext.Provider value={gameDispatch}>
      <gameContext.Provider value={game}>{children}</gameContext.Provider>
    </gameDispatchContext.Provider>
  );
}

export default GameProvider;
