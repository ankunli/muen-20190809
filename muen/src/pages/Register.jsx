import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
    Upload
} from 'antd';
import '../css/register.css'

const { Option } = Select;


export default class Register extends Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };
    render() {
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        return (
            <div className='register'>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item label="用户名">
                        <Input placeholder="请输入用户名" />
                    </Form.Item>
                    <Form.Item label="密码" hasFeedback >
                        <Input.Password placeholder="请输入密码" />
                    </Form.Item>
                    <Form.Item label="确认密码" hasFeedback>
                        <Input.Password onBlur={this.handleConfirmBlur} placeholder="请再次输入密码" />
                    </Form.Item>
                    <Form.Item label="真实姓名">
                        <Input placeholder="请输入您的真实姓名" />
                    </Form.Item>
                    <Form.Item label="用户权限">
                        <Select
                            placeholder="请选择用户权限"
                            onChange={this.handleSelectChange}
                        >
                            <Option value="male">超级管理员</Option>
                            <Option value="female">组长</Option>
                            <Option value="female">普通用户</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="电话">
                        <Input style={{ width: '100%' }} placeholder="请输入电话" />
                    </Form.Item>
                    <Form.Item label="头像">
                        <Upload name="logo" action="/upload.do" listType="picture">
                            <Button>
                                <Icon type="upload" /> 上传头像
                            </Button>
                        </Upload>
                    </Form.Item>
                    <Form.Item label="地址">
                        <Input placeholder="请输入您的地址" />
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Checkbox>
                            我已经看过协议了 <a href="#">《用户协议》</a>
                        </Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <NavLink to='/login' className='toLogin'>已有账号，现在去登录</NavLink>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className='loginBtn'>
                            注册
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
