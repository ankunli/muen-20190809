import Register from '../pages/Register';//注册
import Login from '../pages/Login';//登录
import UserAll from '../pages/UserAll';//所有用户
import GroupList from '../pages/GroupList';//小组列表
import MemberManagement from '../pages/MemberManagement';//成员管理

const routers=[
    {
        path: '/userAll',
        component: UserAll
    },
    {
        path: '/groupList',
        component: GroupList
    },
    {
        path: '/memberManagement',
        component: MemberManagement
    },
    {
        path:'/register',
        component:Register
    },
    {
        path:'/login',
        component:Login
    },
    {   to:'/',
        path:"/userAll"
    },
]
export default routers