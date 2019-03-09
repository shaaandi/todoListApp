import React from 'react';
import { FaCheckDouble, FaCheckCircle, FaCircleNotch, FaFlag, FaWindowClose} from 'react-icons/fa'
import SubTodo from './subTodo';
import SubForm from './subForm';
import '../cssfiles/sidebar.css'; 



const SideBar = ({prev,prevTodo,toggleTodoState,toggleSubTodoState, viewSideBar, addSubTodo}) => {

    

    let Show = <li></li>
    if (prev) {
        let {title,state,steps,flag, id} = prevTodo; 
        let check = (state) ? <FaCheckCircle color={'green'} size={25}/> : <FaCircleNotch size={25}/>
        let list = steps.map(step => <SubTodo {...step} toggleSubTodoState={toggleSubTodoState} id={step.key} prevTodo={prevTodo} />)
        Show = (
            <div className='todoSideBarView'>
                <div className='todoSideBarViewHead' style={{borderBottom : 'solid', borderBottomColor: flag}}>
                    <button id='toggleState' className='stateButton' onClick={() => toggleTodoState({...prevTodo, state : !prevTodo.state})}>{check}</button>
                    <div className='todoSideBarViewHeadTitle'>{title}</div>
                    <div className='todoSideBarViewHeadFlag'><FaFlag color={flag}/></div>
                    <button className='sideBarCloser stateButton' onClick={() => viewSideBar({prev: false})}><FaWindowClose color={'gray'} size={20}/></button>
                </div>
                <div className="todoSideBarViewSteps">
                    {list}
                    <SubForm id={id} addSubTodo={addSubTodo}/>
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




export default SideBar;