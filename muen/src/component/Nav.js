import React, { Component } from 'react';
import { Menu, Icon, Layout } from 'antd';
import { NavLink } from 'react-router-dom';

const { SubMenu } = Menu;
const { Sider } = Layout;

export default class Nav extends Component {
    render() {
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
                                <NavLink to='/userAll'>所有用户</NavLink>
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
                                <NavLink to='/groupList'>小组列表</NavLink>
                            </Menu.Item>
                            <Menu.Item key="6">
                                <NavLink to='/memberManagement'> 成员列表</NavLink>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
            </nav>
        )
    }
}
