import React from 'react';
import './Layout.scss';

import Sider from '../Sider';
import Main from '../Main';

const Layout = () => {
  return (
    <div className="layout">
      <Sider />
      <Main />
    </div>
  );
};

export default Layout;
