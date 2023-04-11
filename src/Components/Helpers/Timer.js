import { useContext, useEffect } from "react";
import { useInterval } from "../../Helpers/CustomHooks";
import { timerContext, timerDispatchContext } from "../../Context/TimerContext";

function Timer({ game, active, expire }) {
  const timer = useContext(timerContext);
  const timerDispatch = useContext(timerDispatchContext);

  const timerOff = () => {
    timerDispatch({ type: "TOGGLE_TIMER" });
    expire();
  };

  useEffect(() => {
    !game.on &&
      timer.On &&
      setTimeout(() => timerDispatch({ type: "RESET" }), 1500);
  }, [game.on, timer.On, timerDispatch]);

  useInterval(() => {
    if (!active) return;
    if (timer.On) {
      timer.seconds === 0 ? timerOff() : timerDispatch({ type: "SET_SECONDS" });
    }
  }, 1000);

  return <>{`:${timer.seconds}`}</>;
}

export default Timer;
