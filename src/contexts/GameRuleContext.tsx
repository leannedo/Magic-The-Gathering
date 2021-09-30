import React, { createContext, useContext } from 'react';
import { formatedData } from '../data/formatedData';
import { GameRules } from '../data/rule-types';

type GameRuleContextType = {
  gameRules: GameRules;
};

const GameRuleContext = createContext<GameRuleContextType | Record<string, never>>({});

const GameRuleProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const gameRules = formatedData();

  return <GameRuleContext.Provider value={{ gameRules }}>{children}</GameRuleContext.Provider>;
};

const useGameRule = () => useContext(GameRuleContext);

export { GameRuleProvider, useGameRule };
