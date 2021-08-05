import React from 'react';
import './Layout.scss';
import { Switch, Route } from 'react-router-dom';

import Sider from '../Sider';
import Main from '../Main';

const Layout = () => {
  return (
    <div className="layout">
      <Sider />
      <Switch>
        <Route path="/section/:sectionIdx/chapter/:chapterIdx" component={Main} />
      </Switch>
    </div>
  );
};

export default Layout;
