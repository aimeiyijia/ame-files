import React from 'react'
import ReactDOM from 'react-dom'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'
import routes from '@/routers/index'

import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'

import './index.less'

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <HashRouter>{renderRoutes(routes)}</HashRouter>
  </ConfigProvider>,
  document.getElementById('root')
)
