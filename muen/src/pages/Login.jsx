import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd';
import { post } from '../untlis/requset'
import { NavLink } from 'react-router-dom'
import '../css/login.css';

export default class Login extends Component {
    state = {
        username: "",
        password: ""
    }
    render() {
        let { username, password } = this.state
        return (
            <div className="login">
                <Form className="login-form">
                    <Form.Item>
                        <Input
                            name="username"
                            value={username}
                            onChange={
                                this.changeVal.bind(this)
                            }
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="用户名"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            name="password"
                            value={password}
                            onChange={
                                this.changeVal.bind(this)
                            }
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="密码"
                        />
                    </Form.Item>
                    <Form.Item>
                        <NavLink to='/register' className='register'>还没有账号？现在去注册一个</NavLink>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" onClick={
                            this.enterUser.bind(this, username, password)
                        }>
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
    changeVal(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    enterUser(user, pass) {
        post('/login', { userName: user, password: pass }).then(res => {
            console.log(res)
            if (res.code === -1) {
                alert(res.message)
            } else if (res.code === 1) {
                window.localStorage.setItem('token', res.token)
                window.localStorage.setItem('userName',user)
                this.props.history.push(
                    {
                        pathname: "/home"
                    }
                )

            }
        })
    }
}
