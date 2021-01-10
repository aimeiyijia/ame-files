/*
 * @Author: your name
 * @Date: 2021-01-07 21:37:55
 * @LastEditTime: 2021-01-10 19:51:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ame-files\src\views\person\modules\LoginForm.jsx
 */

import React, { Component } from 'react'
import { Form, Input, Button, Select } from 'antd'
import { UserOutlined } from '@ant-design/icons'

const { Option } = Select

export default class LoginForm extends Component {
  formRef = React.createRef()

  onFinish = values => {
    console.log(values)
  }

  onReset = () => {
    this.formRef.current.resetFields()
  }

  render() {
    return (
      <div className="ame-login_form">
        <div className="login_name">项目管理系统</div>
        <Form ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input
              size="large"
              placeholder="请输入用户名!"
              suffix={<UserOutlined style={{ color: 'rgba(0,0,0,.45)' }} />}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input.Password size="large" placeholder="请输入密码!" />
          </Form.Item>
          <Form.Item>
            <Button
              className="login-submit_btn"
              type="primary"
              shape="round"
              size="large"
              htmlType="submit"
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}
