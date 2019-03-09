import React from 'react';
import {shallow} from 'enzyme';
import TodoList from '../components/jsfiles/todoList';


let wrapper = shallow(<TodoList todos={[]} todoFunctions={{}}/>);

it('TodoList Testing', () => {
    expect(wrapper).toMatchSnapshot();
})