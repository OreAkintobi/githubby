import React, { useContext } from "react";

import StoreContext from "./types";
import useCombinedReducers from "../libs/useCombineReducer";

// all reducers on store

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useCombinedReducers({});

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

const useStoreContext = () => useContext(StoreContext);

export { StoreProvider, useStoreContext };
