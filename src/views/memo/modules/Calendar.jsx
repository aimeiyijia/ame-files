/*
 * @Author: your name
 * @Date: 2021-01-02 15:10:27
 * @LastEditTime: 2021-01-02 15:59:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ame-files\src\views\memo\Calendar.jsx
 */

import React from 'react'
import { Calendar } from 'antd'

function onPanelChange(value, mode) {
  console.log(value.format('YYYY-MM-DD'), mode)
}

export default class MemoCalendar extends React.Component {
  render() {
    return (
      <div className="calendar">
        <Calendar fullscreen={false} onPanelChange={onPanelChange} />
      </div>
    )
  }
}
