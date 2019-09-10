import React from 'react'
import {addTodo, toggleTodo} from '../actions'
import { connect } from 'react-redux'
import { dispatch } from 'rxjs/internal/observable/range'

class Addtodo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value :"",
        }
    }
    
    handleChange = (e) =>{
        const {value} = e.target

        this.setState({
            value
        })
    }
    
    handleClick = (e) =>{
        this.props.addTodo(this.state.value)
        this.setState({
            value:""
        })
    }

    render(){
        return(
            <div>
                <input 
                    type= 'text'
                    placeholder = 'add todos'
                    onChange = {this.handleChange}
                    value ={this.value}
                 />
                 <button onClick = {this.handleClick}>ADD Todo</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        addTodo : text => dispatch(addTodo(text))
    }
}

export default connect(null, mapDispatchToProps)(Addtodo)
