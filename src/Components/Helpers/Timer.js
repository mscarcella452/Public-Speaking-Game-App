import { useContext } from "react";
import { useInterval } from "../../Helpers/CustomHooks";
import { timerContext, timerDispatchContext } from "../../Context/TimerContext";

function Timer({ active, expire }) {
  const timer = useContext(timerContext);
  const timerDispatch = useContext(timerDispatchContext);
  console.log(timer);

  const timerOff = () => {
    timerDispatch({ type: "TOGGLE_TIMER" });
    expire();
  };
  useInterval(() => {
    if (!active) return;
    if (timer.On) {
      timer.seconds === 0 ? timerOff() : timerDispatch({ type: "SET_SECONDS" });
    }
  }, 1000);

  return <>{`:${timer.seconds}`}</>;
}

export default Timer;
