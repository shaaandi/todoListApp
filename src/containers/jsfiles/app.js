import React, {Component} from'react';
import {connect} from 'react-redux';
import '../cssfiles/app.css';
import NavBar from '../../components/jsfiles/nav';
import {FaClipboardList} from 'react-icons/fa';
import TodoList from '../../components/jsfiles/todoList';
import SideBar from '../../components/jsfiles/sidebar';
import Form from '../../components/jsfiles/form';
import {filterList} from '../../actionFiles/actions';





class App extends Component {

    render (){
        return ([
            <NavBar/>,
            <div id='App'>
                <div id='main'>
                     <div id='headBar'>
                        <h1><FaClipboardList/> Tasks </h1>
                        <button className='stateButton filterButton' onClick={() => this.props.filterList()}>Hide Completed</button>
                     </div>      
                     <div id='todoList'>
                        <TodoList/>
                        <Form />   
                     </div>          
                </div>
                <SideBar />
            </div>
             ]
        )
    }
}





export default connect(null,{filterList})(App);