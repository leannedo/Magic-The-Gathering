import React from 'react';
import './styles/variables.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { GameRuleProvider } from './contexts/GameRuleContext';

import Main from './views/Main';

const App = () => {
  return (
    <Router>
      <GameRuleProvider>
        <Main />
      </GameRuleProvider>
    </Router>
  );
};

export default App;
