import Register from '../pages/Register';//注册
import Login from '../pages/Login';//登录
import Home from '../pages/Home';//主页
import UserAll from '../pages/UserAll';//所有用户
import GroupList from '../pages/GroupList';//小组列表
import MemberManagement from '../pages/MemberManagement';//成员管理

const routers = [
    {
        path: '/register',
        component: Register
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/home',
        component: Home,
        children: [
            {
                path: '/home/userAll',
                component: UserAll
            },
            {
                path: '/home/groupList',
                component: GroupList
            },
            {
                path: '/home/memberManagement',
                component: MemberManagement
            },
            {
                to: '/home',
                path: '/home/userAll'
            }
        ]
    },
    {
        to: '/',
        path: "/home"
    },
]
export default routers