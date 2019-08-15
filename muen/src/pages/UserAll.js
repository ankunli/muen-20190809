import React, { Component } from 'react'
import {Input, Divider, Button, Table, Modal } from 'antd';
import { get, post } from '../untlis/requset'
import { connect } from 'react-redux'
import Header from '../component/Header';//头部组件
import Nav from '../component/Nav';//导航列表组件
import '../css/home.css';//用户页面样式
// import isLogin from '../isLogin/Logins'
const { Search } = Input
class UserAll extends Component {
    //修改用户信息
    showModal(record) {
        console.log(record)
        this.setState({
            visible: true,
            userId: record.key,
            userName: record.userName,
            phoneNum: record.phoneNum
        });
    };
    //删除用户
    Delete_user(userId) {
        let { userList } = this.state
        post('/user/delete', { userId: userId }).then(res => {
            if (res.code === 1) {
                let index = userList.findIndex(item => {
                    return item.key === userId
                })
                userList.splice(index, 1)
                this.setState({
                    userList
                })
            }
        })
    }
    //弹出框
    hideModal(id, num) {
        console.log(id, num)
        post('/user/update', {
            userId: id,
            phoneNum: num
        }).then(res => {
            console.log(res)
        })
        this.setState({
            visible: false,
        });
    };

    state = {
        userId: -1,
        visible: false,
        userName: "",
        password: "",
        phoneNum: "",
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
                            <Button type="primary" onClick={this.showModal.bind(this, record)}>修改 {record.name}</Button>
                            <Divider type="vertical" />
                            <Button type="primary" onClick={this.Delete_user.bind(this, record.key)}>删除 {record.name}</Button>
                        </span>)
                }
            },
        ]
    };
   
    render() {
        let { userName, phoneNum, userId } = this.state
        return (
            <div className='userList'>
                <Header />
                <main>
                    <Nav />
                    <div className='userListCon con'>
                        <div className='searchBox'>
                            {/* 搜索用户 */}
                            <Search
                                className='search'
                                placeholder="用户名称/姓名/电话"
                                onSearch={value => {
                                    if (value) {
                                        get(`/user/search?input=${value}`).then(res => {
                                            if (res.result.length > 0) {
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
                            />
                            {/* 添加成员 */}
                            <Button className='addMember'>+添加成员</Button>
                        </div>
                        <div className='userLists'>
                            {/* 用户列表 */}
                            <Table columns={this.state.columns} dataSource={this.state.userList} />
                        </div>
                    </div>
                </main>
                {/* 修改弹出框 */}
                <Modal
                    title="修改用户信息"
                    data-id={userId}
                    visible={this.state.visible}
                    onOk={this.hideModal.bind(this, userId, phoneNum)}
                    onCancel={this.hideModal.bind(this)}
                    okText="确认"
                    cancelText="取消"
                >
                    <Input
                        value={userName}
                        onChange={(e) => {
                            this.setState({
                                userName: e.target.value,

                            })
                        }}
                    />
                    <Input
                        value={phoneNum}
                        onChange={(e) => {
                            this.setState({
                                phoneNum: e.target.value,

                            })
                        }}
                    />
                </Modal>
            </div>
        )
    }
    componentDidMount() {
        // 请求所有用户数据
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
)(UserAll)