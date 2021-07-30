import React from 'react';
import { Layout as AntLayout, Menu } from 'antd';
import Dashboard from '../../views/Dashboard';
import './Layout.scss';
import { formatedData } from '../../data/formatedData.js';

const { Content, Sider } = AntLayout;

const Layout = () => {
  formatedData();

  return (
    <AntLayout style={{ minHeight: '100vh' }}>
      <Sider theme="light" collapsible width={300} className="sider" trigger={null}>
        <div className="logo">
          <span className="logo-text">Table of Contents</span>
        </div>
        {/* <Menu theme="light" defaultSelectedKeys={['0']} mode="inline">
          {data.map((rule, index) => (
            <Menu.Item key={index} className="menu-item">
              {rule}
            </Menu.Item>
          ))}
        </Menu> */}
      </Sider>
      <AntLayout className="site-layout">
        <Content style={{ margin: '0 16px' }}>
          <Dashboard />
        </Content>
      </AntLayout>
    </AntLayout>
  );
};

export default Layout;
