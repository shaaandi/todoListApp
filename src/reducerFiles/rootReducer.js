import { ADD_TODO,PREV_TODO, ADD_SUB_TODO, ADD_SUB_PREV_TODO, TOGGELE_TODO_STATE, TOGGELE_PREV_TODO_STATE, TOGGELE_SUB_TODO_STATE, DELETE_TODO, FILTER_LIST } from "../actionFiles/actionConstants";

const initialTodoState = {
    todos : []
}



const initialSideBarState = {
    prev : false,
    prevTodo : null
}

const todoReducer = (state=initialTodoState,action={}) => {
    switch (action.type){
        case ADD_TODO:
            let newTodo = action.payload;
            return {todos : [...state.todos, newTodo]}
        case DELETE_TODO:
            let newListDelete = state.todos.filter((todo) => todo.key !== action.payload)
            return {todos : newListDelete}
        case ADD_SUB_TODO:      
            let newList = state.todos.map((todo) => {
                if (todo.key === action.payload.parentKey) {     
                    let newSubTodo = {
                        title : action.payload.title,
                        state : action.payload.state,
                        key : action.payload.key,
                        parentKey : action.payload.parentKey
                    }
                    return {...todo, steps : [...todo.steps, newSubTodo]}
                } else {
                    return todo
                }
            })
            return {todos : newList};
        case TOGGELE_TODO_STATE: 
            let newListToggeled = state.todos.map((todo) => {
                if (todo.key === action.payload) {
                    
                    let newState = !todo.state
                    return {...todo, state: newState }
                }
                return todo
            })
            return {todos : newListToggeled}
        case TOGGELE_SUB_TODO_STATE:
            let newListSubToggeled = state.todos.map((todo) => {
                if (todo.key === action.payload.parentKey){
                    let newSteps = todo.steps.map((subTodo) => {
                        if(subTodo.key === action.payload.id){
                            return {...subTodo, state : !subTodo.state}
                        } return subTodo
                    })
                    return {...todo, steps: newSteps}
                }
                return todo
            })
            return {todos : newListSubToggeled}
        case FILTER_LIST:
            let filteredList = state.todos.filter(todo => todo.state === false)
            return {todos : filteredList};
        default:
            return state;
    }
}



const sideBarReducer = (state=initialSideBarState,action={}) => {
    switch (action.type) {
        case PREV_TODO:
            if (action.payload.prev){
                return {...state, prev: true, prevTodo : action.payload}
            } else {
                return {...state,  prev: false, prevTodo : null}
            }
            
        case ADD_SUB_PREV_TODO:
            let newPrevTodo = {...state.prevTodo, steps: [...state.prevTodo.steps, action.payload]};
            return {...state, prevTodo: newPrevTodo}
        case TOGGELE_PREV_TODO_STATE:
            return state
        default:
            return state;
    }
}

 const rootReducer = {
    todoReducer,
    sideBarReducer
}

export default rootReducer










// {
//     title: 'Wash Clothes',
//     state: false,
//     steps : [{title :'get clothes', state : false},{title :'get surf', state : false}],
//     flag : 'white'
// },
// {
//     title: 'Study Physics',
//     state: false,
//     steps : [{title :'Get Lecture', state : false},{title :'Review the Chapter', state : false}],
//     flag : 'white'
// },
// {
//     title: 'Go to Shopping',
//     state: false,
//     steps : [],
//     flag : 'white'
// }