// card Reducer

export const initialCardValue = {
  type: "game",
  flip: false,
};

export function cardReducer(card, action) {
  switch (action.type) {
    case "RESET":
      return {
        ...initialCardValue,
      };
    case "TOGGLE_FLIP":
      return {
        ...card,
        flip: !card.flip,
      };

    case "GAME_CARD":
      return {
        flip: true,
        type: "game",
      };
    case "RESULT_CARD":
      return {
        flip: true,
        type: "result",
      };
    case "INTERMISSION_CARD":
      return {
        flip: true,
        type: "intermission",
      };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

// -------------------------------------------------
// btn Reducer

export const initialBtnValue = {
  state: "load",
  leftBtn: "Start",
  rightBtn: "Play",
};

export function btnReducer(btn, action) {
  switch (action.type) {
    case "LOAD":
      return {
        ...btn,
        state: "load",
      };
    case "START_GAME":
      return {
        ...btn,
        rightBtn: "Play",
        state: "startGame",
      };
    case "TOPIC_STATE":
      return {
        ...btn,
        state: "topic",
      };
    case "SPEECH_STATE":
      return {
        state: "speech",
        leftBtn: "Start",
        rightBtn: "Next",
      };
    case "RESULT_STATE":
      return {
        ...btn,
        state: "result",
      };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}
