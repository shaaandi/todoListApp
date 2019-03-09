import rootReducer from '../reducerFiles/rootReducer';

const initialTodoState = {
    todos : []
}

it('should load initial State',() => {
    expect(rootReducer.todoReducer(undefined,{})).toEqual(initialTodoState)
});



it('should add a todo correctly ',() => {
    let addTodoAction = {
        type : 'ADD_TODO',
        payload : {
            title : 'Drink Milk',
            id : 'dsghgsf345wbvcx'
        }
    }
    let addTodoState = {
        todos : [
            {
                title : 'Drink Milk',
                id : 'dsghgsf345wbvcx'
            }
        ]
    }
    expect(rootReducer.todoReducer(initialTodoState, addTodoAction)).toEqual(addTodoState)
});
it('should Delete Todo Correctly',() => {
    let deleteTodoAction = {
        type : 'DELETE_TODO',
        payload : 'deleter'
    }
    let beforeState = {
        todos : [
            {
                title : 'Drink Milk',
                key : 'deleter'
            },
            {
                title : 'Sleep Well',
                key : 'remainHere'
            }
        ]
    }
    let afterState = {
        todos : [
            {
                title : 'Sleep Well',
                key : 'remainHere'
            }
        ]
    }
    expect(rootReducer.todoReducer(beforeState, deleteTodoAction)).toEqual(afterState)
})




