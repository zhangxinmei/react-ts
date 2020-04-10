import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import Cookies from 'js-cookie';
import { withRouter } from "react-router";
import sidebarList from "./SidebarOption"

const { Sider } = Layout;

const Sidebar: React.SFC = (props: any) => {
  const identity = Cookies.get('TOKENCHECKIN');
  if (!identity) {
    window.location.href = './homepage.html#/login';
  }
  const handleClick = (e: any) => {
    if (props.location.pathname === e.key) return false;
    props.history.push(e.key);
  };

  return (
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        marginTop: 70,
        left: 0,
      }}
      collapsible
    >
      <Menu
        theme="dark"
        mode="inline"
        onClick={handleClick}
        defaultSelectedKeys={[props.location.pathname]}
        selectedKeys={[props.location.pathname]}
        style={{ marginBottom: '50px' }}
      >
        {sidebarList.map((item: any) => (
          <Menu.Item key={item.key}>
            <Icon type={item.icon} />
            <span className="nav-text">{item.text}</span>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  )
}

export default withRouter(Sidebar as any)
