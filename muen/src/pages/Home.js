import React, { Component } from 'react'
import { Layout, Menu, Icon,Input  } from 'antd';
import {get} from '../untlis/requset'
import {connect}  from 'react-redux'
import { Table } from 'antd';
import '../css/home.css';
const { SubMenu } = Menu;
const { Header, Sider} = Layout;
const { Search } = Input
const columns = [
    {
      title: '全选',
      dataIndex: 'name',
    //   render: () => <button>删除</button>,
    }
  ];
  const data = [];
  
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };
 class Home extends Component {
    state = {
        selectedRowKeys: [], 
        // Check here to configure the default column
      };
    render() {
       
        return (
            <>
                <Layout style={{ height: '100%' }}>
                    <Header className="header" style={{ background: '#2a82e4' }}>
                    <Search
                    className='search'
                      placeholder="搜索小组成员"
                      onSearch={value => {

                                 get(`/user/search?input=${value}`).then(res=>{
                                        
                                      res.result.map(item=>{
                                        data.length=0
                                          return data.push({
                                            key: item.userId,
                                            name: item.userName
                                          })
                                      })
                                     console.log(data)
                                    })
                      }}
                      style={{ width: 200 ,marginLeft:154}}
                    /> 
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
                            {
                                this.props.lis&&this.props.lis.map((item,index)=>{
                                 return data.push(  {
                                    key: item.userId,
                                    name: item.userName
                                                                  })
                                })
                            }
                            
                        <Table   dataSource={data} columns={columns}   rowSelection={rowSelection}/>
                             
                        </Layout>
                    </Layout>
                </Layout>
            </>
        )
    }
    componentDidMount(){
            get("/user").then(res=>{
                this.props.saveLis(res.result)
            })

    }
}
export default connect((state)=>{
        return{
            lis:state.saveUser
        }
},(dispatch)=>{
    return{
        saveLis(data){
            dispatch({type:"SAVE_DATA",data:data})
        }
    }
}
)(Home)