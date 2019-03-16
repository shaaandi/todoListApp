import thunkMiddleWare from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import * as actions from '../actionFiles/actions';
import giveKey from '../hash';



const mockStore = configureMockStore([thunkMiddleWare]);

describe('dispatch correct actions to store', () => {
    
    it('addTodo function Test', () => {
        let store = mockStore();
        let fakeData = {
            title : 'Drink Milk'
        }
        let key = giveKey(fakeData.title)
        let state = false
        let expectedActions = [
            {
                type : 'ADD_TODO',
                payload : {
                    title : 'Drink Milk',
                    key : key,
                    state : state,
                    steps : []
                }
            }
        ]
        store.dispatch(actions.addTodo(fakeData))
        expect(store.getActions()).toEqual(expectedActions)
    })

    it('add subTodo function' , () => {
        let store = mockStore();
        let fakeData = {
            title : 'Get Milk',
            parentKey : 'demoKey'
        }
        let key = giveKey(fakeData.title);
        let state = false;
        let expectedActions = [
            {
                type : 'ADD_SUB_TODO',
                payload : {
                    ...fakeData, key,state
                }
            },
            {
                type : 'ADD_SUB_PREV_TODO',
                payload : {
                    ...fakeData, key,state
                }
            }
        ]
        store.dispatch(actions.addSubTodo(fakeData));
        expect(store.getActions()).toEqual(expectedActions)
    })

    it('toggle Todo State function', () => {
        let store = mockStore();
        let fakeData = {
            id : 'demoFakeId'
        }
        let expectedActions = [
            {
                type : 'TOGGELE_TODO_STATE',
                payload : fakeData.id
            },
            {
                type : 'PREV_TODO',
                payload: fakeData
            }
        ]
        store.dispatch(actions.toggleTodoState(fakeData))
        expect(store.getActions()).toEqual(expectedActions);
    })

    it('toggle SubTodo State function',() => {
        let store = mockStore();
        let fakeData = {
            id : 'changeKey',
            prevTodo : {
                steps : [{
                    title : 'Step to toggled state',
                    key : 'changeKey',
                    state : false
                },
                {
                    title : 'Step to not toggled state',
                    key  : 'notChangeKey',
                    state : false
                }
            ]
            }
        }
        let expectedActions = [
            {
                type : 'TOGGELE_SUB_TODO_STATE',
                payload : fakeData
            },
            {
                type : 'PREV_TODO',
                payload : {
                    steps : [{
                        title : 'Step to toggled state',
                        key : 'changeKey',
                        state : true
                    },
                    {
                        title : 'Step to not toggled state',
                        key  : 'notChangeKey',
                        state : false
                    }]
                }
            }
        ]
        store.dispatch(actions.toggleSubTodoState(fakeData))
        expect(store.getActions()).toEqual(expectedActions)
    })

    it('deleteTodo function test', () => {
        let store = mockStore();
        let fakeData = {
            id : 'delete'
        }
        let expectedActions = [
            {
                type : 'DELETE_TODO',
                payload : fakeData.id
            }
        ]
        store.dispatch(actions.deleteTodo(fakeData))
        expect(store.getActions()).toEqual(expectedActions)       
    })

    it('viewSideBar function test with prev as true', () => {
        let store = mockStore();
        let fakeData = {
            prevTodo : {
                title : 'Drink Milk',
                key : 'prevTodo'
            },
            prev : true
        }
        let expectedActions = [
            {
                type : 'PREV_TODO',
                payload : fakeData
            }
        ]
        store.dispatch(actions.viewSideBar(fakeData))
        expect(store.getActions()).toEqual(expectedActions)
    })

    it('viewSideBar function test with prev as false', () => {
        let store = mockStore();
        let fakeData = {
            prevTodo : {
                title : 'Drink Milk',
                key : 'prevTodo'
            },
            prev : false
        }
        let expectedActions = [
            {
                type : 'PREV_TODO',
                payload : fakeData
            }
        ]
        store.dispatch(actions.viewSideBar(fakeData))
        expect(store.getActions()).toEqual(expectedActions)
    })

    it('filterList function test', () => {
        let store = mockStore();
        let fakeData = {
            todos : []
        }
        let expectedActions = [
            {
                type: 'FILTER_LIST',
                payload : fakeData
            }
        ]
        store.dispatch(actions.filterList(fakeData))
        expect(store.getActions()).toEqual(expectedActions)
    })
})


// let store = mockStore();
//         let fakeData = {

//         }
//         let expectedActions = [

//         ]
//         store.dispatch()
//         expect(store.getActions()).toEqual(expectedActions)