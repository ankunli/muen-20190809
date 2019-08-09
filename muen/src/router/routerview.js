import React from 'react'
import{Route,Redirect,Switch} from 'react-router-dom'
export default function Routeview(props) {
    let {routers}=props
    let redirects=routers.filter((item,index)=>item.to).map((item,index)=>
    <Redirect key={index} from={item.to} to={item.path}/>)
    let routes=routers.filter((item,index)=>!item.to)
    return (
        <div>
             <Switch>
                    {
                        routes&&routes.map((item,index)=><Route key={index} path={item.path} render={(props)=>{
                            return <item.component {...props} children={item.children}/>
                        }}/>).concat(redirects)
                    }
             </Switch>
        </div>
    )
}
