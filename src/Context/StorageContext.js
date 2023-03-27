import { useReducer, createContext, useEffect } from "react";

export const storageContext = createContext();
export const storageDispatchContext = createContext();

export const intermisisonTrigger = 10;

// localStorage.removeItem("PublicSpeakingStorage");

const PublicSpeakingStorage = {
  fullVersion: false,
  topicCount: 0,
  topicIndex: [],
  failIndex: [],
  successIndex: [],
};

export const storedValues =
  JSON.parse(localStorage.getItem("PublicSpeakingStorage")) ||
  PublicSpeakingStorage;

export const updateStorage = updatedValue =>
  localStorage.setItem(
    "PublicSpeakingStorage",
    JSON.stringify({
      ...updatedValue,
    })
  );

const gameReducer = (storage, action) => {
  switch (action.type) {
    case "TURN_COUNT":
      return {
        ...storage,
        topicCount: !storage.fullVersion ? storage.topicCount + 1 : null,
        topicIndex: [...action.payload],
      };

    case "TOPIC_COUNT_RESET":
      return { ...storage, topicCount: 0 };

    case "UPDATE_FAIL_INDEX":
      return { ...storage, failIndex: [...action.payload] };

    case "UPDATE_SUCCESS_INDEX":
      return { ...storage, successIndex: [...action.payload] };

    case "FULL_VERSION":
      return { ...storage, fullVersion: true };
    // case "UPDATE_TOPIC_INDEX":
    //   console.log(action.payload);
    //   updateStorage({ ...storage, topicIndex: [...action.payload] });
    //   return {
    //     ...storage,
    //     topicIndex: [...action.payload],
    //   };

    // case "BUY":
    //   // updateStorage({ fullVersion: true, intermissionCount: 0 });
    //   return {
    //     ...game,
    //     fullVersion: true,
    //     ...intialValue.intermission,
    //   };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

function StorageProvider({ children }) {
  const [storage, storageDispatch] = useReducer(gameReducer, storedValues);
  useEffect(() => {
    localStorage.setItem(
      "PublicSpeakingStorage",
      JSON.stringify({ ...storage })
    );
  }, [storage]);
  return (
    <storageDispatchContext.Provider value={storageDispatch}>
      <storageContext.Provider value={storage}>
        {children}
      </storageContext.Provider>
    </storageDispatchContext.Provider>
  );
}

export default StorageProvider;
