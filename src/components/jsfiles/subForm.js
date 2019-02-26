import React, {Component} from 'react';
import {connect} from 'react-redux'
import { addSubTodo } from '../../actionFiles/actions';



class SubForm extends Component {
    constructor(props){
        super(props)
        this.state =  {
            title : ''
        }
    }

    submitHandler(event){
        
        event.preventDefault();
        let data = {
            title : this.state.title,
            parentKey : this.props.id
        }
        this.props.addSubTodo(data)
        
        this.setState({title:''})

    }

    changeHandler(event){
        this.setState({...this.state, [event.target.name] : event.target.value})
    }

    render (){
        return (
            <form onSubmit={this.submitHandler.bind(this)}>
                 <input type='text' placeholder='+ Add new Todo' name='title' value={this.state.title} onChange={this.changeHandler.bind(this)}></input>
            </form>
        )
    }
}


function mapStateToProps (state) {
    return ({
        id : state.sideBarReducer.prevTodo.id,
        state : state
    })
}




export default connect(mapStateToProps, {addSubTodo})(SubForm);