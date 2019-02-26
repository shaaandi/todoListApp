import React from "react";
import {connect} from 'react-redux';
import Todo from "./todo.js";

const TodoList = ({todos}) => {
   
    let Todos = todos.map(todo => <Todo {...todo} id={todo.key} steps={todo.steps}/> )
    return (
        <div>
            {Todos}
        </div>
        
    )
}

function mapStateToProps (state){
    return ({
        todos : state.todoReducer.todos
    })
}


export default connect(mapStateToProps,null)(TodoList);