import {ADD_TODO, PREV_TODO, ADD_SUB_TODO, ADD_SUB_PREV_TODO, TOGGELE_TODO_STATE, TOGGELE_SUB_TODO_STATE, DELETE_TODO, FILTER_LIST} from './actionConstants';
import giveKey from '../hash';

const addTodoDispatch = (data) => ({
    type : ADD_TODO,
    payload : data
})

const deleteTodoDispatch = (data) => ({
    type : DELETE_TODO,
    payload : data
})

const addSubTodoDispatch = (data) => ({
    type : ADD_SUB_TODO,
    payload : data
})


const addSubPrevTodoDispatch = (data) => ({
    type : ADD_SUB_PREV_TODO,
    payload : data
})

const toggleTodoStateDispatch = (data) => ({
    type : TOGGELE_TODO_STATE,
    payload : data
})

const toggleSubTodoStateDispatch = (data) => ({
    type : TOGGELE_SUB_TODO_STATE,
    payload : data
})

const filterListDispatch = (data) => ({
    type: FILTER_LIST,
    payload : data
})

export  function addSubTodo (data) {
    let key = giveKey(data.title);
    let parentKey = data.parentKey
    let state = false;
    return  function  (dispatch) {
        dispatch(addSubTodoDispatch({...data, key, state, parentKey}))
        dispatch(addSubPrevTodoDispatch({...data, key, state, parentKey}))
    }
}

export function toggleTodoState (data) {
    return (dispatch) => {
         dispatch(toggleTodoStateDispatch(data.id))
         dispatch(prevSideBarDispatch(data))  
    }
}

export function toggleSubTodoState (data){
    return (dispatch) => {
        let newPrevTodoSteps = data.prevTodo.steps.map((step) => {
            if(step.key === data.id){
                return {...step, state: !step.state}
            }
            return step
        })

        dispatch(toggleSubTodoStateDispatch(data))
        dispatch(prevSideBarDispatch({...data.prevTodo, steps: newPrevTodoSteps}));
        
    }
}



export function addTodo (data) {
    let key = giveKey(data.title)
    let state = false
    return dispatch => {
        dispatch(addTodoDispatch({...data, key, state, steps:[]}))
    }
}

export function deleteTodo (data){
    return dispatch => {
        dispatch(deleteTodoDispatch(data.id))
    }
}

const prevSideBarDispatch = (data) => ({
    type : PREV_TODO,
    payload: data
})


export  const viewSideBar = (data) => {
    return dispatch => {
        if (data.prev){
            dispatch(prevSideBarDispatch(data))
        } else {
            dispatch(prevSideBarDispatch(data))
        }
        
    }
}




export const filterList = (data) => {
   return  dispatch => {
        dispatch(filterListDispatch(data));
    }
}