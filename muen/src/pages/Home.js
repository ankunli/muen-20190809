import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {get} from '../untlis/requset'
import '../css/home.css';
const { SubMenu } = Menu;
const { Header, Content, Sider} = Layout;
export default class Home extends Component {
    render() {
        return (
            <div className='wrap'>
                <Layout style={{ height: '100%' }}>
                    <Header className="header" style={{ background: '#2a82e4' }}>
                        <div className="logo"/>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            style={{ lineHeight: '64px'}}
                        >
                        </Menu>
                    </Header>
                    <Layout style={{ height: '100%' }}>
                        <Sider width={200} style={{ background: '#fff' }}>
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
                                    <Menu.Item key="1">所有用户</Menu.Item>
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
                                    <Menu.Item key="5">小组列表</Menu.Item>
                                    <Menu.Item key="6">成员列表</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Layout style={{ padding: '0 24px 24px' }}>
                            内容
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        )
    }
    componentDidMount(){
            get("/user").then(res=>{

                console.log(res)
            })
    }
}
