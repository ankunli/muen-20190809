import {createStore,combineReducers} from 'redux'
import {get} from '../untlis/requset'
const saveUser=(state=[],actions)=>{
    switch (actions.type) {
        case "SAVE_DATA":
            
            let newState=JSON.parse(JSON.stringify(state))
                newState=actions.data
                
            return [...newState]
    
        default:
           return [...state]
    }
}
let reducers=combineReducers({
       saveUser     
})
const store=createStore(reducers)
export default store