import React, {Component} from'react';
import '../../containers/cssfiles/app.css'
import NavBar from '../../components/jsfiles/nav';
import {FaClipboardList} from 'react-icons/fa';
import TodoList from '../../components/jsfiles/todoList';
import SideBar from '../../components/jsfiles/sidebar';
import Form from '../../components/jsfiles/form';





class MainPage extends Component {

    render (){
        const { toggleTodoState, toggleSubTodoState , viewSideBar, addSubTodo, addTodo, sideBarState, todoState, deleteTodo} = this.props
        const todoFunctions = {viewSideBar,toggleTodoState, deleteTodo}
        return ([
            <NavBar key={0}/>,
            <div id='App' key={1}>
                <div id='main'>
                     <div id='headBar'>
                        <h1><FaClipboardList/> Tasks </h1>
                        <button className='stateButton filterButton' onClick={() => this.props.filterList()}>Hide Completed</button>
                     </div>      
                     <div id='todoList'>
                        <TodoList todos={todoState.todos} todoFunctions={todoFunctions}/>
                        <Form addTodo={addTodo}/>   
                     </div>          
                </div>
                <SideBar 
                toggleTodoState={toggleTodoState}
                toggleSubTodoState={toggleSubTodoState} 
                viewSideBar={viewSideBar}
                addSubTodo={addSubTodo}
                prevTodo = {sideBarState.prevTodo}
                prev = {sideBarState.prev}
                />
            </div>
             ]
        )
    }
}





export default MainPage;