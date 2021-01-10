/*
 * @Author: your name
 * @Date: 2021-01-03 19:35:36
 * @LastEditTime: 2021-01-07 21:40:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ame-files\src\views\person\login.jsx
 */
import './index.scss'
import React, { Component } from 'react'
import LoginForm from "./modules/LoginForm"

export default class Login extends Component {
  render() {
    return (
      <div className="ame-login">
        <div className="ame-login_bg">
          <LoginForm></LoginForm>
        </div>
      </div>
    )
  }
}
