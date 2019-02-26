import { ADD_TODO,PREV_TODO, ADD_SUB_TODO, ADD_SUB_PREV_TODO, TOGGELE_TODO_STATE, TOGGELE_PREV_TODO_STATE, TOGGELE_SUB_TODO_STATE, DELETE_TODO } from "../actionFiles/actionConstants";

const initialTodoState = {
    todos : [{
        title: 'Udemy',
        flag: 'orange',
        key: 'c097bbbbafb6d7459b3d7e5ffd844abb16f47d19c1b5ac620ac1261d29a9c649',
        state: false,
        steps: [
          {
            title: 'Electricity',
            state: false,
            key: 'a8b41baa4cf766fa8af5a5c4236eeb5f2eba16720b139711909bb29ac3f83385',
            parentKey: 'c097bbbbafb6d7459b3d7e5ffd844abb16f47d19c1b5ac620ac1261d29a9c649'
          },
          {
            title: 'Waves',
            state: false,
            key: 'ad5b8321811a1ca3113a13e1436e88855625d0117518804888c682146d0638c5',
            parentKey: 'c097bbbbafb6d7459b3d7e5ffd844abb16f47d19c1b5ac620ac1261d29a9c649'
          },
          {
            title: 'Particle Physics',
            state: false,
            key: '86071faa978e64452f0fb6d808dfe3e3a9a8f78f61115c9a3c896038596548c4',
            parentKey: 'c097bbbbafb6d7459b3d7e5ffd844abb16f47d19c1b5ac620ac1261d29a9c649'
          }
        ]
      },
      {
        title: 'Computer Science',
        flag: 'green',
        key: '445ddaa59df684ea81e04e1b2aad2ec113a4a8a36ce8c5e802c1542266b8921d',
        state: false,
        steps: []
      },
      {
        title: 'Physics',
        flag: 'blue',
        key: '349096910d3c474b61ec0cc741486084dbd9c8f2a57e37557b35c7ab5e6205f3',
        state: false,
        steps: []
      }
]
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