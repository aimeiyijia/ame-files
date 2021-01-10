import Login from '@/views/person/login'
import Layout from '@/layout/index.jsx'
import Files from '@/views/files/index'
import Memo from '@/views/memo/index'
import Projects from '@/views/project/index'
import Users from '@/views/users/index'

const routes = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/ame',
    component: Layout,
    routes: [
      { path: '/ame/files', component: Files },
      { path: '/ame/memo', component: Memo },
      { path: '/ame/project', component: Projects },
      { path: '/ame/users', component: Users },
    ],
  },
]

export default routes
