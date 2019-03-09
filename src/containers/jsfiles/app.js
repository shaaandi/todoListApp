import React, {Component} from'react';
import {connect} from 'react-redux';
import {filterList, addTodo,  toggleTodoState, toggleSubTodoState , viewSideBar, addSubTodo, deleteTodo} from '../../actionFiles/actions';
import MainPage from '../../components/jsfiles/mainPage';

class App extends Component {
    render (){
        return <MainPage {...this.props}/>
    }
}

function mapStateToProps (state) {
    return (
        {   
            sideBarState : state.sideBarReducer,
            todoState : state.todoReducer
        }
    )
}

let obj = {filterList, addTodo,  toggleTodoState, toggleSubTodoState , viewSideBar, addSubTodo, deleteTodo}

export default connect(mapStateToProps,obj)(App);