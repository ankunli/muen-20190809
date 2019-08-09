import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import routers from './router.config'
import Routeview from './routerview'
const Routes=()=>{
        return <Router>
        <Routeview routers={routers}/>
        </Router>
}
export default Routes