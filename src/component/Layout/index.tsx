import React from "react";
import { Layout as AntLayout, Menu } from "antd";
import Dashboard from "../../views/Dashboard";
import './Layout.scss';
import { CrownOutlined } from "@ant-design/icons";

const { Content, Sider } = AntLayout;

const Layout = () => {

  return (
    <AntLayout style={{ minHeight: "100vh" }}>
      <Sider
        theme="light"
        collapsible
        width={300}
        className="sider"
        trigger={null}
      >
        <div className="logo">
          <span className="logo-text">Table of Contents</span>
        </div>
        <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item
            key="1"
            className="menu-item"
            icon={<CrownOutlined />}
          >
            Chapter 
          </Menu.Item>
        </Menu>
      </Sider>
      <AntLayout className="site-layout">
        <Content style={{ margin: "0 16px" }}>
            <Dashboard />
        </Content>
      </AntLayout>
    </AntLayout>
  );
};

export default Layout;
