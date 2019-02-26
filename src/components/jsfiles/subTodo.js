import React from 'react';
import {FaCircleNotch, FaCheckCircle} from 'react-icons/fa'
import '../cssfiles/todo.css';

const SubTodo = ({title, state, toggleSubTodoState, id,parentKey,prevTodo}) => {
    let check = (state) ? <FaCheckCircle color={'green'} size={18}/> : <FaCircleNotch size={18}/>
    return (
        <div className='subTodo' >
        <button className="stateButton" onClick={() => toggleSubTodoState({id,parentKey,prevTodo})}>{check}</button>
        <div className="subTodo-card">
            <div>{title}</div>
        </div>
        </div>
    )
}



export default SubTodo;