import React, { createContext } from "react";
// states
import WormState from "./states/WormState";
import TargetState from "./states/TargetState";

export const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const value = { ...WormState(), ...TargetState() };

  return <AppContext.Provider value={value}> {children} </AppContext.Provider>;
};
