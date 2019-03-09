import React, {Component} from 'react';
import { FaCheckCircle, FaCircleNotch, FaWindowClose} from 'react-icons/fa';
import '../cssfiles/todo.css';

class Todo extends Component {
    
    
    clickHandler =() => {
        
        let {title,state,steps,flag, viewSideBar, id} = this.props;
        
        viewSideBar({title,state,steps,flag, id, prev:true})
    }

    stateHander = (event) => {
        let state = !this.props.state
        this.props.toggleTodoState({...this.props,state})
    }

    render (){
        let {title,state, id} = this.props 
        let State = (state) ? <div className="todoState"><FaCheckCircle size={22} color={'green'}/></div> : <div  className="todoState"><FaCircleNotch size={22}/></div>
        return (
            
            <div className='todo' >
                <button onClick={this.stateHander} className='stateButton'>{State}</button>   
                <div onClick={this.clickHandler} className='todoTitle'>{title}</div>      
                <button className='stateButton' onClick={() => this.props.deleteTodo({id})}><FaWindowClose color={'red'}/></button>
            </div>
        )
    }
    
} 



export default Todo;