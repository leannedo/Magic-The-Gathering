import React from 'react';
import Layout from './component/Layout';
import './styles/variables.scss';
import { BrowserRouter as Router } from 'react-router-dom';

import { GameRuleProvider } from './contexts/GameRuleContext';

const App = () => {
  return (
    <Router>
      <GameRuleProvider>
        <Layout />
      </GameRuleProvider>
    </Router>
  );
};

export default App;
