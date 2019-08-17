import React, { Component } from 'react';
import { get } from '../untlis/requset';
import { Divider, Button, Table } from 'antd';
import '../css/memberManagement.css';

export default class MemberManagement extends Component {
    //修改小组成员信息
    showModal(record) {
        // console.log(record)
        // this.setState({
        //     visible: true,
        //     userId: record.key,
        //     userName: record.userName,
        //     phoneNum: record.phoneNum
        // });
    };
    //删除小组成员
    Delete_user(userId) {
        // let { userList } = this.state
        // post('/user/delete', { userId: userId }).then(res => {
        //     if (res.code === 1) {
        //         let index = userList.findIndex(item => {
        //             return item.key === userId
        //         })
        //         userList.splice(index, 1)
        //         this.setState({
        //             userList
        //         })
        //     }
        // })
    }
    state = {
        groupList: [],
        groupId: -1,
        groupIndex: 0,
        memberList: [],
        visible: false,
        userName: '',
        realName: '',
        phoneNum: '',
        userId: -1,
        columns: [
            {
                title: "用户名",
                dataIndex: "userName",
                key: "userName"
            },
            {
                title: "姓名",
                dataIndex: "realName",
                key: "realName"

            },
            {
                title: "电话",
                dataIndex: "phoneNum",
                key: "phoneNum"

            },
            {
                title: "操作",
                dataIndex: "action",
                key: "action",
                render: (text, record) => {
                    console.log(record)
                    return (
                        <span className='spans'>
                            <Button type="primary" onClick={this.showModal.bind(this, record)}>编辑</Button>
                            <Divider type="vertical" />
                            <Button type="primary" onClick={this.Delete_user.bind(this, record.key)}>删除</Button>
                        </span>
                    )
                }
            }
        ]

    }
    render() {
        console.log(this.state.memberList)
        return (
            <>
                <ul className='menberNav'>
                    {
                        this.state.groupList && this.state.groupList.map((item, index) =>
                            <li
                                key={index}
                                onClick={this.cutGroup.bind(this, item.groupId, index)}
                                className={this.state.groupIndex == index ? 'bg' : ''}
                            >
                                {item.groupName}
                            </li>
                        )
                    }
                </ul>
                <div className='memberCon'>
                    <div className='memberConTitle'>
                        <button>添加成员</button>
                        <button>批量操作</button>
                    </div>
                    <div className='memberConList'>
                        <Table columns={this.state.columns} dataSource={this.state.memberList} />
                    </div>
                </div>
            </>
        )
    }
    componentDidMount() {
        get('/group/list').then(res => {
            let obj = res;
            this.setState({
                groupList: res.result

            })
            get(`/group/members?groupId=${obj.result[0].groupId}`).then(res => {
                this.setState({
                    memberList: res.result
                })
            })
        })
    }
    //切换小组
    cutGroup(groupId, index) {
        console.log(groupId);
        get(`/group/members?groupId=${groupId}`).then(res => {
            console.log(res)
            this.setState({
                memberList: res.result,
                groupIndex: index
            })
        })
    }
}
