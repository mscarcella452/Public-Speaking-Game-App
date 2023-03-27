import { useState, useRef, useEffect, useContext } from "react";
import { speechTopics } from "../GeneratedText/SpeechTopics";
import { successTidbits, failTidbits } from "../GeneratedText/ResultTidbits";
import { storageDispatchContext } from "../Context/StorageContext";

import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";

export function useToggle(initialValue) {
  const [state, setState] = useState(initialValue);

  const toggleState = () => setState(state => !state);
  return [state, toggleState];
}
// ------------------------------------------------
export function useInterval(callback, delay) {
  // Creating a ref
  const savedCallback = useRef();

  // To remember the latest callback .
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // combining the setInterval and
  //clearInterval methods based on delay.
  useEffect(() => {
    const func = () => {
      savedCallback.current();
    };
    if (delay !== null) {
      let id = setInterval(func, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

// ------------------------------------------------
function useGenerateText(initialValue, array) {
  const [usedIndex, setUsedIndex] = useState(initialValue);
  const [text, setText] = useState("");

  const textGenerator = () => {
    let filteredTexts = array.filter(
      (text, index) => !usedIndex.includes(index)
    );

    const randomIndex = Math.floor(Math.random() * filteredTexts.length);

    filteredTexts.length > 1
      ? array.map(
          (text, index) =>
            text === filteredTexts[randomIndex] &&
            setUsedIndex([...usedIndex, index])
        )
      : setUsedIndex([]);

    setText(filteredTexts[randomIndex]);
  };
  return [text, textGenerator, usedIndex];
}

export function useTopic(storage) {
  const [currentTopic, topicGenerator, usedTopicIndex] = useGenerateText(
    storage.topicIndex,
    speechTopics
  );

  return [currentTopic, topicGenerator, usedTopicIndex];
}
export function useTidbit(storage, failedSpeech) {
  let index = failedSpeech ? storage.failIndex : storage.successIndex;
  let tidbits = failedSpeech ? failTidbits : successTidbits;

  const [currentTidbit, tidbitGenerator, usedTidbitIndex] = useGenerateText(
    index,
    tidbits
  );

  return [currentTidbit, tidbitGenerator, usedTidbitIndex];
}

// ---------------------------------
export function useToggleRulesBtnIcon(game, btnDispatch) {
  const [rulesBtnIcon, setRulesBtnIcon] = useState();
  // <HelpCenterIcon sx={topButtonIconSx} />
  const toggleRulesIcon = () => {
    btnDispatch({ type: "TOGGLE_RULES_BTN" });
    setTimeout(() => {
      btnDispatch({ type: "TOGGLE_RULES_BTN" });
      // game.rules
      //   ? setRulesBtnIcon(<HelpCenterIcon sx={topButtonIconSx} />)
      //   : setRulesBtnIcon(<KeyboardReturnIcon sx={topButtonIconSx} />);
    }, 1200);
  };
  return [rulesBtnIcon, toggleRulesIcon];
}
