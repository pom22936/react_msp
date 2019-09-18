import React from 'react'
import { Layout, Menu, Icon, Avatar } from 'antd';
import { Link } from 'react-router-dom'
import Footer from './Footer'
import icdashboard from '../images/Icon/dashboard.png'
import icincident from '../images/Icon/incident.png'

const { Header, Sider, Content } = Layout;

//style jsx
const Fullheight = {
  height:'-webkit-fill-available'
}
const ava = {
  marginLeft: '80%',
  marginRight: '10px'
}
const marginLogo = {
  margin: '0',
  color: 'white'
}
const hrLogo = {
  border: '1.5px solid White'
}

class Sidebar extends React.Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout style={Fullheight}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo">
            <h1 style={marginLogo}>MSP</h1>
            <h6 style={{color:'white'}}>Manage Service Project</h6>
            <hr style={hrLogo}/>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" >
              <Link to='/'>
                <img src={icdashboard} alt="dashboard" height="18" width="18"></img>
                <span>      Dashboard</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to='/dashboardincident'>
                  <img src={icincident} alt="incident" height="18" width="18"></img>
                  <span>       Incident</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <div>
                <Icon type="upload" />
                <span>nav 3</span>
              </div>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu' : 'menu'}
              onClick={this.toggle}
            />
            <Avatar size="large" icon="user" style={ava}/> username
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            {this.props.children}
            <Footer />
          </Content>
        </Layout>
        
      </Layout>
    );
  }
}

export default Sidebar