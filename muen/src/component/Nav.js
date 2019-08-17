import React, { Component } from 'react';
import { Menu, Icon, Layout } from 'antd';
import { NavLink } from 'react-router-dom';
import RouterView from '../router/routerview';

const { SubMenu } = Menu;
const { Sider } = Layout;

export default class Nav extends Component {
    render() {
        let { children } = this.props;
        return (
            <nav id='nav'>
                <Sider>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                                    <Icon type="user" />
                                    用户管理
                                </span>
                            }
                        >
                            <Menu.Item key="1">
                                <NavLink to='/home/userAll'>所有用户</NavLink>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={
                                <span>
                                    <Icon type="laptop" />
                                    小组管理
                                </span>
                            }
                        >
                            <Menu.Item key="5">
                                <NavLink to='/home/groupList'>小组列表</NavLink>
                            </Menu.Item>
                            <Menu.Item key="6">
                                <NavLink to='/home/memberManagement'> 成员列表</NavLink>
                            </Menu.Item>
                        </SubMenu>
                        <RouterView routers={children} />

                    </Menu>
                </Sider>
            </nav>
        )
    }
}
