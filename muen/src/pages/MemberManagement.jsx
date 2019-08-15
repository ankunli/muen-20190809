import React, { Component } from 'react';
import Header from '../component/Header';//头部组件
import Nav from '../component/Nav';//导航列表组件

export default class MemberManagement extends Component {
    render() {
        return (
            <div className='memberManagement'>
                <Header />
                <main>
                    <Nav />
                    <div className='memberManagementCon con'>
                        成员管理 
                    </div>
                </main>
            </div>
        )
    }
}
