import React from 'react';
import Layout from './component/Layout';
import './styles/variables.scss';

import { GameRuleProvider } from './contexts/GameRuleContext';

const App = () => {
  return (
    <GameRuleProvider>
      <Layout />
    </GameRuleProvider>
  );
};

export default App;
