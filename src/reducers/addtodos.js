import {combineReducers} from 'redux'


export const addTodos = (state =[], action)=>{
    switch(action.type){
        case 'ADD_TODO':
            return [...state, action.text]
        default:
            return state
    }
}

const rootReducer = combineReducers({
    todos: addTodos
})

export default rootReducer;