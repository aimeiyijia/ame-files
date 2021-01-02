/*
 * @Author: your name
 * @Date: 2020-08-19 21:23:03
 * @LastEditTime: 2021-01-02 16:28:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ame-files\src\views\memo\memo.jsx
 */
import './index.scss'
import React from 'react'
import { Row, Col } from 'antd'
import AmeUploader from '@/compontents/AmeUploader'
import MemoCalendar from './modules/Calendar'
import MemoMsg from './modules/MemoMsg'

export default class Files extends React.Component {
  render() {
    return (
      <div className="ame-calendar">
        <Row>
          <Col xs={14} sm={12} md={10} lg={8} xl={6}>
            <MemoCalendar />
          </Col>
          <Col xs={10} sm={12} md={14} lg={16} xl={18}>
            <MemoMsg />
          </Col>
        </Row>
      </div>
    )
  }
}
