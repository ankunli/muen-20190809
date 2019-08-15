import React, { Component } from 'react'
import { Layout, Menu, Icon, Input, Divider, Button ,Table ,Modal } from 'antd';
import { get,post} from '../untlis/requset'
import { connect } from 'react-redux'
import '../css/home.css';
const { SubMenu } = Menu;
const { Header, Sider } = Layout;
// import isLogin from '../isLogin/Logins'
const { Search } = Input
class Home extends Component {
    showModal(record) {
        console.log(record)
        
        this.setState({
          visible: true,
          userId:record.key,
          userName:record.userName,
          phoneNum:record.phoneNum
        });
      };
    
      hideModal (id,num) {
          console.log(id,num)
          post('/user/update',{
            userId:id,
            phoneNum: num
          }).then(res=>{
              console.log(res)
          })
        this.setState({
          visible: false,
        });
      };
    
    state = {
        userId:-1,
        visible: false,
        userName:"",
        password:"",
        phoneNum:"",
        userList: [],
        columns: [
            {
                title: "头像",
                dataIndex: "userIcon",
                key: "userIcon",
                render: (record) => {
                    return <img src={record} alt="" style={{ width: 40, height: '40px', borderRadius: '50%' }} />
                }
            },
            {
                title: "用户名",
                dataIndex: "userName",
                key: "userName"

            },
            {
                title: "操作",
                dataIndex: "action",
                key: "action",
                render: (text, record) => {
                    return (
                        <span className='spans'>
                             <Button type="primary" onClick={this.showModal.bind(this,record)}>修改 {record.name}</Button>
                             
                            <Divider type="vertical" />
                            <Button type="primary" onClick={this.Delete_user.bind(this,record.key)}>删除 {record.name}</Button>
                        </span>)
                }
            },
        ]
    };
    Delete_user(userId){
        let{userList}=this.state
       post('/user/delete',{userId:userId}).then(res=>{
               if(res.code===1){
                let index=userList.findIndex(item=>{
                    return item.key===userId
                })
                userList.splice(index,1)
                this.setState({
                    userList
                })
               }
       })
    }
    render() {
    let{userName,phoneNum,userId}=this.state
        return (
            <>
            <Modal
          title="Modal"
            data-id={userId}
          visible={this.state.visible}
          onOk={this.hideModal.bind(this,userId,phoneNum)}
          onCancel={this.hideModal.bind(this)}
          okText="确认"
          cancelText="取消"
        >
            <Input
                value={userName}
                onChange={(e)=>{
                    this.setState({
                        userName:e.target.value,
                        
                    })
                }}
            />
            <Input
             value={ phoneNum}
             onChange={(e)=>{
                this.setState({
                    phoneNum:e.target.value,
                    
                })
            }}
            />
        </Modal>
                <Layout style={{ height: '100%' }}>
                    <Header className="header" style={{ background: '#2a82e4' }}>
                        <Search
                            className='search'
                            placeholder="搜索小组成员"
                            onSearch={value => {
                                if (value) {
                                    get(`/user/search?input=${value}`).then(res => {
                                        if(res.result.length>0){
                                            let userListNew = [];
                                            res.result.forEach(item => {
                                                userListNew.push({
                                                    key: item.userId,
                                                    userName: item.userName,
                                                    userType: item.userType,
                                                    userIcon: item.userIcon,
                                                    phoneNum: item.phoneNum,
                                                    realName: item.realName
                                                })
                                            })
                                            this.setState({
                                                userList: userListNew
                                            });
                                            this.forceUpdate()
                                        }
                                    })
                                }

                            }}
                            style={{ width: 200, marginLeft: 154 }}
                        />
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            style={{ lineHeight: '64px' }}
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

                            <Table columns={this.state.columns} dataSource={this.state.userList} />
                        </Layout>
                    </Layout>
                </Layout>
                <div>
        
      </div>
            </>
        )
    }
    componentDidMount() {
        get("/user").then((res) => {
            
            let userListNew = [];
            res.result.forEach(item => {
                userListNew.push({
                    key: item.userId,
                    userName: item.userName,
                    userType: item.userType,
                    userIcon: item.userIcon,
                    phoneNum: item.phoneNum,
                    realName: item.realName
                })

            });
            this.setState({
                userList: userListNew
            });
            
        });
    }
}
export default connect((state) => {
    return {
        lis: state.saveUser
    }
}, (dispatch) => {
    return {
        saveLis(data) {
            dispatch({ type: "SAVE_DATA", data: data })
        }
    }
}
)(Home)