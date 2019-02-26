import React from 'react';
import { FaCheckDouble, FaCheckCircle, FaCircleNotch, FaFlag, FaWindowClose} from 'react-icons/fa'
import {connect} from 'react-redux';
import SubTodo from './subTodo';
import SubForm from './subForm';
import '../cssfiles/sidebar.css'; 
import { toggleTodoState, toggleSubTodoState , viewSideBar} from '../../actionFiles/actions';



const SideBar = ({prev,prevTodo,toggleTodoState,toggleSubTodoState, viewSideBar}) => {

    

    let Show = <li></li>
    if (prev) {
        let {title,state,steps,flag} = prevTodo; 
        let check = (state) ? <FaCheckCircle color={'green'} size={25}/> : <FaCircleNotch size={25}/>
        let list = steps.map(step => <SubTodo {...step} toggleSubTodoState={toggleSubTodoState} id={step.key} prevTodo={prevTodo}/>)
        Show = (
            <div className='todoSideBarView'>
                <div className='todoSideBarViewHead' style={{borderBottom : 'solid', borderBottomColor: flag}}>
                    <button className='stateButton' onClick={() => toggleTodoState({...prevTodo, state : !prevTodo.state})}>{check}</button>
                    <div className='todoSideBarViewHeadTitle'>{title}</div>
                    <div className='todoSideBarViewHeadFlag'><FaFlag color={flag}/></div>
                    <button className='sideBarCloser stateButton' onClick={() => viewSideBar({prev: false})}><FaWindowClose color={'gray'} size={20}/></button>
                </div>
                <div className="todoSideBarViewSteps">
                    {list}
                    <SubForm/>
                </div>
            </div>
        )
    }
    else {
        Show =  (
            <div className='defaultSideBarView'>
                <FaCheckDouble size={40} />
            </div>
        )
    }


     
    let style = (prev) ? 'sideBarTodo' : 'sideBarDefault';
    return (
        
        <div id={style}>
            {Show}
        </div>
    )
}

function mapStateToProps (state) {
    return (
        {
            prevTodo : state.sideBarReducer.prevTodo,
            prev : state.sideBarReducer.prev
        }
    )
}


export default connect(mapStateToProps,{toggleTodoState, toggleSubTodoState, viewSideBar})(SideBar);