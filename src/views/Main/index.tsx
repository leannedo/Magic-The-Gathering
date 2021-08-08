import Content from '../../component/Content';
import React from 'react';
import Sider from '../../component/Sider';
import { Route, Switch } from 'react-router-dom';
import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <Sider />
      <Switch>
        <Route exact path="/" />
        <Route path="/section/:sectionIdx/chapter/:chapterIdx" component={Content} />
      </Switch>
    </div>
  );
};

export default Main;
