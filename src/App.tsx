import React from 'react';
import RulePage from './views/RulePage';
import IntroPage from './views/IntroPage';
import SearchPage from './views/SearchPage';
import Sider from './components/Sider';
import { BrowserRouter as Router } from 'react-router-dom';
import { GameRuleProvider } from './contexts/GameRuleContext';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

const App = () => {
  return (
    <Router>
      <GameRuleProvider>
        <div className="app">
          <Sider />
          <div className="main-content">
            <Switch>
              <Route exact path="/" component={IntroPage} />
              <Route exact path="/search" component={SearchPage} />
              <Route path="/section/:sectionIdx/chapter/:chapterIdx" component={RulePage} />
            </Switch>
          </div>
        </div>
      </GameRuleProvider>
    </Router>
  );
};

export default App;
