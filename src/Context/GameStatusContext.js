import { useReducer, createContext } from "react";

export const activeContext = createContext();
export const gameContext = createContext();
export const gameDispatchContext = createContext();

const intialValue = {
  on: false,
  rules: false,
};
// const intialValue = {
//   status: "off",
//   flip: false,
//   rules: false,
//   thirdBtnTitle: "Play",
// };

const gameReducer = (game, action) => {
  switch (action.type) {
    case "TOGGLE_GAME":
      return {
        on: !game.on,
        rules: false,
      };

    // case "LOAD":
    //   return { ...game, flip: !game.flip };
    // case "TOPIC_STATUS":
    //   return {
    //     ...game,
    //     // flip: true,
    //     status: "topic",
    //   };
    // case "SPEECH_STATUS":
    //   return {
    //     ...game,
    //     status: "speech",
    //     thirdBtnTitle: "Next",
    //   };

    // case "RESULT_STATUS":
    //   return {
    //     ...game,
    //     // flip: true,
    //     status: "result",
    //   };
    // case "INTERMISSION_STATUS":
    //   return {
    //     ...game,
    //     status: "intermission",
    //     flip: true,
    //     thirdBtnTitle: "Upgrade",
    //   };
    case "TOGGLE_RULES":
      return {
        ...game,
        rules: !game.rules,
      };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

function GameStatusProvider({ children }) {
  const [game, gameDispatch] = useReducer(gameReducer, intialValue);
  return (
    <gameDispatchContext.Provider value={gameDispatch}>
      <gameContext.Provider value={game}>{children}</gameContext.Provider>
    </gameDispatchContext.Provider>
  );
}

export default GameStatusProvider;
