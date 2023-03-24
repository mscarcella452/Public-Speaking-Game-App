import { createContext, useReducer } from "react";

export const timerContext = createContext();
export const timerDispatchContext = createContext();

const initialTimerValue = {
  // startingValue: 40,
  seconds: 5,
  On: false,
};

const TimerReducer = (timer, action) => {
  switch (action.type) {
    case "SET_SECONDS":
      return {
        ...timer,
        seconds: timer.seconds - 1,
      };

    case "RESET":
      return initialTimerValue;

    case "TOGGLE_TIMER":
      return { ...timer, On: !timer.On };

    case "SET_STARTING_VALUE":
      return { ...timer, startingValue: action.payload };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

function TimerContextProvider({ children }) {
  const [timer, timerDispatch] = useReducer(TimerReducer, initialTimerValue);

  return (
    <timerContext.Provider value={timer}>
      <timerDispatchContext.Provider value={timerDispatch}>
        {children}
      </timerDispatchContext.Provider>
    </timerContext.Provider>
  );
}

export default TimerContextProvider;
