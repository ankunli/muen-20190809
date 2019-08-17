import React, { Component } from 'react';
import { get, post } from '../untlis/requset';
import { Input, Divider, Button, Icon, Modal, Card } from 'antd';
import '../css/groupList.css';

export default class GroupList extends Component {
    state = {
        list: [],
        visible:false
    }
    render() {
        console.log(this.state.list)
        return (
            <>
                <div className='groupTitle'>
                    <span>全部小组</span>
                    <button className='addGroup' onClick={this.addGroup.bind(this)}>+添加小组</button>
                </div>
                <div className='groupList'>
                    <ul className='groupLists'>
                        {
                            this.state.list && this.state.list.map((item, index) =>
                                <li key={index}>
                                    <img src={item.groupIcon} />
                                    <span>{item.groupName}</span>
                                    <div>
                                        <Icon type="edit" key="edit" />
                                        <Icon type="delete" key="delete" />
                                    </div>
                                </li>
                            )
                        }   
                    </ul>
                    
                </div>
                {/* 添加小组弹出框 */}
                <Modal
                    title="添加小组"
                    visible={this.state.visible}
                    onOk={this.hideModalOk.bind(this)}
                    onCancel={this.hideModalCancel.bind(this)}
                    okText="确认创建"
                    cancelText="取消"
                >
                    <Input
                        // value={userName}
                        // onChange={(e) => {
                        //     this.setState({
                        //         userName: e.target.value,

                        //     })
                        // }}
                    />
                    <Input
                        // value={phoneNum}
                        // onChange={(e) => {
                        //     this.setState({
                        //         phoneNum: e.target.value,

                        //     })
                        // }}
                    />
                </Modal>
            </>
        )
    }
    componentDidMount() {
        get('/group/list').then(res => {
            this.setState({
                list: res.result
            })
            console.log(res)
        })
    }
    //添加小组
    addGroup(){
        this.setState({
            visible:true
        })
    }

    //弹出框确认创建
    hideModalOk() {
        console.log('创建小组--------')
    };
    //弹出框取消创建
    hideModalCancel(){
        this.setState({
            visible: false
        })
    }
}
