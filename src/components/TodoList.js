import React, {Component} from 'react';
import {connect} from 'react-redux'

class TodoList extends Component{
    render(){
        return(
            <div>
                {this.props.todolist.map( todo =>(
                    <p>{todo}</p>
                ))
                }
            </div>            
        )
    }
}

const mapStatesToProp = state =>({
    todolist : state.todos
})


export default connect(mapStatesToProp,null)(TodoList)