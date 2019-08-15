import React, { Component } from 'react'
const isLogin=(Com)=>{
        return class isLogin extends Component{
            state={
                 islog:false
                }

            render() {
                return this.state.islog?<Com {...this.prosp}/>:null
            }
            componentDidMount(){
                if(window.localStorage.getItem("userName")){
                    this.setState({
                        islog:true
                    })
                }else{
                        this.props.history.push('/login')
                }
            }
        }
      
}
export default isLogin