import React, {Component} from 'react';
import {connect} from 'react-redux'
import { addTodo } from '../../actionFiles/actions';
import '../cssfiles/form.css';



class Form extends Component {
    constructor(props){
        super(props)
        this.state =  {
            title : '',
            flag: 'white'
        }
    }

    submitHandler(event){
        event.preventDefault();
        this.props.addTodo(this.state)
        this.setState({title:'', flag: 'white'})

    }

    changeHandler(event){
        this.setState({...this.state, [event.target.name] : event.target.value})
    }

    render (){
        return (
            <form onSubmit={this.submitHandler.bind(this)} className='junk'>
                 <input type='text' placeholder='+ Add new Todo' name='title' value={this.state.title} onChange={this.changeHandler.bind(this)}></input>
                 
                 <select className='flagChooser' name='flag' value={this.state.flag} onChange={this.changeHandler.bind(this)}>
                        <option value='white'>White</option>
                        <option value='green'>Green</option>
                        <option value='red'>Red</option>
                 </select>
            </form>
        )
    }
}







export default connect(null, {addTodo})(Form);


