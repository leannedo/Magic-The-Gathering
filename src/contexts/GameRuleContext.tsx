import React, { createContext, useContext } from 'react';
import { formatedData } from '../data/formatedData.js';

const GameRuleContext = createContext({});

const GameRuleProvider = ({ children }) => {
  const gameRules = formatedData();

  return <GameRuleContext.Provider value={{ gameRules }}>{children}</GameRuleContext.Provider>;
};

const useGameRule = () => useContext(GameRuleContext);

export { GameRuleProvider, useGameRule };
