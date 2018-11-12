import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider, DatePicker, message } from 'antd';
// The default locale is en-US, but we can change it to other language
import frFR from 'antd/lib/locale-provider/fr_FR';
import moment from 'moment';
import 'moment/locale/fr';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Routes from './src/pages/Routes';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

moment.locale('fr');

class App extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  handleChange(date) {
    message.info('Selected Date: ' + (date ? date.toString() : ''));
    this.setState({ date });
  }
  render() {
    return (

      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Mgmt-Console</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="reconciliation" />
              <span>Dashboard</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="home" /><span>Workflow</span></span>}
            >
              <Link to="/Home">
              <Menu.Item key="3">Define Source</Menu.Item>
              </Link>
            </SubMenu>
            {/* <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>Team</span></span>}
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file"/>
              <span>File</span>
            </Menu.Item>
           */}
          </Menu>
        </Sider>
        <Layout>
          {/* <Header style={{ background: '#fff', padding: 0 }} />*/}
          <Content style={{ margin: '0 5px' }}>
            <Breadcrumb style={{ margin: '6px 0' }}>
              <Breadcrumb.Item><h2>Mgmt-Console</h2></Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <Routes />
            </div>
          </Content>
          {/* <Footer style={{ textAlign: 'center' }}>Footer</Footer>*/}
        </Layout>
      </Layout>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));