import React, { Component } from 'react';
import Header from '../component/Header';//头部组件
import Nav from '../component/Nav';//导航列表组件

export default class GroupList extends Component {
    render() {
        return (
            <div className='groupList'>
                <Header />
                <main>
                    <Nav />
                    <div className='groupListCon con'>
                        <div className='groupTitle'>
                            <span>全部小组</span>
                            <button className='addGroup'>+添加小组</button>
                        </div>
                         小组列表
                    </div>
                </main>
            </div>
        )
    }
}
