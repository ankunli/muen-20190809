import Register from '../pages/Register'
import Login from '../pages/Login'
import Home from '../pages/Home'
const routers=[
    {
        path: '/home',
        component:Home
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
        path:"/home"
    },
]
export default routers