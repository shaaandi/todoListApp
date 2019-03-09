import React from 'react';
import {shallow} from 'enzyme';
import MainPage from '../components/jsfiles/mainPage';

let todoState = {
    todos : []
}

let sideBarState = {
    prevTodo : {},
    prev : false
}

let wrapper = shallow(<MainPage todoState={todoState} sideBarState={sideBarState}/>);

describe('MainPage All Testing', () => {
    it('MainPage SnapShot Testing', () => {
        expect(wrapper).toMatchSnapshot();
    })
})