import React from "react";
import Todo from "./todo.js";

const TodoList = ({todos, todoFunctions}) => { 
    let Todos = todos.map(todo => <Todo {...todo} id={todo.key} steps={todo.steps} {...todoFunctions}/> )
    return (
        <div>
            {Todos}
        </div>
        
    )
}



export default TodoList;