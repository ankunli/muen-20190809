import React,{Component} from 'react';

export default function isLogin(Com){
    return class isLogin extends Component{
        state={
            isLogin:false
        }
        render(){
            return this.state.isLogin?<Com {...this.props}/>:null;
        }
        componentDidMount(){
            if(window.localStorage.token){
                this.setState({
                    isLogin:true
                })
            }else{
                this.props.history.push('/login')
            }
        }
    }
}