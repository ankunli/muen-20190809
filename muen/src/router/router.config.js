import Register from '../pages/Register'
import Login from '../pages/Login'
const routers=[
    {
        path:'/register',
        component:Register
    },
    {
        path:'/login',
        component:Login
    },
    {   to:'/',
        path:"/register"
    }
]
export default routers