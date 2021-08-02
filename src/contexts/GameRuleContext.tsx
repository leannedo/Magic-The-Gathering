import React, { createContext, useState, useContext } from 'react';

const GameRuleContext = createContext('');

const GameRuleProvider = ({ children }) => {
  const [gameRule, setGameRule] = useState('The content');

  return (
    <GameRuleContext.Provider value={{ gameRule, setGameRule }}>
      {children}
    </GameRuleContext.Provider>
  );
};

const useGameRule = () => useContext(GameRuleContext);

export { GameRuleProvider, useGameRule };
